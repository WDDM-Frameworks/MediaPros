import Page from '../page.js';

export default class Students extends Page{
    constructor(){
        super();
        this.html = `
            <article>
                <p class="student-head">Our Students</p>
                <article class="students">
                <div class="studentdiv">
                    <article class="stu one">
                        <a href="/student/SavinderKaur">
                            <h1 class="name-stu">Savinder Kaur</h1>
                            <img src="/img/students/SK.jpg"  width="100%" alt="samplepicture">
                        </a>
                    </article>
                </div>
                <div class="studentdiv">
                    <article class="stu two">
                        <a href="/student/ReynaldoSia">
                            <h1 class="name-stu">Reynaldo Sia</h1>
                            <img src="/img/students/JRSia.png"  width="100%" alt="samplepicture">
                        </a>
                    </article>
                </div>
                <div class="studentdiv">
                    <article class="stu three">
                        <a href="/student/KunalDhawan">
                            <h1 class="name-stu">Kunal Dhawan</h1>
                            <img src="/img/students/KunalDhawan.jpg" width="100%" alt="samplepicture">
                        </a>
                    </article>
                </div>
                <div class="studentdiv">
                    <article class="stu four">
                        <a href="/student/HardeepSingh">
                            <h1 class="name-stu">Hardeep Singh</h1>
                            <img src="/img/students/HardeepSingh.jpeg" width="100%" alt="samplepicture">
                        </a>
                    </article>
                </div>
                <div class="studentdiv">
                    <article class="stu five">
                        <a href="/student/JorgeFabregas">
                            <h1 class="name-stu">Jorge Fabregas</h1>
                            <img src="/img/students/jf_bn.png" width="100%" alt="samplepicture">
                        </a>
                    </article>
                </div>
                </article>
            </article>
        `
    }
}