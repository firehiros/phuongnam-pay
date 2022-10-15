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
        Rays Wallet グローバル対応の最新Eウォレット |
          口座アップグレード/KYC申請方法
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

            <div id="register_flow">
              <div id="flow_boxinner">
                <dl>
                  <dt>
                    <img
                      src="./img/kyc_flowicon1.png"
                      width="50"
                      height="auto"
                      alt="登録内容 修正更新"
                    />
                    <br />
                    <span className="yellow">登録内容</span>修正更新
                  </dt>
                  <dd>本人確認書類と同内容に登録情報を変更</dd>
                </dl>
                <p className="flow_arrow">
                  <img
                    src="./img/flow_arrow.png"
                    width="207"
                    height="37"
                    alt="次へ"
                    className="pc_arrow"
                  />{" "}
                  <img
                    src="./img/in_arrow.png"
                    width="69"
                    height="28"
                    alt=""
                    className="sp_arrow"
                  />
                </p>
                <dl>
                  <dt>
                    <img
                      src="./img/kyc_flowicon2.png"
                      width="50"
                      height="auto"
                      alt="本人確認登録内容 修正更新"
                    />
                    <br />
                    <span className="yellow">本人確認登録内容</span>修正更新
                  </dt>
                  <dd>住所や電話番号などの情報を入力</dd>
                </dl>
                <p className="flow_arrow">
                  <img
                    src="./img/flow_arrow.png"
                    width="207"
                    height="37"
                    alt="次へ"
                    className="pc_arrow"
                  />{" "}
                  <img
                    src="./img/in_arrow.png"
                    width="69"
                    height="28"
                    alt=""
                    className="sp_arrow"
                  />
                </p>
                <dl>
                  <dt>
                    <img
                      src="./img/kyc_flowicon3.png"
                      width="46"
                      height="auto"
                      alt=""
                    />
                    <br />
                    <span className="yellow">ファイル</span>アップロード
                  </dt>
                  <dd>ご本人証明書類と住所確認書類のアップロード</dd>
                </dl>
              </div>
            </div>
            <div id="title_area">
              <div id="title_inner">
                <h1>Rays Wallet口座アップグレード / 本人確認申請手順</h1>
              </div>
            </div>
            <div id="card_group">
              <ul>
                <li>
                  <Link href="/kyc_personal">
                    <a>
                      <div className="arrow"></div>
                      本人確認書類の詳細はこちら
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div id="main_inner">
              <div id="flow_1">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img1.png"
                      alt="当サイト トップページの【Rays Wallet口座開設】ボタンをクリック。"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>01</h3>
                    <p>
                    Rays Walletにログイン後、右上の【My
                      Account】から【KYC書類認証】を選択します。
                    </p>
                  </div>
                </div>
              </div>
              <div id="flow_3">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img3.png"
                      alt="メールアドレス入力画面"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>02</h3>
                    <p>
                      本人確認提出書類と同じ内容である必要があるため、必要な場合は変更。変更内容を全て入力しましたら、【情報を更新する】をクリック
                    </p>
                  </div>
                </div>
              </div>
              <div id="flow_4">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img4.png"
                      alt="03で入力したメールアドレスが記載されていることを確認。"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>04</h3>
                    <p>
                      入力内容に誤りがないか確認をし、間違いがありましたら【戻る】ボタンで入力画面に戻ります。誤りがなければ、【更新】をクリック。
                    </p>
                  </div>
                </div>
              </div>
              <div id="flow_5">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img5.png"
                      alt="口座開設入力内容確認画面"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>05</h3>
                    <p>
                      ※印のついた箇所の入力とプルダウン選択で全て入力し、【確認】をクリック。
                      <br />
                      <br />
                      ※住所は、現在お住まいで、郵便物を受け取れる情報をお願いします。
                      <br />
                      <br />
                      ※電話番号は最初の0を抜いた国際電話表記でお願いします。{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div id="flow_6">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img6.png"
                      alt="認証URL記載のメール画面"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>06</h3>
                    <p>
                      入力内容に誤りがないか確認をし、間違いがありましたら【戻る】ボタンで入力画面に戻ります。誤りがなければ、【登録して次へ】をクリック。{" "}
                    </p>
                  </div>
                </div>
              </div> */}
              <div id="flow_7">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img7.png"
                      alt="認証URL記載のメール画面"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>06</h3>
                    <p>
                      本人確認書類として、ご本人証明書類と住所確認書類をそれぞれ【ファイル選択】からアップロード。
                      <br />
                      ※弊社推奨：パスポート+運転免許証
                    </p>
                    <p className="kyc_btn">
                      <Link href="/kyc_personal">
                        <a>本人確認書類の詳細はこちら</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div id="flow_8">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_img8.png"
                      alt="認証URL記載のメール画面"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>08</h3>
                    <p>
                      登録内容や申請書類に間違いが無ければ数時間で完了し、登録メールアドレスに【口座アップグレード完了のお知らせ】というメールが届きます。
                      これでアップグレード完了です。{" "}
                    </p>
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
