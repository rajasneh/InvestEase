import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <h4><a href="#support" style={{textDecoration:"none"}}>Track Tickets</a></h4>
      </div>
      <div className="row p-5 m-2">
        <div className="col-6 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <br></br>
          <a href="#support">Track account opening</a>&nbsp;&nbsp;
          <a href="#support">Track segment activation</a>&nbsp;&nbsp;
          <a href="#support">Intraday margins</a>&nbsp;&nbsp;
          <a href="#support">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4" >
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#support">Current Takeovers and Delisting - January 2024</a>&nbsp;
            </li>
            <li>
              <a href="#support">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;