
interface Skill{
  skill:string
}


function Tag({skill}: Skill) {
  return (
    <div className="tag">
        <p className="tag-Name">{skill}</p>
    </div>
  )
}

export default Tag