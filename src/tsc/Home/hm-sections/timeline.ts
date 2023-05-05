let Template_7 = document.createElement('template');
Template_7.innerHTML = `
<div class="timeline-section">
    <div class="timeline--header"><h1 id="timeline-head">KEEP UP TO DATE</h1></div>

    <div class="timeline-container">
        <div class="timeline-bubble-sections">
            <div class="timeline timeline-bubble--left">
                <div class="timeline-bubble-content timeline-bubble--left_content">
                    <h2>12th/09/23</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
            </div>
            <div class="timeline timeline-bubble--right">
                <div class="timeline-bubble-content timeline-bubble--right_content">
                    <h2>30th/12/23</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export class Timeline extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_7.content.cloneNode(true));
    }
}

customElements.define('hm-timeline', Timeline);