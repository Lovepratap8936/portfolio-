
import React from 'react'
import ques from "../assets/ques.png";
import Github from "../components/Github";
export default function Experiences() {
  return (
    <div className='experiences'>
    
      <h1  className='heading'>Experience</h1>
      <hr  />
      <div data-aos='fade-right' className='journey'>
      <div className='educard'>
        <h1 className=''>Clovity Infotech </h1>
        <p> Assisted in managing and optimizing Jira workflows to enhance project tracking and collaboration.
            Supported the team in agile ceremonies, including sprint planning and retrospectives.
        </p>
        <p> Contributed to documentation and reporting, ensuring clarity and alignment among stakeholders.
            Gained hands-on experience in project management tools and agile methodologies.
        </p>

        <hr />
        <p>Jira Intern (Onsite)</p>
        <p>Sep/2024 - Present</p>
    </div> 
    </div>
    <div data-aos='fade-right' className='journey'>
      <div className='educard'>
        <h1 className=''>Zidio Developement</h1>
        <p>Collaborated in a team to work on projects, focusing on creating and optimizing front-end using React and
           advanced UI libraries.
        </p>
        <p> Utilized Git for version control and collaborated with the team using agile methodologies, participating in daily
            meetings and code reviews.
        </p>

        <hr />
        <p>Web Developer Intern</p>
        <p>june/2024 - Aug/2024</p>
    </div> 
    </div>
    <h1 className='heading'>Github Profile</h1>
      <hr />
      </div>
  )
}
