---
title: echars带引导线的饼图
date: 2026-05-21
icon: bokeyuan
star: false
isOriginal: false
category:
  - 飞书知识库/前端/Echars可视化
tag:
  - feishu
---
ECharts 带引导线的饼图详细配置参数及解释
## 基础配置
### title（标题配置）
```javascript
title: {
    text: '饼图标题',          // 主标题文本
    subtext: '副标题',         // 副标题文本
    left: 'center',           // 水平安放位置，可以是'left', 'center', 'right'或具体像素值
    top: 'top',               // 垂直安放位置，可以是'top', 'middle', 'bottom'或具体像素值
    textStyle: {             // 标题文本样式
        color: '#333',       // 文字颜色
        fontSize: 18,        // 文字大小
        fontWeight: 'bold'   // 文字粗细
    }
}
```
### tooltip（提示框配置）
```javascript
tooltip: {
    trigger: 'item',         // 触发类型，'item'表示数据项图形触发
    formatter: '{a} <br/>{b}: {c} ({d}%)', // 提示框内容格式器
    backgroundColor: 'rgba(50,50,50,0.7)', // 提示框背景色
    borderColor: '#333',     // 提示框边框颜色
    textStyle: {             // 提示框文本样式
        color: '#fff'        // 文字颜色
    }
}
```
### legend（图例配置）
```javascript
legend: {
    type: 'scroll',          // 图例类型，'plain'普通，'scroll'可滚动
    orient: 'vertical',      // 布局方向，'vertical'垂直，'horizontal'水平
    right: 10,               // 图例组件离容器右侧的距离
    top: 'center',           // 图例组件离容器顶部的距离
    data: ['类别1', '类别2'], // 图例数据数组
    textStyle: {             // 图例文本样式
        color: '#666'        // 文字颜色
    }
}
```
## 饼图系列配置 (series)
### series（系列列表）
```javascript
series: [
    {
        name: '访问来源',     // 系列名称
        type: 'pie',         // 图表类型，固定为'pie'
        radius: ['40%', '70%'], // 饼图半径，第一个为内半径，第二个为外半径
        center: ['50%', '50%'], // 饼图中心位置
        padAngle: 5,//子项间隔
        data: [              // 数据数组
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'}
        ],
        label: {             // 饼图图形上的文本标签
            show: true,      // 是否显示标签
            formatter: '{b}: {c} ({d}%)', // 标签内容格式器
            color: '#333'    // 标签文字颜色
        },
        labelLine: {         // 标签的视觉引导线配置
            show: true,      // 是否显示引导线
            length: 10,      // 第一段引导线长度
            length2: 15,     // 第二段引导线长度
            smooth: true,    // 是否平滑曲线
            lineStyle: {     // 引导线样式
                color: '#ccc', // 颜色
                width: 1,    // 宽度
                type: 'solid' // 类型，如'solid', 'dashed', 'dotted'
            }
        },
        itemStyle: {         // 图形样式
            borderColor: '#fff', // 图形描边颜色
            borderWidth: 2    // 图形描边宽度
        },
        emphasis: {          // 高亮状态下的样式
            itemStyle: {     // 高亮状态下图形样式
                shadowBlur: 10, // 阴影模糊大小
                shadowOffsetX: 0, // 阴影水平偏移
                shadowColor: 'rgba(0, 0, 0, 0.5)' // 阴影颜色
            },
            label: {         // 高亮状态下标签样式
                show: true,
                fontWeight: 'bold'
            }
        }
    }
]
```
### 引导线详细配置 (labelLine)
```javascript
labelLine: {
    show: true,              // 是否显示视觉引导线
    length: 10,              // 第一段引导线长度，从图形边缘到引导线转折处
    length2: 15,             // 第二段引导线长度，从转折处到文字
    smooth: false,           // 是否平滑曲线
    lineStyle: {             // 引导线样式
        color: 'auto',       // 颜色，'auto'表示自动取系列色
        width: 1,            // 线宽
        type: 'solid',       // 线型
        opacity: 0.7         // 透明度
    },
    minTurnAngle: 90,        // 最小转折角度
    maxSurfaceAngle: 90,     // 最大表面角度
    alignTo: 'none',        // 标签对齐方式，'none'|'labelLine'|'edge'
    edgeDistance: '25%',     // 标签与边缘的距离
    limitSize: 100           // 引导线限制的最大尺寸
}
```
## 高级配置
### 6.1 玫瑰图效果
```javascript
roseType: 'radius',         // 'radius'面积表示数值，'area'角度表示数值
```
### 6.2 选中状态
```javascript
selectedMode: 'single',     // 选中模式，'single'|'multiple'|false
selectedOffset: 10          // 选中时扇区偏移量
```
### 6.3 动画效果
```javascript
animation: true,            // 是否开启动画
animationType: 'expansion', // 初始动画效果，'expansion'展开|'scale'缩放
animationDuration: 1000,    // 初始动画时长(毫秒)
animationEasing: 'cubicOut' // 动画缓动效果
```
## 完整示例代码
```javascript
option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            label: {
                show: true,
                formatter: '{b}: {c} ({d}%)',
                fontSize: 12
            },
            labelLine: {
                show: true,
                length: 15,
                length2: 20,
                smooth: true,
                lineStyle: {
                    width: 1,
                    color: '#999'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
```
以上是ECharts带引导线的饼图的详细配置参数及解释，您可以根据实际需求调整各项参数以达到最佳视觉效果。
