let abTemplate_1 = document.createElement('template');
abTemplate_1.innerHTML = `
<div class="about-hero-container">
    <div class="ab-hero_text"><h1>ABOUT US</h1></div>
</div>
`

class AbHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.append(abTemplate_1.content.cloneNode(true))
    }
}

customElements.define('ab-hero', AbHero);