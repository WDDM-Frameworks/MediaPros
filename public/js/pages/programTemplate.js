import Page from '../page.js';

export default class ProgramTemplate extends Page{
    constructor(){
        super();
    }

    getProgramTemplate(){
        return `
                <section class="prog">
                    <header class = "prog-header">
                        ${this.getHeader()}
                        <button>Print course information as pdf</button>
                    </header>

                    <main>
                        ${this.getMain()}
                        <button>More Information for this course</button>
                    </main>
                    
                </section>

                <div>
                    <!--General information security-->
                    <p class="info_main">Every attempt is made to ensure that information contained on this website is current and accurate. Humber reserves the right to correct any error or omission, modify or cancel any course, program, fee, timetable or campus location at 
                        any time without prior notice or liability to users or any other Person.</p>

                    <p class="info_main">On June 29, 2018, the Provincial Government of Ontario announced the renaming of the Ministry of Advanced Education and Skills Development (MAESD) to the Ministry of Training, Colleges and Universities (MTCU). Both names may appear on this website.</p>
                </div>
        `
    }
}