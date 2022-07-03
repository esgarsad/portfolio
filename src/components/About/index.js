import { useState } from 'react';


import './index.css';

function AboutMe() {

    return (
    <article className="box">
      <h2 className="title">About Me <br /></h2>
      <div className="row flex column">
       
        <p id='bio' className="col-10">
        I'm a web developer with just a little experience but tons of ideas. 
        I have been interested in web development and coding about all my life, 
        but just last year I took the decision to jump into this full time. 
        I'll be glad to help you no matter what your project is. I have a special interest for full stack applications but 
        I also love to implement great designs. I will never have enough of people creativity! 
        </p>
       
      </div>
    </article>
  )
}

export default AboutMe;