import Student from '../studentTemplate.js';

export default class KunalDhawan extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/KunalDhawan.jpg" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Kunal Dhawan.</h1>
            </section>
            <p>
            3+ years of experience as a Software Engineer.
            </P>
            <p>
            Mentored 100+ mentees across the globe for coding projects.
            </p>    
        `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <h2>Microsoft Imagine Cup Finalist</h2>
                <p>Became Microsoft Imagine Cup National Finalist in 2015 under Games Category.</p>
            </div>
            <div class="tile zoom">
                <h2>Pythonist</h2>
                <p>3 years of experience as a python developer.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <h3>Web Design & Development (2019-2020)</h3>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <h3>Bachelors of Computer Science (2012-2016)</h3>
                <p>ABES Engineering College</p>
            </div>
            <div class="dataTile">
                <h3>High School(2010-2012)</h3>
                <p>DAV Public School (India)</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <h3>Codementor</h3>
                <p>
                Experience advising, training and counseling mentees regarding code analysis, programming, and code review requests.
                Successfully maintained a 5-star profile over 3 years by helping 100+ mentees and delivering as committed
                </p>
            </div>
            <div class="dataTile">
                <h3>CIANS Analytics</h3>
                <p>
                Involved in the development of tools to download, validate and monitor for any datasets along with ensuring the integrity and quality of data.
                Upgraded Master script with additional features and improved functionality to handle Intraday Datasets and Daily Datasets.
                </p>
            </div>
            <div class="dataTile">
                <h3>DXC Technology</h3>
                <p>
                Experience in the Insurance domain; Write Python codes to handle client service requests. Designing solutions ac-cording to the requests, create technical detail documents and write end-to-end codes.
                </p>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <h3>Dawar Immigration</h3>
                <p>Dawar Immigration is the Web Project which is powered by React. This project follows Single Page Application Design.</p>
                
            </div>
            <div class="dataTile">
                <h3>AirBnB</h3>
                <p>AirBnB app is the fully featured project powered by Node-Express Technology.</p>
            </div>
            <div class="dataTile">
                <h3>MutoJin</h3>
                <p>MutoJin is the 2D platformer-puzzle game which made to the India National Finals 2015.</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>
                I am enrolled in Web design and development program at Humber Institute of Technology and Advanced Learning for fall 2019. I am looking for part-time opportunities as a back-end developer.
            </p>
            <p>
                I am a Bachelor's in Computer Science. Prior to this, I have worked as developer for CIANS Analytics and DXC Technology. My area of specialization is python centered ETL technologies. My work revolved around development of codes aiming to automate the Data Extraction process. Our primary aim was to facilitate the extraction of data to the staging area where data source could be REST APIs, AWS, Ftp, Database or any client-side software. Along with extraction, alert-generating monitoring systems for any missing data was our priority.
            </p>
            <p>
                Apart from this, I do freelancing projects. I have worked on many projects within the technology pool of Unity3D, Python, Java and C++. Currently, I am working on a freelance project of Sequential Group Trip Planning. I am a determined and responsible professional who is always on his toes to learn new things. 
            </p>    
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/IC.jpg" alt="About Image" class="SampleImage"></a>`
    }
}