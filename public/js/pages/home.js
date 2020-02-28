import Page from '../page.js';

export default class Home extends Page{
    constructor(){
        super();
        this.html = `
            <header class='main-header'>
                <h1 class='main-header-heading>Media Pros</h1>
            </header>
            <main class="main-main">
                <article class="Programs">
                    <h2>Programs</h2>
                    <div class='programs-grid'>
                        <div class="program-card">
                            <span><img src="" alt=""></span>
                            <span>3D Modelling</span>
                        </div>
                        <div class="program-card">
                            <span><img src="" alt=""></span>
                            <span>Web Design and Development</span>
                        </div>
                        <div class="program-card">
                            <span><img src="" alt=""></span>
                            <span>Graphics Design</span>
                        </div>
                    </div>
                </article>
                
                <article class="grad-show>

                </articel>
            </main>
        `
    }
}