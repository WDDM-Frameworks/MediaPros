import Page from '../page.js';

export default class About extends Page{
    constructor(){
        super();
        this.html = `
        <section class="topSec">
            <img src="/img/vision.jpg" width="100%" height="auto" alt="Vision">
            <div>
                <h1 class="vision">Our Vision</h1><br><br>
                <p class="visPar">Humber emphasizes hands-on, career-focused learning. We offer a broad range of credentials including bachelor's degrees, diplomas, certificates and postgraduate certificates — and will help you chart the best path towards your goals.</p>
            </div>
        </section>
        <section class="middle first">
            <div>
                <h2 class="poly">WHY POLYTECHNIC?</h2>
                <p class="polyPar">A polytechnic education offers a distinct third option between university and college – one that combines deep, theoretical learning with applied, hands-on experience.</p>
            </div>
                <img src="/img/polytechnic.jpg" width="100%" height="auto" alt="Polytechnic">
        </section>
        <section class="middle second">
            <img src="/img/academic.jpg" width="100%" height="auto" alt="Academic">
            <div>
                <h2 class="acad">ACADEMIC SCHOOLS</h2>
                <p class="acadPar">Humber offers a wide variety of programs. Learn about our different schools and find one that's the right fit for you.</p>
            </div>
        </section>
        <section class="middle third">
        <div>
            <h2 class="campus">CAMPUSES AND FACILITIES</h2>
            <p class="campusPar">Visit one of our three beautiful campuses, all of which feature state-of-the-art facilities and great green spaces.</p>
        </div>
            <img src="/img/humber.jpg" width="100%" height="auto" alt="Humber">
        </section>
        `
    }
}