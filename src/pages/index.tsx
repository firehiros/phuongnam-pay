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
      </Head>

      <main>
        <div id="contents">
          <div id="contents_inner">
            <div id="header">
              <h1 className="pc_main">
                <a href="https://tiger-pay.com/jp/">
                  <img
                    src="./img/tigerpay.png"
                    width="2083"
                    height="994"
                    alt="S-WALLET"
                  />
                </a>
              </h1>
              <div id="header_menu">
                <div id="sub_menu">
                  <p className="to_business">
                    <a href="https://tiger-pay.com/business/" target="_blank">
                      事業者の方はこちら
                    </a>
                  </p>
                  <p className="sponsor">
                    <a href="https://tiger-pay.com/sponsor/" target="_blank">
                      スポンサー活動
                    </a>
                  </p>
                  <p className="open_btn">
                    <a
                      href="https://secure.tiger-pay.com/dashboard/register"
                      target="_blank"
                    >
                      口座開設
                    </a>
                  </p>
                  <p className="login_btn">
                    <a href="https://secure.tiger-pay.com/" target="_blank">
                      ログイン
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
                        alt="口座開設"
                      />
                    </a>
                  </p>
                  <p className="login_btn_sp">
                    <a href="https://secure.tiger-pay.com/" target="_blank">
                      <img
                        src="./img/header_login_icon.png"
                        width="48"
                        height="48"
                        alt="ログイン"
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
                      <a href="https://tiger-pay.com/jp/">TOP</a>
                    </li>
                    <li id="n_about">
                      <a href="https://tiger-pay.com/jp/about.html">運営会社</a>
                    </li>
                    <li id="n_tiger">
                      <a href="https://tiger-pay.com/jp/tiger.html">
                        S-WALLETとは？
                      </a>
                    </li>
                    <li id="n_partner">
                      <a href="https://tiger-pay.com/jp/partner.html">
                        パートナー
                      </a>
                    </li>
                    <li id="n_depodit">
                      <a
                        href="https://tiger-pay.com/jp/#"
                        style={{ borderWidth: "medium" }}
                      >
                        操作方法
                      </a>
                      <ul>
                        <li>
                          <div className="gmenu_inner">
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">
                                アカウント
                              </span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/register.html"
                                id="n_register"
                              >
                                <span>登録手順</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">銀行</span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/bank_register.html"
                                id="n_bank_register"
                              >
                                <span>銀行口座登録</span>
                              </a>{" "}
                              <a
                                href="https://tiger-pay.com/jp/bank.html"
                                id="n_bank"
                              >
                                <span>銀行入金</span>
                              </a>{" "}
                              <a
                                href="https://tiger-pay.com/jp/bank_withdraw.html"
                                id="n_bank_withdraw"
                              >
                                <span>銀行出金</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">
                                プリペイドカード
                              </span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/credit.html"
                                id="n_credit_card"
                              >
                                <span>カード発行申請</span>
                              </a>{" "}
                              <a
                                href="https://tiger-pay.com/jp/card_charge.html"
                                id="n_card_charge"
                              >
                                <span>カードチャージ</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/jp/card_balance.html"
                                id="n_card_balance"
                              >
                                <span>カード残高照会</span>
                              </a>
                              <a
                                href="https://tiger-pay.com/campaign/"
                                id="pr"
                                target="_blank"
                              >
                                <span>25$ キャッシュバック</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">仮想通貨</span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/cc.html"
                                id="n_vc"
                              >
                                <span>入金</span>
                              </a>{" "}
                              <a
                                href="https://tiger-pay.com/jp/cc_withdraw.html"
                                id="n_vc_withdraw"
                              >
                                <span>出金</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">その他</span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/payeasy.html"
                                id="n_payeasy"
                              >
                                <span>ペイジー決済</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">両替</span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/transfer.html"
                                id="n_transfer"
                              >
                                <span>両替方法</span>
                              </a>{" "}
                            </div>
                            <div className="gmenu_box">
                              {" "}
                              <span className="gmenu_list">本人確認</span>{" "}
                              <a
                                href="https://tiger-pay.com/jp/kyc.html"
                                id="n_kyc"
                              >
                                <span>手順</span>
                              </a>{" "}
                              <a
                                href="https://tiger-pay.com/jp/kyc_personal.html"
                                id="n_kyc_personal"
                              >
                                <span>書類詳細</span>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://tiger-pay.com/jp/fee.html">
                        手数料・処理時間
                      </a>{" "}
                    </li>
                    <li>
                      <a href="https://tiger-pay.com/jp/card.html">
                        提携カード
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        href="https://support.tiger-pay.com/ja/"
                        target="_blank"
                      >
                        よくある質問
                      </a>{" "}
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
                  alt="S-WALLET"
                />
              </h1>
              <p className="navbtn">
                <a href="#" className="close">
                  <span>メニューを開く</span>
                </a>
              </p>
              <ul className="close" style={{ display: "none" }}>
                <li>
                  <a href="https://tiger-pay.com/jp/">TOP</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/about.html">運営会社</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/tiger.html">
                    S-WALLETとは？
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/partner.html">パートナー</a>
                </li>
                <li className="parent">
                  <a href="#" className="close">
                    操作方法
                  </a>
                  <ul className="submenu close">
                    <li>
                      <a
                        href="https://tiger-pay.com/jp/register.html"
                        className="close"
                      >
                        S-WALLET 登録手順
                      </a>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>銀行</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/bank_register.html"
                            className="close"
                          >
                            銀行口座 登録
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/bank.html"
                            className="close"
                          >
                            銀行 入金
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/bank_withdraw.html"
                            className="close"
                          >
                            銀行 出金
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>プリペイドカード</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/credit.html"
                            className="close"
                          >
                            カード発行申請
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/card_charge.html"
                            className="close"
                          >
                            カードチャージ
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/card_balance.html"
                            className="close"
                          >
                            カード残高照会
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>仮想通貨</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/cc.html"
                            className="close"
                          >
                            仮想通貨 入金
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/cc_withdraw.html"
                            className="close"
                          >
                            仮想通貨 出金
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>その他</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/payeasy.html"
                            className="close"
                          >
                            ペイジー決済
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>両替</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/transfer.html"
                            className="close"
                          >
                            両替方法
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#" className="close">
                        <span>本人確認</span>
                      </a>
                      <ul className="submenu close">
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/kyc.html"
                            className="close"
                          >
                            手順
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tiger-pay.com/jp/kyc_personal.html"
                            className="close"
                          >
                            書類詳細
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/fee.html">
                    手数料・処理時間
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/card.html">提携カード</a>
                </li>
                <li>
                  <a href="https://support.tiger-pay.com/ja/" target="_blank">
                    よくある質問
                  </a>
                </li>
              </ul>
            </nav>
            <div id="main_v">
              <div id="main_wrap">
                <div id="main_v_inner">
                  <h1>
                    <span className="title_small">
                      早くて簡単、便利！最も安全な決済
                    </span>
                    <br />
                    グローバル
                    <br />
                    イーウォレットの決定版
                    <br />
                    <span className="title_color">S-WALLET</span>
                  </h1>
                  <p id="main_btn">
                    <a
                      href="https://secure.tiger-pay.com/dashboard/register"
                      target="_blank"
                    >
                      <span className="btn_color">S-WALLET</span>口座開設
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src="./img/main_v.png"
                    width="1383"
                    height="1202"
                    alt="S-WALLET"
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
                alt="グローバルいーウォレットの決定版"
              />{" "}
            </div>
            <div id="about_wrap">
              <div id="about">
                <div id="about_box">
                  <h2>S-WALLETグローバルペイメントソリューション</h2>
                  <p>
                    S-WALLETはグローバルでご利用いただけるEウォレットです。
                    <br />
                    <br />
                    国際通貨である【USD / EUR / JPY】から暗号通貨【BTC / ETH /
                    XRP / USDT / USDC】がお使い頂けます。
                    <br />
                    ユーザー間でのS-WALLETウォレット送金を利用すればロケーションを気にせず瞬時に送金（手数料：無料）が可能です。
                    <br />
                    また。対応通貨全ての両替（手数料：無料）など、アセットの管理に優れたウォレットです。{" "}
                    <br />
                    <br />
                    S-WALLETでは提携企業が増えること及びスピード決済を目標に掲げ、今後さらなるご利用のシーンが広がりによってご利用ユーザー様にとって便利なウォレット、決済手段の一つとなることを目指しています。
                    <br />
                    <br />
                    さらに、ビジネスアカウントを契約すると、「あなたのビジネスにもS-WALLETの導入」が可能です！東アジアを中心とした今後の展開から、新たなアセット管理・決済手段となる最新Eウォレットとして今後の期待が高まっています！
                  </p>
                  <p className="more_btn">
                    <a href="https://tiger-pay.com/jp/tiger.html">READ MORE</a>
                  </p>
                </div>
                <figure>
                  <img
                    src="./img/about_img.png"
                    width="1124"
                    height="914"
                    alt="S-WALLETとは？"
                  />
                </figure>
              </div>
            </div>
            <div id="content_wap">
              <div id="content_inner">
                <div id="card_box">
                  <p>
                    S-WALLETでは、UnionPayの提携カードを発行し、使用することができます。
                  </p>
                  <figure>
                    <img
                      src="./img/card_img.png"
                      width="993"
                      height="565"
                      alt="S-WALLET"
                    />{" "}
                  </figure>
                </div>
                <div id="content_1">
                  <div id="content_1_inner">
                    <p style={{ width: "auto" }}>
                      S-WALLETのアカウント一つで、提携の通貨と仮想通貨の両方を保有、管理することができます。
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
                      <li>S-WALLETで両替</li>
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
                      <li>S-WALLETで両替</li>
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
                <h2>S-WALLETが使えるお店</h2>
                <h4>S-WALLETは様々なサービスでご利用いただけます!</h4>
                <div className="store_card">
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/shopping-icon@2x.png" />
                    <h3>総合通販</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/electronic-icon@2x.png" />
                    <h3>家電/PC</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/game-icon@2x.png" />
                    <h3>ゲーム</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/entertainment-icon@2x.png" />
                    <h3>エンタメ</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/delivery-icon@2x.png" />
                    <h3>配送</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/food-icon@2x.png" />
                    <h3>飲食</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/cosmetics-icon@2x.png" />
                    <h3>コスメ・ビューティー</h3>
                  </a>
                  <a
                    href="https://tiger-pay.com/jp/#"
                    className="store_card_box"
                    style={{ pointerEvents: "none" }}
                  >
                    <img src="./img/fashion-icon@2x.png" />
                    <h3>ファッション</h3>
                  </a>
                </div>
                <h4>
                  *オンラインサービスの支払いはS-WALLETの残高のみ利用可能です。
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
                        <a href="https://tiger-pay.com/jp/kyc_personal.html">
                          本人確認書類の詳細
                        </a>
                        <br />
                        アカウントのアップグレード方法については、以下のリンクより詳細をご確認ください。
                        <br />
                        <a href="https://tiger-pay.com/en/kyc.html">
                          本人確認申請手順
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
                        <br />
                        銀行送金の入金方法については、以下のリンクより詳細をご確認いただけます。
                        <br />
                        <a href="https://tiger-pay.com/jp/bank.html">
                          S-WALLET銀行振込手順
                        </a>
                        <br />
                        <br />
                        暗号通貨の入金方法については、以下のリンクより詳細をご確認いただけます。
                        <br />
                        <a href="https://tiger-pay.com/jp/cc.html">
                          S-WALLET仮想通貨入金手順
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
                <p id="faq_btn">
                  <a href="https://support.tiger-pay.com/ja/">READ MORE</a>
                </p>
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
