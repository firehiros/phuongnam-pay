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
        <title>Rays Wallet｜グローバル対応のEウォレット</title>
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

            <div id="main_v">
              <div id="main_wrap">
                <div id="main_v_inner">
                  {/* <h1>
                    <span className="title_small">
                      早くて簡単、便利！最も安全な決済
                    </span>
                    <br />
                    グローバル
                    <br />
                    イーウォレットの決定版
                    <br />
                    <span className="title_color">Rays Wallet</span>
                  </h1>
                  <p id="main_btn">
                    <a
                      href="https://mypage.rays-wallet.com/register"
                      target="_blank"
                    >
                      <span className="btn_color">Rays Wallet</span>口座開設
                    </a>
                  </p> */}
                </div>
                {/* <figure>
                  <img
                    src="./img/main_v.png"
                    width="1383"
                    height="1202"
                    alt="Rays Wallet"
                  />
                </figure> */}
              </div>
            </div>
            <div id="main_v_sp">
              {" "}
              <img
                src="./img/tiger_main_sp.png"
                width="900"
                height="1579"
                alt="グローバルいーウォレットの決定版"
              />{" "}
            </div>
            <div id="about_wrap">
              <div id="about">
                <div id="about_box">
                  <h2>Rays Walletグローバルペイメントソリューション</h2>
                  <p>
                  Rays Walletはグローバルでご利用いただけるEウォレットです。
                    <br />
                    <br />
                    国際通貨である【USD / EUR / JPY】から暗号通貨【BTC / ETH /
                    XRP / USDT / USDC】がお使い頂けます。
                    <br />
                    ユーザー間でのRays Walletウォレット送金を利用すればロケーションを気にせず瞬時に送金（手数料：無料）が可能です。
                    <br />
                    また。対応通貨全ての両替（手数料：無料）など、アセットの管理に優れたウォレットです。{" "}
                    <br />
                    <br />
                    Rays Walletでは提携企業が増えること及びスピード決済を目標に掲げ、今後さらなるご利用のシーンが広がりによってご利用ユーザー様にとって便利なウォレット、決済手段の一つとなることを目指しています。
                    <br />
                    <br />
                    さらに、ビジネスアカウントを契約すると、「あなたのビジネスにもRays Walletの導入」が可能です！東アジアを中心とした今後の展開から、新たなアセット管理・決済手段となる最新Eウォレットとして今後の期待が高まっています！
                  </p>
                  <p className="more_btn">
                    <Link href="/swallet">
                      <a>READ MORE</a>
                    </Link>
                  </p>
                </div>
                <figure>
                  <img
                    src="./img/about_img.png"
                    width="1124"
                    height="914"
                    alt="Rays Walletとは？"
                  />
                </figure>
              </div>
            </div>
            <div id="content_wap">
              <div id="content_inner">
                <div id="card_box">
                  <p>
                  Rays Walletでは、UnionPayの提携カードを発行し、使用することができます。
                  </p>
                  <figure>
                    <img
                      src="./img/card_img.png"
                      width="993"
                      height="565"
                      alt="Rays Wallet"
                    />{" "}
                  </figure>
                </div>
                <div id="content_1">
                  <div id="content_1_inner">
                    <p style={{ width: "auto" }}>
                    Rays Walletのアカウント一つで、提携の通貨と仮想通貨の両方を保有、管理することができます。
                    </p>
                    <h4>取り扱い通貨：</h4>
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
                            alt="USDt"
                          />
                        </dt>
                        <dd>USDT</dd>
                      </dl>
                    </div>
                    <h4>エクスチェンジのみ：</h4>
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
                <h2>ご利用シーン</h2>
                <div className="scene_box">
                  <div className="scene_box2">
                    <h3>加盟店での支払いに使いたい</h3>
                    <div className="scene_tab scene_tab3">
                      <p>
                        <img
                          src="./img/scene_icon1.png"
                          width="157"
                          height="157"
                          alt="加盟店での支払いに使いたい"
                        />
                      </p>
                    </div>
                  </div>
                  <h3>外貨に両替したい</h3>
                  <div className="scene_tab scene_tab3">
                    <p>
                      <img
                        src="./img/scene_icon2.png"
                        width="157"
                        height="157"
                        alt="外貨に両替したい"
                      />
                    </p>
                  </div>
                </div>
                <div className="scene_box">
                  <h3>仮想通貨を日本円にしたい</h3>
                  <div className="scene_tab scene_tab2">
                    <p>
                      <img
                        src="./img/scene_icon3.png"
                        width="157"
                        height="157"
                        alt="仮想通貨を日本円にしたい"
                      />
                    </p>
                    <ul>
                      <li>Rays Walletで両替</li>
                      <li>↓</li>
                      <li>銀行口座に送金</li>
                      <li>↓</li>
                      <li>カードにチャージ</li>
                      <li>↓</li>
                      <li>ATMで出金</li>
                    </ul>
                  </div>
                </div>
                <div className="scene_box">
                  <h3>仮想通貨で買い物をしたい</h3>
                  <div className="scene_tab scene_tab2">
                    <p>
                      <img
                        src="./img/scene_icon4.png"
                        width="157"
                        height="157"
                        alt="仮想通貨で買い物をしたい"
                      />
                    </p>
                    <ul>
                      <li>Rays Walletで両替</li>
                      <li>↓</li>
                      <li>カードにチャージ</li>
                      <li>↓</li>
                      <li>
                        店舗のワレットに
                        <br />
                        仮想通貨を送金
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scene_box">
                  <div className="scene_box2">
                    <h3>国際送金をしたい</h3>
                    <div className="scene_tab">
                      <p>
                        <img
                          src="./img/scene_icon5.png"
                          width="157"
                          height="157"
                          alt="国際送金をしたい"
                        />
                      </p>
                    </div>
                  </div>
                  <h3>
                    外貨で受けた入金を
                    <br />
                    日本円にしたい
                  </h3>
                  <div className="scene_tab">
                    <p>
                      <img
                        src="./img/scene_icon6.png"
                        width="157"
                        height="157"
                        alt="外貨で受けた入金を日本円にしたい"
                      />
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div id="store_wrap">
              <section id="store_box">
                <h2>Rays Walletが使えるお店</h2>
                <h4>Rays Walletは様々なサービスでご利用いただけます!</h4>
                <div className="store_card">
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/shopping-icon@2x.png" />
                    <h3>総合通販</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/electronic-icon@2x.png" />
                    <h3>家電/PC</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/game-icon@2x.png" />
                    <h3>ゲーム</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/entertainment-icon@2x.png" />
                    <h3>エンタメ</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/delivery-icon@2x.png" />
                    <h3>配送</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/food-icon@2x.png" />
                    <h3>飲食</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/cosmetics-icon@2x.png" />
                    <h3>コスメ・ビューティー</h3>
                  </a>
                  <a
                    href="/"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/fashion-icon@2x.png" />
                    <h3>ファッション</h3>
                  </a>
                </div>
                <h4>
                  *オンラインサービスの支払いはRays Walletの残高のみ利用可能です。
                </h4>
              </section>
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
                        <h5>Rays Walletアカウントを開設すると何ができますか？</h5>
                      </a>
                      <p>
                        Rays Walletはグローバルでご利用いただけるEウォレットです。
                        国際通貨である【USD / EUR /
                        JPY】から仮装通貨（暗号通貨）【BTC / ETH / XRP / USDT /
                        USDC】に対応しています。ユーザー間でのRays Walletウォレット送金を利用すればロケーションを気にせず瞬時に送金（手数料：無料）が可能です。また、それら対応通貨全ての両替（手数料：無料）に対応しアセットの管理に優れたウォレットです。
                        Rays Walletでは提携企業が増えること及びスピード決済を目標に掲げ、今後さらなるご利用のシーンが広がりによってご利用ユーザー様にとって便利なウォレット、決済手段の一つとなることを目指しています。
                        さらに、ビジネスアカウントを契約すると、「あなたのビジネスにもRays Walletの導入」が可能です。
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
                          Rays Walletの口座開設には、年齢や国籍の制限はありますか？
                        </h5>
                      </a>
                      <p>
                        はい、Rays Walletアカウントの開設は、18歳以上のお客様に限ります。
                        <br />
                        国籍制限については、FATFやOFACなどの禁止国の国籍の方は、Rays Walletの口座開設をお申込みいただくことはできません。参考までに以下のリンクを参照してください。
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
                        <h5>Rays Wallet口座への入金方法を教えてください</h5>
                      </a>
                      <p>
                        Rays Wallet口座への入金は、以下の方法で行うことができます。
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
                          入金が口座に反映されるまで、どのくらいの時間がかかりますか？また、入金がRays Walletのアカウントに反映されていない場合はどうすればいいですか？
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
