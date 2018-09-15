(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{177:function(t,s,a){"use strict";a.r(s);var n={props:["target"]},r=a(17),e=Object(r.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("首先我觉得  "),a("a",{attrs:{href:"https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.8wsejnq0u",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why I Left Gulp and Grunt for npm Scripts"),a("OutboundLink")],1),t._v(" 里说的不用 gulp 的理由基本没有道理:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("额，难道直接用 npm package 就没有这些问题吗。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("这不又是废话吗，写个插件还要把用的包的文档重新写一遍?")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("好了，原文挑剔 gulp 的理由全被扳倒了，但是其中支持 npm 的理由倒是挺有道理:")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("你并不需要在 npm scripts 里用一些很高深的命令行，很多 unix 命令是需要花很长时间学习的。像类似 rm -rf 之类的命令很容易掌握，而且也有相应的 npm 包 "),a("a",{attrs:{href:"https://github.com/isaacs/rimraf",target:"_blank",rel:"noopener noreferrer"}},[t._v("rimraf"),a("OutboundLink")],1),t._v(" 让你使用，且跨平台支持。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("你可以直接执行一个文件来完成相应的构建工作，这让你几乎能做任何 gulp 能做的事:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("因为你可能会在 npm scripts 里用一些 unix 命令，解决方案有很多，比如用 npm 包替代这些命令。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("gulp tasks 也多了以后会变得很难维护，npm scripts 也是。解决方案是推荐写精简的 script，比如一个 script 只干一件事。或者很长很复杂的话你就需要专门放到一个 JS 文件里然后再在 npm scripts 里调用了。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("你的 npm scripts:")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么用-npm-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-npm-scripts","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("为什么用 npm scripts ?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("gulp 插件质量、数量和实时性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作者抱怨 gulp 插件的质量取决于插件作者，这可以理解，"),s("strong",[this._v("但是 npm 的包同样取决于作者啊")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作者抱怨 gulp 插件的数量不如 npm，"),s("strong",[this._v("这不是废话吗")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作者抱怨 gulp 插件不能及时更新，比如 babel 6 升级了 gulp-babel 并没有立刻升级。"),s("strong",[this._v("又不是看直播，干嘛实时?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("debug 很痛苦，gulp crash 掉是因为某个插件吗还是因为版本问题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("不连贯的文档，比如 gulp-eslint 和 eslint，eslint 的文档就是 gulp 插件的文档好得多")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("npm scripts 并不需要你很擅长命令行操作")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("npm scripts 不够强大吗?")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"clean"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"rimraf ./dist && mkdir dist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"prebuild"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"npm run clean"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production webpack"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("npm scripts 甚至支持 "),s("code",[this._v("pre")]),this._v(" "),s("code",[this._v("post")]),this._v(" 这些 hook 让你在相应的一个 task 之前和之后调用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node build.js"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("npm scripts 不是跨平台的")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("可维护性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nswatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nswatch","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("nswatch")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("https://github.com/egoist/nswatch")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 npm scripts 里只执行一个构建任务你可能不需要类似 "),s("code",[this._v("gulp.watch")]),this._v(" 这样的功能，因为大部分构建工具都自带了 watch 功能，比如 "),s("code",[this._v("webpack --watch")]),this._v(" 和 "),s("code",[this._v("rollup --watch")]),this._v("，但是排除这种情况在构建多个任务的时候就不方便了。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("比如你要同时用一些 "),a("code",[t._v(".jade")]),t._v(" "),a("code",[t._v(".css")]),t._v(" "),a("code",[t._v(".js")]),t._v(" 这些文件分别编译成 "),a("code",[t._v(".html")]),t._v(" "),a("code",[t._v(".css")]),t._v(" "),a("code",[t._v(".js")]),t._v(" 文件，开发的时候怎么搞啊，怎么 watch 这些文件然后执行 rebuild 呢？好吧，你又想到了 "),a("code",[t._v("gulp")]),t._v(" 😂")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不过现在有 "),s("code",[this._v("nswatch")]),this._v(" 了，为了解决类似的需求我今早洗澡之后写的。和 "),s("code",[this._v("gulp.watch")]),this._v(" 类似，监听一些文件，不过这里是执行相应的 npm script。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build:js"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node scripts/build js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build:html"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node script/build html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build:css"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node scripts/build css"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后你可以在 "),s("code",[this._v("scripts/build.js")]),this._v(" 里用你喜欢的 npm 包，比如 rollup, jade, postcss，来编译相应文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后添加 "),s("code",[this._v("nswatch")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nswatch src/*.js --script build:js & nswatch src/*.css --script build:css  & nswatch src/*.jade --script build:html "')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于有三个任务所以写得很长，你可以把它放进单独文件 "),s("code",[this._v("scripts/watch.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" watch "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'nswatch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("watch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/*.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'build:js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("watch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/*.jade'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'build:html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("watch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./src/*.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'build:css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后执行 "),s("code",[this._v("node scripts/watch")]),this._v(" 一切都能运行了！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后你可能还是需要把 "),s("code",[this._v("node scripts/watch")]),this._v(" 写进 "),s("code",[this._v("package.json")]),this._v("，以后都用 "),s("code",[this._v("npm run watch")]),this._v(" 来执行:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node scripts/watch"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);