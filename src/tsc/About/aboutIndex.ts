import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGears } from '@fortawesome/free-solid-svg-icons';

library.add(faGears);
dom.watch();

let AbTemplate = document.createElement('template');
AbTemplate.innerHTML = `
<div class="about-container">
    <i class="fa-solid fa-gears"></i>
    <h2>PAGE IS UNDER DEVELOPMENT</h2>
</div>
`

export class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(AbTemplate.content.cloneNode(true));
    }
}

customElements.define('about-page', Home);