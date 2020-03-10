import Student from '../studentTemplate.js';

export default class HardeepSingh extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/HardeepSingh.jpeg" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Hardeep Singh.</h1>
            </section>
            <p>A multidisciplinary Web Developer, T ech Enthusiast, who loves UI Effects, Animations and Dynamic User Experience</p>
            <p>Hardworking Web Developer with full of new innvative ideas. Always committed to the task with the aim of trying something best to improve standards</p>
            `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <h3>Programming Languages</h3>
                <p>HTML, CSS, JavaScrip and Swift.</p>
            </div>
            <div class="tile zoom">
                <h2>Personal Skills</h2>
                <p>Ability to diagnose problems, Ability to handle multiple tasks, Punctual, Time Management.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <p>Web Design & Development (2020)</p>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <p>Mobile Application Development (2019)</p>
                <p>Canadore College</p>
            </div>
            <div class="dataTile">
                <p>Bachelors of Computer Applications (2014-2017)</p>
                <p>MGSU (India)</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <p>Thorough understanding of HTML, CSS, JavaScript, XML, Java and Swift.</p>
            </div>
            <div class="dataTile">
                <p>Worked as a team leader in a college project. Where an Android, iOS app and Website was created.</p>
            </div>
            <div class="dataTile">
                <p>Created a functional website inspired from AirBnB with HTML, CSS and JS.</p>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <p>AirBnB app is the fully featured project powered by Node-Express Technology.</p>
            </div>
            <div class="dataTile">
                <p>RentN'Go fully functual car rental store. Even worked on Android and ios App</p>
            </div>
            <div class="dataTile">
                <p>WebStore an ecommerce website build with HTML, CSS and JS.</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>I've completed my graduation in Bachelors of Computer Applications backin India and then i came to Canada for my further Studies. Currently I am studying in Web Design and Development at Humber College.</p>
            <p>I love programming, Exploring new Technology, Watching Movies, Listening Music and Traveling.</p>
            <p>Understanding of MS office and Creative cloud and related products. Can work as full stack developer</p>
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/ProfilePicture.jpg" alt="About Image" class="SampleImage"></a>`
    }
}