import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-main-title">F. R. O. S. T.</h1>
        <p className="about-subtitle">The Friendmas Rivalry of Seasonal Triumph</p>
        <p className="about-address">391 Wethersfield St, Rowley MA 01969</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Overview</h2>
          <p>Welcome to the annual FROST championship! FROST is more than just a competition, it's a tradition! Each year we invite our friends and family to come together to celebrate the holidays, bring out your inner competitive spirit, and put your baking skills to the test.</p>
          <p>We kindly ask for each person/couple to bring:</p>
          <ul>
            <li>(1) bottle of wine OR</li>
            <li>(1) pack of cider OR</li>
            <li>(1) pack of beer</li>
          </ul>
          <p>We will have all of these as well, but it will help ensure the house does not run dry with the large amount of participants!</p>
        </section>

        <section className="about-section">
          <h2>Dress Code</h2>
          <p>Wear your holiday best, your favorite ugly sweater, or holiday pajamas!</p>
        </section>

        <section className="about-section">
          <h2>Teams</h2>
          <p>Teams can consist of:</p>
          <ul>
            <li>One adult,</li>
            <li>Two adults, or</li>
            <li>Two adults and their children.</li>
          </ul>
          <p>Older children may choose to participate on their own as individual players. Each event will be played by one player at a time. All teams must come up with a team name.</p>
        </section>

        <section className="about-section">
          <h2>Prizes</h2>
          <p>The winner will receive a one of a kind F.R.O.S.T. championship Santa trophy, with their name engraving plate paid for and shipped by us. The trophy has spots for 32 plates - let's fill them up! If you win, the expectation is that the trophy will proudly be displayed in your home, and be returned the following year for the next winner. If you store it in the attic, Santa will know.</p>
          <p>Additionally, the winner of the entire event gets to choose the Christmas movie we all watch in the basement afterwards.</p>
        </section>

        <section className="about-section">
          <h2>Events</h2>
          <p>There will be six olympic style events in total and a cookie competition.</p>
          <p>You will not know the games until the day of the event. We as hosts will obviously know them, but you can trust that we will not practice or do anything nefarious. The integrity of F.R.O.S.T is of the utmost importance to us.</p>
          <p>Before each event, your team must nominate one player to participate. The nomination will happen before the event is announced. If you are a team of 1, you will play each event. If you are a team of 2 you will play a total of 3 events. Young children can help or play as an individual.</p>
        </section>

        <section className="about-section">
          <h2>Cookie Competition</h2>
          <p className="note"><strong>Note:</strong> please consult the survey before baking the cookie to ensure that allergies are accounted for!</p>

          <p>For the purposes of this competition, a cookie is defined as any small, sweet, handheld dessert item. This includes, but is not limited to:</p>
          <ul>
            <li>Traditional drop, rolled, bar, or molded cookies</li>
            <li>Layered or filled confections such as 7-layer cookies, rainbow cookies, and sandwich-style cookies</li>
            <li>Nut-based or coconut-based items such as macaroons</li>
            <li>Small filled pastries, provided they are presented as individual servings</li>
          </ul>

          <p>Cookies may be baked or no-bake, and may incorporate a wide range of ingredients and techniques. Entries should be individually portioned, transportable by hand, and intended to be eaten without utensils.</p>

          <p>The goal of the cookie competition is to be anonymous. The expectation is that the cookie will be baked prior to arriving at the house. Once everyone's cookies have arrived, we ask that you taste each cookie from the time the party starts, until thirty minutes after the last game. We will provide printouts to score the cookies. The cookies will be judged on the following criteria:</p>

          <h3>Presentation</h3>
          <p>Get creative, not just the presentation of the cookie itself but anything you decide to present your cookie on. Skies the limit, anything you bring is fair game.</p>

          <h3>Taste</h3>
          <p>What is this cookie's flavor characteristic? Is it perfectly sweet? Edgy with bitterness? Enhanced with saltiness?</p>

          <h3>Texture</h3>
          <p>Is this cookie perfectly moist, chewy, crispy, crumbly, gooey?</p>

          <p>Each category will be rated 1-5. Whoever has the most total points is the winner!</p>
        </section>

        <section className="about-section">
          <h2>Total Scoring</h2>
          <p>The scoring will be based on the number of participants playing. If we have N participants:</p>
          <ul>
            <li>1st place: N points</li>
            <li>2nd place: N - 2 points</li>
            <li>3rd place: N - 4 points</li>
            <li>4th place: N - 5 points</li>
            <li>5th place: N - 6 points</li>
            <li>….</li>
          </ul>
          <p>Everyone will always get 1 point in the event, and this ensures that 1st, 2nd, and 3rd are special.</p>
          <p>The cookie competition winner is awarded N/2, rounded up - winner takes all.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
