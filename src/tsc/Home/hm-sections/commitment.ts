//animations
import anime from "animejs/lib/anime.es";

//for the observer Api
import { observer } from "../../observerApi";

let Template_6 = document.createElement("template");
Template_6.innerHTML = `
<div class="info--commit">
    <p class="animate-from-left">We are committed to what we do. <em>see how</em></p>
</div>
`;

export class Commitment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_6.content.cloneNode(true));

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

customElements.define("hm-commitment", Commitment);
