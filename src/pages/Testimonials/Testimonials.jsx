import React from 'react';
import './Testimonials.scss';

const Testimonials = ({ data }) => {
    const { testimonials } = data || {};
    var testimonialsElements = testimonials && testimonials.map(function (t) {
        return <li key={t.user}>
            <blockquote>
                <p>{t.text}</p>
                <cite>{t.user}</cite>
            </blockquote>
        </li>
    })
    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">

                    <div className="two columns header-col">
                        <h1><span>Client Testimonials</span></h1>
                    </div>

                    <div className="ten columns flex-container">
                        <ul className="slides">
                            {testimonialsElements}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials
