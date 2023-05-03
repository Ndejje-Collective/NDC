import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter);
dom.watch();

import './navigation';


/*
    TOP NAVIGATION SECTION
*/
let Template_1 = document.createElement('template');
Template_1.innerHTML = `
    <div class="top-navigation">
        <div class="top-navigation--header"><div class="logo"></div>NDC</div>

        <div class="top-navigation--links">
            <button>Home</button>
            <button>About</button>
            <button>Blog</button>
        </div>

        <!---the social media links-->
        <div class="social-media-links">
            <a href="https://www.facebook.com/107133335446370/posts/107135632112807/?substory_index=0&app=fbl"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/ndejjecollective/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/NDC_official1?t=aRqYZt1R2xVc1TL8iNtUYQ&s=08"><i class="fa-brands fa-twitter"></i></a>
        </div>
    </div>
`

export class TopNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_1.content.cloneNode(true));
    }
}

customElements.define("top-navigation", TopNavigation);