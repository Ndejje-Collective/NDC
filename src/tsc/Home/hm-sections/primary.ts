//for the observer api
import { observer } from "../../observerApi";

//animations
import anime from "animejs/lib/anime.es";

let Template_4 = document.createElement("template");
Template_4.innerHTML = `
<div class="primary-bg-container">

    <div class="pri-bg"><div>

    <div class="primary-container">
        <div class="primary-bg--header">WHO WE ARE</div>
        <p class="pri-bg--text animate-from-top">Ndejje collective</p>
        <p class="pri-bg--text animate-from-top">The people God has chosen</p>

        <div class="primary-container--top">
            <div class="pri-container--top--img_left"></div>
            <div class="pri-container--top-text_right">
                <p class="animate-from-right">We are a group of believers who share a common vision of using our talents to serve God and the world around us. Ndejje Collective was founded in October 2020 during the COVID-19 lockdown by a group of Ndejje high school friends who were involved in the Heavenward Band, CHASU choir and scripture Union at Ndejje SS.</p>
            </div>
        </div>
        <div class="primary-container--bottom">
            <div class="pri-container--bottom--text_left">
                <p class="animate-from-left">Our desire is to continue our fellowship together virtually and physically led us to start this organization which is primarily music-based. As a community of believers, we are commited to using our gifts to serve God and others. We provide opportuunities for growth, fellowship and service, and seek to inspire others to use their talents to make a difference in the world.</p>
            </div>
            <div class="pri-container--bottom--img_right"></div>
        </div>
    </div>
</div>
`;

export class Primary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_4.content.cloneNode(true));

    this.observeApiChanges();

    this.animationJs();
  }

  observeApiChanges() {
    const animation_elements = document.querySelectorAll(
      ".animate-from-top, .animate-from-left, .animate-from-right, .animate"
    );

    //to make sure the observer is observing the elements
    for (let i = 0; i < animation_elements.length; i++) {
      const el = animation_elements[i];
      observer.observe(el);
    }
  }

  animationJs() {
    var textWrapper: any = document.querySelector(".p1 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".p1 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 250,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".p1",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }
}

customElements.define("hm-primary", Primary);
