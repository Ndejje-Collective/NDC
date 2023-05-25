import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);
dom.watch();

let bgTemplate_2 = document.createElement("template");
bgTemplate_2.innerHTML = `
<div class="article1-section-container">
    <div class="article1--text">
        <h1>What is worship?</h1>
        <h4>by Ndejje collective</h4>
        <p>Worship goes beyond singing and praising. We discuss beyond the everyday perception of worship to fully understand what truly worship is...</p>
    </div>
    <hr>
    <button is="article1-dialog">Read more</button>
</div>
<div class="article1-dialog-container" id="article1-dialog-element">
    <article>
        <button class="article1-dialog--display" is="article1-display"><i class="fa-solid fa-xmark"></i></button>
        <h1>WHAT IS WORSHIP?</h1>
        <br>
        <p>According to John 4:23-24, "But the time is coming and is already here, when by the power of God's Spirit people will worship the Father as He really is, offering Him the true worship that he wants. God is Spirit, and only by the power of the Spirit can people worshipHim as He really is."</p>
        <p>Worship goes beyond singing, it is with Love, generosity, kindness and everything that we do for God. Even prayer, testimonies are all part of worship</p>
        <p>According to Romans 12:1, "So then my brothers and sisters, because of God's great mercy to us I appeal to you: offer yourselves as a living sacrifice to God, dedicated to his service and pleasing to Him. This is the true worship that you should offer". <br> The Lord desires that we keep our bodies, which the Bible refers to as the temples of His Holy Spirit, Holy and pure. We should lay aside our earthly desires and with grace given unto us, keep faithful to the Lord and be transformed by the renewing of our minds. By doing so, we are able to prove what is that good, and acceptable, and perfect, will of God.</p>
    </article>
</div>
`;

export class Article1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(bgTemplate_2.content.cloneNode(true));

  }


}
customElements.define("bg-article1", Article1);

export class Article1DialogBox extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let article1DialogContainer: any = document.getElementById(
      "article1-dialog-element"
    );
    let article1SectionContainer: any = document.querySelector(
      ".article1-section-container"
    );

    this.addEventListener("click", () => {
      article1DialogContainer.style.display = "block";
      article1SectionContainer.classList.add("add-dark-bg");
    });
  }
}
customElements.define("article1-dialog", Article1DialogBox, {
  extends: "button",
});

export class Article1DialogDisplay extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let article1DialogContainer: any = document.getElementById(
      "article1-dialog-element"
    );
    let article1SectionContainer: any = document.querySelector(
      ".article1-section-container"
    );

    this.addEventListener("click", () => {
      article1DialogContainer.style.display = "none";
      article1SectionContainer.classList.remove("add-dark-bg");
    });
  }
}
customElements.define("article1-display", Article1DialogDisplay, {
  extends: "button",
});
