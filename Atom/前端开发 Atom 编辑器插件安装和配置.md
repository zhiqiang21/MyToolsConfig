
#前端开发 Atom 编辑器插件安装和配置

### 1.启动速度
启动速度是大家唯一吐槽 Atom 的地方吧。不过到现在的1.6.0版本的时候，我觉得已经比刚发布的时候好多了。
原生提供了命令来测试自己的启动消耗时间：

使用方式如下：
`cmd+shift+p`打开命令面板，然后输入 `timecope：view`
![qq20160319-0](https://cloud.githubusercontent.com/assets/3990411/13898574/a0782996-ee10-11e5-9f1d-9fd25421d261.png)

命令就会出现下面的结果,可以查看启动时间和安装插件的加载时间:
![qq20160319-1 2x](https://cloud.githubusercontent.com/assets/3990411/13898576/a1cc7d10-ee10-11e5-8607-0429d3e21a59.png)





### 2.插件列表和使用方法：
使用 `apm list`可以查看自己安装的插件和 Atom 默认自己安装的插件。我这里注重介绍我自己安装的插件

#### 1.自动补全
**atom-ternjs**----JavaScript 自动补全插件还可以配置语言版本和脚本库

**autocomplete-modules**----自动补全模块，提供下文的语义补全

**autocomplete-paths**----路径补全，比如下找到某个图片的位置

**autocomplete-python**----python 语法自动补全

**autocomplete-sass**----sass 语法自动补全

**javascript-snippets**----JavaScript 代码段

**jquery-snippets**----jQuery 代码段

#### 2.工具
**Remote-FTP**----本地和远程代码同步工具（暂时在我电脑上不可用）

**Sublime-Style-Column-Selection**----列选择工具（相当于 sublime 按住 alt 键拖动可以选中多列和多行的操作）

**atom-beautify**----格式化语法的工具支持的语言很多

**atom-minify**----压缩 css 和 js 文件的工具

**autoprefixer**----自动给 css 文件中的属性添加厂商前缀

**color-picker**----调色板，可以选中自己钟意的颜色，而且可以在面板中调整透明度

**docblockr**----代码注释工具，提供代码注释的模板

**emmet**----html 快速编写工具

**expand-selection-to-quotes**----可以快捷键选中引号内的内容（节省了拖动鼠标的操作）

**merge-conflicts**----顾明思议，合并冲突的工具

**project-manager**---- 强大的，快速的打开项目的插件，非常的有用

**run-in-browser**----将当前的 html 在浏览器中打开

**sync-settings**----同步自己的配置和安装的插件到 gist 。非常有用



#### 3.代码语法检查（这个对编写标准的代码非常有用）
**linter**----语法检查引擎

**jshint**----JavaScript 代码语法检测引擎

**linter-pylint**----python 代码语法检测引擎

#### 4.显示效果
**react**----对 react 语法高亮支持，并且有补全效果

**language-jade**----jade 语法高亮

**file-icons**----在目录树 tree-view 的文件前面加上响对应的 logo

**highlight-column**----高亮当前光标所在的列

**highlight-selected**----在当前编辑的文件中高亮全部匹配的单词

**minimap**----显示一个 mini 的预览代码的窗口

**pigments**----对 css 文件中使用的颜色进行响应颜色的高亮

#### 5.markdown 写作工具
**markdown-scroll-sync**----编写 markdown 可以根据写到的部位，右边预览可以实时的滚动

**markdown-table-formatter**----对 markdown 语法绘制的表格格式化
