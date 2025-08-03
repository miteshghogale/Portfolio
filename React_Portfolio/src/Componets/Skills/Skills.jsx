import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="skills_title">Skills</h2>
        <p className="skills_subtitle">My Technical level</p>

        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills