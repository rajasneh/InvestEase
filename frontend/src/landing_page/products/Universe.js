import React from "react";
function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center ">
        <h1 >The InvestEase Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="logos" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="logos" style={{height:"2.8rem"}}/>
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="logos" style={{height:"2.8rem"}}/>
          <p className="text-small text-muted mt-2">Diploma trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="logos" style={{height:"2.8rem"}}/>
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="logos" style={{height:"2.8rem"}}/>
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="logos" style={{height:"2.8rem"}}/>
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mb-4 mt-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
