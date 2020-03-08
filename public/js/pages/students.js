import Page from '../page.js';

export default class Students extends Page{
    constructor(){
        super();
        this.html = `
            <article class="faculty">
                <p>Our Students</p>
                <article class="program graphic">
                    <h1 class="program-graphic"><a href="/student/SavinderKaur">Savinder Kaur</a></h1>
                    <img src="/img/graphic_design.png" width="100%" height="auto" alt="Graphic Design">
                </article>
                <article class="program 3d">
                    <h1 class="program-3d"><a href="/student/ReyanaldoSia">Reyanaldo Sia</a></h1>
                    <img src="/img/3d_modelling.png" alt="">
                </article>
                <article class="program web">
                    <h1 class="program-web"><a href="/student/KunalDhawan">Kunal Dhawan</a></h1>
                    <img src="/img/web_design.png" alt="">
                </article>
                <article class="program web">
                    <h1 class="program-web"><a href="/student/HardeepSingh">Hardeep Singh</a></h1>
                    <img src="/img/web_design.png" alt="">
                </article>
                <article class="program web">
                    <h1 class="program-web"><a href="/student/JorgeFabregas">Jorge Fabregas</a></h1>
                    <img src="/img/web_design.png" alt="">
                </article>
            </article>
        `
    }
}