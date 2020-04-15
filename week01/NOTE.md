# 每周总结可以写在这里

## **目的**

系统的理解前端的知识体系和底层原理

**前端学习方法：**
一是立足标准，系统性总结和整理前端知识，建立自己的认知和方法论
二是放眼团队，从业务和工程角度思考前端团队的价值和发展需要

第一个方法：建立知识架构
知识的“目录”或者索引：把零散的知识组织起来，也能够帮助我们发现一些知识上的盲区，面试时，定位到知识架构中的位置，相关点讲出

第二个方法：追本溯源
看这个出现的背景和原因，提出他是为了解决什么或者其底层是什么，其中还可以发掘一些趣闻，便于记忆

**课程目标：**
把无法通过查阅解决的原理和背景讲清楚
不方便查阅和记忆的内容整理好

**前端知识体系：**
用一定的词法和语法，表达一定语义，从而操作运行时
数据结构
类型：JavaScript 的类型系统就是它的 7 种基本类型和 7 种语言类型
实例：内置对象部分
算法：JavaScript 的执行过程

![img](https://image-static.segmentfault.com/291/120/2911209110-5c6e4db8e79f3_articlex)

文档元信息：通常是出现在 head 标签中的元素，包含了描述文档自身的一些信息
语义相关：扩展了纯文本，表达文章结构、不同语言要素的标签；
链接：提供到文档内和文档外的链接
替换型标签：引入声音、图片、视频等外部元素替换自身的一类标签...
表单：用于填写和提交信息的一类标签；
表格：表头、表尾、单元格等表格的结构。
把 HTML 当作一门语言来了解下：语法和语言机制
补充标准：ARIA，它是 HTML 的扩展，在可访问性领域，它有至关重要的作用

![img](https://image-static.segmentfault.com/395/554/3955546216-5c6e4ea2af9e0_articlex)

![

![img](https://image-static.segmentfault.com/407/470/4074706431-5c6e50154bc9f_articlex)](https://image-static.segmentfault.com/557/296/557296083-5c6e4fa7f1aa5_articlex)

## 1.HTML语义

**定义：**
语义类标签则是纯文字的补充,eg:标题、自然段、章节、列表，这些内容都是纯文字无法表达的
**建议：**
只靠 div 和 span 就能走天下了:用于描述“软件界面”多过于“富文本”
**好处：**
1.无css时,清晰的目录结构
2.SEO
3.读屏软件,根据文章可以自动生成目录 eg:阅读视图功能

**使用场景：**
1.作为自然语言和纯文本的补充，用来表达一定的结构或者消除歧义 eg: ruby(注释)/em(重音)
2.文章标题摘要
hgroup 标签：在 hgroup 中的 h1-h6 被视为同一标题的不同组成部分

```

<hgroup>
<h1>JavaScript 对象 </h1>
<h2> 我们需要模拟类吗？</h2>
</hgroup>
<p>balah balah</p>
......
```

![clipboard.png](https://image-static.segmentfault.com/210/537/2105378195-5c6e550f3ede5_articlex)

不加hgroup

![clipboard.png](https://image-static.segmentfault.com/917/596/917596476-5c6e552481221_articlex)

section 的嵌套会使得其中的 h1-h6 下降一级,HTML5之后，只需要 section 和 h1 就足以形成文档的树形结构

```
<section>
    <h1>HTML 语义 </h1>
    <p>balah balah balah balah</p>
    <section>
        <h1> 弱语义 </h1>
        <p>balah balah</p>
    </section>
    <section>
        <h1> 结构性元素 </h1>
        <p>balah balah</p> 
    </section>
......
</section>
```

![img](https://image-static.segmentfault.com/288/833/2888334908-5c6e558f5e282_articlex)

3.适合机器阅读的整体结构
“阅读模式”，以及各种非浏览器终端的出现

```
<body>
    <header>
        <nav>
            ……
        </nav>
    </header>
    <aside>
        <nav>
            ……
        </nav>
    </aside>
    <section>……</section>
    <section>……</section>
    <section>……</section>
    <footer>
        <address>……</address>
    </footer>
</body>
```

article，报纸的多文章结构适合用 article 来组织，article为独立性质文章，article与body有相似结构，也可包含header/footer
header，如其名，通常出现在前部，表示导航或者介绍性的内容
footer，通常出现在尾部，包含一些作者信息、相关链接、版权信息
aside 表示跟文章主体不那么相关的部分，它可能包含导航、广告等工具性质的内容

## 2.HTML语义：如何运用语义类标签来呈现Wiki网页？

**实现如下wiki网页需要的标签：**
[https://en.wikipedia.org/wiki...](https://en.wikipedia.org/wiki/World_Wide_Web)
aside: 左侧侧边栏/导航性质的工具内容
article: 独立为文章主体
abbr 标签表示缩写
hr 表示故事走向的转变或者话题的转变
strong 重要，黑体
blockquote, q, cite： blockquote 表示段落级引述内容，q 表示行内的引述内容，cite 表示引述的作品名。
time 机器阅读方便
figure, figcaption 表示与主文章相关的图像、照片等流内容
dfn 被包裹的名词
pre 不需要浏览器帮我们做自动换行，不需要浏览器进行排版。
samp 计算机程序的示例输出
code 代码

**除上面用到的标签之外，还需要用到：**

![img](https://image-static.segmentfault.com/163/306/1633069173-5c6e5f1a206f5_articlex)

