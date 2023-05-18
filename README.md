# HTML components

Let's you reuse HTML components very easily, like in Vue, Nuxt, and Next. LOL!

## How to set this up:

This is what the code block will look like:

```javascript
// header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
          </ul>        
      </nav>
    `;
  }
}

// defining the stuff
customElements.define('main-header', Header);
```

You will need to change the `class Header` to `class WhateverNameYouWant`. Don't worry about this:

```javascript
connectedCallback() {
  this.innerHTML =
```

Don't change that. Just change the 

```html
<nav>            
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
    </ul>        
</nav>
```

to whatever HTML you want.

To make it callable in HTML: `<whatever-name-you-want></whatever-name-you-want>`, you need to change this:

```javascript
customElements.define('main-header', Header);
```

The `'main-header'` is what you will use to call it in HTML. Then the `Header` is the name of the class.

## MAKE SURE:

To call the JavaScript file in the `<head>` of the HTML by adding `<script src='nameOfYourJSFile'></script>`.
