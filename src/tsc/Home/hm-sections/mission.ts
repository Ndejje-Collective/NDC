import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

library.add(faQuoteLeft, faQuoteRight);
dom.watch();

import { observer } from '../../observerApi'

let Template_3 = document.createElement("template");
Template_3.innerHTML = `
<div class="mission-container">
    <div class="mission--text">
        <h1 class="animate-from-left">MISSION</h1>
        <p class="animate-from-left">To create a community of believers who are passionate about music and dedicated to spreading the message of God's love through their talents and skills. We aim to provide opportunities for growth, fellowship, and service, and to inspire others to use their gifts to serve the world around them.</p>
        <p class="mission--text-2 animate-from-left"><i class="fa-solid fa-quote-left"></i> I will praise you as long as I live, and in your name I will lift up my hands <i class="fa-solid fa-quote-right"></i> - Psalms 63:4</p>
    </div>
</div>
`;

export class Mission extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_3.content.cloneNode(true));

    this.observeApiChanges();
  }

  observeApiChanges() {
    const animation_elements = document.querySelectorAll(
      ".animate-from-left, .animate"
    );

    //to make sure the observer is observing the elements
    for (let i = 0; i < animation_elements.length; i++) {
      const el = animation_elements[i];
      observer.observe(el);
    }
  }
}
customElements.define("hm-mission", Mission);
