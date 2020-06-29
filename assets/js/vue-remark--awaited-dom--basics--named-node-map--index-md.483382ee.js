(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},917:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(695),o=r(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:r[e]=function(){return s[e]}}))},u=o.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"NamedNodeMap"};var m=function(e){e.options[c]&&(e.options[c]=l),o.a.util.defineReactive(e.options,c,l),e.options.computed=u.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"namednodemap"}},[r("a",{attrs:{href:"#namednodemap","aria-hidden":"true"}},[e._v("#")]),e._v("NamedNodeMap")]),r("div",{staticClass:"overview"},[e._v("The "),r("code",[r("strong",[e._v("NamedNodeMap")])]),e._v(" interface represents a collection of "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" objects. Objects inside a "),r("code",[e._v("NamedNodeMap")]),e._v(" are not in any particular order, unlike "),r("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[r("code",[e._v("NodeList")])]),e._v(", although they may be accessed by an index as in an array.")]),r("div",{staticClass:"overview"},[e._v("A "),r("code",[e._v("NamedNodeMap")]),e._v(" object is "),r("em",[e._v("live")]),e._v(" and will thus be auto-updated if changes are made to its contents internally or elsewhere.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("ul",{staticClass:"items properties"},[r("li",[r("a",{attrs:{href:""}},[e._v("length")]),r("div",[e._v("Returns the amount of objects in the map.")])])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("ul",{staticClass:"items methods"},[r("li",[r("a",{attrs:{href:""}},[e._v("getNamedItem()")]),r("div",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(", corresponding to the given name.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("getNamedItemNS()")]),r("div",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" identified by a namespace and related local name.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("item()")]),r("div",[e._v("Returns the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" at the given index, or "),r("code",[e._v("null")]),e._v(" if the index is higher or equal to the number of nodes.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("removeNamedItem()")]),r("div",[e._v("Removes the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" identified by the given map.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("removeNamedItemNS()")]),r("div",[e._v("Removes the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" identified by the given namespace and related local name.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("setNamedItem()")]),r("div",[e._v("Replaces, or adds, the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" identified in the map by the given name.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("setNamedItemNS()")]),r("div",[e._v("Replaces, or adds, the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(" identified in the map by the given namespace and related local name.")])])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof d&&d(f),"function"==typeof m&&m(f);t.default=f.exports}}]);