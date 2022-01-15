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
        <title>S-WALLET｜事業者の方へ</title>
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
        <link
          href="./css/business/style.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="./css/business/default.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="./css/business/css" rel="stylesheet" />
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
        <script src="./js/jquery.min.js"></script>
        <script src="./js/menu.js"></script>
        <script src="./js/iscroll.js"></script>
      </Head>

      <main id="business">
        <div id="header">
          <p id="logo">
            <a href="/">
              <img
                src="./img/tiger_pay_logo.png"
                width="498"
                height="178"
                alt="S-WALLET"
              />
            </a>
          </p>
          <h1>S-WALLETのBusiness口座</h1>
          <ul>
            <li className="ofiice_link">
              <Link href="/about">
                <a>運営会社</a>
              </Link>
            </li>
            {/* <li>
              <a href="https://tiger-pay.com/business/">日本語</a>
            </li>
            <li>
              <a href="https://tiger-pay.com/business/en/">Eng</a>
            </li> */}
          </ul>
        </div>
        <div id="main_wrap">
          <div id="main_v">
            <div id="main_text">
              <p>
                全世界的にキャッシュレス化が進む中、今後は国内取引のみならず事業の大小を問わずグローバルでスピーディな決済手段が必要とされるのは間違いありません。また、日本円だけではなく、他国の通貨や暗号通貨をシームレスに扱える決済手段も重要になるでしょう。
              </p>
            </div>
            <div id="main_bg_w"> </div>
          </div>
          <div id="section2">
            <div id="main_btn">
              <p id="main_v_btn">
                <a
                  href="https://secure.tiger-pay.com/dashboard/register"
                  target="_blank"
                >
                  <img
                    src="./img/business_btn1.png"
                    width="2279"
                    height="350"
                    alt="ビジネス口座開設"
                  />
                </a>
              </p>
              <p id="main_v_btn2">
                <a
                  href="https://secure.tiger-pay.com/dashboard/register"
                  target="_blank"
                >
                  <img
                    src="./img/business_btn1_sp.png"
                    width="2279"
                    height="350"
                    alt="ビジネス口座開設"
                  />
                </a>
              </p>
            </div>
            <div id="sec2_inner">
              <h2>以下のような業務にお困りではないでしょうか？</h2>
              <div id="list_inner">
                <ul>
                  <li>
                    決済用通貨が多数あり、更に仮想通貨もあって決済作業がますます複雑化！
                  </li>
                  <li>送金する通貨毎に為替レートを計算するのが面倒くさい！</li>
                  <li>手数料も高く、経費が嵩む！</li>
                  <li>
                    手数料か多くて間違いが起きやすい！また間違い探しにも人員が必要！
                  </li>
                </ul>
              </div>
              <p>
                S-WALLETのBusiness口座は、そういった問題を解決できる
                <br className="pc" />
                決済手段として誕生しました。
              </p>
            </div>
          </div>
        </div>
        <div id="section3">
          <h2>S-WALLETの導入メリット</h2>
          <h3>ビジネスを加速させるタイガーペイウォレット</h3>
          <p className="merit_main">
            オフラインのビジネスではキャッシュレス決済として、オンラインのビジネスでは「豊富な決済手段」をタイガーペイで一括導入が可能です。「クレジットカード」、「国内銀行振込」、「暗号通貨」決済をタイガーペイで導入してユーザビリティの向上を狙うことができます。
            <br />
            また、「国際銀行送金」及び「通貨両替（エクスチェンジ）」もウォレット内で行うことができるので、国境を超えたビジネスでも幅広い国で1つのソリューションでグローバル決済まで可能になります。
          </p>
          <ul className="bus_wal">
            <li>
              <figure>
                <span>
                  <img src="./img/bw01.png" alt="タイガーペイ導入" />
                </span>
              </figure>
              <h4>タイガーペイ導入</h4>
              <p>
                事業主様のビジネス形態に合わせて導入を行います。APIでのシステム統合も可能です。
              </p>
            </li>
            <li className="no_arrow">
              <img src="./img/bwno01.png" alt="→①" />
            </li>
            <li className="no_arrow_sp">
              <img src="./img/bwno_d01.png" alt="↓①" />
            </li>
            <li>
              <figure>
                <span>
                  <img src="./img/bw02.png" alt="顧客様が決済" />
                </span>
              </figure>
              <h4>顧客様が決済</h4>
              <p>
                顧客様がタイガーペイを利用して、事業主様指定の通貨で決済を行います。
              </p>
            </li>
            <li className="no_arrow">
              <img src="./img/bwno02.png" alt="→②" />
            </li>
            <li className="no_arrow_sp">
              <img src="./img/bwno_d02.png" alt="↓②" />
            </li>
            <li>
              <figure>
                <span>
                  <img src="./img/bw03.png" alt="決済の受取り" />
                </span>
              </figure>
              <h4>決済の受取り</h4>
              <p>
                お支払いが手続きが完了すると瞬時に事業主様のウォレットに受取り金額が反映されます。
              </p>
            </li>
            <li className="no_arrow">
              <img src="./img/bwno03.png" alt="→③" />
            </li>
            <li className="no_arrow_sp">
              <img src="./img/bwno_d03.png" alt="↓③" />
            </li>
            <li>
              <figure>
                <span>
                  <img src="./img/bw04.png" alt="売上の出金" />
                </span>
              </figure>
              <h4>売上の出金</h4>
              <p>
                事業主様のウォレットに貯まった売上は、出金申請を行うことで売上の受取りが可能です。
              </p>
            </li>
          </ul>
        </div>
        <div id="section4">
          <h2>S-WALLET口座の基本的な特徴</h2>
          <div className="sec4_inner">
            <div className="sec4_box" id="box1">
              <h3>仮想通貨を含めた様々な通貨の取り扱い</h3>
              <p>
                取り扱い通貨
                <br />
                法定通貨 : USD/JPY/CNY/EUR
                <br />
                仮想通貨 : BYC/ETH/XRP/USDT
                <br />
                *2020年9月現在。随時追加予定{" "}
              </p>
            </div>
            <div className="sec4_box" id="box2">
              <h3>最適なレートで即座に両替が可能</h3>
              <p>
                法定通貨間は勿論、法定通貨〜仮想通貨間の両替も最適なレートで両替が可能です。
              </p>
            </div>
          </div>
          <div className="sec4_inner">
            <div className="sec4_box" id="box3">
              <h3>スムーズな海外送金</h3>
              <p>
                送金先が海外であっても、S-WALLET口座間なら即座に送金できます。取引先様口座に着金するまでのタイムラグを考慮する必要はありません。
              </p>
            </div>
            <div className="sec4_box" id="box4">
              <h3>多種の送金先に対応</h3>
              <p>
                日本国内銀行や海外銀行への日本円や外貨での送金も勿論、取引先様の仮想通貨ワレットへも送金可能です。
              </p>
            </div>
          </div>
          <h4>
            <span>APIで更に便利に！</span>
            <br />
            上記の機能をAPIで行うことで、自動的に、ミス無く実行できます。
          </h4>
          <div className="sec4_inner">
            <div className="sec4_box" id="box5">
              <h3>API決済機能</h3>
              <p>
                エンドユーザーが、加盟店様のWEBサイトで商品・サービスの代金を支払っていただく際に、エンドユーザーのS-WALLET口座から加盟店様のS-WALLET口座から加盟店様のS-WALLET口座への即時に支払い頂けるAPIです。
              </p>
            </div>
            <div className="sec4_box" id="box6">
              <h3>送金API機能</h3>
              <p>
                Business口座からアフリエイターへのコミッションや会員への送金などを、365日リアルタイムでの送金を行えるAPIです。
              </p>
            </div>
          </div>
          <div className="sec4_inner">
            <div className="sec4_box" id="box7">
              <h3>CSV一括バッチ送金機能</h3>
              <p>
                Business口座から、複数のS-WALLET口座へ、指定日付、指定通貨・指定金額での送金ができます。
              </p>
            </div>
            <div className="sec4_box" id="box8">
              <h3>口座開設　一括口座開設機能</h3>
              <p>
                加盟店様のWebサイトにご登録するエンドユーザーをS-WALLET口座に同時登録が可能になります。また、過去の会員様をまとめて口座開設することもできます。（認証メールを送信し、ログインパスワードを登録してもらう機能）
              </p>
            </div>
          </div>
          <div className="sec4_inner">
            <div className="sec4_box" id="box9">
              <h3>正確な送金</h3>
              <p>
                勿論、APIなので途中のコピペやタイプミスによる間違いがありません。
              </p>
            </div>
            <div className="sec4_box" id="box10">
              <h3>カスタマーサポート</h3>
              <p>経験あるオペレーターが24時間体制でサポートいたします。</p>
            </div>
          </div>
        </div>
        <div id="footer_area">
          <p id="footer_btn">
            <a
              href="https://secure.tiger-pay.com/dashboard/register"
              target="_blank"
            >
              <img
                src="./img/businessf_footer_btn.png"
                width="2280"
                height="351"
                alt="口座開設"
              />
            </a>
          </p>
          <p id="footer_btn2">
            <a
              href="https://secure.tiger-pay.com/dashboard/register"
              target="_blank"
            >
              <img
                src="./img/business_footer_btnsp.png"
                width="2280"
                height="351"
                alt="口座開設"
              />
            </a>
          </p>
        </div>
        <div id="footer_area2">
          <div id="footer_inner">
            <div className="footer_box" id="box11">
              <dl>
                <dt>ビジネス口座開設について</dt>
                <dd>
                  ビジネス口座は無料のPersnal口座を開設後KYC/KYBを提出しアップグレードする必要があります。
                  また、ご利用に当たり別途契約がございますので、ビジネス口座開設後に弊社担当者より詳細をご連絡いたします。
                </dd>
              </dl>
            </div>
            <div className="footer_box" id="box12">
              <dl>
                <dt>各種手数料について</dt>
                <dd>
                  各種手数料は
                  <Link href="/fee">
                    <a>手数料・処理時間</a>
                  </Link>
                  をご覧ください。または
                  <a href="mailto:support@s-wallet.com" target="new">
                    support@s-wallet.com
                  </a>
                  までお気軽にご相談ください。
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <Footer inner2={true} />
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
