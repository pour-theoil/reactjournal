import React from "react";
import loganpic from './Logan.jpg'

export const AboutMe = () => (
    <>
        <div className="statement">
            <section className="personal">
                <h2>Future Web Dev</h2>
                <p>I am currently enrolled in a C# focused web development bootcamp hosted by Nashville Software School</p>
            </section>
            <section className="personal">
            <picture>
                <img className="photo" src={loganpic} alt="Headshot of Logan"/>
            </picture>
            </section>
        </div>
    </>
)