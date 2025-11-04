export function Contact() {
  return (
    <section className="flex flex-col items-center px-40 pt-8 w-2/3">
      <h2 className="text-xl mb-2">Contact</h2>
      <p className="text-center">
        I am open to new opportunities and collaborations. Please feel free to{" "}
        <a
          href="mailto:seu-email@exemplo.com"
          className="text-blue-500 hover:underline"
        >
          contact me via email
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/pedro-henrique-oliveira-braga/"
          className="text-blue-500 hover:underline"
        >
          connect with me on LinkedIn
        </a>
      </p>
    </section>
  );
}
