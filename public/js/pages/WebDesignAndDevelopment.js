import Program from './programTemplate.js';

export default class WebDesignAndDevelopment extends Program{
    constructor(){
        super();
        this.html = this.getProgramTemplate();
    }
    
    getHeader(){
        return `  
            <div class="prog-name">                   
            <h2>Web Design and Development</h2>
            <p>Credential:<strong>Certificate of Achievement</strong> | Program Code: WD911 | Length: 2 semesters | Program Starting Between: September 2020- August 2021</p>
            </div>
        `
    }

    getMain(){
        return `
            <article class="prog-descript">
            <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan,
                design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting 
                and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program</p>

            <p>Our unique project-based approach leads students in the program through the entire process of creating websites and web applications. You will build static and dynamic websites utilizing the most current versions of industry-standard applications 
                and tools. Programming and design skills are taught with a focus on following best practices and established industry standards including designing websites that are mobile-ready, accessible and future-proof.</p>
                
            <p>You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media
                in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.

                This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career</a>.</p>
                <article>
        `
    }
}