import Page from '../page.js';

export default class StudentTemplate extends Page{
    constructor(){
        super();
    }

    getStudentData(){
        return `
        <section class="Universal">
        <section class="InfoGrid">
            <div>
                ${this.getStudentHeader()}
            </div>
            <div class="tileGrid">
                ${this.getStudentHighlights()}
            </div>
        </section>

        <section class="dataGrid">
            <div>
                <div>
                    <h3>Education</h3>
                    ${this.getEducation()}
                </div>
            </div>
        
            <div>
                <div>
                    <h3>Experience</h3>
                    <div>
                        ${this.getExperience()}
                    </div>
                </div>
            </div>
        <div>
            <h3>Projects</h3>
            <div>
                ${this.getProjects()}
            </div>
        </div>
        </section>
        <article class="dataGridTile">
            <div>
                <h4>About</h4>
                ${this.getAbout()}
            </div>
            ${this.getAboutImage()}
        </article>
        </section>
        `
    }
}