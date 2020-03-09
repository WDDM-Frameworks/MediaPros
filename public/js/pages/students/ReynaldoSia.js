import Student from '../studentTemplate.js';

export default class ReynaldoSia extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/JRSia.png" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Reynaldo Sia.</h1>
            </section>
            <p>I am a Web Design and Development Student with over 12 years of corporate experience in multinational companies, mainly in the Business Process Outsourcing industry</p>
            <p>I took Web Design and Development to enhance my knowledge on design, databases and programming.</p>
            `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <h2>HTML, CSS and JavaScript</h2>
                <p>I am knowledgeable in HTML, CSS, JavaScript, wireframing and databases.</p>
            </div>
            <div class="tile zoom">
                <h2>MS Office 2016 Master-level certified</h2>
                <p>I have expert-level certifications in MS Excel and Word, as well as Specialist-level certifications in MS Outlook and PowerPoint.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <p>HR Management (2021)</p>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <p>Web Design & Development (2020)</p>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <p>Bachelors Degree Major in Psychology (2014-2017)</p>
                <p>Ateneo de Manila University (Philippines)</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <p>Student Information Systems Administrator (International Center) | Humber College</p>
            </div>
            <div class="dataTile">
                <p>HRIS Specialist III - People Systems and Analytics | Baker McKenzie </p>
            </div>
            <div class="dataTile">
                <p>Continuous Improvement Lead | General Motors</p>
            </div>
            <div class="dataTile">
            <p>Consulting Specialist | Willis Towers Watson</p>
            </div>
            <div class="dataTile">
            <p>Client and Operations Manager | IBM</p>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <p>AirBNB Website | Web Programming | Humber College</p>
            </div>
            <div class="dataTile">
                <p>eCommerce Website | Web Programming | Humber College</p>
            </div>
            <div class="dataTile">
                <p>Survey Administration Streamlining (Yellow Belt Project) | Baker McKenzie</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>HR Specialist with over 12 years of experience in the Shared Services and BPO industries. Skilled in Microsoft Excel, Data Visualization, Data Analytics, and Visual Basic for Applications (VBA).</p>
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/JRSia.png" alt="About Image" class="SampleImage"></a>`
    }
}