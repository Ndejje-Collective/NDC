import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGears } from '@fortawesome/free-solid-svg-icons';

library.add(faGears);
dom.watch();

let BgTemplate = document.createElement('template');
BgTemplate.innerHTML = `
<div class="blog-container">
    <i class="fa-solid fa-gears"></i>
    <h2>PAGE IS UNDER DEVELOPMENT</h2>
</div>
`;

export class Blog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(BgTemplate.content.cloneNode(true));
    }
}

customElements.define('blog-page', Blog);