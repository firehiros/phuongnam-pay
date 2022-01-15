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
        <title>S-WALLET グローバル対応の最新Eウォレット | よくあるご質問</title>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/icon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="./favicon/favicon.ico"
        />
        <link href="./css/css" rel="stylesheet" />
        <script src="./js/jquery.min.js"></script>
        <script src="./js/menu.js"></script>
        <script src="./js/iscroll.js"></script>
      </Head>

      <main>
        <div id="contents">
          <div id="contents_inner">
            <Header />

            <div id="terms_title">
              <h2>よくあるご質問</h2>
            </div>

            <div id="faq_wrap">
              <section id="faq_inner">
                <h2>よくあるご質問</h2>
                <div className="accordion">
                  <ul>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>S-WALLETアカウントを開設すると何ができますか？</h5>
                      </a>
                      <p>
                        S-WALLETはグローバルでご利用いただけるEウォレットです。
                        国際通貨である【USD / EUR /
                        JPY】から仮装通貨（暗号通貨）【BTC / ETH / XRP / USDT /
                        USDC】に対応しています。ユーザー間でのS-WALLETウォレット送金を利用すればロケーションを気にせず瞬時に送金（手数料：無料）が可能です。また、それら対応通貨全ての両替（手数料：無料）に対応しアセットの管理に優れたウォレットです。
                        S-WALLETでは提携企業が増えること及びスピード決済を目標に掲げ、今後さらなるご利用のシーンが広がりによってご利用ユーザー様にとって便利なウォレット、決済手段の一つとなることを目指しています。
                        さらに、ビジネスアカウントを契約すると、「あなたのビジネスにもS-WALLETの導入」が可能です。
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
                          S-WALLETの口座開設には、年齢や国籍の制限はありますか？
                        </h5>
                      </a>
                      <p>
                        はい、S-WALLETアカウントの開設は、18歳以上のお客様に限ります。
                        <br />
                        国籍制限については、FATFやOFACなどの禁止国の国籍の方は、S-WALLETの口座開設をお申込みいただくことはできません。参考までに以下のリンクを参照してください。
                        <br />
                        <a
                          href="https://www.fatf-gafi.org/countries/#high-risk"
                          target="_blank"
                        >
                          高リスクおよびその他の監視対象国
                        </a>
                        <br />
                        <a
                          href="https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-information"
                          target="_blank"
                        >
                          外国資産管理局
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
                          アカウントのアップグレードはどうすればいいですか？
                        </h5>
                      </a>
                      <p>
                        お客様は、身分証明書と住所証明書を1つずつ提出し承認されることで、アカウントをスタンダードアカウントにアップグレードすることができます。
                        <br />
                        受付可能な書類の一覧は、以下のリンクより詳細をご確認ください。
                        <br />
                        <Link href="/kyc_personal">
                          <a>本人確認書類の詳細</a>
                        </Link>
                        <br />
                        アカウントのアップグレード方法については、以下のリンクより詳細をご確認ください。
                        <br />
                        <Link href="/kyc">
                          <a>本人確認手順</a>
                        </Link>
                      </p>
                    </li>
                    <li>
                      {" "}
                      <a className="toggle">
                        <p className="accordion_icon">
                          <span></span>
                          <span></span>
                        </p>
                        <h5>S-WALLET口座への入金方法を教えてください</h5>
                      </a>
                      <p>
                        S-WALLET口座への入金は、以下の方法で行うことができます。
                        <br />
                        - 銀行送金（日本）
                        <br />
                        - 銀行送金（国際）
                        <br />
                        - 仮想通貨入金
                        <br />
                        <br />
                        なお、銀行振込サービスをご利用いただけるのは、本人確認が完了し「スタンダード」へアップグレードされたアカウントのみが可能です。
                        <br />
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
                          入金が口座に反映されるまで、どのくらいの時間がかかりますか？また、入金がTIGER
                          PAYのアカウントに反映されていない場合はどうすればいいですか？
                        </h5>
                      </a>
                      <p>
                        日本国内の銀行からの入金の場合、最短で5分（目安）にて反映されます。
                        <br />
                        海外からの銀行送金の場合は、3～5営業日（目安）にお客様の口座に反映されます。
                        <br />
                        反映されないなどの問題が発生した場合は、お支払いを証明できるものを添えてサポートまでご連絡ください。
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
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
