// React import
import React from "react";

// Thirdparty Import
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

// App Import
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

const Component = () => {
  return (
    <>
      <Head>
        <title>
          S-WALLET グローバル対応の最新Eウォレット | S-WALLET提携カード
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta
          name="description"
          content="S-WALLETは、国際間のスムーズな送金や決済ソリューションをお求めの企業／個人様の為の、通貨、仮想通貨が使用できるE-walletです。"
        />
        <meta name="keywords" content="" />
        <link href="./css/style.css" rel="stylesheet" type="text/css" />
        <link href="./css/default.css" rel="stylesheet" type="text/css" />
        <link href="./css/nav.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="./css/font-awesome.min.css" />
        <link href="./css/css" rel="stylesheet" />
        <script src="./js/jquery.min.js"></script>
        <script src="./js/menu.js"></script>
        <script src="./js/iscroll.js"></script>
      </Head>

      <main>
        <div id="contents">
          <div id="contents_inner">
            <Header />

            <div id="card_title">
              <h2>プリペイド式デビットカード</h2>
            </div>
            <div id="main_inner">
              <div id="flow_2">
                <div id="about_inner">
                  <div className="card_about1 card_first">
                    <h3 id="card_head">プリペイド式デビットカード</h3>
                    <p>
                      S-WALLETでは、S-WALLETアカウントからチャージすることのできるプリペイド式デビッドカードを用意しております。必要なタイミングで必要な金額をカードにチャージしてプリペイドカードをご利用頂けます。
                      <br />
                      なお、プリペイドカードへのチャージは [USD/JPY]
                      口座からご利用頂けます。(プリペイドカードのご利用にはお手続きが別途必要となります。)
                    </p>
                    <div id="card_flow_box">
                      <div className="card_flow_inner">
                        <figure className="card_flow_img">
                          <img
                            src="./img/debit_phone.png"
                            width="auto"
                            height="250"
                            alt="プリペイド式デビットカード"
                          />
                        </figure>
                        <h4>S-WALLETお客様アカウント</h4>
                      </div>
                      <div className="card_flow_inner" id="card_flow_pc">
                        <div id="card_flow_arrow_box">
                          <h5>プリペイドカードへチャージ</h5>
                          <figure id="card_flow_arrow">
                            <img
                              src="./img/card_arrow.png"
                              width="372"
                              height="28"
                              alt=""
                            />
                          </figure>
                          <p>チャージ金額+手数料※</p>
                        </div>
                      </div>
                      <div className="card_flow_inner" id="card_flow_sp">
                        {" "}
                        <img
                          src="./img/flow_sp.png"
                          width="383"
                          height="269"
                          alt="プリペイドカードへ"
                        />{" "}
                      </div>
                      <div className="card_flow_inner">
                        <figure className="card_flow_img card_flow_lite">
                          <img
                            src="./img/debit_card.png"
                            width="auto"
                            height="150"
                            alt="プリペイドカード"
                          />
                        </figure>
                        <h4>プリペイドカード</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="flow_1">
                <div id="about_inner2">
                  <h2>プリペイドカードを利用して決済</h2>
                  <p>
                  S-WALLETのプリペイド式デビッドカードは、郵送にてお届け致します。お手元に届いたカードがあればオンラインの決済のも、オフラインお決済にもご利用いただけます。また、ATMを利用した引き出しも可能です。
                  </p>
                  <div className="about_inner2_box card_icon1">
                    <h3>ATM出金</h3>
                  </div>
                  <div className="about_inner2_box card_icon2">
                    <h3>お買物やお食事のお支払いに</h3>
                  </div>
                  <div className="about_inner2_box card_icon3">
                    <h3>ネットでのお買い物や決済に</h3>
                  </div>
                  <div className="about_inner2_box card_icon4">
                    <h3>海外旅行や国外での決済に</h3>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
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
    </>
  );
};

export default Component;
