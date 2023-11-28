import Button from "./Button";
import Github from "./Github";
import "./Header.css";
import LinkedIn from "./LinkedIn";

const Header = () => {
  return (
    <header className="headerbox">
      <h1>
        Hi, I am <span>Runhong Huang.</span>
      </h1>
      <h2>A Front End Developer</h2>
      <p>
        Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
        perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
        modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
        minima consectetur.
      </p>
      <div>
        <Button name={"resume"} />
        <Github />
        <LinkedIn />
      </div>
    </header>
  );
};
export default Header;
