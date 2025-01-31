import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "95%" }}
            ></img>
            <p>
              &copy; 2010 - 2024, Not InvestEase Broking Ltd. All rights
              reserved.
            </p>
            <ul className="social">
              <li>
                <a href="https://x.com/asneh_raj">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rajasneh28/">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/asneh-raj-2080a1293/">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col footer-links">
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/products">Products</a>
            <br />
            <a href="pricing">Pricing</a>
            <br />
            <a href="/referral">Referral programme</a>
            <br />
            <a href="/careers">Careers</a>
            <br />
            <a href="InvestEase">InvestEase.tech</a>
            <br />
            <a href="press">Press & media</a>
            <br />
            <a href="cares">InvestEase cares(CSR)</a>
            <br />
          </div>
          <div className="col footer-links">
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Support</p>
            <a href="/contact">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            <a href="/connect-blog">I-Connect blog</a>
            <br />
            <a href="/list">List of charges</a>
            <br />
            <a href="downloads">Downloads & resources</a>
            <br />
          </div>
          <div className="col footer-links">
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Account</p>
            <a href="/open">Open an account</a>
            <br />
            <a href="/fund">Fund transfer</a>
            <br />
            <a href="/challenge">60 day challenge</a>
            <br />
          </div>
        </div>
        <div
          className="mt-5 text-small text-muted "
          style={{ fontSize: "14px" }}
        >
          <p>
            <a href="mailto:complaints@InvestEase.com">
              complaints@InvestEase.com
            </a>{" "}
            InvestEase Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through InvestEase Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through InvestEase Commodities Pvt.
            Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
            Registered Address: InvestEase Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@InvestEase.com, for
            DP related to{" "}
            <a href="mailto:dpInvestEase@InvestEase.com">dp@InvestEase.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of InvestEase and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="footer-graveyar-links text-center">
          <ul>
            <li className="footer-grave-links">
              <a href="nse">NSE</a> &nbsp;
              <a href="nse">BSE</a>&nbsp;
              <a href="nse">MCX</a>&nbsp;
              <a href="nse">Terms & conditions</a>&nbsp;
              <a href="nse">Policies & procedures</a>&nbsp;
              <a href="nse">Privacy policy</a>&nbsp;
              <a href="nse">Disclosure</a>&nbsp;
              <a href="nse">For investor's attention</a>&nbsp;
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
