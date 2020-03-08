import Page from '../page.js';

export default class StudentTemplate extends Page{
    constructor(){
        super();
        this.html = `
        <section class="InfoGrid">
        <div>
          <section class="user">
            <img src="/img/ProfilePicture.jfif" class="ProfilePicture zoom">
            <h1>Hello, <br> My Name is Hardeep Singh.</h1>
          </section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate reiciendis ex, voluptas voluptatibus, nam repellendus distinctio odio perferendis provident rerum unde ullam inventore accusantium quisquam fuga tempora asperiores rem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse porro vero atque harum labore iste corrupti, at distinctio ab perferendis vitae id ut tempora! Recusandae odio modi explicabo culpa sequi!</p>
        </div>
        <div class="tileGrid">
          <div class="tile zoom">
            <h2>Heading</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="tile zoom">
            <h2>Heading 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        </section>
        <section class="dataGrid">
        <div>
            <h3>Education</h3>
            <div>
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
            </div>
        </div>
        <div>
            <div>
            <h3>Experience</h3>
            <div>
                <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
                </div>
                <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
                </div>
                <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
                </div>
            </div>
            </div>
        </div>
        <div>
            <h3>Projects</h3>
            <div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
            <div class="dataTile">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et voluptatibus delectus numquam.</p>
            </div>
        </div>
        </div>
        </section>
        <article class="dataGridTile">
            <div>
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio alias corporis, nobis provident aspernatur minima placeat reprehenderit tenetur eum dolores. Vitae inventore, eaque aperiam laboriosam repellendus nobis quidem a?</p>
            </div>
            <a href="#"><img src="/img/ProfilePicture.jfif" class="SampleImage"></a>
        </article>
        `
    }
}