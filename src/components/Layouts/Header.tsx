// React Import
import React from "react";
import Link from "next/link";

// 3rd Import

// App Import

const Component = ({ ...props }) => {
  return (
    <header>
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
                <Link href="/">
                  <a>TOP</a>
                </Link>
              </li>
              <li id="n_about">
                <Link href="/about">
                  <a>運営会社</a>
                </Link>
              </li>
              <li id="n_tiger">
                <Link href="/swallet">
                  <a>S-WALLETとは？</a>
                </Link>
              </li>
              <li id="n_partner">
                <a href="https://tiger-pay.com/jp/partner.html">パートナー</a>
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
                        <span className="gmenu_list">アカウント</span>{" "}
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
                        <a href="https://tiger-pay.com/jp/cc.html" id="n_vc">
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
                        <a href="https://tiger-pay.com/jp/kyc.html" id="n_kyc">
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
                <a href="https://tiger-pay.com/jp/fee.html">手数料・処理時間</a>{" "}
              </li>
              <li>
                <a href="https://tiger-pay.com/jp/card.html">提携カード</a>{" "}
              </li>
              <li>
                <a href="https://support.tiger-pay.com/ja/" target="_blank">
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
            <a href="https://tiger-pay.com/jp/fee.html">手数料・処理時間</a>
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
    </header>
  );
};

export default Component;
