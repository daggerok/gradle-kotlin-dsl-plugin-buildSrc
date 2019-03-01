(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[t._v("Travis CI "),a("a",{attrs:{href:"https://travis-ci.org/daggerok/gradle-kotlin-dsl-plugin-buildSrc",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/daggerok/gradle-kotlin-dsl-plugin-buildSrc.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("GitHub "),a("a",{attrs:{href:"https://daggerok.github.iogradle-kotlin-dsl-plugin-buildSrc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pages"),a("OutboundLink")],1),t._v(" documentation")]),t._v(" "),a("li",[t._v("GitHub "),a("a",{attrs:{href:"https://github.com/daggerokgradle-kotlin-dsl-plugin-buildSrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("daggerok/gradle-kotlin-dsl-plugin-buildSrc"),a("OutboundLink")],1),t._v(" repository")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._m(18),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.gradle.org/current/userguide/custom_plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Writing Custom Plugins"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gradle/kotlin-dsl/tree/master/samples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle Kotlin DSL samples"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.gradle.org/current/userguide/kotlin_dsl.html#sec:kotlin-dsl_plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle Kotlin DSL Primer"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gradle.org/guides/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle Tutorials"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"gradle-kotlin-dsl-plugin-buildsrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-kotlin-dsl-plugin-buildsrc","aria-hidden":"true"}},[this._v("#")]),this._v(" gradle-kotlin-dsl-plugin-buildSrc")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Simple internal (located in "),s("code",[this._v("buildSrc")]),this._v(") Gradle plugin example, written in Kotlin using Gradle Kotlin DSL")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"generate-a-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-project","aria-hidden":"true"}},[this._v("#")]),this._v(" generate a project")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("gradle init --type"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("basic --dsl"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("kotlin --project-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("gradle-kotlin-dsl-plugin-buildSrc\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"create-buildsrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-buildsrc","aria-hidden":"true"}},[this._v("#")]),this._v(" create buildSrc")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p buildSrc/src/main/kotlin/com/github/daggerok/plugin\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configure-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" configure plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("create "),s("code",[this._v("buildSrc/build.gradle.kts")]),this._v(" file:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  `kotlin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dsl`\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrepositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required by kotlin-dsl plugin dependencies")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ngradlePlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n      implementationClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.daggerok.plugin.HelloPlugin"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconfigure"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KotlinDslPluginOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  experimentalWarning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plugin-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" plugin implementation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"prepare-structure-for-your-configuration-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-structure-for-your-configuration-extension","aria-hidden":"true"}},[this._v("#")]),this._v(" prepare structure for your configuration extension")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("create "),s("code",[this._v("./buildSrc/src/main/kotlin/com/github/daggerok/plugin/HelloPlugin.kt")]),this._v(" file:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" HelloExtension "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buddy"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"prepare-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" prepare plugin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" HelloPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Project"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("project"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Unit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HelloExtension"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloExtension"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      doLast "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("capitalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v(", "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("capitalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plugin-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" plugin usage")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hello\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hola"')]),t._v("\n  name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pablo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("./gradlew hello\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# output")]),this._v("\nHola, Pablo"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("!")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" resources")])}],!1,null,null,null);s.default=n.exports}}]);