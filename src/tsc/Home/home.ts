//HERO SECTION
import './hm-sections/hero';

//MISSION
import './hm-sections/mission';

//PRIMARY
import './hm-sections/primary';

//YOUTUBE SECTION
import './hm-sections/yt';

//COMMITMENT SECTION
import './hm-sections/commitment';

//TIMELINE
import './hm-sections/timeline';

//MESSAGE
import './hm-sections/message';


let HmTemplate = document.createElement('template');
HmTemplate.innerHTML = `
<hm-hero></hm-hero>
<hm-mission></hm-mission>
<hm-primary></hm-primary>
<hm-yt></hm-yt>
<hm-commitment></hm-commitment>
<hm-timeline></hm-timeline>
`

export class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(HmTemplate.content.cloneNode(true));
    }
}

customElements.define('home-page', Home);