import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleArrowLeft, faCircleArrowRight);
dom.watch();

import img23 from "../../../assets/images/img23.jpg";
import img26 from "../../../assets/images/img26.jpg";
import img20 from "../../../assets/images/img20.jpg";
import img16 from "../../../assets/images/img16.jpg";
import img18 from "../../../assets/images/img18.jpg";
import img25 from "../../../assets/images/img25.jpg";
import img15 from "../../../assets/images/img15.jpeg";
import img28 from "../../../assets/images/img28.jpg";
import img17 from "../../../assets/images/img17.jpg";
import img29 from "../../../assets/images/img29.jpg";
/*
  FOR SWIPER
  TO HANDLE COVER FLOW CAROUSEL

*/
//swiper files

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";

//css files
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

let abTemplate_3 = document.createElement("template");
abTemplate_3.innerHTML = `
<h1>GALLERY</h1>
<div class="slider">
  <div class="swiper">

    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><img src=${img23} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img26} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img20} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img18} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img16} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img25} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img15} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img17} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img28} alt="image1" loading="lazy" ></div>
        <div class="swiper-slide"><img src=${img29} alt="image1" loading="lazy" ></div>

    </div>

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev swiper-btn"></div>
    <div class="swiper-button-next swiper-btn"></div>

  </div>
</div>
`;

export class Gallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(abTemplate_3.content.cloneNode(true));

    this.swiperSlider();
  }

  swiperSlider() {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination, EffectCoverflow],

      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    console.log("working");
  }
}
customElements.define("ab-gallery", Gallery);

