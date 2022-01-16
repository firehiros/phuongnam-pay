// React import
import React from "react";

// Thirdparty Import
import Head from "next/head";
import Reaptcha from "reaptcha";

// App Import
import { registerWithEmail } from '../../services/firebase'
import Footer from "../../components/Layouts/SecureFooter";

const Component = () => {
  const [captcha, setCaptcha] = React.useState("");
  const [email, setEmail] = React.useState<string>("")

  const captchaOnChange = (value) => {
    setCaptcha(value);
  };

  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(email != "") registerWithEmail(email)
  }
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <title>Create Fast Account | S-WALLET</title>
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
              ※Each individual or corporate is only allowed to open one S-WALLET
              account.
              <br />
              ※Account name cannot be changed. Account upgrade will be based on
              the Quick Account level.
            </p>
            <div className="bgwhite mt30">
              <form onSubmit={onSubmit}>
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
                    <input type="email" name="email" className="input2 mb10" value={email} onChange={emailOnChange}/>
                    <br />
                    <p className="mb30" data-locale="suremail">
                      Please make sure that provided email address is valid and
                      functional
                    </p>
                    <Reaptcha
                      sitekey="6LdOthYeAAAAAKpPmr-ynr-CCnQAjpB4Ul_S_4Tj"
                      onVerify={captchaOnChange}
                    />
                    <input
                      type="submit"
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
