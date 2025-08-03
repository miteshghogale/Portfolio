import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="services_title-main">Qualification</h2>
        <p className="services_subtitle">My personel journey</p>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>
            </div>

            <div className="qualifications_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div className='qualification_align'>
                            <h3 className="qualification_title">Web Design</h3>
                            <span className="qualification_subtitle">Spain-Institute</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div className='qualification_align'>
                            <h3 className="qualification_title">Art Director</h3>
                            <span className="qualification_subtitle">Spain-Institute</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div className='qualification_align'>
                            <h3 className="qualification_title">Web Devlopment</h3>
                            <span className="qualification_subtitle">Spain-Institute</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div className='qualification_align'>
                            <h3 className="qualification_title">UI/UX Development</h3>
                            <span className="qualification_subtitle">Spain-Institute</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div className='qualification_align'>
                            <h3 className="qualification_title">Product Designer</h3>
                            <span className="qualification_subtitle">Microsoft - Spain</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div className='qualification_align'>
                            <h3 className="qualification_title">UI/UX Designer</h3>
                            <span className="qualification_subtitle">Apple - Spain</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div className='qualification_align'>
                            <h3 className="qualification_title">Web Designer</h3>
                            <span className="qualification_subtitle">Figma - Spain</span>
                            <div className="qualification_calender">
                                <i class="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification