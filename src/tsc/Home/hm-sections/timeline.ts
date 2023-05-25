//animations
import anime from "animejs/lib/anime.es";

//for the observer Api
import { observer } from "../../observerApi";

let Template_7 = document.createElement("template");
Template_7.innerHTML = `
<div class="timeline-section">
    <div class="timeline--header"><h1 id="timeline-head" class="animate-from-left">KEEP UP TO DATE</h1></div>

    <div class="timeline-container">
        <div class="timeline-bubble-sections">
            <div class="timeline timeline-bubble--left">
                <div class="timeline-bubble-content timeline-bubble--left_content animate-from-top">
                    <h2>12th/01/23</h2>
                    <p>We promised you last year to do an all music worship experience and <a href="https://youtu.be/ZydcSM9NJ-Y">here</a> it is. Be blessed as you watch and take part. We brought as many generations of Ndejjeans as we could for this one. Like, comment and share.</p>
                </div>
            </div>
            <div class="timeline timeline-bubble--right">
                <div class="timeline-bubble-content timeline-bubble--right_content animate-from-top">
                    <h2>20th/1/23</h2>
                    <p>Once again we bring to you the Ndejje Collective online fellowship happening right <a href="https://youtu.be/1akx62BbSLY">here</a> on our YouTube channel on Tuesday 17th January at 5pm. You do not want to miss out because we have a lot packed and prepared for you.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export class Timeline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(Template_7.content.cloneNode(true));

    this.observeApiChanges();
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
}

customElements.define("hm-timeline", Timeline);
