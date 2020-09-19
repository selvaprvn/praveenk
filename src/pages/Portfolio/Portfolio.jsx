import React from 'react';
import './Portfolio.scss';

const Portfolio = ({ projects }) => {
    const projectsElements = projects && projects.map(function (proj) {
        var projectImage = 'images/portfolio/' + proj.image;
        return <div key={proj.title} className="columns portfolio-item">
            <div className="item-wrap">
                <a href={proj.url} title={proj.title}>
                    <img alt={proj.title} src={projectImage} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{proj.title}</h5>
                            <p>{proj.category}</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
            </div>
        </div>
    })
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {projectsElements}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio
