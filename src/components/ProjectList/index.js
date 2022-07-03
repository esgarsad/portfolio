import { useState } from 'react';

import './index.css';
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'shopping-smarter',
            deployed: 'https://fathomless-bayou-71383.herokuapp.com',
            github: 'https://github.com/esgarsad/shopping-smarter'
        },
        {
            name: 'leisure-app',
            deployed: 'https://lisavi28.github.io/leisureapp/',
            github: 'https://github.com/Lisavi28/leisureapp'
        },
        {
            name: 'note-taker',
            deployed: 'https://esgarsad.github.io/run-buddy/',
            github: 'https://github.com/esgarsad/run-buddy'
        },
        {
            name: 'weather-dashboard',
            deployed: 'https://esgarsad.github.io/weather-dashboard/',
            github: 'https://github.com/esgarsad/weather-dashboard'
        }
     
    ])

    return (
        <div id='projects' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                    <h2>{formatTitle(image.name)}</h2>
                    <div>
                        <img
                            className='project_img'
                            src={require(`../../assets/images/${image.name}.png`).default}
                            alt={image.name}
                            key={index}
                        />
                        <div className='project_description border project-content'>
                            <div className='row project_details'>
                            <div className='col-10'>
                                    <p className='project-name'>{formatTitle(image.name)}</p>
                                </div>
                                <div className='col-10'>
                                    <a className='project-links' href={image.deploy} target='_blank'>Deployed App Link</a>
                                </div>
                                <div className='col-10'>
                                    <a className='project-links' href={image.github} target='_blank'>GitHub Repo Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectList;