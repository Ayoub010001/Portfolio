import Card from "../components/Card"
import {projects} from "../assets/data.json"

console.log(projects);
console.log(projects[0]);

function Projects() {
  return (
    <section>
      <div className="max-width">
        <p className="section--title"><span className="green-text">01.</span> Projects</p> 
        <div className="project-cards-container">
          {
            projects.map((project,index)=>(
              <Card key={index} prj={project}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects