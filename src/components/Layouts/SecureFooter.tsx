// React Import
import React from "react";
import Script from "next/script";
import Link from "next/link";

const Component = ({ ...props }) => {
  return (
    <>
      <footer id="footer" className="hidden-xs">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/fee">
                  <a>Fee List</a>
                </Link>
              </li>
              <li>
                <Link href="/tokushouhou">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <p className="text-center">
            <Link href="/secure/login">
              <a>
                <img src="./img/logo-alpha.png" alt="" width="100px;" />
              </a>
            </Link>
          </p> */}
          <p className="copyright">
            {" "}
            Copyright © S-WALLET All Rights Reserved.{" "}
          </p>
        </div>
      </footer>
      <footer id="footer-xs" className="visible-xs">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/fee">
                  <a>Fee List</a>
                </Link>
              </li>
              <li>
                <Link href="/tokushouhou">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* <p className="text-center">
            <Link href="/secure/login">
              <a>
                <img src="./img/logo-alpha.png" alt=""/>
              </a>
            </Link>
          </p> */}
          <p className="copyright">
            {" "}
            Copyright © S-WALLET All Rights Reserved.{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Component;
