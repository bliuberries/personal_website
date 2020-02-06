import React from 'react';
import resumeStyles from './resume.module.scss';

const Formatter = (props) => {
  const { skills, education, work } = props

  return (
    <div>
      <div className={resumeStyles.gridA}>
        <ul className={resumeStyles.item1}>
          Technologies
        </ul>
        <ul className={resumeStyles.item2}>
          {skills.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
      <div className={resumeStyles.gridA}>
        <ul className={resumeStyles.item1}>
          Work Experience
          </ul>
        <ul className={resumeStyles.item2}>
          {work.map((item, index) => {
            let key = item.key.length > 0 ? <div> Key Achievements </div> : null;
            return (
              <div key={index}>
                <strong>
                  {item.role}
                </strong>
                <br/>
                <br/>
                {item.companies.map((employment, index) => {
                  return (
                    <strong key={index}>
                      {employment.name + ' - ' + employment.place + ', ' + employment.date}
                      <br />
                    </strong>
                  )
                })}
                <ul>
                  {item.experience.map((exp, index) => {
                    return (
                      <li key={index}>{exp}</li>
                    )
                  })}
                  {key}
                  {item.key.map((bullets, index) => {
                    return (
                      <li key={index}>{bullets}</li>
                    )
                  })}
                </ul>
                <br/>
              </div>
            )
          })}
        </ul>
      </div>
      <div className={resumeStyles.gridA}>
        <ul className={resumeStyles.item1}>
          Education
        </ul>
        <ul className={resumeStyles.item2}>
          {education.map((edu, index) => {
            return (
              <li key={index}>
                <strong>{edu[0]}</strong>
                <br />
                <span>{edu[1] +', '+ edu[2] +', '+ edu[3]}</span>
              </li>
            )
          })}
        </ul>
        <br/>
      </div>
    </div>
  )
}

export default Formatter;