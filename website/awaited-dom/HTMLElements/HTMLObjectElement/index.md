# HTMLObjectElement

<div class='overview'>The <strong><code>HTMLObjectElement</code></strong> interface provides special properties and methods (beyond those on the <a href="/en-US/docs/Web/API/HTMLElement" title="The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."><code>HTMLElement</code></a> interface it also has available to it by inheritance) for manipulating the layout and presentation of <a href="/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a> element, representing external resources.</div>

## Properties

<ul class="items properties">
  <li>
    <a href="">align</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are <code>"left"</code>, <code>"right"</code>, <code>"justify"</code>, and <code>"center"</code>.</div>
  </li>
  <li>
    <a href="">archive</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-archive">archive</a></code> HTML attribute, containing a list of archives for resources for this object.</div>
  </li>
  <li>
    <a href="">border</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-border">border</a></code> HTML attribute, specifying the width of a border around the object.</div>
  </li>
  <li>
    <a href="">code</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing the name of an applet class file, containing either the applet's subclass, or the path to get to the class, including the class file itself.</div>
  </li>
  <li>
    <a href="">codeBase</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-codebase">codebase</a></code> HTML attribute, specifying the base path to use to resolve relative URIs.</div>
  </li>
  <li>
    <a href="">codeType</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-codetype">codetype</a></code> HTML attribute, specifying the content type of the data.</div>
  </li>
  <li>
    <a href="">contentDocument</a>
    <div>Returns a <a href="/en-US/docs/Web/API/Document" title="The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."><code>Document</code></a> representing the active document of the object element's nested browsing context, if any; otherwise <code>null</code>.</div>
  </li>
  <li>
    <a href="">contentWindow</a>
    <div>Returns a <a class="new" href="/en-US/docs/Web/API/WindowProxy" rel="nofollow" title="The documentation about this has not yet been written; please consider contributing!"><code>WindowProxy</code></a> representing the window proxy of the object element's nested browsing context, if any; otherwise <code>null</code>.</div>
  </li>
  <li>
    <a href="">data</a>
    <div>Returns a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-data">data</a></code> HTML attribute, specifying the address of a resource's data.</div>
  </li>
  <li>
    <a href="">declare</a>
    <div>Is a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-declare">declare</a></code> HTML attribute, indicating that this is a declaration, not an instantiation, of the object.</div>
  </li>
  <li>
    <a href="">form</a>
    <div>Retuns a <a href="/en-US/docs/Web/API/HTMLFormElement" title="The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements."><code>HTMLFormElement</code></a> representing the object element's form owner, or null if there isn't one.</div>
  </li>
  <li>
    <a href="">height</a>
    <div>Returns a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-height">height</a></code> HTML attribute, specifying the displayed height of the resource in CSS pixels.</div>
  </li>
  <li>
    <a href="">hspace</a>
    <div>Is a <code>long</code> representing the horizontal space in pixels around the control.</div>
  </li>
  <li>
    <a href="">name</a>
    <div>Returns a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-name">name</a></code> HTML attribute, specifying the name of the browsing context.</div>
  </li>
  <li>
    <a href="">standby</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-standby">standby</a></code> HTML attribute, specifying a message to display while the object loads.</div>
  </li>
  <li>
    <a href="">type</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-type">type</a></code> HTML attribute, specifying the MIME type of the resource.</div>
  </li>
  <li>
    <a href="">useMap</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-usemap">usemap</a></code> HTML attribute, specifying a <a href="/en-US/docs/Web/HTML/Element/map" title="The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."><code>&lt;map&gt;</code></a> element to use.</div>
  </li>
  <li>
    <a href="">validationMessage</a>
    <div>Returns a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (<code>willValidate</code> is <code>false</code>), or it satisfies its constraints.</div>
  </li>
  <li>
    <a href="">validity</a>
    <div>Returns a <a href="/en-US/docs/Web/API/ValidityState" title="The ValidityState interface represents the validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid."><code>ValidityState</code></a> with the validity states that this element is in.</div>
  </li>
  <li>
    <a href="">vspace</a>
    <div>Is a <code>long</code> representing the horizontal space in pixels around the control.</div>
  </li>
  <li>
    <a href="">width</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> that reflects the <code><a href="/en-US/docs/Web/HTML/Element/object#attr-width">width</a></code> HTML attribute, specifying the displayed width of the resource in CSS pixels.</div>
  </li>
  <li>
    <a href="">willValidate</a>
    <div>Returns a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> that indicates whether the element is a candidate for constraint validation. Always <code>false</code> for <code>HTMLObjectElement</code> objects.</div>
  </li>
</ul>

## Methods

<ul class="items methods">
  <li>
    <a href="">checkValidity()</a>
    <div>Retuns a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a> that always is <code>true</code>, because <code>object</code> objects are never candidates for constraint validation.</div>
  </li>
  <li>
    <a href="">reportValidity()</a>
    <div>Returns true if the element's value has no validity problems; otherwise, returns false, fires an invalid event at the element, and (if the event isn't canceled) reports the problem to the user.</div>
  </li>
  <li>
    <a href="">setCustomValidity()</a>
    <div>Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.</div>
  </li>
</ul>

## Events