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
                グローバル
                <br />
                イーウォレットの決定版
                <br />
                <span className="title_color">S-WALLET</span>
              </p>
              <p id="footer_inner_btn">
                <Link href="/secure/register">
                  <a target="_blank">
                    <span className="btn_color">S-WALLET</span>口座開設
                  </a>
                </Link>
              </p>
              <p id="footer_inner_btn2">
                <Link href="/secure/login">
                  <a target="_blank">S-WALLETログイン</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id={props.inner2 == 1 ? "footer_inner2" : "footer_inner"}>
            <figure>
              <a href="/">
                <img
                  src="./img/footer_logo.png"
                  width="2083"
                  height="994"
                  alt="S-WALLET"
                />
              </a>
            </figure>
            <div id="footer_box">
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
                    <a>S-WALLETとは？</a>
                  </Link>
                </li>
                <li>
                  <Link href="/business">
                    <a>事業者の方はこちら</a>
                  </Link>
                </li>
                <li>
                  <Link href="/partner">
                    <a>パートナー</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kyc">
                    <a>本人確認手順</a>
                  </Link>
                </li>
                <li>
                  <Link href="/fee">
                    <a>手数料・処理時間</a>
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
                  <Link href="/qa">
                    <a>よくある質問</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap">
                    <a>サイトマップ</a>
                  </Link>
                </li>
              </ul>
              {props.inner2 == 1 ? null : (
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
                    <li>
                      <img
                        src="./img/ie.png"
                        width="225"
                        height="225"
                        alt="ie"
                      />
                    </li>
                  </ul>
                </div>
              )}
              {props.inner2 == 1 ? null : (
                <div id="sns_box">
                  <h2>公式SNSアカウント</h2>
                  <ul>
                    <li>
                      <a href="https://twitter.com/TigerpayEwallet">
                        <img
                          src="./img/twitter.png"
                          width="225"
                          height="225"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://line.me/R/ti/p/@tigerpay">
                        <img
                          src="./img/line.png"
                          width="225"
                          height="225"
                          alt="line"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/TigerpayEwallet">
                        <img
                          src="./img/facebook.png"
                          width="225"
                          height="225"
                          alt="facebook"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="page_top" style={{ display: "none" }}>
        <Link href="#">
          <a></a>
        </Link>
      </div>
      <p id="copy">©S-WALLET.All rights reserved.</p>

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
