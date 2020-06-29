(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},847:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(695),i=r(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},l=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:r[e]=function(){return s[e]}}))},c=i.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",h={excerpt:null,title:"HTMLTableRowElement"};var d=function(e){e.options[v]&&(e.options[v]=h),i.a.util.defineReactive(e.options,v,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"htmltablerowelement"}},[r("a",{attrs:{href:"#htmltablerowelement","aria-hidden":"true"}},[e._v("#")]),e._v("HTMLTableRowElement")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("HTMLTableRowElement")])]),e._v(" interface provides special properties and methods (beyond the "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLElement",title:"The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."}},[r("code",[e._v("HTMLElement")])]),e._v(" interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("ul",{staticClass:"items properties"},[r("li",[r("a",{attrs:{href:""}},[e._v("align")]),r("div",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing an enumerated value reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/tr#attr-align"}},[e._v("align")])]),e._v(" attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are "),r("code",[e._v('"left"')]),e._v(", "),r("code",[e._v('"right"')]),e._v(", and "),r("code",[e._v('"center"')]),e._v(".")])]),r("li",[r("a",{attrs:{href:""}},[e._v("bgColor")]),r("div",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing the background color of the cells. It reflects the obsolete "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/tr#attr-bgcolor"}},[e._v("bgcolor")])]),e._v(" attribute.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("cells")]),r("div",[e._v("Returns a live "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLCollection",title:"The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list."}},[r("code",[e._v("HTMLCollection")])]),e._v(" containing the cells in the row. The "),r("code",[e._v("HTMLCollection")]),e._v(" is live and is automatically updated when cells are added or removed.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("ch")]),r("div",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing one single character. This character is the one to align all the cell of a column on. It reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/tr#attr-char"}},[e._v("char")])]),e._v(" and default to the decimal points associated with the language, e.g. "),r("code",[e._v("'.'")]),e._v(" for English, or "),r("code",[e._v("','")]),e._v(" for French. This property was optional and was not very well supported.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("chOff")]),r("div",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by "),r("code",[e._v("HTMLTableRowElement.ch")]),e._v(". This property was optional and was not very well supported.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("rowIndex")]),r("div",[e._v("Returns a "),r("code",[e._v("long")]),e._v(" value which gives the logical position of the row within the entire table. If the row is not part of a table, returns "),r("code",[e._v("-1")]),e._v(".")])]),r("li",[r("a",{attrs:{href:""}},[e._v("sectionRowIndex")]),r("div",[e._v("Returns a "),r("code",[e._v("long")]),e._v(" value which gives the logical position of the row within the table section it belongs to. If the row is not part of a section, returns "),r("code",[e._v("-1")]),e._v(".")])]),r("li",[r("a",{attrs:{href:""}},[e._v("vAlign")]),r("div",[e._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/tr#attr-valign"}},[e._v("valign")])]),e._v(" attribute and can have one of the following values: "),r("code",[e._v('"top"')]),e._v(", "),r("code",[e._v('"middle"')]),e._v(", "),r("code",[e._v('"bottom"')]),e._v(", or "),r("code",[e._v('"baseline"')]),e._v(".")])])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("ul",{staticClass:"items methods"},[r("li",[r("a",{attrs:{href:""}},[e._v("deleteCell()")]),r("div",[e._v("Removes the cell at the given position in the row. If the given position is greater (or equal as it starts at zero) than the amount of cells in the row, or is smaller than "),r("code",[e._v("0")]),e._v(", it raises a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with the "),r("code",[e._v("IndexSizeError")]),e._v(" value.")])]),r("li",[r("a",{attrs:{href:""}},[e._v("insertCell()")]),r("div",[e._v("Inserts a new cell just before the given position in the row. If the given position is not given or is "),r("code",[e._v("-1")]),e._v(", it appends the cell to the row. If the given position is greater (or equal as it starts at zero) than the amount of cells in the row, or is smaller than "),r("code",[e._v("-1")]),e._v(", it raises a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with the "),r("code",[e._v("IndexSizeError")]),e._v(" value. Returns a reference to a "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLTableCellElement"}},[e._v("HTMLTableCellElement [en-US]")]),e._v(".")])])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);t.default=f.exports}}]);