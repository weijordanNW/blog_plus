import{_ as c,r,o as d,c as h,b as s,e as i,w as a,f as p,d as n}from"./app-vRjwnwzg.js";const k={},C=s("blockquote",null,[s("p",null,"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的"),s("p",null,"这里介绍一个更强大的终端神器")],-1),y=s("h2",{id:"目录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录"},[s("span",null,"目录")])],-1),u={class:"table-of-contents"},F=p(`<h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><p>在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算.</p><p>shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)</p><p>然后 shell 解析这种命令再反馈给内核去执行一系列操作.</p><p>zsh 和 shell 有什么关系呢?</p><p>其实 zsh 也是一种 shell ,但是并不是我们系统默认的 shell ,unix 衍生系统的默认 shell 都是 bash。</p><p>查看已安装 shell<br> 查看 Mac 上已有的 shell,一共有 6 种</p><hr><p><code>cat /etc/shells</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/bash</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/csh</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/ksh</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/sh</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/tcsh</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/bin/zsh</span></span></code></pre></div><h2 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh"><span>安装 <strong>oh my zsh</strong></span></a></h2>`,11),b=s("div",{class:"language-shell","data-ext":"shell","data-title":"shell"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"sh"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -c"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "$('),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"curl"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -fsSL"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')])])])],-1),m=s("div",{class:"language-shell","data-ext":"shell","data-title":"shell"},[s("pre",{class:"shiki shiki-themes one-dark-pro one-dark-pro vp-code",style:{"background-color":"#282c34","--shiki-dark-bg":"#282c34",color:"#abb2bf","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"sh"),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}}," -c"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' "$('),s("span",{style:{color:"#61AFEF","--shiki-dark":"#61AFEF"}},"wget"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}}," https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh "),s("span",{style:{color:"#D19A66","--shiki-dark":"#D19A66"}},"-O"),s("span",{style:{color:"#98C379","--shiki-dark":"#98C379"}},' -)"')])])])],-1),B=p(`<p>安装成功：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Cloning</span><span style="color:#98C379;--shiki-dark:#98C379;"> Oh</span><span style="color:#98C379;--shiki-dark:#98C379;"> My</span><span style="color:#98C379;--shiki-dark:#98C379;"> Zsh...</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Cloning</span><span style="color:#98C379;--shiki-dark:#98C379;"> into</span><span style="color:#98C379;--shiki-dark:#98C379;"> &#39;/root/.oh-my-zsh&#39;...</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">remote:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Counting</span><span style="color:#98C379;--shiki-dark:#98C379;"> objects:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 712,</span><span style="color:#98C379;--shiki-dark:#98C379;"> done.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">remote:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Compressing</span><span style="color:#98C379;--shiki-dark:#98C379;"> objects:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 100%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (584/584), done.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">remote:</span><span style="color:#98C379;--shiki-dark:#98C379;"> Total</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 712</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (delta </span><span style="color:#D19A66;--shiki-dark:#D19A66;">15</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), reused 522 (</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">delta</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 4</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">), pack-reused 0</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Receiving</span><span style="color:#98C379;--shiki-dark:#98C379;"> objects:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 100%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (712/712), 443.58 KiB | </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">27.00</span><span style="color:#98C379;--shiki-dark:#98C379;"> KiB/s,</span><span style="color:#98C379;--shiki-dark:#98C379;"> done.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Resolving</span><span style="color:#98C379;--shiki-dark:#98C379;"> deltas:</span><span style="color:#98C379;--shiki-dark:#98C379;"> 100%</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (15/15), done.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Checking</span><span style="color:#98C379;--shiki-dark:#98C379;"> connectivity...</span><span style="color:#98C379;--shiki-dark:#98C379;"> done.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Looking</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> an</span><span style="color:#98C379;--shiki-dark:#98C379;"> existing</span><span style="color:#98C379;--shiki-dark:#98C379;"> zsh</span><span style="color:#98C379;--shiki-dark:#98C379;"> config...</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Using</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> Oh</span><span style="color:#98C379;--shiki-dark:#98C379;"> My</span><span style="color:#98C379;--shiki-dark:#98C379;"> Zsh</span><span style="color:#98C379;--shiki-dark:#98C379;"> template</span><span style="color:#98C379;--shiki-dark:#98C379;"> file</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> adding</span><span style="color:#98C379;--shiki-dark:#98C379;"> it</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> ~/.zshrc</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Copying</span><span style="color:#98C379;--shiki-dark:#98C379;"> your</span><span style="color:#98C379;--shiki-dark:#98C379;"> current</span><span style="color:#98C379;--shiki-dark:#98C379;"> PATH</span><span style="color:#98C379;--shiki-dark:#98C379;"> and</span><span style="color:#98C379;--shiki-dark:#98C379;"> adding</span><span style="color:#98C379;--shiki-dark:#98C379;"> it</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> the</span><span style="color:#98C379;--shiki-dark:#98C379;"> end</span><span style="color:#98C379;--shiki-dark:#98C379;"> of</span><span style="color:#98C379;--shiki-dark:#98C379;"> ~/.zshrc</span><span style="color:#98C379;--shiki-dark:#98C379;"> for</span><span style="color:#98C379;--shiki-dark:#98C379;"> you.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Time</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> change</span><span style="color:#98C379;--shiki-dark:#98C379;"> your</span><span style="color:#98C379;--shiki-dark:#98C379;"> default</span><span style="color:#98C379;--shiki-dark:#98C379;"> shell</span><span style="color:#98C379;--shiki-dark:#98C379;"> to</span><span style="color:#98C379;--shiki-dark:#98C379;"> zsh!</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        __</span><span style="color:#98C379;--shiki-dark:#98C379;">                                     __</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> ____</span><span style="color:#98C379;--shiki-dark:#98C379;">  /</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_</span><span style="color:#98C379;--shiki-dark:#98C379;">     ____</span><span style="color:#98C379;--shiki-dark:#98C379;"> ___</span><span style="color:#98C379;--shiki-dark:#98C379;">  __</span><span style="color:#98C379;--shiki-dark:#98C379;">  __</span><span style="color:#98C379;--shiki-dark:#98C379;">   ____</span><span style="color:#98C379;--shiki-dark:#98C379;">  _____/</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">/</span><span style="color:#98C379;--shiki-dark:#98C379;"> __</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\/</span><span style="color:#98C379;--shiki-dark:#98C379;"> __</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\ </span><span style="color:#98C379;--shiki-dark:#98C379;">  /</span><span style="color:#98C379;--shiki-dark:#98C379;"> __</span><span style="color:#98C379;--shiki-dark:#98C379;"> \`</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">__</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> \\/</span><span style="color:#98C379;--shiki-dark:#98C379;"> / / /  /_  / / ___/ __ </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">/ /_/ / / / /  / / / / / / /_/ /    / /_(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">__</span><span style="color:#98C379;--shiki-dark:#98C379;">  ) / / /</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">\\____/_/</span><span style="color:#98C379;--shiki-dark:#98C379;"> /_/  /_/ /_/ /_/</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">\\_</span><span style="color:#98C379;--shiki-dark:#98C379;">_, /    /___/____/_/ /_/</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">                       /____/</span><span style="color:#98C379;--shiki-dark:#98C379;">                       ....is now installed!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">Please</span><span style="color:#98C379;--shiki-dark:#98C379;"> look over the ~/.zshrc file to select plugins, themes, and options.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">p.s.</span><span style="color:#98C379;--shiki-dark:#98C379;"> Follow us at https://twitter.com/ohmyzsh.</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">p.p.s.</span><span style="color:#98C379;--shiki-dark:#98C379;"> Get stickers and t-shirts at http://shop.planetargon.com.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成以后，默认<code>Shell</code>的<code>~/.bashrc</code>文件默认不再加载了，替代的是<code>~/.zlogin</code>和<code>~/.zshrc</code>。所以如果你在<code>~/.bashrc</code>里配置了某些设置，需要把她们复制到<code>~/.zshrc</code>中。</p><p>在<code>~/.zshrc</code> 中添加以下行</p><p><code>source ~/.bash_profile</code></p><h4 id="切换终端为-zsh" tabindex="-1"><a class="header-anchor" href="#切换终端为-zsh"><span>切换终端为 zsh</span></a></h4><p><code>chsh -s /bin/zsh</code></p><h4 id="oh-my-zsh-目录结构" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh-目录结构"><span>oh my zsh 目录结构</span></a></h4><p>进入<code>~/.oh-my-zsh</code>目录后，看看该目录的结构</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">~ ls ~/.oh-my-zsh</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">CONTRIBUTING.md</span><span style="color:#98C379;--shiki-dark:#98C379;"> cache</span><span style="color:#98C379;--shiki-dark:#98C379;">           log</span><span style="color:#98C379;--shiki-dark:#98C379;">             templates</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">LICENSE.txt</span><span style="color:#98C379;--shiki-dark:#98C379;">     custom</span><span style="color:#98C379;--shiki-dark:#98C379;">          oh-my-zsh.sh</span><span style="color:#98C379;--shiki-dark:#98C379;">    themes</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">README.md</span><span style="color:#98C379;--shiki-dark:#98C379;">       lib</span><span style="color:#98C379;--shiki-dark:#98C379;">             plugins</span><span style="color:#98C379;--shiki-dark:#98C379;">         tools</span></span></code></pre></div><ul><li>lib 提供了核心功能的脚本库</li><li>tools 提供安装、升级等功能的快捷工具</li><li>plugins 自带插件的存在放位置</li><li>templates 自带模板的存在放位置</li><li>themes 自带主题文件的存在放位置</li><li>custom 个性化配置目录，自安装的插件和主题可放这里</li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p><code>zsh</code> 的配置主要集中在<code>~/.zshrc</code>里，用 <code>vim</code> 或你喜欢的其他编辑器打开<code>.zshrc</code>。</p><p>可以在此处定义自己的环境变量和别名，当然，<code>oh my zsh</code> 在安装时已经自动读取当前的环境变量并进行了设置，你可以继续追加其他环境变量。</p><h4 id="别名设置" tabindex="-1"><a class="header-anchor" href="#别名设置"><span>别名设置：</span></a></h4><p><code>zsh</code>不仅可以设置通用别名，还能针对文件类型设置对应的打开程序，比如：</p><ul><li><code>alias -s html=vi</code>，意思就是你在命令行输入 <code>hello.html</code>，<code>zsh</code>会为你自动打开<code>vim</code>并读取<code>hello.html</code>；</li><li><code>alias -s gz=&#39;tar -xzvf&#39;</code>，表示自动解压后缀为<code>gz</code>的压缩包。</li></ul><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> cls</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;clear&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> ll</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;ls -l&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> la</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;ls -a&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> vi</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;vim&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> javac</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;javac -J-Dfile.encoding=utf8&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> grep</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;grep --color=auto&quot;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> html</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi   </span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 在命令行直接输入后缀为 html 的文件名，会在 vim 中打开</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> rb</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi     </span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 在命令行直接输入 ruby 文件，会在 vim 中打开</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> py</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi       </span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"># 在命令行直接输入 python 文件，会用 vim 中打开，以下类似</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> js</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> c</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> java</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> txt</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">vi</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> gz</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;tar -xzvf&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> tgz</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;tar -xzvf&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> zip</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;unzip&#39;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">alias</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> -s</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> bz2</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&#39;tar -xjvf&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【其他】</p><ul><li><a href="https://github.com/robbyrussell/oh-my-zsh/wiki/themes" target="_blank" rel="noopener noreferrer">github zsh 主题参考</a></li><li><a href="http://blog.sina.com.cn/s/blog_71539d240101fh8s.html" target="_blank" rel="noopener noreferrer">自定义 zsh 提示符</a></li></ul><h4 id="主题设置" tabindex="-1"><a class="header-anchor" href="#主题设置"><span>主题设置：</span></a></h4><p><code>oh my zsh</code> 提供了数十种主题，相关文件在<code>~/.oh-my-zsh/themes</code>目录下，你可以自己选择，也可以自己编写主题。</p><p>在<code>.zshrc</code>里找到<code>ZSH_THEME</code>，就可以设置主题了，默认主题是：<code>ZSH_THEME=”robbyrussell”</code></p><p><code>ZSH_THEME=&quot;random&quot;</code>，主题设置为随机，这样我们每打开一个窗口，都会随机在默认主题中选择一个。</p><h4 id="插件设置" tabindex="-1"><a class="header-anchor" href="#插件设置"><span>插件设置：</span></a></h4><p><code>oh my zsh</code>项目提供了完善的插件体系，相关的文件在<code>~/.oh-my-zsh/plugins</code>目录下，默认提供了 100 多种，大家可以根据自己的实际学习和工作环境采用，想了解每个插件的功能，只要打开相关目录下的 <code>zsh</code> 文件看一下就知道了。插件也是在<code>.zshrc</code>里配置，找到<code>plugins</code>关键字，你就可以加载自己的插件了，系统默认加载<code>git</code>，你可以在后面追加内容，如下：</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">plugins</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">git</span><span style="color:#98C379;--shiki-dark:#98C379;"> zsh-autosuggestions</span><span style="color:#98C379;--shiki-dark:#98C379;"> autojump</span><span style="color:#98C379;--shiki-dark:#98C379;"> zsh-syntax-highlighting</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h5 id="安装-zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#安装-zsh-autosuggestions"><span>安装 <code>zsh-autosuggestions</code></span></a></h5><p>autosuggestions 它是 Oh-myszh 的一个插件，作用基本上是根据历史输入指令的记录即时的提示，能够很大的提高效率</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="color:#98C379;--shiki-dark:#98C379;"> clone</span><span style="color:#98C379;--shiki-dark:#98C379;"> git://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> $ZSH_CUSTOM</span><span style="color:#98C379;--shiki-dark:#98C379;">/plugins/zsh-autosuggestions</span></span></code></pre></div><p>添加至 <code>plugins</code></p><h5 id="安装-zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#安装-zsh-syntax-highlighting"><span>安装 <code>zsh-syntax-highlighting</code></span></a></h5><p>代码高亮插件可以让终端颜色更加绚丽</p><div class="language-sh" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="color:#98C379;--shiki-dark:#98C379;"> clone</span><span style="color:#98C379;--shiki-dark:#98C379;"> https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> \${</span><span style="color:#E06C75;--shiki-dark:#E06C75;">ZSH_CUSTOM</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">:-~/.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">oh-my-zsh</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">/</span><span style="color:#E06C75;--shiki-dark:#E06C75;">custom</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span><span style="color:#98C379;--shiki-dark:#98C379;">/plugins/zsh-syntax-highlighting</span></span></code></pre></div><p>添加至 <code>plugins</code></p><p><code>plugins=(zsh-autosuggestions git zsh-syntax-highlighting)</code></p><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图"><span>效果图</span></a></h2><figure><a href="https://imgchr.com/i/MarNhq" target="_blank" rel="noopener noreferrer"><img src="https://s2.ax1x.com/2019/11/15/MarNhq.md.png" alt="MarNhq.md.png" tabindex="0" loading="lazy"></a><figcaption>MarNhq.md.png</figcaption></figure><h3 id="卸载-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#卸载-oh-my-zsh"><span>卸载 oh my zsh</span></a></h3><p>直接在终端中，运行<code>uninstall_oh_my_zsh</code>既可以卸载。</p>`,40);function g(A,v){const l=r("router-link"),t=r("CodeTabs");return d(),h("div",null,[C,y,s("nav",u,[s("ul",null,[s("li",null,[i(l,{to:"#目录"},{default:a(()=>[n("目录")]),_:1})]),s("li",null,[i(l,{to:"#背景介绍"},{default:a(()=>[n("背景介绍")]),_:1})]),s("li",null,[i(l,{to:"#安装-oh-my-zsh"},{default:a(()=>[n("安装 oh my zsh")]),_:1}),s("ul",null,[s("li",null,[i(l,{to:"#配置"},{default:a(()=>[n("配置")]),_:1})])])]),s("li",null,[i(l,{to:"#效果图"},{default:a(()=>[n("效果图")]),_:1}),s("ul",null,[s("li",null,[i(l,{to:"#卸载-oh-my-zsh"},{default:a(()=>[n("卸载 oh my zsh")]),_:1})])])])])]),F,i(t,{id:"43",data:[{id:"crul"},{id:"wget"}]},{title0:a(({value:e,isActive:o})=>[n("crul")]),title1:a(({value:e,isActive:o})=>[n("wget")]),tab0:a(({value:e,isActive:o})=>[b]),tab1:a(({value:e,isActive:o})=>[m]),_:1}),B])}const _=c(k,[["render",g],["__file","zsh.html.vue"]]),D=JSON.parse('{"path":"/posts/Linux/zsh.html","title":"更优雅强大的终端ZSH","lang":"zh-CN","frontmatter":{"title":"更优雅强大的终端ZSH","icon":"hk-zsh","subtitle":"Linux","date":"2019-07-24T00:00:00.000Z","star":true,"category":["Linux"],"tag":["terminal","Linux"],"description":"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的 这里介绍一个更强大的终端神器 目录 背景介绍 在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算. shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)...","head":[["meta",{"property":"og:url","content":"https://weijodan.top/posts/Linux/zsh.html"}],["meta",{"property":"og:site_name","content":"Mr.子冥"}],["meta",{"property":"og:title","content":"更优雅强大的终端ZSH"}],["meta",{"property":"og:description","content":"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的 这里介绍一个更强大的终端神器 目录 背景介绍 在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算. shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.ax1x.com/2019/11/15/MarNhq.md.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T09:19:33.000Z"}],["meta",{"property":"article:author","content":"子冥"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2019-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T09:19:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更优雅强大的终端ZSH\\",\\"image\\":[\\"https://s2.ax1x.com/2019/11/15/MarNhq.md.png\\"],\\"datePublished\\":\\"2019-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T09:19:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"子冥\\",\\"url\\":\\"https://weijodan.top\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"安装 oh my zsh","slug":"安装-oh-my-zsh","link":"#安装-oh-my-zsh","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]},{"level":2,"title":"效果图","slug":"效果图","link":"#效果图","children":[{"level":3,"title":"卸载 oh my zsh","slug":"卸载-oh-my-zsh","link":"#卸载-oh-my-zsh","children":[]}]}],"git":{"createdTime":1729243173000,"updatedTime":1729243173000,"contributors":[{"name":"weijordan","email":"12012972+weijordan@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"posts/Linux/zsh.md","localizedDate":"2019年7月24日","excerpt":"<blockquote>\\n<p>MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的</p>\\n<p>这里介绍一个更强大的终端神器</p>\\n</blockquote>\\n<h2>目录</h2>\\n\\n<h2>背景介绍</h2>\\n<p>在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算.</p>\\n<p>shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)</p>\\n<p>然后 shell 解析这种命令再反馈给内核去执行一系列操作.</p>\\n<p>zsh 和 shell 有什么关系呢?</p>","autoDesc":true}');export{_ as comp,D as data};
