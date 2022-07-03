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
            name: 'React'
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
        }
    ]

    return (
        <section>
            <h2 className='title'>Resume</h2>
            <div className='box'>
                
                <h3>Proficiencies</h3>
                <div id='skills-div' className='row'>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className='skill' key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;
