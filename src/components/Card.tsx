import Tag from './Tag'


interface Project{
    image:string,
    title:string,
    post:string,
    description:string,
    skills:string[]
}

interface CardProps {
    prj: Project; // Expecting a single project
}



function Card({prj}:CardProps) {
  return (
    <div className="project-card">
        <div className="card-img-container">
            <div className='img-container'>
                <img src={prj.image} />  
            </div>
        </div>
        <div className="card-text-container">
            <div className="card-text">
                <p className="green-sub-title">{prj.post}</p>
                <h3 className="card-main-title">{prj.title}</h3>
                <div className="card-desc-container">
                    <p className="card-desc">{prj.description}</p>
                </div>
                <div className="tags-container">

                {
                    prj.skills.map((skill, index)=>{
                        return <Tag key={index} skill={skill}/>
                    })
                }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card