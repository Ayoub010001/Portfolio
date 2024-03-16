import Button from "../components/Button"
function Contacts() {
  return (
    <section id='contacts'>
      <div className="contacts-container max-width">
        <p className="green-sub-title">04. What's Next ?</p>
        <h3 className="card-main-title">Get in touch</h3>
        <div className="contacts">
          <div className="box-contact">
            <h4>Linkedin</h4>
            <a target="_blank" href="https://www.linkedin.com/in/ayoub-ritoub/"><Button btnMsg="Visit My linkedin"/></a>
          </div>
          <div className="box-contact">
            <h4>Email</h4>
            <Button btnMsg="Contact Me"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts