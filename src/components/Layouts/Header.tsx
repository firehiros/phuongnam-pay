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
          <a href="/">
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
              <Link href="/business">
                <a>事業者の方はこちら</a>
              </Link>
            </p>
            <p className="open_btn">
              <Link href="/secure/register">
                <a target="_blank">口座開設</a>
              </Link>
            </p>
            <p className="login_btn">
              <Link href="/secure/login">
                <a target="_blank">ログイン</a>
              </Link>
            </p>
            <p className="open_btn_sp">
              <Link href="/secure/register">
                <a target="_blank">
                  <img
                    src="./img/header_news_icon.png"
                    width="48"
                    height="48"
                    alt="口座開設"
                  />
                </a>
              </Link>
            </p>
            <p className="login_btn_sp">
              <Link href="/secure/login">
                <a target="_blank">
                  <img
                    src="./img/header_login_icon.png"
                    width="48"
                    height="48"
                    alt="ログイン"
                  />
                </a>
              </Link>
            </p>
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
            <a href="/">TOP</a>
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
      </nav>
    </header>
  );
};

export default Component;
