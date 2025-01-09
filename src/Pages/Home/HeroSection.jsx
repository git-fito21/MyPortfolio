export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Arfito Saputra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End UI/UX Development</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          I am a Front-End UI/UX Developer with expertise in designing and building responsive, 
          user-friendly interfaces using tools like Figma and technologies such as HTML, CSS, JavaScript, React, and TailwindCSS. 
          I focus on creating seamless user experiences by transforming designs into clean, functional, and maintainable code. My work spans landing pages, 
          e-commerce platforms, and web applications, delivering innovative and user-centric solutions that align with modern design and development trends.
            <br /> 
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/icon1.jpg"/>
      </div>
    </section>
  );
}
