import { PiFacebookLogoBold } from "react-icons/pi";
import {
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

import { Link } from "react-router-dom";

import paymentFooter from "../../assets/images/payments-footer.png";

function Footer() {
  return (
    <footer className="mt-20 bg-[#dcefd2] px-4 pt-20 lg:px-8">
      <div className="mb-12 flex flex-wrap justify-between md:order-1">
        <div className="order-2 basis-1/2 md:basis-1/4">
          <h3 className="mb-6 pt-8 font-semibold">ABOUT US</h3>
          <ul>
            <li>
              <Link to="/">Order</Link>
            </li>
            <li>
              <Link to="/">Shipment Details</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="order-1 grow basis-full text-center md:order-2 md:basis-1/2">
          <h2 className="text-3xl font-semibold">Newsletter</h2>
          <p className="mb-6 mt-4 text-xl">
            Follow us for more information and deals on organic food!
          </p>
          <div className="relative inline-block w-[80%] overflow-hidden rounded-lg bg-white">
            <input
              type="text"
              placeholder="Your email..."
              className="w-full border-none py-3 pe-2 ps-6 text-xl outline-none"
            />
            <button className="absolute right-0 top-[50%] me-2 translate-y-[-50%] rounded-md border-none bg-lime-700 px-3 py-1 text-xl font-semibold text-white outline-none transition-all hover:bg-lime-800">
              Send
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-4xl">
            <Link to="/">
              <PiFacebookLogoBold />
            </Link>
            <Link to="/">
              <TiSocialLinkedinCircular />
            </Link>
            <Link to="/">
              <TiSocialTwitterCircular />
            </Link>
            <Link to="/">
              <TiSocialPinterestCircular />
            </Link>
          </div>
        </div>
        <div className="order-3 flex basis-1/2 flex-col items-end md:basis-1/4">
          <h3 className="mb-6 pt-8 font-semibold">INFORMATION</h3>
          <ul className="text-end">
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/">Shipment Details</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Term and conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between pb-6">
        <p>Copyright@ 2023 Vegetable. All Rights Reserved</p>
        <div>
          <img src={paymentFooter} alt="Payment methods" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
