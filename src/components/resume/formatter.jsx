import React from 'react';

const Formatter = (props) => {
  const { skills, education, work } = props

  return (
    <div>
      <div className="Technologies">
        <div>
          Technologies
        </div>
        <ul>
          {skills.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
      <div className="workExperience">
        <ul>
          Work Experience
          </ul>
        <ul>
          {work.map((item, index) => {
            let key = item.key.length > 0 ? <div> Key Achievements </div> : null;
            return (
              <div key={index}>
                <div>
                  {item.role}
                </div>
                {item.companies.map((employment, index) => {
                  return (
                    <span key={index}>
                      {employment.name + employment.place}
                      <span>{employment.date}</span>
                      <br />
                    </span>
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
              </div>
            )
          })}
        </ul>
      </div>
      <div className="education">
        Education
          {education.map((brain, index) => {
          return (
            <div key={index}>
              <strong>{brain[0]}</strong>
              <br/>
              <span>{brain[1] + brain[2] + brain[3]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Formatter;