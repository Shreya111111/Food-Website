import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Since our modest beginnings in 2005 with a little space in Toronto’s
          stylish Yorkville locale,<b>Tasty Treats</b> is development has been
          enlivened with the energy to cook and serve solid, Indian-roused
          takeout food. In contrast to other Indian eateries,<b>Tasty Treats</b>{" "}
          was made with the explicit expectation to appear as something else. We
          realize numerous individuals love Indian sustenance, yet a large
          number of them loathe or are unconscious of the regularly unfortunate
          fixings that make run-of-the-mill Indian nourishment taste so great.
          Our menu highlights things that utilize the sound and fragrant
          flavors, however, forget the stuffing ghee, spread, oil, and
          overwhelming cream.<b>Tasty Treats</b> has developed to incorporate
          four superb takeout areas in Toronto, with additional to come sooner
          rather than later. Our group takes pride in the way that we can
          furnish our new and faithful clients with extraordinary tasting
          Indian-roused nourishment that is not normal for that some other
          Indian eateries you visit.We perceive that a few people are as yet
          searching for run-of-the-mill Indian nourishment, and that is fine
          with us. Our disclaimer is that on the off chance that you’re
          anticipating overwhelming, slick, undesirable Indian nourishment,
          <b>Tasty Treats</b> isn’t the place for you.Our expectation is that
          you’ll join the developing pattern that such a large number of others
          have officially found and you will attempt <b>Tasty Treats</b> as a
          remarkable option to other Indian eateries as well as to all other
          solid sustenance alternatives out there!
        </p>
      </div>
    </div>
  );
}

export default About;
