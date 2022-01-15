// React import
import React from "react";

// Thirdparty Import
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

// App Import
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import GoTop from "../components/Elements/GoTop";

import Slider from "../components/Elements/Slider";
import Menu from "../components/Elements/Menu";
import Reversation from "../components/Elements/Reversation";

const Component = () => {
  return (
    <>
      <Head>
        <title>S-Wallet</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta
          name="description"
          content="PAY is an E-ware that supports credit card deposits, domestic banks and virtual currency deposits and withdrawals.
It is the definitive edition of We handle legal tender such as yen, US dollar, euro and major virtual currencies, and there is no fee for exchange including virtual currencies! You can also withdraw ATMs with affiliated cards!"
        />
        <meta name="keywords" content="" />
        <link href="./css/style.css" rel="stylesheet" type="text/css" />
        <link href="./css/default.css" rel="stylesheet" type="text/css" />
        <link href="./css/nav.css" rel="stylesheet" type="text/css" />
        <link href="./css/bnr.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="./css/font-awesome.min.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://tiger-pay.com/en/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://tiger-pay.com/en/favicon/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://tiger-pay.com/en/favicon/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://tiger-pay.com/en/favicon/icon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://tiger-pay.com/en/favicon/favicon.ico"
        />
        <link href="./css/css" rel="stylesheet" />
        <script src="./js/jquery.min.js"></script>
        <script src="./js/menu.js"></script>
        <script src="./js/iscroll.js"></script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `$(function () {
              var pagetop = $('#page_top');
              pagetop.hide();
              $(window).scroll(function () {
                if ($(this).scrollTop() > 100) { //100pxスクロールしたら表示
                  pagetop.fadeIn();
                } else {
                  pagetop.fadeOut();
                }
              });
              $('a[href^="#"]').click(function () {
                var time = 500;
                var href = $(this).attr("href");
                var target = $(href == "#" ? 'html' : href);
                var distance = target.offset().top;
                $("html, body").animate({
                  scrollTop: distance
                }, time, "swing");
                return false;
              });
            });`,
          }}
        />
      </Head>

      <main>
        <div id="contents">
          <div id="contents_inner">
            <div id="header">
              <h1 className="pc_main">
                <a href="https://tiger-pay.com/en/">
                  <img
                    src="./img/tigerpay.png"
                    width="2083"
                    height="994"
                    alt="S-Wallet"
                  />
                </a>
              </h1>
              <div id="header_menu">
                <div id="sub_menu">
                  <p className="to_business">
                    <a
                      href="https://tiger-pay.com/business/en/"
                      target="_blank"
                    >
                      For business
                    </a>
                  </p>
                  <p className="sponsor">
                    <a href="https://tiger-pay.com/sponsor/en/" target="_blank">
                      Sponsorship
                    </a>
                  </p>
                  <p className="open_btn">
                    <a
                      href="https://secure.tiger-pay.com/dashboard/register"
                      target="_blank"
                    >
                      Sign up{" "}
                    </a>
                  </p>
                  <p className="login_btn">
                    <a href="https://secure.tiger-pay.com/" target="_blank">
                      Login{" "}
                    </a>
                  </p>
                  <p className="open_btn_sp">
                    <a
                      href="https://secure.tiger-pay.com/dashboard/register"
                      target="_blank"
                    >
                      <img
                        src="./img/header_news_icon.png"
                        width="48"
                        height="48"
                        alt="Sign up"
                      />
                    </a>
                  </p>
                  <p className="login_btn_sp">
                    <a href="https://secure.tiger-pay.com/" target="_blank">
                      <img
                        src="./img/header_login_icon.png"
                        width="48"
                        height="48"
                        alt="Login"
                      />
                    </a>
                  </p>
                  <ul>
                    <li>
                      <a href="https://tiger-pay.com/jp/">日本語</a>
                    </li>
                    <li>
                      <a href="https://tiger-pay.com/en/">Eng</a>
                    </li>
                  </ul>
                  <div id="lang_sp">
                    <p className="lang_icon">
                      <a href="https://tiger-pay.com/jp/">
                        <img
                          src="./img/lang_jp_sp.png"
                          width="60"
                          height="60"
                          alt="jp"
                        />
                      </a>
                    </p>
                    <p className="lang_icon">
                      <a href="https://tiger-pay.com/en/">
                        <img
                          src="./img/lang_en_sp.png"
                          width="60"
                          height="60"
                          alt="en"
                        />
                      </a>
                    </p>
                  </div>
                </div>
                <nav id="gNav">
                  <ul id="dropmenu">
                    <li id="n_top">
                      <a href="https://tiger-pay.com/en/">TOP</a>
                    </li>
                    <li id="n_about">
                      <a href="https://tiger-pay.com/en/about.html">Company</a>
                    </li>
                    <li id="n_tiger">
                      <a href="https://tiger-pay.com/en/tiger.html">S-Wallet</a>
                    </li>
                    <li id="n_partners">
                      <a href="https://tiger-pay.com/en/partner.html">
                        Partners
                      </a>
                    </li>
                    <li id="n_depodit">
                      <a
                        href="https://tiger-pay.com/en/#"
                        style={{ borderWidth: "medium", top: "auto" }}
                      >
                        How to use
                      </a>
                      <ul>
                        <li>
                          <div className="gmenu_inner">
                            <div className="gmenu_box">
                              <span className="gmenu_list">Account</span>
                              <a
                                href="https://tiger-pay.com/en/register.html"
                                id="n_register"
                              >
                                <span>Register</span>
                              </a>
                            </div>
                            <div className="gmenu_box">
                              <span className="gmenu_list">Bank</span>
                              <a
                                href="https://tiger-pay.com/en/bank_register.html"
                                id="n_bank_register"
                              >
                                Bank registration
                              </a>
                              <a
                                href="https://tiger-pay.com/en/bank.html"
                                id="n_bank"
                              >
                                <span>Bank deposit</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/en/bank_withdraw.html"
                                id="n_bank_withdraw"
                              >
                                <span>Bank withdrawal</span>
                              </a>
                            </div>
                            <div className="gmenu_box">
                              <span className="gmenu_list">Prepaid card</span>
                              <a
                                href="https://tiger-pay.com/en/credit.html"
                                id="n_credit_card"
                              >
                                <span>Card registration</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/en/card_charge.html"
                                id="n_card_charge"
                              >
                                <span>Card charge</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/en/card_balance.html"
                                id="n_card_balance"
                              >
                                <span>Card balance</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/campaign/en.html"
                                id="pr"
                                target="_blank"
                              >
                                <span>
                                  GET $25
                                  <br />
                                  CASHBACK
                                </span>
                              </a>
                            </div>
                            <div className="gmenu_box">
                              <span className="gmenu_list">Cryptocurrency</span>
                              <a
                                href="https://tiger-pay.com/en/cc.html"
                                id="n_vc"
                              >
                                <span>Deposit</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/en/cc_withdraw.html"
                                id="n_vc_withdraw"
                              >
                                <span>Withdrawal</span>
                              </a>
                            </div>
                            <div className="gmenu_box">
                              <span className="gmenu_list">Exchange</span>
                              <a
                                href="https://tiger-pay.com/en/transfer.html"
                                id="n_transfer"
                              >
                                <span>Exchange</span>
                              </a>
                            </div>
                            <div className="gmenu_box">
                              <span className="gmenu_list">KYC</span>
                              <a
                                href="https://tiger-pay.com/en/kyc.html"
                                id="n_kyc"
                              >
                                <span>Procedure</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/en/kyc_personal.html"
                                id="n_kyc_personal"
                              >
                                <span>Documents</span>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://tiger-pay.com/en/fee.html">
                        Fees/Processing Times
                      </a>
                    </li>
                    <li>
                      <a href="https://tiger-pay.com/en/card.html">
                        Prepaid card
                      </a>
                    </li>
                    <li>
                      <a href="https://support.tiger-pay.com/" target="_blank">
                        Q&amp;A
                      </a>
                    </li>
                  </ul>
                  <div className="mask"></div>
                </nav>
              </div>
            </div>
            <nav className="Nav" role="navigation" aria-label="メインメニュー">
              <h1 className="nav_taxt">
                <img
                  src="./img/tigerpay.png"
                  width="2083"
                  height="994"
                  alt="S-Wallet"
                />
              </h1>
              <p className="navbtn">
                <a href="" className="close">
                  <span>メニューを開く</span>
                </a>
              </p>
              <ul className="close" style={{ display: "none" }}>
                <li>
                  <a href="https://tiger-pay.com/en/">TOP</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/en/about.html">Company</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/en/tiger.html">S-Wallet</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/en/partner.html">Partners</a>
                </li>
                <li className="parent">
                  <a href="" className="close">
                    How to use
                  </a>
                  <ul className="submenu close" style={{ display: "none" }}>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>Account</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/register.html"
                            className="close"
                          >
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>Bank</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/bank_register.html"
                            className="close"
                          >
                            Bank registration
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/bank.html"
                            className="close"
                          >
                            Bank deposit
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/bank_withdraw.html"
                            className="close"
                          >
                            Bank withdrawal
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>Prepaid card</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/credit.html"
                            className="close"
                          >
                            Card registration
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/card_charge.html"
                            className="close"
                          >
                            Card charge
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/card_balance.html"
                            className="close"
                          >
                            Card balance
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>Cryptocurrency</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/cc.html"
                            className="close"
                          >
                            Deposit
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/cc_withdraw.html"
                            className="close"
                          >
                            Withdrawal
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>Exchange</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/transfer.html"
                            className="close"
                          >
                            Exchange
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="" className="close">
                        <span>KYC</span>
                      </a>
                      <ul className="submenu close" style={{ display: "none" }}>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/kyc.html"
                            className="close"
                          >
                            Procedure
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/en/kyc_personal.html"
                            className="close"
                          >
                            Documents
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://tiger-pay.com/en/fee.html">
                    Fees/Processing Times
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/en/card.html">Prepaid card</a>
                </li>
                <li>
                  <a href="https://support.tiger-pay.com/" target="_blank">
                    Q&amp;A
                  </a>
                </li>
              </ul>
            </nav>
            <div id="main_v">
              <div id="main_wrap">
                <div id="main_v_inner">
                  <h1>
                    <span className="title_small">
                      Quick, easy and convenient!
                    </span>
                    <br />
                    The most secure
                    <br />
                    global e-wallet
                    <br />
                    <span className="title_color">S-Wallet</span>
                  </h1>
                  <p id="main_btn">
                    <a
                      href="https://secure.tiger-pay.com/dashboard/register"
                      target="_blank"
                    >
                      <span className="btn_color">S-Wallet</span> Sign
                      Up&nbsp;&nbsp;{" "}
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src="./img/main_v.png"
                    width="1383"
                    height="1202"
                    alt="S-Wallet"
                  />
                </figure>
              </div>
            </div>
            <div id="main_v_sp">
              {" "}
              <img
                src="./img/tiger_main_sp.png"
                width="900"
                height="1579"
                alt="The most secure global e-wallet"
              />{" "}
            </div>
            <div id="about_wrap">
              <div id="about">
                <div id="about_box">
                  <h2>What is S-Wallet? </h2>
                  <p>
                    S-Wallet allows you to manage multiple currencies all in one
                    account
                  </p>
                  <ul>
                    <li>Credit card deposit</li>
                    <li>
                      Domestic and overseas banks, as well as cryptocurrency
                      deposits and withdrawals
                    </li>
                    <li>
                      Supports multiple currencies like Japanese yen, U.S.
                      dollar and euro
                    </li>
                    <li>
                      Supports virtual currencies such as Bitcoin, Ethereum,
                      etc.
                    </li>
                    <li>No currency exchange fees</li>
                    <li>
                      Shopping and ATM withdrawals with affiliated prepaid cards
                    </li>
                    <li>
                      Business accounts with optimal functions for business
                      owners
                    </li>
                  </ul>
                  <p className="more_btn">
                    <a href="https://tiger-pay.com/en/tiger.html">READ MORE</a>
                  </p>
                </div>
                <figure>
                  <img
                    src="./img/about_img.png"
                    width="1124"
                    height="914"
                    alt="S-Walletとは？"
                  />
                </figure>
              </div>
            </div>
            <div id="content_wap">
              <div id="content_inner">
                <div id="card_box">
                  <p>
                    S-Wallet allows you to issue and use UnionPay partner cards.{" "}
                  </p>
                  <figure>
                    <img
                      src="./img/card_img.png"
                      width="993"
                      height="565"
                      alt="S-Wallet"
                    />{" "}
                  </figure>
                </div>
                <div id="content_1">
                  <div id="content_1_inner">
                    <p style={{ width: "auto" }}>
                      With one S-Wallet account, you can hold and manage
                      supported fiat currencies and cryptocurrencies at the same
                      time
                    </p>
                    <h4>Supported currencies:</h4>
                    <div id="content_1_list">
                      <dl>
                        <dt>
                          <img
                            src="./img/usd.png"
                            width="81"
                            height="81"
                            alt="USD"
                          />
                        </dt>
                        <dd>USD</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/jpy.png"
                            width="81"
                            height="81"
                            alt="JPY"
                          />
                        </dt>
                        <dd>JPY</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/ygen.png"
                            width="81"
                            height="81"
                            alt="CNY"
                          />
                        </dt>
                        <dd>CNY</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/eud.png"
                            width="81"
                            height="81"
                            alt="CNY"
                          />
                        </dt>
                        <dd>EUR</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/btc.png"
                            width="81"
                            height="81"
                            alt="BTC"
                          />
                        </dt>
                        <dd>BTC</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/eth.png"
                            width="81"
                            height="81"
                            alt="ETH"
                          />
                        </dt>
                        <dd>ETH</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/xrp.png"
                            width="81"
                            height="81"
                            alt="XRP"
                          />
                        </dt>
                        <dd>XRP</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/usdc.png"
                            width="81"
                            height="81"
                            alt="USDC"
                          />
                        </dt>
                        <dd>USDC</dd>
                      </dl>
                      <dl>
                        <dt>
                          <img
                            src="./img/usdt.png"
                            width="81"
                            height="81"
                            alt="USDT"
                          />
                        </dt>
                        <dd>USDT</dd>
                      </dl>
                    </div>
                    <h4>Exchange only:</h4>
                    <div id="content_1_list2">
                      <dl>
                        <dt>
                          <img
                            src="./img/php.png"
                            width="81"
                            height="81"
                            alt="PHP"
                          />
                        </dt>
                        <dd>PHP</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="feature_inner">
              <section id="feature_box">
                <h2>When to use</h2>
                <div className="scene_box">
                  <div className="scene_box2">
                    <h3>I want to use it to pay at a merchant</h3>
                    <div className="scene_tab scene_tab3">
                      <p>
                        <img
                          src="./img/scene_icon1.png"
                          width="157"
                          height="157"
                          alt="I want to use it to pay at a merchant"
                        />
                      </p>
                    </div>
                  </div>
                  <h3>I'd like to exchange it for foreign currency.</h3>
                  <div className="scene_tab scene_tab3">
                    <p>
                      <img
                        src="./img/scene_icon2.png"
                        width="157"
                        height="157"
                        alt="I&#39;d like to exchange it for foreign currency."
                      />
                    </p>
                  </div>
                </div>
                <div className="scene_box">
                  <h3>I want to convert my cryptocurrency to Japanese yen.</h3>
                  <div className="scene_tab scene_tab2">
                    <p>
                      <img
                        src="./img/scene_icon3.png"
                        width="157"
                        height="157"
                        alt="I want to make cryptocurrency Japanese yen."
                      />
                    </p>
                    <ul>
                      <li>Exchange money with S-Wallet</li>
                      <li>↓</li>
                      <li>Bank transfer to your account</li>
                      <li>↓</li>
                      <li>Charge to your card</li>
                      <li>↓</li>
                      <li>Withdraw at ATM</li>
                    </ul>
                  </div>
                </div>
                <div className="scene_box">
                  <h3>I want to shop in cryptocurrency.</h3>
                  <div className="scene_tab scene_tab2">
                    <p>
                      <img
                        src="./img/scene_icon4.png"
                        width="157"
                        height="157"
                        alt="I want to shop in cryptocurrency."
                      />
                    </p>
                    <ul>
                      <li>Exchange money with S-Wallet</li>
                      <li>↓</li>
                      <li>Charge to your card</li>
                      <li>↓</li>
                      <li>Transfer of cryptocurrency to the store's wallet</li>
                    </ul>
                  </div>
                </div>
                <div className="scene_box">
                  <div className="scene_box2">
                    <h3>I'd like to send an international money transfer.</h3>
                    <div className="scene_tab">
                      <p>
                        <img
                          src="./img/scene_icon5.png"
                          width="157"
                          height="157"
                          alt="I&#39;d like to send an international money transfer."
                        />
                      </p>
                    </div>
                  </div>
                  <h3>
                    I want the deposit received in foreign currency to be
                    Japanese yen.
                  </h3>
                  <div className="scene_tab">
                    <p>
                      <img
                        src="./img/scene_icon6.png"
                        width="157"
                        height="157"
                        alt="I want the deposit received in foreign currency to be Japanese yen."
                      />
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div id="store_wrap">
              <section id="store_box">
                <h2>Stores where S-Wallet can be used</h2>
                <h4>
                  S-Wallet can be used at the following merchant services!
                </h4>
                <div className="store_card">
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/shopping-icon@2x.png" />
                    <h3>general shopping</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/electronic-icon@2x.png" />
                    <h3>home electronics/PC</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/game-icon@2x.png" />
                    <h3>game</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/entertainment-icon@2x.png" />
                    <h3>entertainment</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/delivery-icon@2x.png" />
                    <h3>delivery</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/food-icon@2x.png" />
                    <h3>food &amp; drink</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/cosmetics-icon@2x.png" />
                    <h3>cosmetics/beauty</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/en/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/fashion-icon@2x.png" />
                    <h3>fashion</h3>
                  </a>
                </div>
                <h4>
                  *Only S-Wallet balance can be used to pay for online services.
                </h4>
              </section>
            </div>
            <div id="faq_wrap">
              <section id="faq_inner">
                <h2>Q&amp;A</h2>
                <div className="accordion">
                  <ul>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>What can I do with my TigerPay account?</h5>
                      </a>
                      <p>
                        Tigerpay is an e-wallet that supports multiple fiat
                        currencies and cryptocurrencies in one digital platform.
                        S-Wallet supports bank deposits and withdrawals,
                        cryptocurrency transfer and payout, free currency
                        exchange, and inter-wallet transfers. S-Wallet also
                        offers its own UnionPay branded prepaid debit card to
                        Personal and Business account users.
                      </p>
                    </li>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>
                          Are there any age and nationality restrictions for
                          opening a S-Wallet account?{" "}
                        </h5>
                      </a>
                      <p>
                        Yes, only customers over the age of 18 can create a
                        S-Wallet account.
                        <br />
                        <br />
                        As for the nationality restrictions, nationals in
                        prohibited countries of FATF, OFAC, or similar
                        organizations are not allowed to apply for S-Wallet
                        accounts. Please see the link below for reference.
                        <br />
                        <a
                          href="https://www.fatf-gafi.org/countries/#high-risk"
                          target="_blank"
                        >
                          High-risk and other monitored jurisdictions
                        </a>
                        <br />
                        <a
                          href="https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-information"
                          target="_blank"
                        >
                          Office of Foreign Assets Control
                        </a>
                      </p>
                    </li>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>How do I upgrade my account to Personal?</h5>
                      </a>
                      <p>
                        You may upgrade your account to Personal by submitting
                        one proof of identity and one proof of address.
                        <br />
                        <br />
                        To see the list of accepted documents, click on the
                        following link:
                        <br />
                        <a href="https://tiger-pay.com/en/kyc_personal.html">
                          KYC Documents Details
                        </a>
                        <br />
                        <br />
                        For the step by step guide on how to upgrade your
                        account, please refer to the following link:
                        <br />
                        <a href="https://tiger-pay.com/en/kyc.html">
                          KYC application Procedure
                        </a>{" "}
                      </p>
                    </li>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>
                          How do I deposit funds into my S-Wallet account?
                        </h5>
                      </a>
                      <p>
                        You can deposit funds in your S-Wallet account with the
                        following methods:
                        <br />
                        – local bank transfer (Japan)
                        <br />
                        – international bank transfer
                        <br />
                        – cryptocurrency deposit
                        <br />
                        <br />
                        Please note that only Personal and Business account
                        users can use the bank transfer services.
                        <br />
                        <br />
                        For local bank deposit method, please click on the
                        following link:
                        <br />
                        <a href="https://tiger-pay.com/en/bank.html">
                          How to Deposit in TIGERPAY
                        </a>
                        <br />
                        <br />
                        For cryptocurrency deposit method, please refer to the
                        following link:
                        <br />
                        <a href="https://tiger-pay.com/en/cc.html">
                          S-Wallet Cryptocurrency Deposit{" "}
                        </a>
                      </p>
                    </li>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>
                          How long does it take for the deposit to be reflected
                          in my account? What should I do if my deposit is not
                          reflected in my S-Wallet account?
                        </h5>
                      </a>
                      <p>
                        For local bank deposit (Japan), funds will be reflected
                        on your account within 5-7 minutes after confirmation of
                        deposit.
                        <br />
                        For international bank transfer, it will be reflected in
                        your account with 3-5 business days (standard).
                        <br />
                        If you encounter any problems such as not being
                        reflected, please contact support with proof of payment.
                      </p>
                    </li>
                  </ul>
                </div>
                <p id="faq_btn">
                  <a href="https://support.tiger-pay.com/">READ MORE</a>
                </p>
              </section>
            </div>
            <div id="footer_wrap">
              <div id="footer_banner">
                <div id="footer_banner_inner">
                  <div id="footer_text_box">
                    <p id="footer_banner_text">
                      <span className="title_small">
                        Quick, easy and convenient!
                      </span>
                      <br />
                      The most secure
                      <br />
                      global e-wallet <br />
                      <span className="title_color">S-Wallet</span>
                    </p>
                    <p id="footer_inner_btn">
                      <a
                        href="https://secure.tiger-pay.com/dashboard/register"
                        target="_blank"
                      >
                        Sign up
                      </a>
                    </p>
                    <p id="footer_inner_btn2">
                      <a href="https://secure.tiger-pay.com/" target="_blank">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="footer">
                <div id="footer_inner">
                  <figure>
                    <a href="https://tiger-pay.com/en/">
                      <img
                        src="./img/footer_logo.png"
                        width="2083"
                        height="994"
                        alt="S-Wallet"
                      />
                    </a>
                  </figure>
                  <div id="footer_box">
                    <ul>
                      <li>
                        <a href="https://tiger-pay.com/en/">TOP</a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/about.html">
                          Company
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/tiger.html">
                          S-Wallet
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/business/en/">
                          For business
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/partner.html">
                          Partners
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/sponsor/en/">
                          Sponsorship
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/kyc.html">KYC</a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/fee.html">
                          Fees/Processing Times
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/terms.html">Terms</a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/privacy.html">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://secure.tiger-pay.com/dashboard/support"
                          target="_blank"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="https://tiger-pay.com/en/sitemap.html">
                          Site map
                        </a>
                      </li>
                    </ul>

                    <div id="browser_box">
                      <h2>Recommended browser</h2>
                      <ul>
                        <li>
                          <img
                            src="./img/chrome.png"
                            width="225"
                            height="225"
                            alt="chrome"
                          />
                        </li>
                        <li>
                          <img
                            src="./img/firefox.png"
                            width="225"
                            height="225"
                            alt="firefox"
                          />
                        </li>
                        <li>
                          <img
                            src="./img/ie.png"
                            width="225"
                            height="225"
                            alt="ie"
                          />
                        </li>
                      </ul>
                    </div>
                    <div id="sns_box">
                      <h2>Official SNS account</h2>
                      <ul>
                        <li>
                          <a href="https://twitter.com/TigerpayEwallet">
                            <img
                              src="./img/twitter.png"
                              width="225"
                              height="225"
                              alt="twitter"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://line.me/R/ti/p/@tigerpay">
                            <img
                              src="./img/line.png"
                              width="225"
                              height="225"
                              alt="line"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/TigerpayEwallet">
                            <img
                              src="./img/facebook.png"
                              width="225"
                              height="225"
                              alt="facebook"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="page_top" style={{ display: "none" }}>
              <a href="https://tiger-pay.com/en/#"></a>
            </div>
            <p id="copy">©S-Wallet.All rights resarved.</p>
          </div>
        </div>
        <div className="Bnr" style={{ display: "none" }}>
          <div className="Bnr__img">
            <div className="Bnr__img__inner">
              <a href="https://tiger-pay.com/campaign/en.html" target="_blank">
                <p>
                  <img src="./img/1200_200_n003.jpg" alt="" className="pc" />
                  <img src="./img/1200_200_n003sp.jpg" alt="" className="sp" />
                </p>
              </a>
            </div>
            <p className="close">
              <a href="">
                <span>閉じる</span>
                <i aria-hidden="true" className="fa fa-times"></i>
              </a>
            </p>
          </div>
        </div>
      </main>

      <Script src="./js/jquery.min(1).js"></Script>

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `$(function () {
              $(".accordion li a").on("click", function () {
                $(this).next().slideToggle();
                // activeが存在する場合
                if ($(this).children(".accordion_icon").hasClass('active')) {
                  // activeを削除
                  $(this).children(".accordion_icon").removeClass('active');
                } else {
                  // activeを追加
                  $(this).children(".accordion_icon").addClass('active');
                }
              });
            });`,
        }}
      />
      <Script type="text/javascript" src="./js/jquery.min(2).js"></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function ($) {

              $(function () {
                var display = function () {
                  if ($(this).scrollTop() > 0) { //scroll量
                    $(".Bnr").fadeIn();
                  } else {
                    $(".Bnr").fadeOut();
                  }
                };
                $(window).on("scroll", display);
                //click
                $(".Bnr p.close a").click(function () {
                  $(".Bnr").fadeOut();
                  $(window).off("scroll", display);
                });
              });
        
            })(jQuery);`,
        }}
      />

      {/* <Header />

      <main>

        <ul id="banners_grid" className="clearfix">
          <li>
            <a href="menu-1.html" className="img_container">
              <img src="/img/banners_cat_placeholder.jpg" data-src="/img/banner_1.jpg" alt="" className="lazy" />
              <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                <h3>Our Menu</h3>
                <p>View Our Specialites</p>
              </div>
            </a>
          </li>
          <li>
            <a href="order-food.html" className="img_container">
              <img src="/img/banners_cat_placeholder.jpg" data-src="/img/banner_2.jpg" alt="" className="lazy" />
              <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                <h3>Delivery</h3>
                <p>Home delivery or take away food</p>
              </div>
            </a>
          </li>
          <li>
            <a href="gallery.html" className="img_container">
              <img src="/img/banners_cat_placeholder.jpg" data-src="/img/banner_3.jpg" alt="" className="lazy" />
              <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                <h3>Inside Foores</h3>
                <p>View the Gallery</p>
              </div>
            </a>
          </li>
        </ul>


        <div className="pattern_2">
          <div className="container margin_120_100 home_intro">
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-5 text-lg-center d-none d-lg-block" data-cue="slideInUp">
                <figure>
                  <img src="/img/home_1_placeholder.png" data-src="/img/home_1.jpg" width="354" height="440"
                    alt="" className="img-fluid lazy" />
                  <a href="https://www.youtube.com/watch?v=MO7Hi_kBBBg" className="btn_play" data-cue="zoomIn"
                    data-delay="500"><span className="pulse_bt"><i className="arrow_triangle-right"></i></span></a>
                </figure>
              </div>
              <div className="col-lg-5 pt-lg-4" data-cue="slideInUp" data-delay="500">
                <div className="main_title">
                  <span><em></em></span>
                  <h2>Some words about us</h2>
                  <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><img src="/img/signature.png" width="140" height="50" alt="" className="mt-3" /></p>
              </div>
            </div>

          </div>

        </div>

        <Menu />

        <div className="call_section lazy" data-bg="url(/img/bg_call_section.jpg)">
          <div className="container clearfix">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 text-center">
                <div className="box_1" data-cue="slideInUp">
                  <h2>Celebrate<span>a Special Event with us!</span></h2>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  <a href="contacts.html" className="btn_1 mt-3">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Reversation />
      </main>

      <Footer />
      <GoTop /> */}
    </>
  );
};

export default Component;
