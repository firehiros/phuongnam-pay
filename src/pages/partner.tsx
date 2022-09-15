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
        Rays Wallet グローバル対応の最新Eウォレット |Rays Wallet パートナー
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
              <h2>パートナー</h2>
            </div>
            <div id="main_inner">
              <div id="flow_1">
                <div id="about_inner">
                  <div className="about1 partner_first">
                    <h3>パートナーズ</h3>
                    <p>
                    Rays Walletでは、提携パートナーを募集しております。パートナー企業及び個人様向けのパートナープログラムをご用意しております。Rays Walletを決済導入いただける企業様ご紹介で報酬を得られるプランとなります。パートナーズ登録をご希望の企業及び個人様は「Rays Walletアカウント」を開設後、申請フォームをご記入頂き、お申し込みとなります。
                      なお、提携パートナーへのご登録・ご相談は下記メールアドレスまでメールにてお問い合わせください。
                      <br />
                      <br />
                      お問い合わせ窓口：
                      <a href="mailto:support@srays-wallet.com" target="new">
                        support@rays-wallet.com
                      </a>
                    </p>
                  </div>
                  <div className="about1 pr_flow">
                    <h3 className="prh3">パートナーズ契約の流れ</h3>
                    <ul className="partner_flow">
                      <li className="pr_box">
                        <h4 className="prh4">パーソナル講座開設</h4>
                        <p>まずはRays Walletでの口座開設</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">申し込み</h4>
                        <p>申請フォームを記入します</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">契約</h4>
                        <p>担当者の案内に沿ってご契約</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">ご紹介開始</h4>
                        <p>パートナー契約完了となります</p>
                      </li>
                    </ul>
                    <h3 className="prh3">報酬受取りまでの流れ</h3>
                    <ul className="partner_flow">
                      <li className="pr_box">
                        <h4 className="prh4">ご紹介</h4>
                        <p>ご紹介者様が運用開始</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">報酬確認</h4>
                        <p>管理画面にて報酬を確認</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">
                          セトルメント<span>（月末）</span>
                        </h4>
                        <p>月末締にて報酬の合計金額を確認</p>
                      </li>
                      <li className="pr_arrow"></li>
                      <li className="pr_box">
                        <h4 className="prh4">
                          受取り<span>（翌月20日）</span>
                        </h4>
                        <p>ウォレットに自動的に報酬が反映</p>
                      </li>
                    </ul>
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
