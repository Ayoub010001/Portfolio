import Button from "../components/Button"
function Hero() {
  return (
    <section>
      <div className="max-width hero-section">
        <p className="green-sub-title">Hi, my name is</p>
        <h1 className="main-title">Ayoub Ritoub</h1>
        <h1 className="secondary-title">I build things for the web.</h1>
        <p className="desc-text">I'm a software engineer specializing in building and designing exceptional digital experiences using <span className="green-text">React JS</span>.</p>
        <Button btnMsg="Contact Me" />
      </div>
    </section>
  )
}

export default Hero