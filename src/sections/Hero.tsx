import Button from "../components/Button"
import { useInView } from "framer-motion"
import { useRef } from "react";


function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <div className="max-width hero-section">
        <p className="green-sub-title">Hi, my name is</p>
        <h1 className="main-title">Ayoub Ritoub</h1>
        <h1 className="secondary-title"
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 0.7 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
            }}
        >I build things for the web.</h1>
        <p className="desc-text">I'm a software engineer specializing in developing high-performance applications <br></br>using <span className="green-text">Spring Framework</span> and <span className="green-text">React.js</span>, with a strong focus on <span className="green-text">UI/UX design</span> <br></br>to deliver intuitive, scalable solutions.</p>
        {/**
         *<p className="desc-text">I'm a software engineer specializing in building and designing <br></br>exceptional digital <span className="green-text">JAVA</span> applications using <span className="green-text">React JS</span> and <span className="green-text">Spring Framework</span>.</p>
         */}
        <a href='#contacts'>
          <Button btnMsg="Contact Me">
          </Button> 
        </a>
      </div>
    </section>
  )
}

export default Hero