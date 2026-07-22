import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper border-top">
      <br />

      <div className="container">
        <div className="row">
          {/* Logo & copyright */}
          <div className="col footer-brand">
            <img src="/media/images/logo.svg" alt="Zerodha" />
            <br />
            <br />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="social">
              <div className="social-icon">
                <Link to="https://www.x.com/zerodha">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="https://www.instagram.com/zerodhaonline/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="https://www.facebook.com/zerodha.social">
                  <i className="fa-brands fa-facebook"></i>
                </Link>

                <Link to="https://www.linkedin.com/company/zerodha">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
              <hr />
              <div className="social-icon">
                <Link to="https://www.youtube.com/@zerodhaonline">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link to="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
                <Link to=" https://t.me/zerodhain">
                  <i className="fa-brands fa-telegram"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="col offset-1 footer-col">
            <h5>Account</h5>
            <Link to="#">Open demat account</Link>
            <Link to="#">Minor demat account</Link>
            <Link to="#">NRI demat account</Link>
            <Link to="#">Commodity</Link>
            <Link to="#">Dematerialisation</Link>
            <Link to="#">Fund transfer</Link>
            <Link to="#">MTF</Link>
            <Link to="#">Referral program</Link>
          </div>

          {/* Support */}
          <div className="col footer-col">
            <h5>Support</h5>
            <Link to="#">Contact us</Link>
            <Link to="#">Support portal</Link>
            <Link to="#">How to file a complaint?</Link>
            <Link to="#">Status of your complaints</Link>
            <Link to="#">Bulletin</Link>
            <Link to="#">Circular</Link>
            <Link to="#">Z-Connect blog</Link>
            <Link to="#">Downloads</Link>
          </div>

          {/* Company */}
          <div className="col footer-col">
            <h5>Company</h5>
            <Link to="#">About</Link>
            <Link to="#">Philosophy</Link>
            <Link to="#">Press & media</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Zerodha Cares (CSR)</Link>
            <Link to="#">Zerodha.tech</Link>
            <Link to="#">Open source</Link>
          </div>

          {/* Quick links */}
          <div className="col footer-col">
            <h5>Quick links</h5>
            <Link to="#">Upcoming IPOs</Link>
            <Link to="#">Brokerage charges</Link>
            <Link to="#">Market holidays</Link>
            <Link to="#">Economic calendar</Link>
            <Link to="#">Calculators</Link>
            <Link to="#">Markets</Link>
            <Link to="#">Sectors</Link>
          </div>

          {/* Legal & disclosures */}
          <div className="row mt-5 footer-legal">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
              no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              <a
                className="footer-link-blue"
                href="mailto:complaints@zerodha.com"
              >
                <b> complaints@zerodha.com </b>
              </a>
              and for DP related to
              <a className="footer-link-blue" href="mailto:dp@zerodha.com">
                <b> dp@zerodha.com</b>
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on
              <a
                className="footer-link-blue"
                href="https://scores.sebi.gov.in/"
              >
                <b> SEBI SCORES </b>
              </a>
              SCORES portal. Mandatory details for filing complaints on SCORES:
              Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a className="footer-link-blue" href="https://smartodr.in/login">
                <b>Smart Online Dispute Resolution |</b>
              </a>{" "}
              <a
                className="footer-link-blue"
                href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
              >
                <b>Grievances Redressal Mechanism</b>
              </a>
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE.
              <a className="footer-link-blue" href="">
                <b> NSE broker factsheet</b>
              </a>
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
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please.
              <a className="footer-link-blue" href="/">
                <b> create a ticket here.</b>
              </a>
            </p>
            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
            <div className="footer-bottom-links">
              <a href="#">
                <b>NSE</b>
              </a>
              <a href="#">
                <b>BSE</b>
              </a>
              <a href="#">
                <b>MCX</b>
              </a>
              <a href="#">
                <b>Terms & conditions</b>
              </a>
              <a href="#">
                <b>Policies & procedures</b>
              </a>
              <a href="#">
                <b>Privacy policy</b>
              </a>
              <a href="#">
                <b>Disclosure</b>
              </a>
              <a href="#">
                <b>For investor's attention</b>
              </a>
              <a href="#">
                <b>Investor charter</b>
              </a>
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
