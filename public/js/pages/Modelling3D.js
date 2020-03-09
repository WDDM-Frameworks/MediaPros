import Program from './programTemplate.js';

export default class Modelling3DProgram extends Program{
    constructor(){
        super();
        this.html = this.getProgramTemplate();
    }
    
    getHeader(){
        return ` 
                <article class="prog-name">
                    <div class="prog-image">
                        <img src="/img/modelling.png" width="100%" alt="Graphic Designer">
                    </div>
                    <div class="prog-info">
                        <div class="prog-tittle modell">
                            <h2>3D Modelling and <br>Visual Effects Production</h2>
                        </div>
                        <div class="prog-text">
                            <p>Credential: <strong>Certificate of Achievement</strong><br>Program Code: 11671<br>Length: 2 semesters<br>Program Starting Between: September 2020- August 2021</p>        
                        </div>
                    </div>
                </article>
         `
    }

    getMain(){
        return `
                <article class="prog-descript">
                <p>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life. You will develop skills in modelling, texturing and lighting, 
                    as well as in visual effects, compositing and digital cinematography. We employ a teaching process and course structure that requires content created in one course to be used to complete assignments in other courses. This “pipeline” process mirrors 
                    that of industry, allowing students to make a seamless transition into a real production environment.</p>

                <p>The program is designed by artists for experienced traditional artists and animators who want to either develop or transition their skill sets for employment in the 3D and visual effects industries. The faculty take their years of industry experience 
                    into the classroom, straight from the studio. Their collective experience and passion in the gaming, television and film industries is the driving force that ensures the program meets the current and future needs of the industry.</p>
                    
                <p>January intake scheduling: students will benefit from our streamlined flexible schedule, allowing them to work their day jobs while they study for their dream jobs. Our schedule will have students on campus and in classes on evenings and weekends.
                    Students will study in our state-of-the-art labs equipped with Cintiq tablets and the latest tools and software.

                    This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career.</a></p>
                    <article>
            `
    }
}