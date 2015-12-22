# 前端开发sublimeconfig

###mac配置

此文件目录中文件主要是关于`sublime`的插件配置，快捷键配置，主题和字体配置。

###插件列表
所有插件都可以使用Package Control安装，具体的安装方法可以自行谷歌安装，不在本文的
介绍范围之内。也可以是使用git 手动安装。


###1.[autoprefixer](https://github.com/sindresorhus/sublime-autoprefixer)
该插件主要使编写css更加的方便，可以通过快捷键给标签属性添加浏览器厂商前缀。安装前需
要确定电脑安装`node`。

配置快捷键如下：

```
    //autoprefixer快捷键设置
    { "keys": ["command+alt+p"], "command": "autoprefixer" }
```
具体配置和文档请参看[官方文档](https://github.com/sindresorhus/sublime-autoprefixer)


###2.[babel](https://babeljs.io/)
主要是将ES6的代码编译为ES5。至于为什么要这么做，不是本文的内容，可以自行谷歌了解。


###3.[Better Completion](https://github.com/Pleasurazy/Sublime-Better-Completion)
javascript ,jQuery , Bootstrap 等js库的自动补全。该插件的特点就是可以自定义配置需要自动
补全的库。


###4.[BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
括号高亮匹配插件。


###5.[Color Highlighter](https://github.com/Monnoroch/ColorHighlighter)
该插件可以显示在CSS文件中说使用的颜色的色值。包括HTML中嵌套的css样式也可以显示。


###6.[css3](https://github.com/y0ssar1an/CSS3)
该插件可以对css3属性进行高亮和自动补全。


###7.[DocBlockr](https://github.com/spadgos/sublime-jsdocs)
这个插件可以非常智能对js文件添加注释


###8.[Emmet](https://github.com/emmetio/emmet)
快速的编写html代码


###9.[FileDiffs](https://github.com/colinta/SublimeFileDiffs)
文件差异对比


###10.[html-css-jsprettify](https://github.com/victorporof/Sublime-HTMLPrettify)
对Html，css，js文件进行格式化

```
    //html-css-jsprettify插件快捷键
    {"keys": ["command+alt+l"],"command": "htmlprettify"},
```

###11.[jade](https://github.com/davidrios/jade-tmbundle)
jade相关插件，代码高亮


###12.[javascript next - ES6 syntax](https://github.com/Benvie/JavaScriptNext.tmLanguage)
javascript ES6 语法高亮的支持


###13.[jQuery](https://github.com/SublimeText/jQuery)
对jQuery语法的补全和高亮


###14.[Sass]()


###15.[SCSS]()


###工具插件

####1.[SFTP]()


####2.[SideBarEnhancements]()


####3.[SideBarFolders]()


####4.[SublimeCodeIntel]()


####5.[Markdown Extended](https://github.com/jonschlinkert/sublime-markdown-extended)
sublime支持Markdown语法的高亮


####6.[TrailingSpaces]()
去除代码末尾的空格键

###语法加插插件列表

####1.[SublimeLinter]()


####2.[SublimeLinter-jshint]()

####3.[SublimeLinter-csslint]()

####4.[SublimeLinter-contrib-scss-lint]()


###主题插件

####1.[Theme-soda](http://buymeasoda.github.io/soda-theme/)
该插件主要能够使sublime 兼容mac的retina屏幕

*需要在自己的配置文件内启动*
```
{
    "theme": "Soda Light 3.sublime-theme"
}
```
####2.[Monokai Extended](https://github.com/jonschlinkert/sublime-monokai-extended)


