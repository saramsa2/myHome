import React from 'react';
import './Profile.css';

function About_me(props) {
  const skils = [
    {title: "C#", level: "90"},
    {title: "Java", level: "85"},
    {title: "Python", level: "70"},
    {title: "HTML", level: "90"},
    {title: "JS", level: "75"},
    {title: "CSS", level: "60"},
    {title: "DB", level: "80"},
    {title: "JSON", level: "90"},
    {title: "API", level: "80"},
    {title: "M/L", level: "75"},
    {title: "Nodejs", level: "70"},
    {title: "Reactjs", level: "85"},
  ]
  return (
    <div>      
      <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img src={require("../images/IMG_1288.jpg")} alt="profile_pic"></img>
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Chulmin Hwang</p>
                <p className="regular">Software Devleoper<br/>saramsa2@gmail.com</p>                
              </div>              
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul style={{"padding":"0px"}}>
                {skils.map(skill => (
                  <li>
                    <div className="skill_name">
                      {skill.title}
                    </div>
                    <div className="skill_progress">
                      <span style={{"width": skill.level+"%"}}></span>
                    </div>
                    <div className="skill_per">{skill.level}%</div>
                  </li>
                ))}                
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
              <div className="title">
                <p className="bold">About me</p>
              </div>
              <p>Waiting.....</p>
          </div>
          <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Work Experience</p>
              </div>
              <ul>
                  <li>
                    <div className="date">Jan 2005 – Apr 2013</div> 
                    <div className="info">
                        <p className="semi-bold">Canon Korea (Canon Korea Business Solutions, Inc.)</p> 
                      <p>Worked in various roles in the development and management departments.</p>
                    </div>
                  </li>
                  <li>
                    <div className="date">Dec 2017 – Oct 2020</div>
                    <div className="info">
                          <p className="semi-bold">Oscar Bakery Lunchbar</p> 
                        <p>Owned a small lunchbar and managed day-to-day business operations</p>
                      </div>
                  </li>                  
              </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
                <p className="bold">Education</p>
              </div>
            <ul>
                  <li>
                      <div className="date">Mar 2022 - Dec 2022</div> 
                      <div className="info">
                          <p className="semi-bold">Graduate Diploma in Computing(Unitec, NZ)</p> 
                        <p>Learnt development life cycle, programming languages, database, machine learning and cloud platforms.</p>
                      </div>
                  </li>
                  <li>
                    <div className="date">Mar 2003 - Feb 2005</div>
                    <div className="info">
                          <p className="semi-bold">Masters in Electrical Engineering<br/>(Chung-Ang University in Seoul, South Korea)</p> 
                        <p>Reinforcement learning was main theme of master research</p>
                      </div>
                  </li>
                  <li>
                    <div className="date">Mar 1996 - Feb 2003</div>
                    <div className="info">
                          <p className="semi-bold">Bachelor of Electrical Engineering<br/>(Chung-Ang University in Seoul, South Korea)</p> 
                        <p>Studied about hardware of computer and tried control 2 wheels-robot</p>
                      </div>
                  </li>
              </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
                <p className="bold">Hobby</p>
              </div>
            <ul>
              <li><i><img src={require('../images/book.jpg')} style={{width:"50px"}} alt="book reading"/></i></li>
              <li><i><img src={require('../images/paragliding.png')} style={{width:"50px"}} alt="paragliding"/></i></li>
              <li><i><img src={require('../images/snowboarding.png')} style={{width:"50px"}} alt="snowboarding"/></i></li>
              <li><i><img src={require('../images/travel.png')} style={{width:"50px"}} alt="travel"/></i></li>
            </ul>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default About_me;