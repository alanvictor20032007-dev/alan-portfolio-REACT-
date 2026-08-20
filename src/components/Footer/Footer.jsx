import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} Alan Victor. All Rights Reserved.
      </p>

      <nav aria-label="Social Links">
        <a href="#" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          Github
        </a>

        <a href="mailto:alan20032007@gmail.com">
          You can reach me at my E-mail Address here.
        </a>
      </nav>
    </footer>
  );
}

export default Footer;