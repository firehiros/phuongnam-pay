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
          S-WALLET グローバル対応の最新Eウォレット | S-WALLETサイトマップ
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

            <div id="not_header"></div>
            <div id="title_area">
              <div id="title_inner">
                <h1>サイトマップ</h1>
              </div>
            </div>
            <div id="main_inner">
              <div id="flow_1">
                <div id="about_inner">
                  <div className="about1">
                    <h3>サイトマップ</h3>
                    <ul className="sitemap">
                      <li>
                        <Link href="/">
                          <a>TOP</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>運営会社</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/swallet">
                          <a>S-WALLETとは？</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/business">
                          <a>事業者様向けサイト</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/partner">
                          <a>パートナー</a>
                        </Link>
                      </li>
                    </ul>
                    <ul className="sitemap">
                      <li>
                        <Link href="/fee">
                          <a>手数料・処理時間</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/card">
                          <a>提携カード</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms">
                          <a>利用規約</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy">
                          <a>プライバシーポリシー</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tokushouhou">
                          <a>特定商取引法に基づく表示</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/support">
                          <a>お問合わせ</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sitemap">
                          <a>サイトマップ</a>
                        </Link>
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
