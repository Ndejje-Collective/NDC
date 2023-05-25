import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

library.add(faQuoteLeft, faQuoteRight);
dom.watch();


let bgTemplate_1 = document.createElement("template");
bgTemplate_1.innerHTML = `
<div class="verse-text-container">
    <h1>Verse of the day!</h1>
    <i class="fa-solid fa-quote-left"></i><p id="verseOfTheDay"></p>
</div>
`;

export class Verse extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.append(bgTemplate_1.content.cloneNode(true));

    this.changeVerse();
  }

  changeVerse() {
    let verseOfTheDay: any = document.getElementById('verseOfTheDay')

    window.onload = function () {
      let day = new Date().getDay();
      let text: Array<string> = [
        "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.",
        "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.",
        "Rejoice in the Lord, O ye righteous: for praise is comely for the upright.",
        "He loveth righteousness and judgment: the earth is full of the goodness of the Lord.",
        "For we being many are one bread, and one body: for we are all partakers of that one bread.",
        "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
        " Count it all joy, my brethren, when ye fall into manifold temptations",
      ];
      verseOfTheDay.innerHTML = text[day - 1];
    };
  }
}
customElements.define("bg-verse", Verse);
