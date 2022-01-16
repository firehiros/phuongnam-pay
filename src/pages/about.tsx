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
        <title>S-WALLET グローバル対応の最新Eウォレット | S-WALLET 運営会社</title>
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

            <div id="about_title">
              <h2>運営会社</h2>
            </div>

            <div id="main_inner">
              <div id="flow_1">
                <div id="about_inner">
                  <div className="about1">
                    <h3>運営会社</h3>
                    <p>
                    S-Walletは、〇〇社によって立ち上げられた新たなEウォレットブランドです。世界の基軸通貨に対応し、それぞれの地域におけるローカライズされたウォレットを目指していきます。さらにスピーディなアカウント開設に入出金、お支払い（決済）及び、国境の壁を超えた送金に対応いたします。「手数料が安く・スピーディな決済」をモットーにグローバルな範囲でご利用頂けるサービスをご提供いたします。
                    </p>
                  </div>

                  <div className="about1">
                    <dl>
                      <dt>
                        <h4>金融ライセンス</h4>
                        <p id="license01">
                          <img
                            src="./img/andex_logo.png"
                            alt="andex"
                            className="license01"
                          />
                        </p>
                        <p id="license02">
                          {" "}
                          <img
                            src="./img/license.png"
                            alt="ライセンス"
                          />
                        </p>
                        <table className="about_table">
                          <tbody>
                            <tr>
                              <th>ライセンス名</th>
                              <td></td>
                            </tr>
                            <tr>
                              <th>ライセンス番号</th>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </dt>
                      <dd>
                        <h4>運営・管理会社</h4>
                        <table className="about_table">
                          <tbody>
                            <tr>
                              <th>会社名</th>
                              <td></td>
                            </tr>
                            <tr>
                              <th>住所</th>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <h4>パートナー</h4>
                        <p id="partner">
                          <img
                            src="./img/pesoforward_logo.png"
                            width="1011"
                            height="233"
                            alt="pesoforward"
                          />{" "}
                        </p>
                        <table className="about_table">
                          <tbody>
                            <tr>
                              <th>送金ライセンス</th>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </dd>
                    </dl>
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
