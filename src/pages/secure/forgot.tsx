// React import
import React from "react";

// Thirdparty Import
import Head from "next/head";
import Reaptcha from "reaptcha";

// App Import
import Footer from "../../components/Layouts/SecureFooter";

const Component = () => {
  const [captcha, setCaptcha] = React.useState("");

  const captchaOnChange = (value) => {
    setCaptcha(value);
  };
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <title>Login | Rays Wallet</title>
        <link rel="stylesheet" type="text/css" href="./css/c3.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/swiper.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./css/common.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/custom.min.css" />
        <link rel="stylesheet" type="text/css" href="./css/front.css" />
        <link rel="stylesheet" type="text/css" href="./css/change.css" />

        <script src="./js/gtm.js"></script>
        <script src="./js/jquery.min.js"></script>
        <script type="text/javascript" src="./js/common.js"></script>
      </Head>

      <main>
        <div id="container">
          <div className="bg_head_jb">
            <header id="header" className="container hidden-xs" />

            <div className="headercolor">
              <div className="headwrap">
                <div className="hdL">
                  <h1>
                    {/* <a href="/secure/login">
                      <img
                        src="./img/yourlogo.png"
                        alt="your logo"
                        className="img-responsive"
                      />
                    </a> */}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="main main_log">
            <div className="container">
              <h3 data-locale="changpass">Change Password</h3>
              <p data-locale="forgetpassdesc">
                If you forgot your password, you can reset it using your email
                address
              </p>
              <div className="bgwhite mt30">
                <form id="acForm" className="pform" method="post">
                  <div className="row">
                    <div className="col-12 col-md-3">
                      <span data-locale="emailaddress">Email Address</span>
                    </div>
                    <div className="col-12 col-md-9">
                      <input
                        type="email"
                        name="email"
                        className="input2 mb10"
                      />
                      <br />
                      <p className="mb30" data-locale="enteremail">
                        Enter your email address you often used to create your
                        account
                      </p>
                      <Reaptcha
                        sitekey="6LdOthYeAAAAAKpPmr-ynr-CCnQAjpB4Ul_S_4Tj"
                        onVerify={captchaOnChange}
                      />
                      <input
                        type="button"
                        id="btnSend"
                        className="btn bgred btnbig mb20"
                        data-i18n-value="Next"
                        data-locale="next"
                        value="Next"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Component;
