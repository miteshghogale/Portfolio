import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/John-Cv.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About me</h2>
        <p className="section_subtitle">My Introduction</p>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">
                <Info/>
                <p className="about_description">Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>

                <a download="" href={CV} className="button button--flex">Download CV <i class="uil uil-import"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About