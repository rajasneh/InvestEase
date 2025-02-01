import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-2 mb-2 ">
        <h1 className="text-center mt-1 ">People</h1>
      </div>

      <div
        className="row p-5  text-muted "
        style={{ lineHeight: "1.9", fontSize: "1em" }}
      >
        <div className="col-1"></div>

        <div className="col-5 pd-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="founder"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-5 pd-5">
          <p>
            Nithin bootstrapped and founded InvestEase in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            InvestEase has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="/">Homepage</a> &nbsp;
            <a href="#TradingQnA">TradingQnA</a> &nbsp;
            <a href="#Twitter">Twitter</a>
          </p>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default Team;
