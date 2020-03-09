import Student from '../studentTemplate.js';

export default class JorgeFabregas extends Student{
    constructor(){
        super();
        this.html = this.getStudentData();
    }

    getStudentHeader(){
        return ` 
            <section class="user">
                <img src="/img/students/ProfilePicture.jpg" alt="Profile Picture" class="ProfilePicture zoom">
                <h1>Hello, <br> My Name is Kunal Dhawan.</h1>
            </section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate reiciendis ex, voluptas voluptatibus, nam repellendus distinctio odio perferendis provident rerum unde ullam inventore accusantium quisquam fuga tempora asperiores rem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse porro vero atque harum labore iste corrupti, at distinctio ab perferendis vitae id ut tempora! Recusandae odio modi explicabo culpa sequi!</p>
            `
    }

    getStudentHighlights(){
        return `
            <div class="tile zoom">
                <h2>Heading</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="tile zoom">
                <h2>Heading 2</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        `
    }

    getEducation(){
        return `
            <div class="dataTile">
                <p>Web Design & Development (2020)</p>
                <p>Humber College</p>
            </div>
            <div class="dataTile">
                <p>Mobile Application Development (2019)</p>
                <p>Canadore College</p>
            </div>
            <div class="dataTile">
                <p>Bachelors of Computer Applications (2014-2017)</p>
                <p>MGSU (India)</p>
            </div>
        `
    }

    getExperience(){
        return `
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
        `
    }

    getProjects(){
        return `
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
        `
    }

    getAbout(){
        return `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
        `
    }

    getAboutImage(){
        return `<a href="#"><img src="/img/students/ProfilePicture.jpg" alt="About Image" class="SampleImage"></a>`
    }
}