import Page from '../page.js';

export default class Home extends Page{
    constructor(){
        super();
        this.html = `
        <video controls autoplay src="/img/humber_mediapros_banner_JF_v.01.mp4" width="100%" height="auto" ></video>
        <article class="faculty">
          <p>Faculty of Media and Creative Arts</p>
          <article class="program graphic">
            <h1 class="program-graphic"><a href="#">graphic design for print and web</a></h1>
            <img src="/img/graphic_design.png" width="100%" height="auto" alt="Graphic Design">
          </article>
          <article class="program 3d">
            <h1 class="program-3d"><a href="#">3d modelling and Visual effects</a></h1>
            <img src="/img/3d_modelling.png" alt="">
          </article>
          <article class="program web">
            <h1 class="program-web"><a href="#">web design and development</a></h1>
            <img src="/img/web_design.png" alt="">
          </article>
        </article>
        <span><img src="/img/grad show.jpg" class="grad-show" alt="Grad Show"></span>
        `
    }
}