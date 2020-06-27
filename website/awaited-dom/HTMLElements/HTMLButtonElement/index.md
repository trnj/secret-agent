# HTMLButtonElement

<div class='overview'>The <strong><code>HTMLButtonElement</code></strong> interface provides properties and methods (beyond the regular <a href="/en-US/docs/Web/API/HTMLElement" title="The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."><code>HTMLElement</code></a> interface it also has available to it by inheritance) for manipulating <a href="/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a> elements.</div>

## Properties

<ul class="items properties">
  <li>
    <a href="">autofocus</a>
    <div>Is a <a href="/en-US/docs/Web/API/Boolean" title="REDIRECT Boolean [en-US]"><code>Boolean</code></a> indicating whether or not the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.</div>
  </li>
  <li>
    <a href="">disabled</a>
    <div>Is a <a href="/en-US/docs/Web/API/Boolean" title="REDIRECT Boolean [en-US]"><code>Boolean</code></a> indicating whether or not the control is disabled, meaning that it does not accept any clicks.</div>
  </li>
  <li>
    <a href="">form</a>
    <div>Is a <a href="/en-US/docs/Web/API/HTMLFormElement" title="The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements."><code>HTMLFormElement</code></a> reflecting the form that this button is associated with. If the button is a descendant of a form element, then this attribute is the ID of that form element.<br>
 If the button is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the <code>null</code> value if none matches.</div>
  </li>
  <li>
    <a href="">formAction</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> reflecting the URI of a resource that processes information submitted by the button. If specified, this attribute overrides the <code><a href="/en-US/docs/Web/HTML/Element/form#attr-action">action</a></code> attribute of the <a href="/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a> element that owns this element.</div>
  </li>
  <li>
    <a href="">formEnctype</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> reflecting the type of content that is used to submit the form to the server. If specified, this attribute overrides the <code><a href="/en-US/docs/Web/HTML/Element/form#attr-enctype">enctype</a></code> attribute of the <a href="/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a> element that owns this element.</div>
  </li>
  <li>
    <a href="">formMethod</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> reflecting the HTTP method that the browser uses to submit the form. If specified, this attribute overrides the <code><a href="/en-US/docs/Web/HTML/Element/form#attr-method">method</a></code> attribute of the <a href="/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a> element that owns this element.</div>
  </li>
  <li>
    <a href="">formNoValidate</a>
    <div>Is a <a href="/en-US/docs/Web/API/Boolean" title="REDIRECT Boolean [en-US]"><code>Boolean</code></a> indicating that the form is not to be validated when it is submitted. If specified, this attribute overrides the <code><a href="/en-US/docs/Web/HTML/Element/form#attr-novalidate">novalidate</a></code> attribute of the <a href="/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a> element that owns this element.</div>
  </li>
  <li>
    <a href="">formTarget</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> reflecting a name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the <code><a href="/en-US/docs/Web/HTML/Element/form#attr-target">target</a></code> attribute of the <a href="/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a> element that owns this element.</div>
  </li>
  <li>
    <a href="">labels</a>
    <div>Is a <a href="/en-US/docs/Web/API/NodeList" title="NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."><code>NodeList</code></a> that represents a list of <a href="/en-US/docs/Web/HTML/Element/label" title="The HTML <label> element represents a caption for an item in a user interface."><code>&lt;label&gt;</code></a> elements that are labels for this button.</div>
  </li>
  <li>
    <a href="">name</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing the name of the object when submitted with a form. <span class="inlineIndicator htmlVer htmlVerInline"><a href="/en-US/docs/HTML/HTML5">HTML5</a></span> If specified, it must not be the empty string.</div>
  </li>
  <li>
    <a href="">type</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> indicating the behavior of the button. This is an enumerated attribute with the following possible values:
 <ul>
  <li><code>"submit"</code>: The button submits the form. This is the default value if the attribute is not specified, <span class="inlineIndicator htmlVer htmlVerInline"><a href="/en-US/docs/HTML/HTML5">HTML5</a></span> or if it is dynamically changed to an empty or invalid value.</li>
  <li><code>"reset"</code>: The button resets the form.</li>
  <li><code>"button"</code>: The button does nothing.</li>
  <li><code>"menu"</code>: The button displays a menu. <span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></li>
 </ul>
 </div>
  </li>
  <li>
    <a href="">validationMessage</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing the localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (<code>willValidate</code> is <code>false</code>), or it satisfies its constraints.</div>
  </li>
  <li>
    <a href="">validity</a>
    <div>Is a <a href="/en-US/docs/Web/API/ValidityState" title="The ValidityState interface represents the validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid."><code>ValidityState</code></a> representing the validity states that this button is in.</div>
  </li>
  <li>
    <a href="">value</a>
    <div>Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing the current form control value of the button.</div>
  </li>
  <li>
    <a href="">willValidate</a>
    <div>Is a <a href="/en-US/docs/Web/API/Boolean" title="REDIRECT Boolean [en-US]"><code>Boolean</code></a> indicating whether the button is a candidate for constraint validation. It is <code>false</code> if any conditions bar it from constraint validation, including: its <code>type</code> property is <code>reset</code> or <code>button</code>; it has a <a href="/en-US/docs/Web/HTML/Element/datalist">datalist</a> ancestor; or the <code>disabled</code> property is set to <code>true</code>.</div>
  </li>
</ul>

## Methods

<ul class="items methods">
  <li>
    <a href="">checkValidity()</a>
    <div>Not supported for reset or button elements.</div>
  </li>
  <li>
    <a href="">reportValidity()</a>
    <div>Not supported for reset or button elements.</div>
  </li>
  <li>
    <a href="">setCustomValidity()</a>
    <div>Not supported for reset or button elements.</div>
  </li>
</ul>

## Events