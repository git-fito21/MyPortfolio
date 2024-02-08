export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Arfito Saputra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Design UI/UX</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          Are you looking for an attractive, functional, inexpensive and user-focused UI/UX design solution for your product or website?
          In today's digital journey, great user experience is the key to success. I am a UI/UX designer ready to help you create a stunning appearance and optimal experience for your users
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Arfito.jpg"/>
      </div>
    </section>
  );
}
