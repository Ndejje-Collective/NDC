let Template_6 = document.createElement('template');
Template_6.innerHTML = `
<div class="info--commit">
    <p>We are committed to what we do. <em>see how</em></p>
</div>
`;

export class Commitment extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_6.content.cloneNode(true));
    }
}

customElements.define('hm-commitment', Commitment)