import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
library.add(faInstagram, faTwitter, faTiktok);
dom.watch();


//for the observer Api
import { observer } from "./observerApi";

let TemplateFooter = document.createElement('template');
TemplateFooter.innerHTML = `
<footer>
<div class="ft-social-media-container">
    <div class="ft-social-media--header"><h1>CHECK OUT OUR OTHER PLATFORMS</h1></div>
    <div class="ft-social-media-content-container">
        <!--twitter-->
        <div class="ft-social-media ft-social-media--twitter animate-from-top">
            <div class="ft-social-media--twitter--container">
                <div class="ft-social-media--twitter_txt"><i class="fa-brands fa-twitter"></i>
                    <p>Twitter</p>
                </div>
                <div class="ft-social-media--twitter_link"><a href="https://twitter.com/NDC_official1?t=aRqYZt1R2xVc1TL8iNtUYQ&s=08">@ndejje collective</a></div>
            </div>
        </div>

        <!--ig-->
        <div class="ft-social-media ft-social-media--instagram animate-from-top">
            <div class="ft-social-media--instagram--container">
                <div class="ft-social-media--ig_txt"><i class="fa-brands fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div class="ft-social-media--ig_link"><a href="https://www.instagram.com/ndejjecollective/">@ndejje collective</a></div>
            </div>
        </div>

        <!--tiktok-->
        <div class="ft-social-media ft-social-media--tiktok animate-from-top">
            <div class="ft-social-media--tiktok--container">
                <div class="ft-social-media--tiktok_txt"><i class="fa-brands fa-tiktok"></i>
                    <p>Tiktok</p>
                </div>
                <div class="ft-social-media--tiktok_link"><a href="https://vm.tiktok.com/ZMYpMQPko/">@ndejje collective</a></div>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="ft-content-container">
    <div class="ft-logo-container">
        <div class="logo"></div>
        <div class="logo--txt">
            <p>NDC</p>
            <p>NDEJJE COLLECTIVE</p>
        </div>
    </div>
    <div class="ft-social-email">
        <p>Send us an email, <em>ndejjecollective@gmail.com</em></p>
    </div>
</div>
</footer>
`;

export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(TemplateFooter.content.cloneNode(true));

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

customElements.define('ft-footer', Footer)