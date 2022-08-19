// React Import
import React from "react";
import Script from "next/script";
import Link from "next/link";

const Component = ({ ...props }) => {
  return (
    <footer>
      <div id="footer_wrap">
        <div id="footer_banner">
          <div id="footer_banner_inner">
            <div id="footer_text_box">
              <p id="footer_banner_text">
                <span className="title_small">
                  速くて簡単、便利！最も安全な決済
                </span>
                <br />
                <br />
                グローバル
                <br />
                イーウォレットの決定版
                <br />
                <br />
                <span className="title_color">Rays Wallet</span>
              </p>
              <p id="footer_inner_btn">
                <Link href="https://mypage.rays-wallet.com/register">
                  <a target="_blank">
                    <span className="btn_color">Rays Wallet</span>口座開設
                  </a>
                </Link>
              </p>
              <p id="footer_inner_btn2">
                <Link href="https://mypage.rays-wallet.com/login">
                  <a target="_blank">Rays Walletログイン</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="footer-xs-logo">
            <figure>
              <a href="/">
                <img
                  src="./img/rayswallet_logo_white.png"
                  width="240"
                  height="40"
                  alt="Rays Wallet"
                />
              </a>
            </figure>
          </div>
          <div id={props.inner2 == 1 ? "footer_inner2" : "footer_inner"}>
            <div className="footer-block footer-logo d-xs-none">
              <figure>
                <a href="/">
                  <img
                    src="./img/rayswallet_logo_white.png"
                    width="2083"
                    height="994"
                    alt="Rays Wallet"
                  />
                </a>
              </figure>
            </div>
            <div className="footer-block">
              <ul>
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
                    <a>Rays Walletとは？</a>
                  </Link>
                </li>
                <li>
                  <Link href="/partner">
                    <a>パートナー</a>
                  </Link>
                </li>
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
                  <Link href="/qa">
                    <a>よくある質問</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-block">
              <ul>
                <li>
                  <Link href="/kyc">
                    <a>本人確認手順</a>
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
              </ul>
            </div>
            <div className="footer-block">
              <ul>
                <li>
                  <Link href="/sitemap">
                    <a>サイトマップ</a>
                  </Link>
                </li>
                <li>
                  <div id="browser_box">
                    <h2>推奨ブラウザ</h2>
                    <ul>
                      <li>
                        <img
                          src="./img/chrome.png"
                          width="225"
                          height="225"
                          alt="chrome"
                        />
                      </li>
                      <li>
                        <img
                          src="./img/firefox.png"
                          width="225"
                          height="225"
                          alt="firefox"
                        />
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div id="sns_box">
                    <h2>公式SNSアカウント</h2>
                    <ul>
                      <li>
                        <img
                          src="./img/twitter.png"
                          width="225"
                          height="225"
                          alt="twitter"
                        />
                      </li>
                      <li>
                        <img
                          src="./img/line.png"
                          width="225"
                          height="225"
                          alt="line"
                        />
                      </li>
                      <li>
                        <img
                          src="./img/facebook.png"
                          width="225"
                          height="225"
                          alt="facebook"
                        />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            
            
          </div>
        </div>
      </div>

      <div id="page_top" style={{ display: "none" }}>
        <Link href="#">
          <a></a>
        </Link>
      </div>
      <p id="copy">©Rays Wallet.All rights reserved.</p>

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `$(function () {
              var pagetop = $('#page_top');
              pagetop.hide();
              $(window).scroll(function () {
                if ($(this).scrollTop() > 100) { //100pxスクロールしたら表示
                  pagetop.fadeIn();
                } else {
                  pagetop.fadeOut();
                }
              });
              $('a[href^="#"]').click(function () {
                var time = 500;
                var href = $(this).attr("href");
                var target = $(href == "#" ? 'html' : href);
                var distance = target.offset().top;
                $("html, body").animate({
                  scrollTop: distance
                }, time, "swing");
                return false;
              });
            });`,
        }}
      />
    </footer>
  );
};

export default Component;
