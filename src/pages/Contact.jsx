const Contact = () => {
    return (
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Contact</h2>
          <p className="text-gray-700 mb-4">
            N'hésitez pas à me contacter pour toute opportunité ou question !
          </p>
          <a
            href="mailto:tonemail@example.com"
            className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition"
          >
            Envoyer un email
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;