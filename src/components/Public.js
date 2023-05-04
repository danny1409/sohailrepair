import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Sohail shaik Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Madhuranagar,Sohail shaik Repairs provides a trained staff
          ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Sohail shaik Repairs
          <br />
          Hyderabad
          <br />
          TELANGANA, IND 500008
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Sohail shaik</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
