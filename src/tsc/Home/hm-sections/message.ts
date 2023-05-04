let Template_8 = document.createElement('template');
Template_8.innerHTML = `
<div class="info-msg-container">
    <h1>A WORD FROM THE PRESIDENT</h1>
    <div class="info-msg-content-container">
        <div class="info-msg-content_text">
            <h2>HELLO, AM MUJE</h2>
            <p>It is my pleasure to welcome you to our community of believers who are passionate about music and dedicated to spreading the message of God's love through our talents and skills. As we've grown and evolved, we've become more focused on our mission of providing opportunities for growth, fellowship, and service to those around us. We believe that by using our talents to serve God and others, we can make a positive impact on the world. I encourage you to join us on this journey of faith and service. Whether you're a musicioan, a singer or simplysomeone who wants to be part of a community of believers, there's a place for you here</p>
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