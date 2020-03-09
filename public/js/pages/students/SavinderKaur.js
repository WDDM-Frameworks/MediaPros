import Student from '../studentTemplate.js';

export default class SavinderKaur extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/SavinderKaur.jpg" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Savinder Kaur.</h1>
            </section>
            <p>Highly skilled web developer seeks opportunities where coding and web design knowledge, and the ability to make desktop and mobile applications will be maximally utilized.</p>
            <p> I possess exceptional planning and organizational skills and strong communication skills, which I believe are also essential for success in any position. I am a leader and a team player, who is always willing to go the 'extra mile' to ensure things are done in an accurate and timely manner.</p>
            `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <hh3>Computer Literacy</h3>
                <p>Knowledge of  HTML, CSS, JavaScript, Adobe Creative Suite and Node.js. 
                </p>
            </div>
            <div class="tile zoom">
                <h3>Skills</h3>
                <p>Outstanding proficiency with MS Office applications including Word, Excel, Access and Powerpoint.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <h3>Web Design & Development (2020)</h3>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <h3>Project Management(2019)</h3>
                <p>Lambton College</p>
            </div>
            <div class="dataTile">
                <h3>Bachelor in Computer Application (2018)</h3>
                <p>SVIET (India)</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <p>1 year work in Customer Operations at eClerx services limited, Chandigarh</p>
            </div>
            <div class="dataTile">
                <p>Processing confidential data and information according to guidelines at Bajaj Alainz</p>
            </div>
            <div class="dataTile">
                <p>Trained a person for Microsoft Excel and Microsoft Word at Torcan ICIC Roofing</p>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <p>Humber Media Pros website | Humber College</p>
            </div>
            <div class="dataTile">
                <p>eCommerce Website | Web Programming | Humber College</p>
            </div>
            <div class="dataTile">
                <p>AirBnB app | fully featured project powered by Node-Express Technology.</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>As a computer science graduate and all-around tech head, I am delighted for new web designs.</p>
            <p>I am graduated in the field of Computer Science and I am currently enrolled in Web design and Development. Through my academic learning, I have been able to successfully develop my research and web designing skills affording me the fundamental knowledge which will prove invaluable. This coupled with my previous workforce at eClerx Services Limited, Chandigarh and learning experience, is an asset to my achieving success.</p>
            <p>I have developed my leadership and interpersonal skills, as by being an analyst in Consumer Operations at eClerx Services limited. I possess exceptional planning and organizational skills and strong communication skills, which I believe are also essential for success.</p>
            <p>Starting off with the academic details, I have completed my senior secondary education from Jawahar Navodaya Vidyalaya, Mansa, Punjab. My schooling has helped me a lot in enhancing my interests and skills and has learned a lot about time management, discipline. From the initial stages, I was keenly interested in computers which are why I have participated in different techno fests, science, and ICT exhibitions.</p>
            <p>During my bachelor degree, I was introduced to different programming languages like C, C++, and JAVA. I developed a sober affinity for computers. All the way in my life, I was curious to find answers to how things work scientifically and technologically. Progressively, I harnessed my technical aptitude by developing the super snake game through C programming. This experience gave me ample opportunities to consolidate the rest of my creative energies. JAVA being the most powerful and robust language of all fascinated me the most because of its simplicity as it is easy for a Programmer to implement.</p>
            <p>Throughout my graduation, I came to know about the vastness of computers through Oracle, Computer Networks, System Analysis and Design, Management Information Systems, Software Engineering, DBMS, HTML, DHTML, and ASP.Net. So, I collected knowledge from all the subjects that I learned and also participated in the technical fests organized in my college. Along with FOX 2.0, I have spent most of my time attending a number of seminars and conferences in different fields of computer science. I tentatively made many projects with C, C++, Java, and HTML. Also, I have assisted my juniors and friends to help them understand the concepts of the subjects, which helped me to communicate articulately and interact effectively with a diversity of peers.</p>
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/SK.jpg" alt="About Image" class="SampleImage"></a>`
    }
}