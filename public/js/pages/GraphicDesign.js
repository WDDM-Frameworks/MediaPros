import Program from './programTemplate.js';

export default class GraphicDesignProgram extends Program{
    constructor(){
        super();
        this.html = this.getProgramTemplate();
    }

    getHeader(){
        return ` 
                <div class="prog-name">                 
                <h2>Graphic Design</h2>
                <p>Credential: <strong>Advanced Diploma</strong> | Program Code: 11571 | Length: 6 semesters | Program Starting Between: September 2020- August 2021</p>
                </div>
            `
    }

    getMain(){
        return  `
                <article class="prog-descript">
                <p>Humber’s Graphic Design advanced diploma program develops creative and strategic designers who execute for a wide range of interactive media such as web and screen, user interaction, motion design and also traditional print products.
                While learning and mastering design concepts, you will generate creative solutions and produce visuals for effective multimedia communication. As you gain desirable knowledge and skills, you will be exposed to the many topics and tasks 
                required in contemporary design work. You will become strategically and typographically skilled and master digital, editorial, interactive, information, motion and web design techniques. Additionally, relevant programming and entrepreneurship 
                knowledge will round out a comprehensive skillset.</p>
                <p>As part of our interaction and design common platform cluster, this program will expose you to many aspects of design and allow you to collaborate with students in related fields. The first semester is shared with the Multimedia Design and 
                    Development program, and the first year of this program is shared with the Web Design and Interactive Media program. Your exposure to different types of design work and common programming elements will enable you to investigate your options and 
                    choose a focus prior to your second year of study.</p>
                    
                <p>You will explore the many facets of graphic design and be instructed and trained on industry-based technology and software. Cross-disciplinary projects will allow you to develop collaborative and teamwork skills while preparing you for workplace 
                environments. This program includes the unique opportunity to work with BuildingF, our in-house creative & business communications hub, working on real projects for clients while building your portfolio and professional contacts.</p>
                </article>
            `
    }
}