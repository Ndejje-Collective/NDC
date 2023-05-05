import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter, faBars);
dom.watch();

import './navigation';


/*
    TOP NAVIGATION SECTION
*/
let Template_1 = document.createElement('template');
Template_1.innerHTML = `
<div class="top-navigation">
    <div class="aria-label">
        <div class="logo-mini"></div>
        <button id="nav-mini-btn" is="mini-button"><i class="fa-solid fa-bars"></i></button>
    </div>

    <div class="top-navigation-container aria-hidden" id="top-nav-visibility">
        <div class="top-navigation--header"><div class="logo"></div>NDC</div>

        <div class="top-navigation--links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
    
        </div>
    
        <!---the social media links-->
        <div class="social-media-links">
            <a href="https://www.facebook.com/107133335446370/posts/107135632112807/?substory_index=0&app=fbl"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/ndejjecollective/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/NDC_official1?t=aRqYZt1R2xVc1TL8iNtUYQ&s=08"><i class="fa-brands fa-twitter"></i></a>
        </div>
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


//button for minimizing navigation bar for smaller devices
export class MiniButton extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let miniBtn = document.getElementById('nav-mini-btn');
        let topNavContainer = document.getElementById('top-nav-visibility')
        // topNavContainer.classList.add('aria-hidden');

        miniBtn?.addEventListener('click', () => {
            if(topNavContainer?.classList.contains('aria-hidden')) {
                topNavContainer.classList.remove('aria-hidden');
                topNavContainer.classList.add('aria-visible');
            }
            else if(topNavContainer?.classList.contains('aria-visible')) {
                topNavContainer.classList.remove('aria-visible');
                topNavContainer.classList.add('aria-hidden');
            }
        })
    }
}

customElements.define('mini-button', MiniButton, {extends: 'button'});