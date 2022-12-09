import DisplayProducts from "./LandingPage/DisplayProducts/DisplayProducts";
import FirstSection from "./LandingPage/FirstSection/FirstSection";
import Nav from "./LandingPage/NAV/Nav";
import SmartBand from "./LandingPage/SmartBand/SmartBand";
import pics from "../images/app-store.png"
function App() {
  return (
    <div className="app">
      <div className="nav-first_section">
        <Nav />
        <FirstSection />
      </div>
      <DisplayProducts />
      <SmartBand />
      <footer>
        <article>
          <h3>Download Our App</h3>
          <p>Download App for Android and ios mobile phone</p>
          <img src={pics} width="100px" alt="google" />
          <img src={pics} width="100px" alt="apple" />
        </article>

        <article>
        <img src={pics} width="100px" alt="apple" />
        <p>Our purpose is To Sustainably Make the Pleasure 
       <br />   and Benefits of Sports Accessible to the many</p>
        </article>

        <article>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#r">Coupons</a> </li>
            <li><a href="#r">Blog Post</a> </li>
            <li><a href="#r">Return Policy</a> </li>
            <li><a href="#r">Join Affiliate</a> </li>
          </ul>
        </article>

        <article>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#r">Facebook</a> </li>
            <li><a href="#r">Twitter</a> </li>
            <li><a href="#r">Instagram</a> </li>
            <li><a href="#r">YouTube</a> </li>
          </ul>
        </article>
      </footer>
    </div>
  );
}

export default App;
