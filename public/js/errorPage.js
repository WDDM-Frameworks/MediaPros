import Page from './page.js';

export default class ErrorPage extends Page{
    constructor(){
        super();
        this.html = `
            <h1>Page Not Found</h1>
        `
    }
}