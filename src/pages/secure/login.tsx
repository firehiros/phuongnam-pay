// React import
import React from "react";

// Thirdparty Import
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import Reaptcha from "reaptcha";

// App Import
import Footer from "../../components/Layouts/SecureFooter";

const Component = () => {
  const [captcha, setCaptcha] = React.useState("");

  // Method
  const captchaOnChange = (value) => {
    setCaptcha(value);
  };
  const onSubmit = () => {
    // const recaptchaValue = recaptchaRef?.current?.getValue();
  };

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <title>Login | S-WALLET</title>
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favicon/icon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="../favicon/favicon.ico"
        />

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
                    <a href="/secure/login">
                      <img
                        src="./img/yourlogo.png"
                        alt="your logo"
                        className="img-responsive"
                      />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="loginbg"
            style={{ paddingTop: "calc((100vh - 448.5px) / 2)" }}
          >
            <div className="loginbox">
              <div className="logos"></div>

              <h4 data-locale="login">User Login</h4>
              <form method="post" id="acForm">
                <p className=""></p>

                <div className="input-item">
                  <span data-locale="loginid">Login ID (Mail Address)</span>
                  <input
                    type="text"
                    className="input3"
                    name="user_id"
                    id="user_id"
                  />
                </div>

                <div className="input-item">
                  <span data-locale="password">Password</span>
                  <input
                    type="password"
                    className="input3"
                    name="real_password"
                    id="real_password"
                  />
                </div>
                <Reaptcha
                  sitekey="6LdOthYeAAAAAKpPmr-ynr-CCnQAjpB4Ul_S_4Tj"
                  onVerify={captchaOnChange}
                />

                <p>
                  <input
                    type="button"
                    name=""
                    id="btnComplete"
                    data-i18n-value="Login"
                    data-locale="loginbutton"
                    className="btn btnbig bgred w100p"
                    value="Login"
                  />
                </p>
                <p className="mt30">
                  <Link href="/secure/forgot">
                    <a className="lfloat blue">Forgot Your Password?</a>
                  </Link>
                  <Link href="/secure/register">
                    <a className="red rfloat">Sign-up</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Component;
