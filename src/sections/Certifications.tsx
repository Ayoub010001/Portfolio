import {certifications} from '../assets/data.json'



function Certifications() {
  return (
    <section id='certifications'>
    <div className="max-width">
      <p className="section--title"><span className="green-text">04.</span> Certifications</p> 
      <div className="certif--list">
          {
            certifications.map((certification, index)=>(
                <div key={index} className='certif'>
                  <img src={certification.certif}/>
                </div>
            ))
          }
      </div>
    </div>
  </section>
  )
}

export default Certifications