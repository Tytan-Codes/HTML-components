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

// main content

class mainStuff extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h1>
            Hello and welcome to my website!
        </h1>
      `;
    }
  }

// footer
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
            <p>Author: Tytan Codes is the best<br>
            <a href="mailto:spam@tytan.codes">email me</a></p>     
        </footer>     
      `;
    }
  }




// defining the stuff
customElements.define('main-stuff', mainStuff);
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);