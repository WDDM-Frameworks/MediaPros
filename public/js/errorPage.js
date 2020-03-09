import Page from './page.js';

export default class ErrorPage extends Page{
    constructor(){
        super();
        this.html = `
            <h1 class="faculty">Error 404</h1>
            <h2 class="faculty">Page Not Found</h2>
        `
    }
}