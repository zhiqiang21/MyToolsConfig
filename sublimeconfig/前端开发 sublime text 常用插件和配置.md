# 前端开发sublimeconfig

###mac配置

此文件目录中文件主要是关于`sublime`的插件配置，快捷键配置，主题和字体配置。

###插件列表
所有插件都可以使用Package Control安装，具体的安装方法可以自行谷歌安装，不在本文的介绍范围之内。也可以是使用git 手动安装。


###1.[autoprefixer](https://github.com/sindresorhus/sublime-autoprefixer)
该插件主要使编写css更加的方便和快捷，可以配置快捷键给标签属性添加浏览器厂商前缀。安装前需要确定电脑安装`node`。

配置快捷键如下：
```
    //autoprefixer快捷键设置
    { "keys": ["command+alt+p"], "command": "autoprefixer" }
```
具体配置和文档请参看[官方文档](https://github.com/sindresorhus/sublime-autoprefixer)

比如我在编写 CSS 的时候是不用关心哪些属性是需要添加厂商前缀的，当我需要保存测试的时候，只需要按下快捷键，该插件会自动给需要添加厂商前缀的属性添加前缀，如下：

```css
{
	display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -webkit-flex-flow: row;
    -ms-flex-flow: row;
    flex-flow: row;
}
```

当然该插件也可以加入到自己开发项目的自动化工具中去，比如：Gulp ，Grunt

###2.[babel](https://babeljs.io/)
ES6终将是要取代 ES5 的但是在从 ES5 到 ES6 过度的过程中，各个浏览器厂商对 ES6 支持的也不是很好。
主要是将ES6的代码编译为ES5。至于为什么要这么做，不是本文的内容，可以自行谷歌了解。


###3.[Better Completion](https://github.com/Pleasurazy/Sublime-Better-Completion)
javascript ,jQuery , Bootstrap 等js库的自动补全。该插件的特点就是可以自定义配置需要自动补全的库。

安装完以后它的配置文件可以配置自己需要补全的库

```
{
  // --------------------
  // sublime-better-completions-Package (sbc package)
  // --------------------
  // API files is contains the *keyword* such as `html`, `jquery`, `myglossary` with lowercase as filename `sbc-api-${filename}.sublime-settings` place in `/packages/User/` (your own) or `/packages/${this-package}/sublime-completions/` (package build-in).
  // After you enable, disable or added new your own completions, you might need restart your Sublime Text Editor.
  //
  // Your own setting file `sbc-setting.sublime-settings` need to place in `/packages/User/` and contains all your api setting property that you want to enable.
  //
  // --------------------
  // APIs Setup
  // --------------------
  // `true` means enable it.
  // `false` means disable it.
  "completion_active_list": {
    // build-in completions
    "css-properties": false,
    "gruntjs-plugins": false,
    "html": false,
    "lodash": false,
    "javascript": false,
    "jquery": false,
    "jquery-sq": false, // Single Quote
    "php": false,
    "phpci": false,
    "sql": false,
    "twitter-bootstrap": false,
    "twitter-bootstrap-less-variables": false,
    "twitter-bootstrap3": false,
    "twitter-bootstrap3-sass-variables": false,
    "underscorejs": false,
    "react": false,

    // Your own completions?
    // ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sbc-api-my-angularjs.sublime-settings
    "my-angularjs": false,

    // ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sbc-api-my-glossary.sublime-settings
    "my-glossary": false,

    // ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sbc-api-my-html.sublime-settings
    "my-html": false,

    // ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/sbc-api-my-javascript.sublime-settings
    "my-javascript": false
  }
}
```


###4.[BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
括号高亮匹配插件。
借用一张官网的截图：
![这里写图片描述](http://img.blog.csdn.net/20160107111243820)

###5.[Color Highlighter](https://github.com/Monnoroch/ColorHighlighter)
该插件可以显示在CSS文件中说使用的颜色的色值。包括HTML中嵌套的css样式也可以显示。
如下图：
![这里写图片描述](http://img.blog.csdn.net/20160107111921207)

还可以调节显示的样式，比如当我鼠标放到颜色上的时候

![这里写图片描述](http://img.blog.csdn.net/20160107112235677)

具体的可以参考官网的说明。

###6.[css3](https://github.com/y0ssar1an/CSS3)
该插件可以对css3属性进行高亮和自动补全。
具体效果如下：

![这里写图片描述](http://img.blog.csdn.net/20160107112708630)

安装完以后的设置如下：
>View → Syntax → Open all with current extension as... → CSS3


###7.[DocBlockr](https://github.com/spadgos/sublime-jsdocs)
这个插件可以非常智能对js文件添加注释,这个非常的方便。
参考一张官网的截图：

![截图](http://img.blog.csdn.net/20160107112942174)

###8.[Emmet](https://github.com/emmetio/emmet)
传说中快速的编写html代码的“神器”。具体的就不再介绍了。网上的教程一搜一大坨啊。


###9.[FileDiffs](https://github.com/colinta/SublimeFileDiffs)
文件差异对比插件。


###10.[html-css-jsprettify](https://github.com/victorporof/Sublime-HTMLPrettify)
之前格式化 js，css 文件使用的都是 JsFormat 和 CSSFormat。每次在不同的文件中都要去使用两个不同的插件。后来找到一个可以支持三种语言格式化的插件。

对Html，css，js文件进行格式化。

```
    //html-css-jsprettify插件快捷键
    {"keys": ["command+alt+l"],"command": "htmlprettify"},
```

###11.[jade](https://github.com/davidrios/jade-tmbundle)
如果平时模板语言使用 jade 的话还是安装一个吧，这个可以让 Sublime 的显示更加的友好。jade相关插件，代码高亮


###12.[javascript next - ES6 syntax](https://github.com/Benvie/JavaScriptNext.tmLanguage)
javascript ES6 语法高亮的支持。


###13.[jQuery](https://github.com/SublimeText/jQuery)
这个插件主要包括 jQuery 语法高亮，代码段。

###14.[Sass]()和[SCSS]()
这两个插件主要是平时使用 scss 或者是 sass 这些预编译语言有用，支持语法高亮。

###工具插件

####1.[SFTP]()
这个插件还是很有用的。当我们在跟后端联调的时候，通常都会有一台开发机，暂时存放我们的代码，这个时候如果我们要做一些修改。通常的步骤是：
1.上传 svn  2.登上开发机  svn up 一下。这个过程中很浪费时间

如果我们使用 SFTP 插件就可以保存的时候自动上传到服务器。配置方法：
1.在项目根目录建立  `sftp-config.json` 文件
2.配置该文件，详细配置如下图

![这里写图片描述](http://img.blog.csdn.net/20160107114810714)

####2.[SideBarEnhancements]()和[SideBarFolders]()
Sublime 侧边栏增强插件。
![这里写图片描述](http://img.blog.csdn.net/20160107115019872)

####3.[SublimeCodeIntel]()
语法，函数跳转。但是我在使用的过程中觉得这个插件并不怎么好用。

####4.[Markdown Extended](https://github.com/jonschlinkert/sublime-markdown-extended)
这个插件主要使 Sublime 对 markdown 语法的高亮支持。效果如下图：

![这里写图片描述](http://img.blog.csdn.net/20160107114054544)

####5.[TrailingSpaces]()
去除代码末尾的空格键

###语法检查插件列表

####1.[SublimeLinter]()
安装完以后需要，另外安装需要检测语言的插件。

####2.[SublimeLinter-jshint]()
在安装完`SublimeLinter` 后安转该插件对 JavaScript 语言进行语法检测。

####3.[SublimeLinter-csslint]()
在安装完`SublimeLinter` 后安转该插件对 css 语言进行语法检测。

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


----------
**如果您觉得不错，请访问 github（[点我](https://github.com/zhiqiang21/blog)） 地址给我一颗星。谢谢啦！**
