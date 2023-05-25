//about hero
import './ab-sections/abHero';

//envision
import './ab-sections/envision';

//gallery 
import './ab-sections/gallery';

//intro video
import './ab-sections/introvideo';

//message
import './ab-sections/message';


let AbTemplate = document.createElement('template');
AbTemplate.innerHTML = `
<ab-hero></ab-hero>
<ab-envision></ab-envision>
<ab-gallery></ab-gallery>
<ab-video></ab-video>
<ab-message></ab-message>
`

export class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(AbTemplate.content.cloneNode(true));
    }
}

customElements.define('about-page', About);