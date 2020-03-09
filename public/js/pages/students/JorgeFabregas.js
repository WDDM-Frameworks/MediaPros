import Student from '../studentTemplate.js';

export default class JorgeFabregas extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/jf_bn.png" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Jorge Fabregas.</h1>
            </section>
            <p>More than 20 years of progressive experience in the graphics field, with a demonstrated expertise in the most important
            printing systems, such as offset, digital print and flexography, and a deep proficiency in color theory, ICC profiles, image
            retouching and an expert level using Adobe Creative Suite (Illustrator, Photoshop, In Design, Acrobat).</p>
            <p>Strong passion for design and creative thinker, with great prowess in graphic concepts and innovative software, such as
            Adobe Animate and After Effects.</p>
            `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <h2>Design</h2>
                <p>Prepress Technician, Graphic Designer and Web Designer.</p>
            </div>
            <div class="tile zoom">
                <h2>Technical</h2>
                <p>Strong knowledge in Adobe CSS, HTML, CSS, After Effects <br>and Color Theory.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <h3>Web Design & Development. (2020)</h3>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <h3>Professional Digital Preprint Diploma. (2008)</h3>
                <p>Chile</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <h3>Digiflex Graphic Services Ltda. (2013-2017)</h3>
            </div>
            <div class="dataTile">
                <h3>Retografica Ltda. (Schawk Group) (2004-2017)</h3>
            </div>
            <div class="dataTile">
                <h3>Munizaga Ltda. (2000-2004)</h3>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>More than 20 years of progressive experience in the graphics field, with a demonstrated expertise in the most important
            printing systems, such as offset, digital print and flexography, and a deep proficiency in color theory, ICC profiles, image
            retouching and an expert level using Adobe Creative Suite (Illustrator, Photoshop, In Design, Acrobat).</p>
            <p>Solid understanding and experience in front-end and back end development. Proven work background developing large and
            complex applications and sites, with a strong and advanced competence with Visual Studio, HTML, CSS and JavaScript.</p>
            <p>Strong passion for design and creative thinker, with great prowess in graphic concepts and innovative software, such as
            Adobe Animate and After Effects.</p>
            <p>Demonstrated success as multifaceted and problem-solving, with proven skills such as management, leadership and high
            quality.</p>
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/jf_dt.png" alt="About Image" class="SampleImage"></a>`
    }
}