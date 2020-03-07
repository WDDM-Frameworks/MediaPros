import Page from '../page.js';

export default class StudentTemplate extends Page{
    constructor(){
        super();
        this.html = `
                <section class="student">
                    <header class = "prog-header">
                        ${this.getHeader()}
                        
                    </header>

                    <main>
                        ${this.getMain()}
                    </main>
                    
                </section>
        `
    }
}