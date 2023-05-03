import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube);
dom.watch();

let Template_5 = document.createElement('template');
Template_5.innerHTML = `
<div class="yt-section-container">
    <div class="yt-section--header"><h1>GET THE FULL WORSHIP EXPERIENCE<h1></div>
    <div class="yt-grid-container">
        <div class="yt-grid--link">
            <div class="yt-grid--link_header"><h2>JOIN US ON YOUTUBE</h2></div>
            <div class="yt-grid--link_holder"><i class="fa-brands fa-youtube"></i></div>
        </div>
        <div class="yt-grid--images">
            <div class="yt-grid--img yt-grid--img_1"></div>
            <div class="yt-grid--img yt-grid--img_2"></div>
            <div class="yt-grid--img yt-grid--img_3"></div>
        </div>
    </div>
</div>
`

export class Yt extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_5.content.cloneNode(true));
    }
}

customElements.define('hm-yt', Yt);

