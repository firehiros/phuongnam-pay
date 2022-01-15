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
        <title>S-WALLET グローバル対応の最新Eウォレット | 特定商取引法</title>
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
        <link href="./css/tokushouhou.css" rel="stylesheet" type="text/css" />
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

            <div className="mainContents">
              <div className="companySection containerM">
                <div className="sectionHeader">
                  <h1 className="pagename">特定商取引法に基づく表示</h1>
                </div>
                <div className="sectionBody">
                  <div className="tbl-table">
                    <div className="tbl-body">
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">事業者の名称</div>
                        <div className="tbl-cell">
                          株式会社アンノーン(Unoun, Inc.)
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">代表者</div>
                        <div className="tbl-cell">鈴木 才智</div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">所在地</div>
                        <div className="tbl-cell">
                          〒103-0014 東京都中央区日本橋蛎殻町1-17-11
                          カナメビル5F新館
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">電話番号</div>
                        <div className="tbl-cell">+81-03-5642-7155</div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          メールアドレス
                        </div>
                        <div className="tbl-cell">
                          support@s-wallet.com
                          <br />
                          ※お問い合わせは
                          <Link href="/contact-us">
                            <a>WEB専用お問い合わせフォーム</a>
                          </Link>
                          より受け付けています
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          お問い合わせ時間
                        </div>
                        <div className="tbl-cell">
                          9:00-17:00 (日本時間) ※土日祝日を除く
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          ホームページURL
                        </div>
                        <div className="tbl-cell">
                          <a href="https://unoun.co.jp/" title="UNOUN">
                            https://unoun.co.jp/
                          </a>
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">取引価格</div>
                        <div className="tbl-cell">
                          取引価格は、通貨及び市場情勢等により変動します。最新価格はログイン後の取引画面でご確認ください。
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">受渡しの時期</div>
                        <div className="tbl-cell">
                          <Link href="/fee">
                            <a>サービス概要</a>
                          </Link>
                          にてご確認ください
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">取引ルール</div>
                        <div className="tbl-cell">
                          <Link href="/terms">
                            <a>利用規約</a>
                          </Link>
                          にてご確認ください
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          取引等に係る諸費用
                        </div>
                        <div className="tbl-cell">
                          <Link href="/fee">
                            <a>サービス概要</a>
                          </Link>
                          にてご確認ください
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          取引金額、諸費用等の支払方法
                        </div>
                        <div className="tbl-cell">
                          取引口座のお客様残高から引き落としとなります
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          取引金額、諸費用等の支払時期
                        </div>
                        <div className="tbl-cell">取引等成立時</div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          売買契約の申込みの撤回・解除等
                        </div>
                        <div className="tbl-cell">
                          売買契約約定前は解除可能
                          <br />
                          売買契約約定後のキャンセルは受け付けません
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">
                          瑕疵担保責任について
                        </div>
                        <div className="tbl-cell">
                          いかなる場合も瑕疵担保責任を負いません
                        </div>
                      </div>
                      <div className="tbl-row">
                        <div className="tbl-cell tbl-th-cell">その他の事項</div>
                        <div className="tbl-cell">
                          <Link href="/privacy">
                            <a>個人情報保護方針</a>
                          </Link>
                          等をご参照ください
                        </div>
                      </div>
                    </div>
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
