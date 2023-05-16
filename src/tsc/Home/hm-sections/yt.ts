import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube);
dom.watch();

//animations
import anime from "animejs/lib/anime.es";

//for the observer Api
import { observer } from "../../observerApi";

let Template_5 = document.createElement("template");
Template_5.innerHTML = `
<div class="yt-section-container">
    <div class="yt-section--header">
        <h1 class="animate-from-left animate-h1">GET THE FULL WORSHIP EXPERIENCE</h1>
    </div>
    <div class="yt-grid-container ">
        <div class="yt-grid--link">
            <div class="yt-grid--link_header animate-from-top"><h2>JOIN US ON YOUTUBE</h2></div>
            <div class="yt-grid--link_holder animate-from-top"><a href="https://www.youtube.com/@ndejjecollective"><i class="fa-brands fa-youtube"></i></a></div>
        </div>
        <div class="yt-grid--images">
            <div class="yt-grid--img yt-grid--img_1 animate-from-left"></div>
            <div class="yt-grid--img yt-grid--img_2 animate-from-right"></div>
            <div class="yt-grid--img yt-grid--img_3 animate-from-left"></div>
        </div>
    </div>
</div>
`;

export class Yt extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_5.content.cloneNode(true));

    this.observeApiChanges();

    setTimeout((this.animationJs), 1000)
  }

  observeApiChanges() {
    const animation_elements = document.querySelectorAll(
      ".animate-from-left, .animate-from-right, .animate-from-top, .animate"
    );

    //to make sure the observer is observing the elements
    for (let i = 0; i < animation_elements.length; i++) {
      const el = animation_elements[i];
      observer.observe(el);
    }
  }

  animationJs() {
    // Wrap every letter in a span
    var textWrapper: any = document.querySelector(".animate-h1");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".animate-h1 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: ".animate-h1 .letter",
        translateX: [0, -30],
        opacity: [1, 1],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  }
}

customElements.define("hm-yt", Yt);
