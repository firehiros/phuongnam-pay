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
          S-WALLET グローバル対応の最新Eウォレット | 手数料・処理時間
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

            <div id="fee_title">
              <h2>手数料・処理時間</h2>
            </div>
            <div id="fee_inner">
              <section className="fee01">
                <h3>一般手数料</h3>
                <div className="fee_table">
                  <table>
                    <tbody>
                      <tr>
                        <th></th>
                        <td className="q_title">
                          Fast
                          <br />
                          <span>ファストアカウント</span>
                        </td>
                        <td className="p_title">
                          Personal
                          <br />
                          <span>パーソナルアカウント</span>
                        </td>
                        <td className="b_title">
                          Business
                          <br />
                          <span>ビジネスアカウント</span>
                        </td>
                      </tr>
                      <tr>
                        <th>口座開設</th>
                        <td>無料</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>口座維持費</th>
                        <td>無料</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>インターナルトランスファー</th>
                        <td>0.5%</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>エクスチェンジ</th>
                        <td>無料</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>入金 - 銀行振込（日本）</th>
                        <td>5%</td>
                        <td>5%</td>
                        <td>5%</td>
                      </tr>
                      <tr>
                        <th>入金 - 銀行振込（国際）</th>
                        <td>ー</td>
                        <td>2% (着金額から2%)</td>
                        <td>2% (着金額から2%)</td>
                      </tr>
                      <tr>
                        <th>入金 - 暗号通貨</th>
                        <td>無料</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>入金 - ペイジー</th>
                        <td>4%（決済手数料別）</td>
                        <td>4%（決済手数料別）</td>
                        <td>4%（決済手数料別）</td>
                      </tr>
                      <tr>
                        <th>入金 - クレジットカード</th>
                        <td>ー</td>
                        <td>準備中</td>
                        <td>準備中</td>
                      </tr>
                      <tr>
                        <th>出金 - 銀行振込（日本）</th>
                        <td>ー</td>
                        <td>
                          2%
                          <br />
                          (ミニマム:35 ドル / 3500 円)
                        </td>
                        <td>
                          2%
                          <br />
                          (ミニマム:35 ドル / 3500 円)
                        </td>
                      </tr>
                      <tr>
                        <th>出金 - 銀行振込（国際）</th>
                        <td>ー</td>
                        <td>
                          2.5%
                          <br />
                          (ミニマム:60ドル / 60ユーロ)
                        </td>
                        <td>
                          2.5%
                          <br />
                          (ミニマム:60ドル / 60ユーロ)
                        </td>
                      </tr>
                      <tr>
                        <th>出金 - BTC</th>
                        <td>1.5%（ミニマム：0.00005 BTC）</td>
                        <td>1.2%（ミニマム：0.00005 BTC）</td>
                        <td>1.2%（ミニマム：0.00005 BTC）</td>
                      </tr>
                      <tr>
                        <th>出金 - ETH</th>
                        <td>1.5%（ミニマム：0.005 ETH）</td>
                        <td>1.2%（ミニマム：0.005 ETH）</td>
                        <td>1.2%（ミニマム：0.005 ETH）</td>
                      </tr>
                      <tr>
                        <th>出金 - XRP</th>
                        <td>1.5%（ミニマム：0.005 XRP）</td>
                        <td>1.2%（ミニマム：0.005 XRP）</td>
                        <td>1.2%（ミニマム：0.005 XRP）</td>
                      </tr>
                      <tr>
                        <th>出金 - USDT / USDC</th>
                        <td>1.5%（ミニマム：20 USDT/USDC）</td>
                        <td>1.2%（ミニマム：20 USDT/USDC）</td>
                        <td>1.2%（ミニマム：20 USDT/USDC）</td>
                      </tr>
                      <tr>
                        <th>出金 - プリペイドカードチャージ</th>
                        <td>ー</td>
                        <td>
                          2%
                          <br />
                          (ミニマム:15ドル / 1700円)
                        </td>
                        <td>
                          2%
                          <br />
                          (ミニマム:15ドル / 1700円)
                        </td>
                      </tr>
                      <tr>
                        <th>口座間送金(送金者負担)</th>
                        <td>0.50%</td>
                        <td>無料</td>
                        <td>無料</td>
                      </tr>
                      <tr>
                        <th>非アクティブアカウント管理費（12ヶ月以降）</th>
                        <td>月額:1.82 ドル</td>
                        <td>月額:1.82 ドル</td>
                        <td>月額:1.82 ドル</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="fee02_wrap">
                <section className="fee02">
                  <h3>入出金限度額</h3>
                  <div className="fee_table">
                    <table id="card_table01">
                      <tbody>
                        <tr>
                          <th>国内銀行（日本）- 入金 / 出金</th>
                          <td>1 - 5,000,000 JPY</td>
                        </tr>
                        <tr>
                          <th>国際銀行 - 入金 / 出金</th>
                          <td>1 - 50,000 USD</td>
                        </tr>
                        <tr>
                          <th>暗号通貨 - 入金 / 出金</th>
                          <td>全通貨の最小単位 0.001 - ∞</td>
                        </tr>
                        <tr>
                          <th>ペイジー - 入金</th>
                          <td>1,000 - 950,000 JPY</td>
                        </tr>
                        <tr>
                          <th>クレジットカード - 入金</th>
                          <td>準備中</td>
                        </tr>
                        <tr>
                          <th>プリペイドカードチャージ - 出金</th>
                          <td>0.01 - 8,000 USD / 1 - 800,000 JPY</td>
                        </tr>
                        <tr>
                          <th>エクスチェンジ</th>
                          <td>全通貨の最小単位 0.001 - ∞</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              <section className="fee02">
                <h3>カード手数料</h3>
                <div className="fee_table">
                  <table id="card_table">
                    <tbody>
                      <tr>
                        <th>プリペイドカード発行</th>
                        <td>150 ドル(25ドル キャッシュバック)</td>
                      </tr>
                      <tr>
                        <th>カード紛失・故障（再発行）</th>
                        <td>
                          85 ドル(残高移動:6.5ドル / 10ドル キャッシュバック)
                        </td>
                      </tr>
                      <tr>
                        <th>カード更新</th>
                        <td>
                          85 ドル(残高移動:6.5ドル / 10ドル キャッシュバック)
                        </td>
                      </tr>
                      <tr>
                        <th>ATM引き出し手数料</th>
                        <td>5ドル +ATM 手数料 (ATM よって異なる )</td>
                      </tr>
                      <tr>
                        <th>POS/オンライン決済手数料</th>
                        <td>1.50 ドル</td>
                      </tr>
                      <tr>
                        <th>FX為替レート</th>
                        <td>銀行・ATM 指定レート</td>
                      </tr>
                      <tr>
                        <th>* アクティベート手数料</th>
                        <td>2ドル </td>
                      </tr>
                      <tr>
                        <th>* 月額手数料</th>
                        <td>2ドル </td>
                      </tr>
                      <tr>
                        <th>* 休止カード手数料（未使用 6 ヶ月）</th>
                        <td>月額 3ドル</td>
                      </tr>
                      <tr>
                        <th>* 休眠カード手数料（未使用 12 ヶ月）</th>
                        <td>月額 3ドル</td>
                      </tr>
                      <tr>
                        <th>*PIN 再発行手数料</th>
                        <td>1ドル</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="fee02_wrap">
                <section className="fee02">
                  <h3>カードご利用限度額</h3>
                  <div className="fee_table">
                    <table id="card_table2">
                      <tbody>
                        <tr>
                          <th>一回あたりの最大取引額</th>
                          <td>3,000 ドル</td>
                        </tr>
                        <tr>
                          <th>月額の最大取引額</th>
                          <td>10,000 ドル</td>
                        </tr>
                        <tr>
                          <th>1時間あたりの最大利用回数</th>
                          <td>5回</td>
                        </tr>
                        <tr>
                          <th>1日あたりの最大利用回数</th>
                          <td>20回</td>
                        </tr>
                        <tr>
                          <th>最大チャージ金額／１回あたり</th>
                          <td>8,000 ドル</td>
                        </tr>
                        <tr>
                          <th>月額累計最大チャージ金額</th>
                          <td>10,000 ドル</td>
                        </tr>
                      </tbody>
                    </table>
                    <ul>
                      <li>※ATM／オンライン／POSショッピングの合計回数。</li>
                      <li>
                        ※月額とはGMT+8の1日0:00~月最終日の23:59を指します。
                      </li>
                      <li>
                        ※USD以外の通貨の場合、記載の値相当額。
                        <br />
                        （例：限度USD3000におけるJPYの場合、3000*為替レート＝約330,000など）
                      </li>
                      <li>
                        ※取引限度を超えていないにもかかわらず、ご利用いただけない場合はご利用のATMまたはPOS自体の制限がある場合がございます。その際は他ATM／POSにてお試しください。
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <section className="fee03">
                <h3>手続き処理時間</h3>
                <div className="fee_table">
                  <table>
                    <tbody>
                      <tr>
                        <th></th>
                        <td className="q_title">
                          Fast
                          <br />
                          <span>ファストアカウント</span>
                        </td>
                        <td className="p_title">
                          Personal
                          <br />
                          <span>パーソナルアカウント</span>
                        </td>
                        <td className="b_title">
                          Business
                          <br />
                          <span>ビジネスアカウント</span>
                        </td>
                      </tr>
                      <tr>
                        <th>口座開設</th>
                        <td>メール登録のみで完了</td>
                        <td>本人確認手続き+最短5分〜</td>
                        <td>事業者確認手続き+最短5分〜</td>
                      </tr>
                      <tr>
                        <th>KYC・KYB・銀行口座認証</th>
                        <td>１営業日</td>
                        <td>１営業日</td>
                        <td>1-3営業日</td>
                      </tr>
                      <tr>
                        <th>S-WALLET間送金・エクスチェンジ</th>
                        <td>即時</td>
                        <td>即時</td>
                        <td>即時</td>
                      </tr>
                      <tr>
                        <th>入金 - 銀行振込（日本）</th>
                        <td>5分（目安）</td>
                        <td>5分（目安）</td>
                        <td>5分（目安）</td>
                      </tr>
                      <tr>
                        <th>入金 - 銀行振込（国際）</th>
                        <td>-</td>
                        <td>3 - 5 営業日（目安）</td>
                        <td>3 - 5 営業日（目安）</td>
                      </tr>
                      <tr>
                        <th>入金 - 暗号通貨</th>
                        <td>即時（3承認）</td>
                        <td>即時（3承認）</td>
                        <td>即時（3承認）</td>
                      </tr>
                      <tr>
                        <th>入金 - ペイジー</th>
                        <td>即時</td>
                        <td>即時</td>
                        <td>即時</td>
                      </tr>
                      <tr>
                        <th>入金 - クレジットカード</th>
                        <td>-</td>
                        <td>即時</td>
                        <td>即時</td>
                      </tr>
                      <tr>
                        <th>出金 - 銀行振込（日本）</th>
                        <td>-</td>
                        <td>1営業日（目安）</td>
                        <td>1営業日（目安）</td>
                      </tr>
                      <tr>
                        <th>出金 - 銀行振込（国際）</th>
                        <td>-</td>
                        <td>3 - 5 営業日（目安）</td>
                        <td>3 - 5 営業日（目安）</td>
                      </tr>
                      <tr>
                        <th>出金 - 暗号通貨</th>
                        <td>１分（目安）</td>
                        <td>１分（目安）</td>
                        <td>１分（目安）</td>
                      </tr>
                      <tr>
                        <th>出金 - プリペイドカードチャージ</th>
                        <td>-</td>
                        <td>1 - 2 営業日（目安）</td>
                        <td>1 - 2 営業日（目安）</td>
                      </tr>
                      <tr>
                        <th>プリペイドカード発行</th>
                        <td>-</td>
                        <td>3 営業日~10営業日</td>
                        <td>3 営業日~10営業日</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="fee02_wrap">
                <section className="fee02">
                  <h3>営業時間</h3>
                  <div className="fee_table">
                    <table id="time_table">
                      <tbody>
                        <tr>
                          <th>カスタマーサポート</th>
                          <td>
                            営業日:月曜日~金曜日(日本 の 休日・祝日は除く)
                            <br />
                            受付時間:午前9時 ~ 午後5時
                          </td>
                        </tr>
                        <tr>
                          <th>本人確認(KYC)認証処理</th>
                          <td>
                            営業日:月曜日~金曜日(日本 の 休日・祝日は除く){" "}
                            <br />
                            処理時間:午前10時 ~ 午後6時
                          </td>
                        </tr>
                        <tr>
                          <th>国際送金における入出金処理</th>
                          <td>
                            営業日:月曜日~金曜日(フィリピン の 休日・祝日は除く)
                            <br />
                            処理時間:午前10時 ~ 午後3時
                          </td>
                        </tr>
                        <tr>
                          <th>国内(日本)送金における入出金処理</th>
                          <td>
                            営業日:365 日(日本 の 祝日は除く) <br />
                            処理時間: 24 時間
                          </td>
                        </tr>
                        <tr>
                          <th>暗号通貨における入出金処理</th>
                          <td>
                            営業日:365 日 <br />
                            処理時間: 24 時間
                          </td>
                        </tr>
                        <tr>
                          <th>
                            ビジネス、パートナーズサポート <br />
                            (メールサポートのみ)
                          </th>
                          <td>
                            営業日:月曜日~金曜日(フィリピン の 休日・祝日は除く)
                            <br />
                            受付時間:午前11 時 ~ 午前 0 時
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{ color: "red" }}>
                      ※銀行送金における着金時間は各銀行の営業日・時間によります
                    </p>
                  </div>
                </section>
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
