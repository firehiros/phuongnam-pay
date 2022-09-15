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
          Rays Wallet グローバル対応の最新Eウォレット | Rays Wallet提携カード
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta
          name="description"
          content="Rays Walletは、国際間のスムーズな送金や決済ソリューションをお求めの企業／個人様の為の、通貨、仮想通貨が使用できるE-walletです。"
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

            <div id="content_title">
              <h2>プリペイド式デビットカード</h2>
            </div>
            <div id="main_inner">
              <div id="flow_2">
                <div id="about_inner">
                  <div className="card_about1 card_first">
                    <h3 id="card_head">プリペイド式デビットカード</h3>
                    <p>
                    Rays Walletでは、Rays Walletアカウントからチャージすることのできるプリペイド式デビッドカードを用意しております。必要なタイミングで必要な金額をカードにチャージしてプリペイドカードをご利用頂けます。
                      <br />
                      なお、プリペイドカードへのチャージは [USD/JPY]
                      口座からご利用頂けます。(プリペイドカードのご利用にはお手続きが別途必要となります。)
                    </p>
                    <div id="card_flow_box">
                      <figure className="card_flow_img">
                        <img
                          src="./img/card_banner.png"
                          width="100%"
                          alt="プリペイド式デビットカード"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div id="flow_1">
                <div id="about_inner2">
                <h4>プリペイドカードを利用して決済</h4>
                <p>
                Rays Walletのプリペイド式デビッドカードは、郵送にてお届け致します。お手元に届いたカードがあればオンラインの決済のも、オフラインお決済にもご利用いただけます。また、ATMを利用した引き出しも可能です。
                </p>
                <ul className="about5_wrap">
                  <li id="atm_icon">
                    <img
                      src="./img/debit_icon1.png"
                      alt=""
                    />
                    <span>ATM出金</span>
                  </li>
                  <li id="pay_icon">
                    <img
                      src="./img/debit_icon2.png"
                      alt=""
                    />
                    <span>
                      お買い物やお食事
                      <br />
                      のお支払いに
                    </span>
                  </li>
                  <li id="travel_icon">
                    <img
                      src="./img/debit_icon4.png"
                      alt=""
                    />
                    <span>
                      海外旅行や
                      <br />
                      国外での決済に
                    </span>
                  </li>
                  <li id="net_icon">
                    <img
                      src="./img/debit_icon3.png"
                      alt=""
                    />
                    <span>
                      ネットでのお買物
                      <br />
                      や決済に
                    </span>
                  </li>
                </ul>
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
