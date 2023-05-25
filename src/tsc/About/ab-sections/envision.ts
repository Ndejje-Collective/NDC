let abTemplate_2 = document.createElement('template');
abTemplate_2.innerHTML = `
<div class="envision-container">
    <div class="envision--story-container">
        <div class="envision--story_text">
            <h1>Our Story</h2>
            <p>Ndejje Collective was founded in October 2020 during the COVID-19 lockdown by a group of Ndejje high school friends who were involved in the Heavenward Band, CHASU choir and scripture Union at Ndejje SS.</p>
            <p>Our desire to continue our fellowship together virtually and physically led us to start this organization which is primarily music-based. As a community of believers, we are commited to using our gifts to serve God and others. </p>
        </div>
        <div class="envision--story_img"></div>
    </div>
    <div class="envision--mission-container">
        <div class="envision--mission_img"></div>
        <div class="envision--mission_text">
            <h1>Vision</h2>
            <p>We picture a generation, a family, that stands on the strong pillars of unity, faithfulness and above all love in Jesus Christ.</p>
            <p>We provide opportuunities for growth, fellowship and service, and seek to inspire others to use their talents to make a difference in the world.</p>
        </div>
    </div>
</div>
`;

class Envision extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.append(abTemplate_2.content.cloneNode(true));
    }
}
customElements.define('ab-envision', Envision);