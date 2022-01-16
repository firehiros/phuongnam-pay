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
          S-WALLET グローバル対応の最新Eウォレット |
          口座アップグレード/KYC本人確認書類
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
                <h1>本人確認書類の詳細</h1>
              </div>
            </div>
            <div id="card_group">
              <ul>
                <li>
                  <a href="/kyc">
                    <div className="arrow"></div>
                    本人確認申請手順はこちら
                  </a>
                </li>
              </ul>
            </div>
            <div id="main_inner">
              <div id="flow_1">
                <div className="flow_box">
                  <figure className="flow_img">
                    <img
                      src="./img/kyc_personal_img1.png"
                      width="1396"
                      height="757"
                      alt="本人確認書類01"
                    />
                    <img
                      src="./img/kyc_personal_img2.png"
                      width="1396"
                      height="757"
                      alt="本人確認書類02"
                    />
                    <img
                      src="./img/kyc_personal_img3.png"
                      width="1396"
                      height="757"
                      alt="本人確認書類03"
                    />
                    <img
                      src="./img/kyc_personal_img4.png"
                      width="1396"
                      height="757"
                      alt="本人確認書類04"
                    />
                  </figure>
                  <div className="flow_text">
                    <h3>01</h3>
                    <p>
                      S-WALLETでは「パーソナルアカウント」におけるご本人確認は2つの書類が必要となります。
                    </p>
                    <h4>1.本人確認の証明 </h4>
                    <p>
                      <span style={{ color: "red" }}>
                        注意:本人確認の証明の場合は、有効期限が3ヶ月以上残っているもの及び住所証明と同じ住所
                        である必要がございます。
                      </span>
                    </p>
                    <p>対応書類:</p>
                    <ol>
                      <li>1. 運転免許証</li>
                      <li>2. パスポート(推奨)</li>
                      <li>3. 国民カード [マイナンバー](両面必須)</li>
                      <li>4. 政府発行のID(両面必須)</li>
                    </ol>
                    <h4>2. 住所証明</h4>
                    <p>
                      <span style={{ color: "red" }}>
                        注意:発行より3ヶ月以内（有効期限のあるものは残り期間が3ヶ月以上）のものに限ります。
                      </span>
                    </p>
                    <p>対応書類:</p>
                    <ol>
                      <li>1. 公共料金の請求書・領収書</li>
                      <li>2. 銀行またはクレジットカードの明細</li>
                      <li>3. 納税申告書</li>
                      <li>4. *国民カード [マイナンバー]</li>
                      <li>5. *運転免許証</li>
                    </ol>
                    <p>
                      <span style={{ color: "red" }}>
                        IDアップロード時の注意事項:
                      </span>
                    </p>

                    <ol>
                      <li>
                        <span style={{ color: "red" }}>
                          1.
                          本人確認書類、住所証明書類はフルカラーで提出してください。両方の書類を提出してくだ
                          さい。
                        </span>
                      </li>
                      <li>
                        <span style={{ color: "red" }}>
                          &gt;2.
                          お名前、ご住所、生年月日、発行日が明記されている必要があります。
                        </span>
                      </li>
                      <li>
                        <span style={{ color: "red" }}>
                          3.
                          スキャン/デジタル画像は、文書の4つのコーナーが表示されている必要があります。
                        </span>
                      </li>
                      <li>
                        <span style={{ color: "red" }}>
                          4.
                          *ご本人確認の証明において【運転免許証】及び【国民カード
                          [マイナンバー]】をご利用の場合は、住
                          所証明としてはご利用いただけません。
                        </span>
                      </li>
                    </ol>

                    <p>
                      【撮影範囲】
                      <br />
                      本人確認書類は、全体をスキャン・撮影してください。端が切れている、他の物が重なって見えない部分がある場合は対象外となります。
                      <br />
                      【反射・影】
                      <br />
                      本人確認書類撮影の際に、フラッシュなどで一部が反射し見えない、または影になって見えない場合は、対象外となります。
                      <br />
                      【画質・解像度】
                      <br />
                      本人確認書類はカラー撮影で、ピンボケしていない画質でお願いします。（モノクロ撮影はお受けできません）画像拡大して、文字が判読できる解像度にてお願いします。{" "}
                    </p>
                    <p className="kyc_btn">
                      <Link href="/kyc">
                        <a>本人確認申請手順はこちら</a>
                      </Link>
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
