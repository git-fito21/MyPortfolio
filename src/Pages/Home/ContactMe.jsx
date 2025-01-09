export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();


    const firstName = e.target["first-name"].value;
    const lastName = e.target["last-name"].value;
    const email = e.target["email"].value;
    const phoneNumber = e.target["phone-number"].value;
    const topic = e.target["choose-topic"].value;
    const message = e.target["message"].value;

    const whatsappNumber = "6281217659272";

    const whatsappMessage = `Hi, my name is ${firstName} ${lastName}.\n\nEmail: ${email}\nPhone: ${phoneNumber}\nTopic: ${topic}\n\nMessage: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I opened this Front-end Developer service to improve my skills and build relationships between me and customers.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" name="choose-topic" required>
            <option value="">Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
      </form>
    </section>
  );
}