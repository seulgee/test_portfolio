class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="top">
                <div id="container-top" class="container">
                    <div id="top-left" class="col-2-5">
                        <a class="header-link" href="/index.html"><h1 id="name">
                            <span class="header-case-change">S</span><span class="header-case-change">E</span><span class="header-case-change">U</span><span class="header-case-change">L</span><span class="header-case-change">G</span><span class="header-case-change">E</span><span class="header-case-change">E</span> <span class="header-case-change">L</span><span class="header-case-change">E</span><span class="header-case-change">E</span>
                        </h1></a>
                    </div>
                    <div id="top-right" class="col-2-5">
                        <nav class="list">
                            <div id="navigation">
                                <ul class="nav">
                                    <li><a id="about" href="/about.html">A<span class="nav-manrope">bout</span></a></li>
                                    <li><a id="design" href="/design.html">D<span class="nav-manrope">esign</span></a></li>
                                    <li><a id="tattoo" href="/tattoo.html">T<span class="nav-manrope">attoo</span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define('global-header', GlobalHeader)

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="bottom">
                <div class="container">
                    <div class="to-top">
                        <a href="#container-top"><i class="fas fa-long-arrow-alt-up"></i> Back to Top</a>
                    </div>
                </div>
                <div class="container">
                    <div class="col-2-5">
                        <p class="text-footer">&#169; 2022 Designed & Developed by Seulgee Lee</p>
                    </div>
                    <div class="col-2-5">
                        <p class="bottom-left text-footer"><a href="mailto:seulgee.work@gmail.com" target="_blank">seulgee.work@gmail.com</a></p>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('global-footer', GlobalFooter)


//navigation

var nav = $("#navigation")
var hamburger = $(".hamburger");

hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
  nav.find($("ul")).css({
      "font-size": "30px"
  })
  nav.find($("a")).css({
      "padding": "15px 0px 15px 0",
      "line-height": "30px"
  })
  nav.toggle(250);
  $("#name").toggleClass('bg-color', 300, "easeOutSine");
});

var y = window.matchMedia("(max-width: 414px)")
myFunction(y) // Call listener function at run time
y.addListener(myFunction) // Attach listener function on state changes

function myFunction(y) {
  if (y.matches){
      hamburger.show();
      nav.hide();

  } else {
      hamburger.hide();
      nav.show();
  }
};