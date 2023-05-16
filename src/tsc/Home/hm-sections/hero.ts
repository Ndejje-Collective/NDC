import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube);
dom.watch();

//for the observer api
import { observer } from "../../observerApi";

//animations
import anime from "animejs/lib/anime.es";

let Template_2 = document.createElement("template");
Template_2.innerHTML = `
<div class="hero-container">
    <div class="hero--content">
        <div class="hero--content_text">
            <h1 class="hero--header animate-from-left">NDEJJE COLLECTIVE <br> COMMUNITY</h1>
            <br>
            <h2 class="animate-from-left">COMING TOGETHER FOR <br> THE CAUSE OF <br> FELLOWSHIP</h2>
        </div>
        <button class="hero--content_btn">JOIN NOW</button>
    </div>

    <div class="hero--overlay--container">
        <p>Fellowship with us every <em>Thursday</em> and <em>Friday</em></p>
        <p>Live on youtube <a href="https://www.youtube.com/@ndejjecollective"><i class="fa-brands fa-youtube"></i></a></p>
    </div>
</div>
`;

export class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_2.content.cloneNode(true));

    this.observeApiChanges();

    setTimeout((this.animationJs), 1000);
  }

  observeApiChanges() {
    const animation_elements = document.querySelectorAll('.animate-from-left, .animate');

    for(let i = 0; i < animation_elements.length; i++) {
        const el = animation_elements[i];

        observer.observe(el)
    }
  }

  animationJs() {
    // Wrap every letter in a span
    var textWrapper: any = document.querySelector(".hero--header");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".hero--header .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".hero--header",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }
}

customElements.define("hm-hero", Hero);
