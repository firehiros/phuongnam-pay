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
          Rays Wallet グローバル対応の最新Eウォレット |
          Rays Walletプライバシーポリシー
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

            <div id="content_title">
              <h2>プライバシーポリシー</h2>
            </div>
            <div id="main_inner">
              <div id="flow_inner">
                <div id="flow_left">
                  <div className="terms_box">
                    <p>
                      個人データの安全性およびプライバシーを保護することは、Rays Wallet (以後「弊社」とします) にとって重要です。
                      従って弊社は、データプライバシー保護およびデータセキュリティに関して適用される法律を遵守しながら、事業を行っています。本プライバシーポリシーは、弊社が提供する全ての商品およびサービスに適用され、弊社が当該データをいかに利用・保護し、誰とこれを共有するかについて規定するものです。
                    </p>
                    <h3>A. 個人情報収集目的</h3>
                    <ol>
                      <li>
                        {" "}
                        お客様のプライバシーは弊社にとって重要であり、弊社がサービスを提供するために必要な情報のみを収集し、収集したお客様の個人情報を保護するために、あらゆる対策を施しています。
                      </li>
                      <li>
                        弊社が収集する情報には、ユーザーの氏名、住所、電話番号、メールアドレスが含まれますが、これらに限定されるわけではありません。また、これらの情報は弊社の商品/サービスを入手/利用する時に収集される場合があります。
                      </li>
                      <li>
                        {" "}
                        お客様が弊社に個人情報を提供した場合、お客様は以下の目的で個人情報を収集、保持、利用する事を弊社に許可したものとみなします。
                        <ol>
                          <li>（i）お客様の身元の確認</li>
                          <li>
                            （ii）本サイトのユーザーとして登録できる資格・条件を有することの確認
                          </li>
                          <li>
                            （iii）ユーザーとしての登録を処理し、お客様に本サイトのログインIDを提供すること。
                          </li>
                          <li>
                            （iv）弊社はお客様の登録情報を維持・管理します。お客様にカスタマーサービスを提供し、問い合わせ、フィードバック、苦情、または紛争に対応します。。
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <h3>B. 個人情報の正確性</h3>
                    <p>
                      弊社は、保持する情報が確実に正確かつ最新のものとなるようにします。情報の正確性に関して疑問がある場合には、当該情報を修正するために、関連する資料の提供をお客様に要請する場合があります。お客様が個人情報にアクセスまたは修正することを希望する場合には、「お問合せ」にて要請することができます。
                    </p>
                    <h3>C. 個人情報の保存</h3>
                    <p>
                      個人情報は弊社の記録保持ポリシーとマネーロンダリング関連法律に従って、解約後、六年間保持します。
                    </p>
                    <h3>D. 情報セキュリテイ</h3>
                    <p>
                      情報保護のため弊社は適用なセキュリテイ対策を実施します。情報は、適切に権限を持たない他の人による不正または偶発アクセス、処理、消去、または使用から妥当に保護されると保証します。セキュリティ対策の詳細は以下の通りです。
                    </p>
                    <ol>
                      <li>
                        1.弊社のプラットフォームは、不正アクセスを効果的に防ぎ、お客様の情報をデータ盗難から完全に守るために、業界水準の暗号化技術SSL、および最先端のファイヤーウォールシステムを採用しています。お取引記録の重要性を認識しており、弊社の許可を受けた特別な権限を持った担当者のみがお客様の個人情報にアクセスすることができます。
                      </li>

                      <li>
                        2.弊社は、不正アクセスを防止するために、国際的なクレジットカード業界のセキュリティ水準を満たした信頼できるサーバーを利用しています。サーバーのデータは、国際的なセキュリティ水準でデータセンターにて保管され、1年365日24時間、密に監視されています。
                      </li>

                      <li>
                        3.本サイトの登録ユーザーは、お客様の登録情報およびアカウント情報についてはお客様のアカウントを通じて閲覧・編集可能となっています。このアカウントはパスワードによって保護されています。弊社は、お客様のパスワードを他者に漏らさないよう勧めています。弊社から電話またはメールでお客様のパスワードを尋ねることはありません。
                      </li>

                      <li>
                        4.弊社は、それぞれのアカウントユーザーを認証するために、当局が要求するデューデリジェンスに基づく基準に則って厳格な手順を実行しています。新規申請をする際に、政府が発行した写真付きの身分証および住所の証明書が必要となり、この文書は申請手続きを進めるために詳しく検証されます。顧客デューデリジェンスは詐欺やその他の違法な目的を効果的に防止するだけでなく、それぞれのアカウントのユーザーの安全な取引環境をも保全します。インターネットまたは無線ネットワーク上でのいかなるデータの送信も、完全に安全であることを保証することはできません。そのため、弊社が保有しているお客様の情報の保護に取り組む一方で、お客様が弊社に情報を送信する際の安全性については、お客様自身の責任によって実行してください。
                      </li>
                    </ol>
                    <h3>Ｅ. 個人情報の開示</h3>
                    <ol>
                      <li>
                        1.お客様に弊社のサービスを提供するために、お客様の個人情報を弊社提携のサービスプロバイダに開示し、転送することに同意します（当社のサービスをご提供することを含むが、データ入力、データベース管理、プロモーション、製品やサービスのアラート、配信サービスと支払い延長サービスに限定されるものではない）（「サービスプロバイダ」）。これらのサービスプロバイダは、守秘義務の下で独自の目的ではなく、上記のセクションAで指定された目的に関連して、お客様の情報を使用することが許可されています。
                      </li>
                      <li>
                        2.お客様は、当社がお客様の個人データを開示し、他の関連会社に転送する場合があることに同意するものとします。
                        必要に応じて、個人情報を開示し、法律上の目的のために専門のアドバイザー、法執行機関、保険会社、政府および行政機関などに送信する場合があります。
                      </li>
                    </ol>
                    <h3>F. プライバシーポリシーの改定について</h3>
                    <p>
                      当該プライバシーポリシーの改定は、ユーザーに通知することなく当社がサイト上に掲載した時点で有効となります。お客様に関するすべての個人情報、プライバシーポリシーは、最新版に準拠することに同意します。
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
