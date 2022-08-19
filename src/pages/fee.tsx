// React import
import React from 'react'

// Thirdparty Import
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'

// App Import
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import FeeTable from 'src/components/Molecules/FeeTable'
import FeeTableTime from 'src/components/Molecules/FeeTableTime'

const Component = () => {
  return (
    <>
      <Head>
        <title>
          Rays Wallet グローバル対応の最新Eウォレット | 手数料・処理時間
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

            <div id="fee_title">
              <h2>手数料・処理時間</h2>
            </div>
            <div id="fee_inner">
              <section className="fee01">
                <h3>一般手数料</h3>
                <div className="fee_table">
                  <FeeTable />
                </div>
              </section>

              <div className="fee02_wrap">
                <section className="fee02">
                  <h3>入出金限度額</h3>
                  <div className="fee_table">
                    <table id="card_table01">
                      <tbody>
                        <tr>
                          <td>国内銀行（日本）- 入金 / 出金</td>
                          <td>1 - 5,000,000 JPY</td>
                        </tr>
                        <tr>
                          <td>国際銀行 - 入金 / 出金</td>
                          <td>1 - 50,000 USD</td>
                        </tr>
                        <tr>
                          <td>暗号通貨 - 入金 / 出金</td>
                          <td>全通貨の最小単位 0.001 - ∞</td>
                        </tr>
                        <tr>
                          <td>ペイジー - 入金</td>
                          <td>1,000 - 950,000 JPY</td>
                        </tr>
                        <tr>
                          <td>クレジットカード - 入金</td>
                          <td>準備中</td>
                        </tr>
                        <tr>
                          <td>プリペイドカードチャージ - 出金</td>
                          <td>0.01 - 8,000 USD / 1 - 800,000 JPY</td>
                        </tr>
                        <tr>
                          <td>エクスチェンジ</td>
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
                        <td>プリペイドカード発行</td>
                        <td>150 ドル(25ドル キャッシュバック)</td>
                      </tr>
                      <tr>
                        <td>カード紛失・故障（再発行）</td>
                        <td>
                          85 ドル(残高移動:6.5ドル / 10ドル キャッシュバック)
                        </td>
                      </tr>
                      <tr>
                        <td>カード更新</td>
                        <td>
                          85 ドル(残高移動:6.5ドル / 10ドル キャッシュバック)
                        </td>
                      </tr>
                      <tr>
                        <td>ATM引き出し手数料</td>
                        <td>5ドル +ATM 手数料 (ATM よって異なる )</td>
                      </tr>
                      <tr>
                        <td>POS/オンライン決済手数料</td>
                        <td>1.50 ドル</td>
                      </tr>
                      <tr>
                        <td>FX為替レート</td>
                        <td>銀行・ATM 指定レート</td>
                      </tr>
                      <tr>
                        <td>* アクティベート手数料</td>
                        <td>2ドル </td>
                      </tr>
                      <tr>
                        <td>* 月額手数料</td>
                        <td>2ドル </td>
                      </tr>
                      <tr>
                        <td>* 休止カード手数料（未使用 6 ヶ月）</td>
                        <td>月額 3ドル</td>
                      </tr>
                      <tr>
                        <td>* 休眠カード手数料（未使用 12 ヶ月）</td>
                        <td>月額 3ドル</td>
                      </tr>
                      <tr>
                        <td>*PIN 再発行手数料</td>
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
                          <td>一回あたりの最大取引額</td>
                          <td>3,000 ドル</td>
                        </tr>
                        <tr>
                          <td>月額の最大取引額</td>
                          <td>10,000 ドル</td>
                        </tr>
                        <tr>
                          <td>1時間あたりの最大利用回数</td>
                          <td>5回</td>
                        </tr>
                        <tr>
                          <td>1日あたりの最大利用回数</td>
                          <td>20回</td>
                        </tr>
                        <tr>
                          <td>最大チャージ金額／１回あたり</td>
                          <td>8,000 ドル</td>
                        </tr>
                        <tr>
                          <td>月額累計最大チャージ金額</td>
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
                  <FeeTableTime />
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
                        </tr>
                        <tr>
                          <td>
                            営業日:月曜日~金曜日
                            <br/>(日本 の 休日・祝日は除く)
                            <br />
                            受付時間:午前9時 ~ 午後5時
                          </td>
                        </tr>
                        <tr>
                          <th>本人確認(KYC)認証処理</th>
                        </tr>
                        <tr>
                          <td>
                            営業日:月曜日~金曜日
                            <br/>(日本 の 休日・祝日は除く){' '}
                            <br />
                            処理時間:午前10時 ~ 午後6時
                          </td>
                        </tr>
                        <tr>
                          <th>国際送金における入出金処理</th>
                        </tr>
                        <tr>
                          <td>
                            営業日:月曜日~金曜日
                            <br/>(休日・祝日は除く)
                            <br />
                            処理時間:午前10時 ~ 午後3時
                          </td>
                        </tr>
                        <tr>
                          <th>国内(日本)送金における入出金処理</th>
                        </tr>
                        <tr>
                          <td>
                            営業日:365日(日本 の 祝日は除く) <br />
                            処理時間: 24 時間
                          </td>
                        </tr>
                        <tr>
                          <th>
                            ビジネス、パートナーズサポート <br />
                            (メールサポートのみ)
                          </th>
                        </tr>
                        <tr>
                          <td>
                            営業日:365日(日本 の 祝日は除く) <br />
                            処理時間: 24 時間
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{ color: 'red' }}>
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
  )
}

export default Component
