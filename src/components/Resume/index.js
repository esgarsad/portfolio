import './index.css';

const Resume = () => {
    const skills = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JavaScript'
        },
                {
            name: 'Node.js'
        },
        {
            name: 'Express'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'MySQL'
        },{
            name: 'sequelize'
        },{
            name: 'mongoose'
        },
        {
            name: 'Heroku'
        },
        {
            name: 'Github'
        },
        {
            name: 'React'
        }
    ]

    return (
        <section>
            <div className='box'>
                <h3>Full stack developer, graduated from Vanderbilt University coding Bootcamp</h3>
                <h3>Languages and tools I use: </h3>
                <div id='skills-div' className='row'>
                    <div className='col-2'>
                    <ol>
                        {skills.map((skill, index) => (
                            <li className='skill' key={index}>{skill.name}</li>
                        ))}
                    </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
