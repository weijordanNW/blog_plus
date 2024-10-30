import{_ as e,o as t,c as o,f as r}from"./app-vRjwnwzg.js";const d={},l=r('<h1 id="flutter-工作原理" tabindex="-1"><a class="header-anchor" href="#flutter-工作原理"><span>Flutter 工作原理</span></a></h1><p>本文档解释了使 Flutter API 正常工作的 Flutter 工具包内部工作原理。由于 Flutter widget 是以积极组合的形式构建的，所以使用 Flutter 构建的用户界面含有大量 widget。为了支撑这些负载，Flutter 使用了次线性算法来布局和构建 widget，这些数据结构使树形结构优化更加高效，并且具有很多常量因子优化。通过一些额外的机制，该设计也允许开发者利用回调（用于构建用户可见的 widget）来轻松创建无限滚动列表。</p><h2 id="积极可组合性" tabindex="-1"><a class="header-anchor" href="#积极可组合性"><span>积极可组合性</span></a></h2><p>组合性是 Flutter 最为出众的一个特性。widget 通过组合其他 widget 的方式进行构建，并且这些 widget 自身由更基础的 widget 构建。比如，<code>Padding</code> 是一个 widget 而非其他 widget 的属性。因此，使用 Flutter 创建的用户界面是由多个 widget 组成的。</p><p>widget 递归构建的底层是 RenderObjectwidget，它将在渲染树的底部创建子节点。渲染树是一种存储用户界面几何信息的数据结构，该几何信息在 <strong>布局</strong> 期间计算并在 <strong>绘制</strong> 及 <strong>命中测试</strong> 期间使用。大多数 Flutter 开发者无需直接创建这些对象，而是使用 widget 来操纵渲染树。</p><p>为了支持 widget 层的积极可组合性， Flutter 在 widget 和树渲染层使用了大量的高效算法和优化措施，这些将在下面小节中进行介绍。</p><h3 id="次线性布局" tabindex="-1"><a class="header-anchor" href="#次线性布局"><span>次线性布局</span></a></h3><p>使用大量 widget 及渲染对象并保持高性能的关键是使用高效的算法。其中最重要的是确定渲染对象几何空间（比如大小和位置）的<strong>布局</strong>算法的性能。其他一些工具包使用 O(N²) 或更糟糕的布局算法（例如，约束域中的不动点迭代）。 Flutter 的目标在于布局初始化的线性性能，及一般情况下更新现有布局的<code>次线性布局性能</code>。通常情况下，布局所花费的时间应该比对象渲染要多得多。</p><p>Flutter 对每一帧执行一次布局操作，且布局算法仅在一次传递中完成。 <strong>约束</strong>信息通过父节点调用每个子节点的布局方法向下传递。子节点递归执行自身的布局操作，并在它们的布局方法中返回<strong>几何</strong>信息以便将其添加到渲染树中。需要注意的是，一旦渲染对象从布局中返回，该对象将不会被再次访问 <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>，直到下一帧布局的执行。该策略将可能存在的单独测量和布局传递合并为单次传递，因此，每个渲染对象在布局过程中<strong>最多</strong>被访问<strong>两次</strong> <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>：一次在树的向下传递过程中，一次在树的向上传递过程中。</p><p>针对这个通用协议，Flutter 拥有多种实现。最常用的是 <code>RenderBox</code>，它以二维的笛卡尔坐标进行运算。在盒子布局中，约束是最小及最大宽高。在布局过程中，子节点通过选择这些边界内的大小来确定其几何信息。子节点在布局中返回后，由父节点确定该子节点在父坐标系中的位置 <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>。注意，子节点的布局并不取决于它的位置，这是因为它的位置直到它从布局中返回后才确定。因此父节点可以在无需重新计算子节点布局的情况下重新定位子节点的位置信息。</p><p>更广泛地讲，在布局期间，从父节点流向子节点的<strong>唯一</strong>信息是约束信息，从子节点流向父节点的<strong>唯一</strong>信息是几何信息。通过这些不变量可减少布局期间所需的工作量：</p><ul><li>如果父节点对子节点使用与上一次布局中相同的约束，且子节点没有将自己的布局标记为脏，那么该节点可立即从布局中返回，以切断布局的向下传递。</li><li>当父节点调用子节点的布局方法时，父节点会表明它是否使用从子节点返回的大小信息。如果父节点经常不使用此信息，即使子节点重新选择了大小，父节点依旧无需重新计算其布局，这是因为父节点需要保证新的大小符合现有约束。</li><li><strong>严格</strong>约束是指恰好由一个有效几何满足的约束。比如，如果最小最大宽度彼此相等，且最小最大高度彼此相等，那么满足这些约束的唯一大小便是具有该宽度及高度的大小。如果父节点提供了严格约束，即便父节点在布局中使用了子节点的大小，在子节点重新计算布局时，父节点的布局也无需重新计算，这是因为子节点在没有父节点新约束的情况下无法更改其大小。</li><li>渲染对象可以声明仅使用父节点提供的约束来确定其几何信息。此类声明通知框架： <strong>即便约束为非严格约束，以及父节点的布局取决于子节点的大小，</strong> 该渲染对象父节点的布局在子节点的布局重新计算时仍无需重新计算，这是因为子节点在没有父节点新约束的情况下无法更改其大小。</li></ul><p>这些优化措施的效果是，当渲染对象包含脏节点时，在布局过程中，只有这些节点以及它们周围子树的有限节点才允许被访问。</p><h3 id="次线性-widget-构建" tabindex="-1"><a class="header-anchor" href="#次线性-widget-构建"><span>次线性 widget 构建</span></a></h3><p>Flutter 使用类似于布局的次线性算法来构建 widget。widget 构建完成后，它们将被保留了用户页面逻辑结构的 <strong>element 树</strong> 保存。 Element 树是非常有必要的，这是因为 widget 自身是<strong>不可变的</strong>，这意味着（其他情况除外），它们无法记住父（或子）节点与其他 widget 的关系。 Element 还保存了与 Stateful widget 相关联的 <strong>state</strong> 对象。</p><p>由于用户输入（或来自其他地方的响应），比如开发者在关联的 state 对象上调用了 <code>setState()</code> 方法，element 可能会变脏。框架维护了一个脏 element 列表，使得 <strong>构建</strong> 过程可跳过干净的 element，直接跳转到脏的 element。构建过程中，信息在 element 树中向下 <strong>单向</strong> 传递，这意味着该阶段中每个 element 最多会被访问一次。一个 element 一旦被清洗，它将不会再次变脏，这是因为通过归纳，它所有的祖先 element 也都是干净的 <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup>。</p><p>由于 widget 是<strong>不可变的</strong>，因此父节点使用相同的 widget 来重新构建 element，如果 element 没有将自己标记为脏，那么该 element 可立即从构建中返回，以切断构建的向下传递。另外，element 只需比较两个 widget 所引用的对象标识来确定新 widget 与旧 widget 是否相同。开发者可利用该优化实现<strong>投影</strong>模式，即 widget 包含了被存储为成员变量、在构建过程中预先构建的子 widget</p><p>构建过程中，Flutter 同时使用 <code>Inheritedwidgets</code> 来避免父链的遍历。如果 widget 经常遍历它们的父链，比如确定当前的主题颜色，那么构建阶段树的深底将变为 O(N²)，由于 Flutter 的积极可组合性，其数量可能非常巨大。为了避免这些父链的遍历，框架通过在每个 element 上维护一个 <code>Inheritedwidget</code> 哈希表来向下传递 element 树中的信息。通常情况下，多个 element 引用相同的哈希表，并且该表仅在 element 引入新的 <code>Inheritedwidget</code> 时改变。</p><h3 id="线性协调" tabindex="-1"><a class="header-anchor" href="#线性协调"><span>线性协调</span></a></h3><p>不同于传统做法，Flutter 没有使用树差异比较算法。相反，框架通过使用 O(N) 算法独立地检查每个 element 的子节点来决定是否重用该 element。子列表协调算法针对以下情况进行了优化：</p><ul><li>旧的子列表为空。</li><li>两个列表完全相同。</li><li>在列表的某个位置插入或删除一个或多个 widget。</li><li>如果新旧列表都包含相同 key <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup> 的 widget，那么这两个 widget 就会被认为是相同的。</li></ul><p>通常的做法是从新旧子列表的头部和尾部开始对每一个 widget 的运行时类型和 key 进行匹配，这样就可能找到在两个列表中间所有不匹配子节点的（非空）范围。然后框架将旧子列表中该范围内的子项根据它的 key 放入一个哈希表中。接下来，框架将会遍历新的子列表以寻找该范围内能够匹配哈希表中的 key 的子项。无法匹配的子项将会被丢弃并从头开始重建，匹配到的子项则使用它们新的 widget 进行重建。</p><h3 id="树结构优化" tabindex="-1"><a class="header-anchor" href="#树结构优化"><span>树结构优化</span></a></h3><p>重用 element 对性能非常重要，这是因为 element 拥有两份关键数据：Stateful widget 的状态对象及底层的渲染对象。当框架能够重用 element 时，用户界面的逻辑状态信息是不变的，并且可以重用之前计算的布局信息，这通常可以避免遍历整棵子树。事实上，重用 element 是非常有价值的，因为 Flutter 支持 <strong>全局</strong> 树更新，以此保留状态和布局信息。</p><p>开发者可通过将 <code>GlobalKey</code> 与其中一个 widget 相关联来实施全局树更新。每个全局 key 在整个应用中都是唯一的，并使用特定于线程的哈希表进行注册。在构建过程中，开发者可以使用全局 key 将 widget 移动到 element 树的任意位置。框架将不会在该位置上重新构建 element，而是检查哈希表并将现有的 element 从之前的位置移动到新的位置，从而保留整棵子树。</p><p>重新构建的子树中的渲染对象能够保留它们的布局信息，这是因为布局约束是渲染树从父节点传递到子节点的唯一信息。子列表发生变化后，父节点将会被标记为脏，但如果新的父节点传递给子节点的布局约束与该子节点从旧的父节点接收到的相同，那么子节点可立即从布局中返回，从而切断布局的向下传递。</p><p>开发者广泛使用全局 key 和全局树更新来实现 hero transition 及导航等效果。</p><h3 id="恒定因子优化" tabindex="-1"><a class="header-anchor" href="#恒定因子优化"><span>恒定因子优化</span></a></h3><p>除了上述算法优化，实现积极可组合还需依赖几个重要的恒定因子优化。这些优化对于上面所讨论的主要算法是非常重要的。</p><ul><li><strong>子模型无关</strong>。与大多数使用子列表的工具包不同， Flutter 渲染树不会记住一个特定的子模型。比如，类 <code>RenderBox</code> 存在一个抽象的 <code>visitChildren()</code> 方法，而非具体的 <strong>firstChild</strong> 和 <strong>nextSibling</strong> 接口。许多子类仅支持直接作为其成员变量的单个子项，而非子项列表。比如，由于 <code>RenderPadding</code> 仅支持单个子节点，因此它拥有一个更为简单、高效的布局方法。</li><li><strong>视觉渲染树、widget 逻辑树</strong>。在 Flutter 中，渲染树在与设备无关的视觉坐标系中运行，这意味着即使 x 轴的读取方向是从右到左，其左侧的值依旧小于右侧。Widget 树通常在逻辑坐标中运行，这意味着拥有 <strong>开始</strong> 和 <strong>结束</strong> 值的视觉解释取决于读取方向。逻辑坐标到视觉坐标的转换是在 widget 树和渲染树之间的切换中完成的。这种方法更为高效的原因是，渲染树中的布局和绘制计算比 widget 到渲染树的切换更加频繁，并且可以避免重复的坐标转换。</li><li><strong>通过专门的渲染对象处理文本</strong>。大多数渲染对象都不清楚文本的复杂性。相反，文本是由专门的渲染对象 <code>RenderParagraph</code> 进行处理，它是渲染树中的一个叶子节点。开发者使用组合形式将文本并入到用户界面中，而非使用文本感知渲染对象进行子类化。该模式意味着 <code>RenderParagraph</code> 可避免文本布局在父节点提供相同布局约束下的重复计算，这是非常常见的，即使在树优化期间也是如此。</li><li><strong>可观察对象</strong>。 Flutter 使用模型观察及响应设计模式。显而易见，响应模式占主导地位，但 Flutter 在某些叶子节点的数据结构上使用了可观察对象。比如 <code>Animation</code> 会在值发生变化时通知观察者列表。 Flutter 将这些可观察对象从 widget 树转移到渲染树中，渲染树直接监听这些对象，并在它们改变时仅重绘管道的相关阶段。比如，更改 <code>Animation&lt;Color&gt;</code> 可能只触发绘制阶段，而非整个构建和绘制阶段。</li></ul><p>总的来说，这些优化对通过积极组合方式产生的大型树结构的性能产生了重大影响。</p><h3 id="元素和-renderobject-树的分离" tabindex="-1"><a class="header-anchor" href="#元素和-renderobject-树的分离"><span>元素和 RenderObject 树的分离</span></a></h3><p>Flutter 中的<code>RenderObject</code>和<code>Element</code>（Widget）树是同构的（严格来说，<code>RenderObject</code>树是<code>Element</code>树的一个子集）。一个明显的简化是将这些树合并成一棵树。然而，在实践中，将这些树分开是有很多好处的：</p><ul><li><p><strong>性能</strong> 当布局发生变化时，只有布局树的相关部分需要被行走。由于组成的原因，元素树经常有许多额外的节点需要被跳过。</p></li><li><p><strong>明确性</strong> 更清晰的关注点分离允许小部件协议和渲染对象协议各自针对其特定需求进行专业化，简化了 API 表面，从而降低了错误的风险和测试负担。</p></li><li><p><strong>类型安全</strong> 呈现对象树可以更具有类型安全性，因为它可以在运行时保证子代将具有适当的类型（每个坐标系，例如，有自己的呈现对象类型）。组成部件可以不考虑布局时使用的坐标系（例如，同一个部件暴露了应用程序模型的一部分，可以在盒子布局和狭长布局中使用），因此在元素树中，验证呈现对象的类型需要在树上行走。</p></li></ul><h2 id="无限滚动" tabindex="-1"><a class="header-anchor" href="#无限滚动"><span>无限滚动</span></a></h2><p>对于工具包来说，实现无限滚动列表是非常困难的。Flutter 支持基于 <strong>构造器</strong> 模式实现的简单无限滚动列表界面，其中 <code>ListView</code> 使用回调按需构建 widget，即它们只在滚动过程中才对用户可见。该功能需要 <strong>视窗感知布局</strong> 及 <strong>按需构建 widget</strong> 的支持。</p><h3 id="视窗感知布局" tabindex="-1"><a class="header-anchor" href="#视窗感知布局"><span>视窗感知布局</span></a></h3><p>同 Flutter 中的大多数东西一样，可滚动的 widget 是基于组合模式构建的。可滚动 widget 的外部是一个 <code>Viewport</code>，这是一个拥有更大内部空间的盒子，这意味着它的子节点可以超出视窗口的边界并滚动到可视区域中。但是，视窗口没有 <code>RenderBox</code> 子节点，而是拥有被称为 <strong>sliver</strong>，实现了视窗感知协议的<code>RenderSliver</code> 子节点。</p><p>sliver 布局协议中父节点向下传递给子节点的约束信息及接收到的几何信息的结构与盒子布局相同。但约束和几何数据在两个协议之间不同。在 sliver 协议中，子节点接收到的是关于视窗口的信息，这其中包含剩余的可见空间量。它们返回的几何数据支持各种滚动链接效果，包括可折叠标题及视差。</p><p>不同的 sliver 以不同的方式填充视窗口中的可用空间。比如，生成线性子列表的 sliver 按顺序排列每个子节点，直到 sliver 中无任何子节点或可用空间。同理，生成二维子节点网格的 sliver 仅填充网格中的可见区域。由于它们知道还有多大的可见空间，sliver 可以生成有限的子节点，即使它们可能生成无限的子节点。</p><p>可组合 sliver 来创建特定的滚动布局和效果。比如，单个视窗口可以有一个折叠标题、一个线性列表和一个网格。所有这些 sliver 将按照 sliver 布局协议进行协作，只生成那些在视窗口实际可见的子节点，而不管这些子节点是否属于标题、列表或网格<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup>。</p><h3 id="按需构建-widget" tabindex="-1"><a class="header-anchor" href="#按需构建-widget"><span>按需构建 widget</span></a></h3><p>如果 Flutter 拥有一个严格的<strong>从构建到布局，再到绘制</strong>的管道，那么前面的内容将不足以实现无限滚动列表，这是因为只有在布局阶段才能通过视窗口获取可用的空间信息。如果没有额外的机制，在布局阶段构建用于填充空间的 widget 已经太迟了。 Flutter 使用将管道的构建与布局交叉在一起的方式来解决这个问题。在布局阶段的任意时刻，<strong>只要这些 widget 是当前布局的渲染对象的子节点</strong>，框架就可以按需构建新的 widget。</p><p>只有严格控制构建及布局中消息传播的算法，才能实现构建和布局的交叉执行。也就是说，在构建过程中，消息只能沿构建树向下传递。当渲染对象进行布局时，布局遍历过程中并没有访问该渲染对象的子树，这意味通过子树构建的写入无法使到目前为止已进入布局计算过程的任何信息失效。无独有偶，一旦布局从渲染对象中返回，在当前布局过程中，该渲染对象将永远不会被再次访问，这意味后续布局计算生成的任何写入都不会使用于构建渲染对象的子树的信息失效。</p><p>此外，线性协调及树结构优化对于在滚动过程中有效更新 element，以及当 element 在视窗口边缘滚动进出视图期间修改渲染树至关重要。</p><h2 id="人机工程-api" tabindex="-1"><a class="header-anchor" href="#人机工程-api"><span>人机工程 API</span></a></h2><p>速度只有在框架能够被有效使用时才有意义。为了引导设计更高可用性的 Flutter API， Flutter 已经在与开发者进行的广泛用户体验研究中进行了反复测试。这些研究有时证实了已有的设计决策，有时有助于引导功能的优先级，有时会改变 API 的设计方向。比如，Flutter 的 API 文档很多，用户体验的研究不仅证实了这些文档的价值，也同时强调了示例代码及说明性图表的重要性。</p><p>本节将要讨论 Flutter API 设计中为提高可用性所做的一些决策。</p><h3 id="与开发者思维模式相匹配的专项-api" tabindex="-1"><a class="header-anchor" href="#与开发者思维模式相匹配的专项-api"><span>与开发者思维模式相匹配的专项 API</span></a></h3><p>Flutter 中 <code>widget</code>、<code>Element</code> 和 <code>RenderObject</code> 的基类节点不定义子类模型。该机制允许每个节点对适用于该节点的子模型进行定制化。</p><p>大多数 <code>widget</code> 对象都有一个子 <code>widget</code> 对象，因此它只暴露了一个 <code>child</code> 参数。一些 widget 支持任意数量的子节点，并暴露了一个获取子节点列表的 <code>children</code> 参数。有些 widget 无任何子节点、不保留内存且无任何参数。同样的，<code>RenderObjects</code> 暴露特定于子模型的 API。 <code>RenderImage</code> 是一个没有子节点的叶子节点。 <code>RenderPadding</code> 只持有一个子节点，因此它有一个指向单个子节点的指针存储空间。 <code>RenderFlex</code> 接受任意数量的子节点，并通过链表对其进行管理。</p><p>在一些罕见情况下，将使用更复杂的子类模型。渲染对象 <code>RenderTable</code> 的构造函数需要使用二维数组来存储子节点，所以该类暴露了用于控制行和列数量的 getter 及 setter 方法，还有一些可以用 x、y 轴坐标来替换单个子节点的特殊方法，可通过提供一个新的子节点数组来添加新行，并用单个数组及列的个数来替换整个子节点列表。该对象并不像大多数渲染对象那样使用链表，而是使用可索引数组来实现。</p><p><code>Chip</code> widget 和 <code>InputDecoration</code> 对象具有与其控制中的插槽相匹配的字段。如果一个通用子模型将强制语义定义在子列表之上，比如将第一个子节点定义为前缀，第二个子节点定义为后缀，那么专用子模型允许使用特有的命名属性。</p><p>这种灵活性允许树中的每个子节点以其最常用的方式操作它的角色。很少有人想要在表格中插入一个单元格，从而导致其他所有单元格被环绕；同样的，很少有人想要通过索引而不是通过引用从 flex 行中删除子项。</p><p><code>RenderParagraph</code> 对象是最极端的情况：它有一个完全不同类型的子节点，<code>TextSpan</code>。在 <code>RenderParagraph</code> 的边界，<code>RenderObject</code> 树会被转换为 <code>TextSpan</code> 树。</p><p>专门用于满足开发者期望的 API 的一切方法不仅适用于子模型。</p><p>专门存在一些琐碎的 widget，以便开发者在寻找问题解决方案时能够发现并使用它们。一旦知道如何使用 <code>Expanded</code> 和大小为零的 <code>SizedBox</code> 子部件，就可以轻松地为行或列添加空格，但你会发现这种模式是没有必要的，因为搜索 <code>space</code> 所找到的 <code>Spacer</code>，它是直接使用 <code>Expanded</code> 和 <code>SizedBox</code> 来达到同样的效果的。</p><p>同理，可以通过在构建过程中不包含 widget 子树来轻松隐藏 widget 子树。但开发者通常希望有一个 widget 来执行该操作，因此 <code>Visibility</code> 的存在便是将此模式封装在一个简单的可重用 widget 中。</p><h3 id="明确的参数" tabindex="-1"><a class="header-anchor" href="#明确的参数"><span>明确的参数</span></a></h3><p>UI 框架往往拥有大量的属性，因此很少有开发者能够记住每个类的每个构造函数参数的作用。由于 Flutter 使用响应式编程范式，因此在 Flutter 中，构建方法通常会对构造函数进行多次调用。通过利用 Dart 的命名参数，Flutter 中的 API 能够使这些构建方法保持清晰易懂。</p><p>该模式已被扩展到任何具有多个参数（尤其是具有 boolean 类型参数）的方法，因此独立的 <code>true</code> 或 <code>false</code> 值在方法调用中总是自我描述的。此外，为避免 API 中通常由双重否定所造成的困惑， boolean 类型的参数和属性始终以肯定的形式命名（比如，使用 <code>enabled: true</code> 而非 <code>disabled: false</code>）。</p><h3 id="参数陷阱" tabindex="-1"><a class="header-anchor" href="#参数陷阱"><span>参数陷阱</span></a></h3><p>在 Flutter 框架中被大量使用的一项技术是定义不存在错误条件的 API。这样可以避免考虑整个错误类别。</p><p>比如插值函数允许插值的一端或两端为空，而不是将其定义为错误：两个空值之间的插值永远为空，并且从空值或空值插值等效于对指定类型进行零模拟插值。这意味着不小心将 null 传递给插值函数的开发者不会遇到错误，而是会得到一个合理结果。</p><p>一个更加微妙的例子是 <code>Flex</code> 布局算法。该布局给予 flex 渲染对象的空间被它的子节点所划分。因此 flex 的大小应该是整个可用空间。在最初的设计中提供无限空间将导致失败：这意味着 flex 应该是无限大且无用的布局设置。然而，通过对 API 的改造，在为 flex 对象提供无限空间时，渲染对象会调整自身大小来满足所需子节点的大小，从而减少可能出现的错误次数。</p><p>该方法也可用于避免使用允许创建不符合逻辑的数据的构造函数。例如，<code>PointerDownEvent</code> 的构造函数不允许将 <code>PointerEvent</code> 的 <code>down</code> 属性设置为 <code>false</code>（这种情况是自相矛盾的）；相反，构造函数没有关于字段 <code>down</code> 的参数，且将值始终设置为 <code>true</code>。</p><p>一般情况下，该方法用于为输入域中的所有值定义有效的解释。最简单的例子是 <code>Color</code> 的构造函数。相对于接受四个整型参数（分别用于表示红色、绿色、蓝色和 alpha），其中任何一个都可能超出范围，它的默认构造函数仅接受一个整数值，并定义每位的含义（例如，低八位代表红色），以便任何输入都是有效的颜色值。</p><p>一个更复杂的例子是 <code>paintImage()</code> 函数。该函数需要 11 个参数，其中一些具有相当宽泛的输入域，但它们都经过精心设计且大部分都能够彼此相交，因此很少出现无效组合。</p><h3 id="积极报告错误" tabindex="-1"><a class="header-anchor" href="#积极报告错误"><span>积极报告错误</span></a></h3><p>并非所有的错误都能被设计出来。对于那些遗漏的错误，在 debug 版本中，Flutter 通常会尝试尽早捕获并立即报告。它使用了大量的断言，对构造函数参数进行了详细的完整性检查，并监视其生命周期，一旦检测到不一致，它们会立即引发异常。</p><p>这在某些情况下是极端情况：比如，在执行单元测试时，无论测试用例正在做什么，每个 <code>RenderBox</code> 子类都会主动地检查其内部大小调整方法是否满足内部大小调整契约。这有助于捕获可能无法执行的 API 错误。</p><p>当异常抛出时，它们会包含尽可能多的信息。 Flutter 中的一些错误会主动探测相关的堆栈跟踪信息，以确定实际错误最可能发生的位置。其他错误则通过相关树来确定坏数据的来源。最常见的错误包含详细说明（在某些情况下会包含避免错误的示例代码），或指向其他文档的链接。</p><h3 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式"><span>响应式</span></a></h3><p>可变的基于树结构的 API 受二元访问模式的影响：创建树的原始状态通常使用与后续更新完全不同的操作集。Flutter 的渲染层使用了这种范式，因为它是维护持久树的有效方法，是高效布局和绘制的关键所在。但这也意味着，与渲染层的直接交互是十分笨拙的，甚至极其容易出错。</p><p>Flutter 在 widget 层引入了一个使用响应式来操作底层渲染树的组合机制<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup>。该 API 通过将树的创建和更新步骤整合到一个单一的树结构描述（构建）中，从而将树操作抽象出来，这包括：每次系统状态更新之后，开发者用于描述用户界面的新配置；框架对于新配置所需要进行的一系列树更新计算。</p><h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值"><span>插值</span></a></h3><p>由于 Flutter 鼓励开发者描述与当前应用状态相匹配的界面配置，因此存在一种在这些配置之间执行隐式的动画机制。</p><p>例如，假设界面在状态 S1 由一个圆形组成，在状态 S2 时由一个正方形组成。如果没有动画机制，状态更改将导致不和谐的界面更改。隐式动画则允许界面在几个帧的时间里由圆形平滑地过渡到正方形。</p><p>每个可执行隐式动画的特性都包含一个 Stateful widget，它用于记录输入的当前值，并在输入值改变时开始执行动画序列，并在指定的持续时间内从当前值转换为新值。</p><p>这是使用不可变对象的 <code>lerp</code>（线性插值）函数来实现的。每个状态（这里为圆形和正方形）代表一个配置中包含恰当设置（比如颜色、笔划宽度等）且知道如何绘制自己的不可变对象。在动画绘制中间步骤时，开始和结束值连同表示动画中点的 <strong>t</strong> 值一并传递给 <code>lerp</code>函数。其中 0.0 代表开始 <code>start</code>，1.0 代表结束 <code>end</code><sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup>，并且该方法返回表示中间阶段的第三个不可变对象。</p><p>对于从圆形到正方形的转换，<code>lerp</code> 函数将返回一个圆角正方形对象，其半径被描述为从 <strong>t</strong> 值导出的分数，使用 <code>lerp</code> 函数进行插值计算的颜色，以及使用 <code>lerp</code> 函数进行双倍插值计算的笔划宽度。该对象与圆形、正方形一样具有相同的接口实现，并且可以在请求时进行自我绘制。</p><p>该技术允许状态机、状态到配置的映射、动画和插值机制以及与如何绘制每一桢完全分离的特定逻辑。</p><p>在 Flutter 中，该机制得到了广泛应用，无论是像 <code>Color</code> 和 <code>Shape</code> 这样的基本类型，还是像 <code>Decoration</code>，<code>TextStyle</code> 或 <code>Theme</code> 这样更为复杂的类型，都是可以进行插值处理的。它们通常是由可插入组件构成的，并且插入更复杂的对象通常就像递归插入描述复杂对象的所有值一样简单。</p><p>一些插值对象由类层次结构定义。比如，形状由 <code>ShapeBorder</code> 接口表示，并且存在多种形状类型，包括： <code>BeveledRectangleBorder</code>、<code>BoxBorder</code>、<code>CircleBorder</code>、<code>RoundedRectangleBorder</code> 和 <code>StadiumBorder</code>。单一的 <code>lerp</code> 函数并不能了解所有可能的类型信息，因此接口定义了 <code>lerpFrom</code> 和 <code>lerpTo</code> 方法以替代静态的 <code>lerp</code> 方法。当被告知从形状 A 切换到 B 时，将首选询问 B 是否 <code>lerpFrom</code> A，如其答案为否，则询问 A 是否可以 <code>lerpTo</code> B （如两者的答案均为否，如果 <code>t</code> 的值小于 0.5 则返回 A，否则返回 B）。</p><p>这允许类层次结构的任意扩展，后续新增的能够在先前已知值与它们之间进行插值处理。</p><p>在某些情况下，插值本身不能被任何可用的类描述，并且定义一个私有类来描述中间状态。比如在 <code>CircleBorder</code> 和 <code>RoundedRectangleBorder</code> 之间进行插值时就是如此。</p><p>该机制的另外一个优点是：它可以处理从中间态到新值的插值。比如，在圆形到正方形过渡的中途，形状可能再次改变，导致动画需要插值到一个三角形。只要该三角形类是 <code>lerpFrom</code> 圆形到正方形的中间类，就可以无缝进行转换。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2><p>Flutter 一切都是 widget 的口号是围绕着通过组合 widget 来构建用户界面， widget 又由更为基础的 widget 构成。这种积极组合的结果是需要精心设计的算法和数据结构才能有效处理大量的 widget。通过一些额外的机制，这些数据结构还能使开发者轻松构建无限滚动列表，以便在 widget 可见时进行按需构建。</p><hr><p><strong>脚注：</strong></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>至少对于布局来说。它可能会重新审视绘制、在必要时构建辅助功能树、以及必要时的命中测试。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>现实情况当然更复杂一些。有些布局涉及内部维度及基线测量，这涉及到相关子树的额外遍历 （在最坏的情况下，使用积极缓存来降低潜在的二次性能）。但是，这些情况非常罕见。特别是在常见的 shrink-wrapping 情况下，根本不需要内部尺寸。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>严格来说，子节点的位置不是其 RenderBox 几何体的一部分，因此无需在布局期间进行实际计算。许多渲染对象隐式地将它们的单个子节点相对于它们自身的原点定位在 0,0 处，这根本不需要进行计算或存储。一些渲染对象避免计算它们子节点的位置直到最后可能需要的时刻（比如，在绘制过程中），以避免以后没有被绘制时的计算。 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p>该规则有一个例外。正如 <a href="https://flutter.cn/docs/resources/inside-flutter#building-widgets-on-demand" target="_blank" rel="noopener noreferrer">按需构建 widget</a> 中所描述的，由于布局约束的变化，一些 widget 可以被重建。如果 widget 在同一帧中因与此无关的原因被标记为脏，同时也由于它受布局约束的影响，该 widget 将会被构建两次。该次冗余构建仅限于 widget 自身，并不会影响其后代节点。 <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p>键是一个可选的与 widget 相关联的不透明对象，它的相等操作符用于影响协调算法。 <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li><li id="footnote6" class="footnote-item"><p>对于可访问性，并在 widget 构建及在窗口显示的过程中为应用提供几毫米的时间，视窗口会在可见 widget 的前后为几百个像素构建（但不进行绘制）widget。 <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p></li><li id="footnote7" class="footnote-item"><p>该方法首次在 Facebook 的 React 框架中得到了广泛使用。 <a href="#footnote-ref7" class="footnote-backref">↩︎</a></p></li><li id="footnote8" class="footnote-item"><p>实际上，允许 <strong>t</strong> 值超过 0.0-1.0 的范围，这同样适用于某些曲线。比如 elastic 缓动曲线通过短暂的过冲来表示弹跳效应。插值逻辑通常可以在适当情况下推算出起始或结束点。对于某些类型，比如在插入颜色时，<strong>t</strong> 值被有效地固定到 0.0-1.0 的范围。 <a href="#footnote-ref8" class="footnote-backref">↩︎</a></p></li></ol></section>',93),n=[l];function i(a,c){return t(),o("div",null,n)}const p=e(d,[["render",i],["__file","principle.html.vue"]]),g=JSON.parse('{"path":"/posts/cross-platform/Flutter/principle.html","title":"Flutter 工作原理","lang":"zh-CN","frontmatter":{"icon":"engine","date":"2023-04-26T00:00:00.000Z","cover":"https://files.codelife.cc/wallhaven/full/4v/wallhaven-4vp2x3.png?x-oss-process=image/resize,limit_0,m_fill,w_1366,h_768/quality,Q_92/format,webp","category":["Flutter"],"tag":["Flutter"],"description":"Flutter 工作原理 本文档解释了使 Flutter API 正常工作的 Flutter 工具包内部工作原理。由于 Flutter widget 是以积极组合的形式构建的，所以使用 Flutter 构建的用户界面含有大量 widget。为了支撑这些负载，Flutter 使用了次线性算法来布局和构建 widget，这些数据结构使树形结构优化更加高效，...","head":[["meta",{"property":"og:url","content":"https://weijodan.top/posts/cross-platform/Flutter/principle.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"Flutter 工作原理"}],["meta",{"property":"og:description","content":"Flutter 工作原理 本文档解释了使 Flutter API 正常工作的 Flutter 工具包内部工作原理。由于 Flutter widget 是以积极组合的形式构建的，所以使用 Flutter 构建的用户界面含有大量 widget。为了支撑这些负载，Flutter 使用了次线性算法来布局和构建 widget，这些数据结构使树形结构优化更加高效，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://files.codelife.cc/wallhaven/full/4v/wallhaven-4vp2x3.png?x-oss-process=image/resize,limit_0,m_fill,w_1366,h_768/quality,Q_92/format,webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://files.codelife.cc/wallhaven/full/4v/wallhaven-4vp2x3.png?x-oss-process=image/resize,limit_0,m_fill,w_1366,h_768/quality,Q_92/format,webp"}],["meta",{"name":"twitter:image:alt","content":"Flutter 工作原理"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"Flutter"}],["meta",{"property":"article:published_time","content":"2023-04-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flutter 工作原理\\",\\"image\\":[\\"https://files.codelife.cc/wallhaven/full/4v/wallhaven-4vp2x3.png?x-oss-process=image/resize,limit_0,m_fill,w_1366,h_768/quality,Q_92/format,webp\\"],\\"datePublished\\":\\"2023-04-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijodan.top\\"}]}"]]},"headers":[{"level":2,"title":"积极可组合性","slug":"积极可组合性","link":"#积极可组合性","children":[{"level":3,"title":"次线性布局","slug":"次线性布局","link":"#次线性布局","children":[]},{"level":3,"title":"次线性 widget 构建","slug":"次线性-widget-构建","link":"#次线性-widget-构建","children":[]},{"level":3,"title":"线性协调","slug":"线性协调","link":"#线性协调","children":[]},{"level":3,"title":"树结构优化","slug":"树结构优化","link":"#树结构优化","children":[]},{"level":3,"title":"恒定因子优化","slug":"恒定因子优化","link":"#恒定因子优化","children":[]},{"level":3,"title":"元素和 RenderObject 树的分离","slug":"元素和-renderobject-树的分离","link":"#元素和-renderobject-树的分离","children":[]}]},{"level":2,"title":"无限滚动","slug":"无限滚动","link":"#无限滚动","children":[{"level":3,"title":"视窗感知布局","slug":"视窗感知布局","link":"#视窗感知布局","children":[]},{"level":3,"title":"按需构建 widget","slug":"按需构建-widget","link":"#按需构建-widget","children":[]}]},{"level":2,"title":"人机工程 API","slug":"人机工程-api","link":"#人机工程-api","children":[{"level":3,"title":"与开发者思维模式相匹配的专项 API","slug":"与开发者思维模式相匹配的专项-api","link":"#与开发者思维模式相匹配的专项-api","children":[]},{"level":3,"title":"明确的参数","slug":"明确的参数","link":"#明确的参数","children":[]},{"level":3,"title":"参数陷阱","slug":"参数陷阱","link":"#参数陷阱","children":[]},{"level":3,"title":"积极报告错误","slug":"积极报告错误","link":"#积极报告错误","children":[]},{"level":3,"title":"响应式","slug":"响应式","link":"#响应式","children":[]},{"level":3,"title":"插值","slug":"插值","link":"#插值","children":[]}]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":28.8,"words":8640},"filePathRelative":"posts/cross-platform/Flutter/principle.md","localizedDate":"2023年4月26日","excerpt":"\\n<p>本文档解释了使 Flutter API 正常工作的 Flutter 工具包内部工作原理。由于 Flutter widget 是以积极组合的形式构建的，所以使用 Flutter 构建的用户界面含有大量 widget。为了支撑这些负载，Flutter 使用了次线性算法来布局和构建 widget，这些数据结构使树形结构优化更加高效，并且具有很多常量因子优化。通过一些额外的机制，该设计也允许开发者利用回调（用于构建用户可见的 widget）来轻松创建无限滚动列表。</p>\\n<h2>积极可组合性</h2>\\n<p>组合性是 Flutter 最为出众的一个特性。widget 通过组合其他 widget 的方式进行构建，并且这些 widget 自身由更基础的 widget 构建。比如，<code>Padding</code> 是一个 widget 而非其他 widget 的属性。因此，使用 Flutter 创建的用户界面是由多个 widget 组成的。</p>","autoDesc":true}');export{p as comp,g as data};
