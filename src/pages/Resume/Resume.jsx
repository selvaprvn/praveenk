import React from 'react';
import './Resume.scss';

const Resume = ({ data }) => {
    const { skillmessage, education, work, skills } = data || {};
    var educationElements = education && education.map(function (edu) {
        return <div key={edu.school}><h3>{education.school}</h3>
            <p className="info">{edu.degree} <span>&bull;</span><em className="date">{edu.graduated}</em></p>
            <p>{edu.description}</p></div>
    })
    var workElement = work && work.map(function (w) {
        return <div key={w.company}><h3>{w.company}</h3>
            <p className="info">{w.title}<span>&bull;</span> <em className="date">{w.years}</em></p>
            <p>{w.description}</p>
        </div>
    })
    var skillsElement = skills && skills.map(function (skill) {
        var className = 'bar-expand ' + skill.name.toLowerCase();
        return <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{skill.name}</em></li>
    })
    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {educationElements}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    {workElement}
                </div>
            </div>

            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    <p>{skillmessage}
                    </p>

                    <div className="bars">
                        <ul className="skills">
                            {skillsElement}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Resume
