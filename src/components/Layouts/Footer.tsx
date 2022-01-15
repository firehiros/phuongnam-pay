// React Import
import React from "react";
import Script from "next/script";
import Link from "next/link";
const Component = ({ ...props }) => {
  return (
    <footer>
      <div id="footer">
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
                  <a
                    href="https://secure.tiger-pay.com/dashboard/register"
                    target="_blank"
                  >
                    <span className="btn_color">S-WALLET</span>口座開設
                  </a>
                </p>
                <p id="footer_inner_btn2">
                  <a href="https://secure.tiger-pay.com/" target="_blank">
                    S-WALLETログイン
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <a
                  href="https://secure.tiger-pay.com/dashboard/register"
                  target="_blank"
                >
                  <span className="btn_color">S-WALLET</span>口座開設
                </a>
              </p>
              <p id="footer_inner_btn2">
                <a href="https://secure.tiger-pay.com/" target="_blank">
                  S-WALLETログイン
                </a>
              </p>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footer_inner">
            <figure>
              <a href="https://tiger-pay.com/jp/">
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
                  <a href="https://tiger-pay.com/business/">
                    事業者の方はこちら
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/partner.html">パートナー</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/sponsor/">スポンサー活動</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/kyc.html">本人確認手順</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/fee.html">
                    手数料・処理時間
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/terms.html">利用規約</a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/privacy.html">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/tokushouhou.html">
                    特定商取引法に基づく表示
                  </a>
                </li>
                <li>
                  <a
                    href="https://secure.tiger-pay.com/dashboard/support"
                    target="_blank"
                  >
                    お問合わせ
                  </a>
                </li>
                <li>
                  <a href="https://tiger-pay.com/jp/sitemap.html">
                    サイトマップ
                  </a>
                </li>
              </ul>
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
            </div>
          </div>
        </div>
      </div>

      <div id="page_top" style={{ display: "none" }}>
        <Link href="/">
          <a></a>
        </Link>
      </div>
      <p id="copy">©S-WALLET.All rights resarved.</p>

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
