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
        `
    }
}