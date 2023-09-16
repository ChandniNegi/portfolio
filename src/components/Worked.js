import './Workstyle.css'
import Work from "./Work"
import WorkCardData from "./WorkCardData"
import React from 'react'

const Worked = () => {
  return (
    <div className='work-container'>
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
       {WorkCardData.map((val,ind)=>{
        return(
            <Work
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}/>
        )
       })}
     </div>
  </div>
  )
}

export default Worked