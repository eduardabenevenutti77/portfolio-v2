const Contact = () => {
  const email = "mariaeduardabenevenutti77@gmail.com";
  const subject = "Visualize o seu portfólio";
  const body = "Olá, gostaria de entrar em contato sobre.."; // Replace with your email

  return (
    <div className="text-center my-20" id="contact">
      <h1 className="text-4xl font-bold mb-10 text-primary">Conecte-se comigo!</h1>
      <p className="text-lg mb-6">
        <span className="wave">👋</span> Diga um olá ou siga-me nas minhas redes sociais.
        Estou ansiosa para te conhecer! 🚀
      </p>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
      >
        {" "}
        <button className="btn btn-primary">Email</button>
      </a>
      <a
        href="https://www.linkedin.com/in/maria-eduarda-benevenutti-8aa046238/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary ml-2">Linkedin</button>
      </a>
      <a
        href="https://github.com/eduardabenevenutti77"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary ml-2">Github</button>
      </a>
    </div>
  );
};

export default Contact;
