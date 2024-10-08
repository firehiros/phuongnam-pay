// React import
import React from "react";

// Thirdparty Import
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

// App Import
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import PriceTable from "src/components/Molecules/PriceTable";

const Component = () => {
  return (
    <>
      <Head>
        <title>Rays Wallet グローバル対応の最新Eウォレット |Rays Walletとは？</title>
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

            <div id="main_title">
              <h2>Rays Walletとは？</h2>
            </div>
            <div id="tiger_about">
              <div id="tiger_about_inner">
                <h3>Rays Walletとは？</h3>
                <p className="tiger_about_p">
                  Rays Walletは、国際間のスムーズな送金や決済ソリューションをお求めの企業
                  / 個人様の為の、通貨、仮想通貨をご利用いただけるE
                  ウォレットです。今までの複雑な国際銀行送金・決済手続きや履歴管理などに代わる、シンプルで迅速に行えるデジタルアセットプラットフォームを提供いたします。
                </p>
                <div id="about_block">
                  <div className="about_box">
                    <figure>
                      <img
                        src="./img/tiger_list3.png"
                        width="112"
                        height="112"
                        alt="スピーディな決済処理"
                      />
                    </figure>
                    <h4>
                      スピーディな
                      <br />
                      決済処理
                    </h4>
                    <p>
                      ウォレットへのスピーディな入出金に、
                      <br />
                      スムーズなウォレット間送金
                    </p>
                  </div>
                  <div className="about_box">
                    <figure>
                      <img
                        src="./img/tiger_list1.png"
                        width="112"
                        height="112"
                        alt="豊富な通貨に対応"
                      />
                    </figure>
                    <h4>
                      豊富な通貨
                      <br />
                      に対応
                    </h4>
                    <p>
                      日本円やUSDなど法定通貨に加えて、
                      <br />
                      暗号通貨にも対応
                    </p>
                  </div>
                  <div className="about_box">
                    <figure>
                      <img
                        src="./img/tiger_list2.png"
                        width="122"
                        height="101"
                        alt="ウォレット内で両替が可能"
                      />
                    </figure>
                    <h4>
                      ウォレット内で
                      <br />
                      両替が可能
                    </h4>
                    <p>
                      法定通貨、暗号通貨問わず必要な
                      <br />
                      タイミングで即時に通貨の両替が可能
                    </p>
                  </div>
                </div>
                {/* <div id="about_block02">
                  <h4>豊富な対応通貨</h4>
                  <div id="about_list">
                  <dl>
                      <dt>
                        <img
                          src="./img/usd.png"
                          width="15"
                          height="15"
                          alt="ドル"
                        />
                      </dt>
                      <dd>USD</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/jpy.png"
                          width="15"
                          height="15"
                          alt="日本円"
                        />
                      </dt>
                      <dd>JPY</dd>
                    </dl>
                    
                    <dl>
                      <dt>
                        <img
                          src="./img/eud.png"
                          width="15"
                          height="15"
                          alt="ユーロ"
                        />
                      </dt>
                      <dd>EUR</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/php.png"
                          width="15"
                          height="15"
                          alt="ペソ"
                        />
                      </dt>
                      <dd id="peso">PHP</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/btc.png"
                          width="15"
                          height="15"
                          alt="ビットコイン"
                        />
                      </dt>
                      <dd>BTC </dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/eth.png"
                          width="15"
                          height="15"
                          alt="イーサリアム"
                        />
                      </dt>
                      <dd>ETH</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/xrp.png"
                          width="15"
                          height="15"
                          alt="リップル"
                        />
                      </dt>
                      <dd>XRP</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/usdt.png"
                          width="15"
                          height="15"
                          alt="USDt"
                        />
                      </dt>
                      <dd>USDT</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img
                          src="./img/usdc.png"
                          width="15"
                          height="15"
                          alt="USDC"
                        />
                      </dt>
                      <dd>USDC</dd>
                    </dl>
                  </div>
                </div> */}
              </div>
            </div>
            <div id="tiger_about2">
              <div id="tiger_about_inner2">
                <h3>提携通貨、仮想通貨の両替が可能</h3>
                <figure className="about_img_pc">
                  <img
                    src="./img/tiger_about_img.png"
                    alt="Rays Walletの機能一覧"
                  />
                </figure>
                <figure className="about_img_sp">
                  <img
                    src="./img/tiger_about_imgsp.png"
                    width="366"
                    height="190"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div id="tiger_about3">
              <div id="tiger_about_inner3">
                <h3>Rays Wallet</h3>
                <h4>用途にあわせて選べる口座タイプ</h4>
                <div className="about3_wrap">
                  <div className="n_about3_box" id="quicl1">
                    <dl>
                      <dt>Fast-ファスト</dt>
                      <dd>
                        メール登録で簡単にアカウントの開設が可能な簡易ウォレットです。
                      </dd>
                    </dl>
                  </div>
                  <div className="n_about3_box" id="personal1">
                    <dl>
                      <dt>Personal - パーソナル</dt>
                      <dd>
                        本人確認手続きが完了するとRays Walletのフル機能をご利用頂けます。
                      </dd>
                    </dl>
                  </div>
                  <div className="n_about3_box" id="business1">
                    <dl>
                      <dt>Business - ビジネス</dt>
                      <dd>
                        ビジネスアカウントを開設してビジネスの決済手段として導入頂けます。
                      </dd>
                    </dl>
                  </div>
                </div>
                {/* <h4>ウォレットへの入出金も豊富な決済方法で楽々</h4>
                <div className="about3_wrap">
                  <div className="n_about3_box2">
                    <div>
                      <h5>入金</h5>
                      <table>
                        <tbody>
                          <tr>
                            <th>銀行振込（日本）</th>
                            <td>
                              <img
                                src="./img/bank_logo.svg"
                                width="150"
                                height="auto"
                                alt="住信SBIネット銀行"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>銀行振込（国際）</th>
                            <td>※準備中</td>
                          </tr>
                          <tr>
                            <th>暗号通貨</th>
                            <td>
                              <img
                                src="./img/btc.png"
                                width="30"
                                alt="Bitコイン"
                              />
                              <img
                                src="./img/eth.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/xrp.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/usdc.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/usdt.png"
                                width="30"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>クレジットカード</th>
                            <td>準備中（導入時期：未定</td>
                          </tr>
                        </tbody>
                      </table>
                    </div> 
                  </div>
                  <div className="n_about3_box2">
                    <div>
                      <h5>出金</h5>
                      <table>
                        <tbody>
                          <tr>
                            <th>銀行振込（日本）</th>
                            <td>
                              <img
                                src="./img/bank_logo.svg"
                                width="150"
                                height="auto"
                                alt="住信SBIネット銀行"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>銀行振込（国際）</th>
                            <td>※準備中</td>
                          </tr>
                          <tr>
                            <th>暗号通貨</th>
                            <td>
                              <img
                                src="./img/btc.png"
                                width="30"
                                alt="Bitコイン"
                              />
                              <img
                                src="./img/eth.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/xrp.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/usdc.png"
                                width="30"
                                alt=""
                              />
                              <img
                                src="./img/usdt.png"
                                width="30"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>プリペイドカードチャージ</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div id="tiger_about4">
              <div id="tiger_about_inner4">
                <div className="upg_box">
                  <h3>口座のアップグレード</h3>
                  <p>
                    ご自身のアカウント内から口座のアップグレードを行う事で、よりおおくの通貨・より高い金額の取引が可能になります。
                    <br />
                    またRays Walletのサービスの一つである”プリペイド式デビットカード”もお申し込みいただけます。
                    <br className="pc" />
                    （＊アップグレードには「本人確認 /
                    事業者確認」が必要になります）
                  </p>
                  <table className="about_table">
                    <tbody>
                      <tr>
                        <th>Personal口座</th>
                        <td>
                          Fiat通貨のご入金やご出金など、Quick口座よりも多くの機能が利用できます。
                          また、利用上限もアップされますので、幅広いご利用が可能になります。
                          プリペイド式デビットカードもお申し込み可能になります。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="about_table">
                    <tbody>
                      <tr>
                        <th>Business口座</th>
                        <td>
                          お客様のビジネスをご支援する事を目的とし、Personal口座よりも利用上限がアップされ
                          ます。また、決済ソリューションとしての提供を行う為にAPIでの接続も可能です。
                          顧客様にRays Walletを使用した入出金ソリューションをご提供可能になります。
                          なお、Rays Walletでは、ビジネスでの利用を幅広く行えるよう、今後様々なソリューションや
                          機能の提供を計画しています。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>口座タイプにおける機能比較</h3>
                <div id="table_box">
                  <PriceTable />
                </div>
              </div>
            </div>
            <div id="tiger_about5">
              <div id="tiger_about_inner5">
                <h3>プリペイド式デビットカード</h3>
                <p>
                Rays Walletでは、Rays Walletアカウントからチャージすることのできるプリペイド式デビッドカードを用意しております。必要なタイミングで必要な金額をカードにチャージしてプリペイドカードをご利用頂けます。なお、プリペイドカードへのチャージは
                  [USD/JPY]
                  口座からご利用頂けます。（プリペイドカードのご利用にはお手続きが別途必要となります。）
                </p>
                <p className="pc">
                  <img
                    src="./img/tiger_about_img2.png"
                    width="1779"
                    height="423"
                    alt="プリペイドカードへチャージ"
                  />
                </p>
                <p className="sp" id="about5_img">
                  <img
                    src="./img/tiger_about_img2sp.png"
                    width="559"
                    height="1426"
                    alt=""
                  />
                </p>
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
            <div id="tiger_about6">
              <div id="n_tiger_about_inner6">
                <h3>ビジネスでのご利用</h3>
                <p>
                  法人のお客様にご利用頂けるウォレット・タイプとなります。法人としてファストアカウントにて開設後、スタンダードアカウントにアップグレードしていただくことで下記機能が利用可能です。マーチャント契約が別途必要となります。パーソナルアカウントとは異なりウォレット機能の制限や、大口でのセトルメントが対応可能となります。なお、ビジネスアカウントにはビジネス（マーチャント）手数料がかかります。導入をご検討のお客様は下記メールアドレスまでメールにてお問い合わせください。
                </p>
                <p>
                  導入ご相談窓口:
                  <a href="mailto:support@rays-wallet.com">
                    business@rays-wallet.com
                  </a>
                </p>
                <h4>導入するとご利用頂けるプレミアム 機能</h4>
                <div className="about6_wrap">
                  <div className="about6_box" id="api1">
                    <dl>
                      <dt>API決済機能</dt>
                      <dd>
                        事業主様のビジネス中で、お客様からのお支払いの受け取りにご利用いただける
                        決済自動化できる「API」となります。
                      </dd>
                    </dl>
                  </div>
                  <div className="about6_box" id="api2">
                    <dl>
                      <dt>送金API機能</dt>
                      <dd>
                        ビジネスアカウントからRays Walletユーザー様へ送金を自動化できるAPIとなります。顧客様への送金などにご利用頂けます。
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="about6_wrap">
                  <div className="about6_box" id="csv1">
                    <dl>
                      <dt>CSVバッチ送金機能</dt>
                      <dd>
                        CSVファイルにて顧客リストをアップロードすることで、指定の日時に一括で顧客様へ
                        送金をできる「一括処理機能」となります。
                      </dd>
                    </dl>
                  </div>
                  <div className="about6_box" id="api3">
                    <dl>
                      <dt>口座開設API</dt>
                      <dd>
                        事業主様のビジネスの会員様に決済時にRays Walletのアカウント開設を決済と同時に行う「API」となります。
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
