import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleArrowLeft, faCircleArrowRight);
dom.watch();

import img23 from '../../../assets/images/img23.jpg';
import img26 from '../../../assets/images/img26.jpg';
import img20 from '../../../assets/images/img20.jpg';
import img16 from '../../../assets/images/img16.jpg';
import img18 from '../../../assets/images/img18.jpg';
import img25 from '../../../assets/images/img25.jpg';
import img15 from '../../../assets/images/img15.jpeg';


let abTemplate_3 = document.createElement("template");
abTemplate_3.innerHTML = `
<h1>GALLERY</h1>
<button class="previous" is="slide-previous"><i class="fa-solid fa-circle-arrow-left"></i></button>
<button class="next" is="slide-next"><i class="fa-solid fa-circle-arrow-right"></i></button>
<div class="slider">
    <div id="slider--text-container">
      <p>Feel free to join us as we worship and praise the Lord.</p><br>
      <p>Never miss a session and always keep up to date with the NDC</p>
      <br><br>
      <a href="https://www.youtube.com/@ndejjecollective"><em>Subscribe to Our Youtube Channel</em></a>
    </div>

    <div class="slide-container">
        <div class="slides slide1"><img src=${img23} alt="image1" loading="lazy" class="slide--img"></div>
        <div class="slides slide2"><img src=${img26} alt="image2" loading="lazy" class="slide--img"></div>
        <div class="slides slide3"><img src=${img20} alt="image3" loading="lazy" class="slide--img"></div>
        <div class="slides slide4"><img src=${img18} alt="image4" loading="lazy" class="slide--img"></div>
        <div class="slides slide5"><img src=${img16} alt="image5" loading="lazy" class="slide--img"></div>
    </div>
    <div class="mini-slide-container">
      <div class="mini-slides"><img src=${img23} alt="image1" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img26} alt="image2" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img20} alt="image3" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img18} alt="image4" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img16} alt="image5" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img25} alt="image6" loading="lazy" ></div>
      <div class="mini-slides"><img src=${img15} alt="image7" loading="lazy" ></div>

    </div>
</div>
</div>

`;

export class Gallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(abTemplate_3.content.cloneNode(true));
  }

  slideControl() {
    var slideIndex = 1;

    function slideShow(slide: number) {
      let slidesNo: any = document.querySelectorAll(".slide--img");

      if (slide > slidesNo.length) {
        slideIndex = 1;
      }
      if (slide < 1) {
        slideIndex = slidesNo.length;
      }

      for (let i = 0; i < slidesNo.length; i++) {
        slidesNo[i].style.display = "none";
      }
    }
  }

}
customElements.define("ab-gallery", Gallery);

//previous slide functionality
export class SlidePrevious extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.previousFunction();
  }

  previousFunction() {
    var slideIndex = 1;
    this.addEventListener("click", () => {
      slideShow((slideIndex += -1));
      let txt: any = document.getElementById('slider--text-container');
      txt.style.display = 'block';
      txt.style.width = '40%';
      txt.style.height = '100%';
    });

    function slideShow(slide: number) {
      let slidesNo: any = document.querySelectorAll(".slide--img");

      if (slide > slidesNo.length) {
        slideIndex = 1;
      }
      if (slide < 1) {
        slideIndex = slidesNo.length;
      }

      for (let i = 0; i < slidesNo.length; i++) {
        slidesNo[i].style.display = "none";
      }

      slidesNo[slideIndex - 1].style.display = "block";
      slidesNo[slideIndex - 1].style.height = 600 + "px";
      slidesNo[slideIndex - 1].style.width = 800 + "px";
      slidesNo[slideIndex - 1].style.position = "static";

    }
  }
}
customElements.define("slide-previous", SlidePrevious, {
  extends: "button",
});

//next slide functionality
export class SlideNext extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.previousFunction();
  }

  previousFunction() {
    var slideIndex = 1;
    this.addEventListener("click", () => {
      slideShow((slideIndex += 1));
      let txt: any = document.getElementById('slider--text-container');
      txt.style.display = 'block';
      txt.style.width = '40%';
      txt.style.height = '100%';
    });

    function slideShow(slide: number) {
      let slidesNo: any = document.querySelectorAll(".slide--img");

      if (slide > slidesNo.length) {
        slideIndex = 1;
      }
      if (slide < 1) {
        slideIndex = slidesNo.length;
      }

      for (let i = 0; i < slidesNo.length; i++) {
        slidesNo[i].style.display = "none";
      }

      slidesNo[slideIndex - 1].style.display = "block";
      slidesNo[slideIndex - 1].style.height = 600 + "px";
      slidesNo[slideIndex - 1].style.width = 800 + "px";
      slidesNo[slideIndex - 1].style.position = "static";

    }
  }
}
customElements.define("slide-next", SlideNext, {
  extends: "button",
});
