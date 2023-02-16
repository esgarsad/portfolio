import { useState } from 'react';
import './index.css';
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'shopping-smarter',
            deployed: 'https://fathomless-bayou-71383.herokuapp.com',
        },
        {
            name: 'leisure-app',
            deployed: 'https://lisavi28.github.io/leisureapp/',
        },
        {
            name: 'find-your-teach',
            deployed: 'https://fierce-lake-31540.herokuapp.com/',
        },
        {
            name: 'weather-dashboard',
            deployed: 'https://esgarsad.github.io/weather-dashboard/',
        }
         ])

    return (
        
        <div id='projects' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                    <h2>{formatTitle(image.name)}</h2>
                    <div><a href={image.deployed} target= "_blank" rel="noreferrer">
                        <img
                            className='project_img'
                            src={require(`../../assets/images/${image.name}.jpg`)}
                            alt={image.name}
                            key={index}
                            />
                        </a>
                    </div>
                </div>
            ))}
            
        </div>
       
    )
    
}

export default ProjectList;