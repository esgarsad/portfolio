import './index.css';

function AboutMe() {

    return (
    <article className="box">
      <h2 className="title row">About Me <br /></h2>
      <div className="row about flex">
       
        <p id='bio' className='col-7' >
        I'm a web developer with just a little experience and tons of ideas. 
        I am a Mechanical Engineer, but have been interested in web development and coding about all my life, 
        and just last year I took the decision to jump into this full time. 
         I have a special interest for full stack applications but 
        I also love to implement great designs. I will never have enough of people creativity! 
        </p>
        <img className='col-3' src={require ("../../assets/images/edgar2022.jpg")} alt="edgar" />
      
      </div>
    </article>
  )
}

export default AboutMe;