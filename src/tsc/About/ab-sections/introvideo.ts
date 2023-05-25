let abTemplate_4 = document.createElement('template');
abTemplate_4.innerHTML = `
<div class="intro-video-container">
    <h1>GET THE FULL PICTURE</h1>
    <div class="intro--video">
        <iframe
            src="https://youtube.com/embed/5KSi7OQv9cI" height="500px" width="800px" loading="lazy" allowFullscreen title="presenting ndejje collective">
        </iframe>
    </div>
</div>
`;

class IntroVideo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.append(abTemplate_4.content.cloneNode(true))
    }
}


customElements.define('ab-video', IntroVideo);