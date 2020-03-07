import Page from '../page.js';

export default class ProgramTemplate extends Page{
    constructor(){
        super();
        this.html = `
                <section class="prog">
                    <header class = "prog-header">
                        ${this.getHeader()}
                        <button>Print course information as pdf</button>
                    </header>

                    <main>
                        ${this.getMain()}
                    </main>

                    <button>More Information for this course</button>
                </section>

                <section class="prog">
                    <h2>Web Design and Development</h2>
                    <p>Credential:<strong>Certificate of Achievement</strong> | Program Code: WD911 | Length: 2 semesters | Program Starting Between: September 2020- August 2021</p>
                    <button>Print course information as pdf</button>

                    <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan,
                        design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting 
                        and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program</p>

                    <p>Our unique project-based approach leads students in the program through the entire process of creating websites and web applications. You will build static and dynamic websites utilizing the most current versions of industry-standard applications 
                        and tools. Programming and design skills are taught with a focus on following best practices and established industry standards including designing websites that are mobile-ready, accessible and future-proof.</p>
                        
                    <p>You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media
                        in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.

                        This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career</a>.</p>

                    <button>More Information for this course</button>
                </section>

                <section class="prog">
                    <h2>3D Modelling and Visual Effects Production</h2>
                    <p>Credential:<strong>Certificate of Achievement</strong> | Program Code: 11671 | Length: 2 semesters | Program Starting Between: September 2020- August 2021</p>
                    <button>Print course information as pdf</button>

                    <p>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life. You will develop skills in modelling, texturing and lighting, 
                        as well as in visual effects, compositing and digital cinematography. We employ a teaching process and course structure that requires content created in one course to be used to complete assignments in other courses. This “pipeline” process mirrors 
                        that of industry, allowing students to make a seamless transition into a real production environment.</p>

                    <p>The program is designed by artists for experienced traditional artists and animators who want to either develop or transition their skill sets for employment in the 3D and visual effects industries. The faculty take their years of industry experience 
                        into the classroom, straight from the studio. Their collective experience and passion in the gaming, television and film industries is the driving force that ensures the program meets the current and future needs of the industry.</p>
                        
                    <p>January intake scheduling: students will benefit from our streamlined flexible schedule, allowing them to work their day jobs while they study for their dream jobs. Our schedule will have students on campus and in classes on evenings and weekends.
                        Students will study in our state-of-the-art labs equipped with Cintiq tablets and the latest tools and software.

                        This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career.</a></p>

                    <button>More Information for this course</button>
                </section>
                
                <!--General information security-->
                <p class="info_main">Every attempt is made to ensure that information contained on this website is current and accurate. Humber reserves the right to correct any error or omission, modify or cancel any course, program, fee, timetable or campus location at 
                    any time without prior notice or liability to users or any other Person.</p>

                <p class="info_main">On June 29, 2018, the Provincial Government of Ontario announced the renaming of the Ministry of Advanced Education and Skills Development (MAESD) to the Ministry of Training, Colleges and Universities (MTCU). Both names may appear on this website.</p>

        `
    }
}