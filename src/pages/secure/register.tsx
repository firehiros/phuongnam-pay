// React import
import React from "react";

// Thirdparty Import
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

// App Import
import Footer from "../../components/Layouts/SecureFooter";

const Component = () => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <title>Create Fast Account | S-WALLET</title>
        <link rel="stylesheet" type="text/css" href="./css/c3.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/swiper.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./css/common.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/custom.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/reboot.min.css"
        />
        <link rel="stylesheet" type="text/css" href="./css/front.css" />
        <link rel="stylesheet" type="text/css" href="./css/change.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./css/colorpicker.css"
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
          <div className="container">
            <h3 data-locale="createaccount">Create Fast Account</h3>
            <p data-locale="accountinfo">
              All S-WALLET users need to create a Fast account first
              (transaction limit of 1,000 USD in total).Accounts can be quickly
              created and activated via email, no matter whether you are an
              individual or a corporate user.
              <br />
              After creating a Fast Account, if you want to increase the limit
              and use fiat currency deposit, you can upgrade to a Standard
              Account.
              <br />
              All account types (Fast, Standard) can be created under the name
              of an individual or a corporate.
              <br />
              ※The e-mail address you entered will be your login ID.
              <br />
              ※In order to upgrade account, you need to upload KYC or KYB
              documents on the upgrade account page after login.
              <br />
              ※Each individual or corporate is only allowed to open one S-WALLET account.
              <br />
              ※Account name cannot be changed. Account upgrade will be based on
              the Quick Account level.
            </p>
            <div className="bgwhite mt30">
              <form>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <span data-locale="accounttype">Applicant Type</span>
                  </div>
                  <div className="col-12 col-md-9">
                    <select className="select2" name="account_type">
                      <option value="0" data-locale="PersonAccount">
                        Individual
                      </option>
                      <option value="1" data-locale="CorpAccount">
                        Corporate
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <span data-locale="emailaddress">Email Address</span>
                  </div>
                  <div className="col-12 col-md-9">
                    <input
                      type="email"
                      name="email"
                      className="input2 mb10"
                      value=""
                    />
                    <br />
                    <p className="mb30" data-locale="suremail">
                      Please make sure that provided email address is valid and
                      functional
                    </p>
                    <input type="hidden" id="type" name="type" value="" />
                    <input
                      type="hidden"
                      id="browe_language"
                      name="browe_language"
                      value="en"
                    />
                    <input
                      type="hidden"
                      id="agent_code"
                      name="agent_code"
                      value=""
                    />
                    <div
                      className="g-recaptcha"
                      data-sitekey=" 6Ldaw-4UAAAAAI6Qsm9LlDjniNkf7BAhEiMwNevC "
                    >
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            src="./sss/anchor.html"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-4xho64aznzqi"
                            frameBorder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div>
                      <iframe
                        style={{ display: "none" }}
                        src="./fsdf/saved_resource.html"
                      ></iframe>
                    </div>
                    <input
                      type="button"
                      id="btnInput"
                      className="btn bgred btnbig mb20"
                      data-locale="next"
                      data-i18n-value="Next"
                      value="Next"
                    />
                  </div>
                </div>
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
