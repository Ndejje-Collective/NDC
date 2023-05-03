let Template_8 = document.createElement('template');
Template_8.innerHTML = `
<div class="info-msg-container">
    <h1>A WORD FROM THE PRESIDENT</h1>
    <div class="info-msg-content-container">
        <div class="info-msg-content_text">
            <h2>HELLO, AM MUJE</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste explicabo sint odit ea consequuntur commodi voluptates nulla. Impedit perferendis, ex corrupti reprehenderit dolore nesciunt iusto distinctio cumque, facere inventore incidunt!</p>
        </div>
        <div class="info-msg-content_picture"></div>
    </div>
</div>
`;

export class Message extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_8.content.cloneNode(true));
    }
}

customElements.define('hm-message', Message);