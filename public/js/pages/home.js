import Page from '../page.js';

export default class Home extends Page{
    constructor(){
        super();
        this.html = `
        <video controls autoplay src="/img/humber_mediapros_banner_JF_v.01.mp4" width="100%" height="auto" class="banner"></video>
        
        <article class="faculty">
          <p>Faculty of Media and Creative Arts</p>
          <article class="program graphic">
            <h1 class="program-graphic"><a href="/graphicDesign">graphic design for print and web</a></h1>
            <img src="/img/graphic_design.png" width="100%" height="auto" alt="Graphic Design">
          </article>
          <article class="program 3d">
            <h1 class="program-3d"><a href="/modelling3D">3d modelling and Visual effects</a></h1>
            <img src="/img/3d_modelling.png" alt="">
          </article>
          <article class="program web">
            <h1 class="program-web"><a href="/webDesignAndDevelopment">web design and development</a></h1>
            <img src="/img/web_design.png" alt="">
          </article>
        </article>
        <div>
        <p class="some-one">Humber invites you to attend our 2019 MEDIA PROS Grad Show.</p>
        <p class="some-one">Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</p>
        <p class="some-one">Register at <a href="#">humbermediaprosgradshow2019.eventbrite.com</a></p>
        </div>
        <span><img src="/img/grad_show.png" class="grad-show" alt="Grad Show"></span>
        
        `
    }
}