import Page from '../page.js';

export default class Contact extends Page{
    constructor(){
        super();
        this.html = `
        <h1 class="contactTop">For further information on Humber College, please contact our Enquiry Centre:</h1>
        <h2 class="contactNum">416.675.3111</h2>
        <h3>Monday to Thursday: 8:30 a.m. - 5:30 p.m.</h3>
        <h3>Friday: 8:30 a.m. - 4:30 p.m.</h3>
        <h1 class="contactBottom">Or contact us through:</h1>
        <h2 class="email"><a href="mailto:enquiry@humber.ca">enquiry@humber.ca</h2>
        `
    }
}