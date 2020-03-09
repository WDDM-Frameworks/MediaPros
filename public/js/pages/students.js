import Page from '../page.js';

export default class Students extends Page{
    constructor(){
        super();
        this.html = `
            <article>
                <p class="student-head">Our Students</p>
                <article class="students">
                <article class="stu one">
                    <h1 class="name-stu"><a href="/student/SavinderKaur">Savinder Kaur</a></h1>
                    <img src="/img/students/SK.jpg" width="270px" height="270px" alt="samplepicture">
                </article>
                <article class="stu two">
                    <h1 class="name-stu"><a href="/student/ReynaldoSia">Reynaldo Sia</a></h1>
                    <img src="/img/students/JRSia.png" width="270px" height="270px" alt="samplepicture">
                </article>
                <article class="stu three">
                    <h1 class="name-stu"><a href="/student/KunalDhawan">Kunal Dhawan</a></h1>
                    <img src="/img/students/KunalDhawan.jpg" width="270px" height="270px" alt="samplepicture">
                </article>
                <article class="stu four">
                    <h1 class="name-stu"><a href="/student/HardeepSingh">Hardeep Singh</a></h1>
                    <img src="/img/students/ProfilePicture.jpg" width="270px" height="270px" alt="samplepicture">
                </article>
                <article class="stu five">
                    <h1 class="name-stu"><a href="/student/JorgeFabregas">Jorge Fabregas</a></h1>
                    <img src="/img/students/ProfilePicture.jpg" width="270px" height="270px" alt="samplepicture">
                </article>
                </article>
            </article>
        `
    }
}