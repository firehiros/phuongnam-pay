// React import
import React from "react";

// Thirdparty Import
import { useRouter } from 'next/router';
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import Reaptcha from "reaptcha";
import { Modal, Button } from "react-bootstrap";
import { login } from "../../services/firebase";
import "bootstrap/dist/css/bootstrap.min.css";

// App Import

const Component = () => {
  const router = useRouter();
  const [captcha, setCaptcha] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleOk= () => {
    router.push("/")
  }

  // Method
  const captchaOnChange = (value) => {
    setCaptcha(value);
  };

  const passOnChange = (event) => {
    setPassword(event.target.value);
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError(false)
    login(email, password)
      .then((userCredential) => {
        setShow(true);
      })
      .catch(() => {
        setShow(true);
        setError(true)
      });
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

          <div
            className="loginbg"
            style={{ paddingTop: "calc((100vh - 448.5px) / 2)" }}
          >
            <div className="loginbox">
              <div className="logos"></div>

              <h4 data-locale="login">User Login</h4>
              <form method="post" id="acForm" onSubmit={onSubmit}>
                <p className=""></p>

                <div className="input-item">
                  <span data-locale="loginid">Login ID (Mail Address)</span>
                  <input
                    type="text"
                    className="input3"
                    name="user_id"
                    id="user_id"
                    value={email}
                    onChange={emailOnChange}
                  />
                </div>

                <div className="input-item">
                  <span data-locale="password">Password</span>
                  <input
                    type="password"
                    className="input3"
                    name="real_password"
                    id="real_password"
                    value={password}
                    onChange={passOnChange}
                  />
                </div>
                <Reaptcha
                  sitekey="6LdOthYeAAAAAKpPmr-ynr-CCnQAjpB4Ul_S_4Tj"
                  onVerify={captchaOnChange}
                />

                <p>
                  <input
                    type="submit"
                    name=""
                    id="btnComplete"
                    data-i18n-value="Login"
                    data-locale="loginbutton"
                    className="btn btn-primary w100p mt-3"
                    value="Login"
                  />
                </p>
                <p className="mt30">
                  <Link href="/secure/forgot">
                    <a className="lfloat blue">Forgot Your Password?</a>
                  </Link>
                  <Link href="https://mypage.rays-wallet.com/register">
                    <a className="red rfloat">Sign-up</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <footer id="footer" className="d-xs-none">
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
            <p className="copyright">
              {" "}
              Copyright © Rays Wallet All Rights Reserved.{" "}
            </p>
          </div>
        </footer>
        <footer id="footer-xs" className="d-md-none">
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
              Copyright © Rays Wallet All Rights Reserved.{" "}
            </p>
          </div>
        </footer>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{error ? "ログイン失敗" :"ログインし成功"}</Modal.Title>
        </Modal.Header>
        {error ? (<Modal.Body>
          <p>ログインに失敗しました</p>
          <p>ログインID（メルアドレス）またはパスワードが間違いっているか、アカウント準備中などの理由によりログインできません。</p>
        </Modal.Body>)
        : (<Modal.Body>
          <p>ログインしました</p>
          <p>TOPページへ自動的に移動します</p>
        </Modal.Body>)}

        <Modal.Footer>
          <Button variant={error ? "danger" : "primary"} onClick={error ? handleClose : handleOk}>
            {error ? "キャンセル" : "OK"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Component;
