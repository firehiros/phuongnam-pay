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
          Rays Walletグローバル対応の最新Eウォレット | Rays Walletのご利用規約
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
              <h2>利用規約</h2>
            </div>
            <div id="main_inner">
              <div id="flow_inner">
                <div id="flow_left">
                  <div className="terms_box">
                    <h3>1.用語の定義</h3>
                    <p>本規約で使用されている用語は以下で定義します。</p>
                    <ol>
                      
                      <li>
                        1.1「営業日」銀行休業日および祝祭日を除く、平日の月曜日から金曜日を意味します。
                      </li>
                      <li>
                        1.2「料金」お客様がお支払いいただく費用を意味します。
                      </li>
                      <li>
                        1.3「ペイメントゲートウェイサービス」とは、電子的(磁気的を含む)に保存された金銭的価値であり、発行者に対する請求権で表され、支払取引を行う目的で資金を受領した際に発行され、電子マネーの発行者以外の者によって受け入れられるサービスを意味します。</li>
                      <li>
                        1.4「支払サービス」とは、本アカウントの使用を通じてお客様が利用できるすべての支払および支払ゲートウェイサービス、ならびに該当する場合には関連サービスを意味します。
                      </li>

                      <li>
                        1.5「顧客の信頼性向上(CDD)」とは、顧客の取引および活動の理解と監視を含め、顧客、その代理人および受益者の真の身元を確認し、検証する手順を意味します。
                      </li>
                      <li>
                        1.6「ユーザー名とパスワード」とは、オンラインで「支払サービス」にアクセスするためにお客様が選択したログイン情報を意味します。
                      </li>
                      <li>
                        1.7「ユーザー、アカウントホルダー」個人または法人としてペイメントサービスのサービスを受ける人を意味します。
                      </li>
                      <li>
                        1.8「第三者」とは、当社またはVERTEX RAISE LIMITED 社と取引関係を結ぶ個人または法人を意味し、利用者・口座名義人ではありません。     
                      </li>
                      <li>
                        1.9「VERTEX RAISE LIMITED」とは、ペイメントゲートウェイサービスの提供者を意味します。
                      </li>
                      <li>1.10 「当社」とは、Rays Wallet を意味します。</li>
                      <li>
                        1.11「お客様」とは、VERTEX RAISE LIMITED が提供するペイメント・ゲートウェイ・サービスおよびRays Wallet が提供するカスタマー・サービスを利用する個人または法人のお客様を意味します。
                      </li>
                      <li>
                        1.12「マネーサービスプロバイダー」とは、送金や両替などのマネーサービスを提供する会社を意味します。
                      </li>
                      <li>
                        1.13「暗号通貨（仮想通貨）」とは、交換媒体として機能するように設計されたデジタル資産で、暗号技術を用いて取引の安全性を確保し、追加ユニットの作成を制御し、資産の移転を検証するものを意味します。
                      </li>
                      <li>
                        1.14「暗号通貨取引所（仮想通貨取引所）」とは、ユーザーが仮想通貨または不換通貨にアクセスまたは取引することを可能にするサービスを意味します。
                      </li>
                    </ol>
                    <h3>2. VERTEX RAISE LIMITED 社およびRays Wallet 社について</h3>
                    <p>
                      2.1 VERTEX RAISE LIMITED 社はペイメントゲートウェイサービスを提供する権利を有しています。Rays Wallet は、ペイメントゲートウェイサービスをサポートし、顧客サービスを提供します。
                    </p>
                    <h3>
                      3. VERTEX RAISE LIMITED 社、Rays Wallet およびマネー・サービス・プロバイダーとの契約について
                    </h3>
                    <ol>
                      <li>
                        3.1 マネーサービスは、金融規制当局の認可を受けたマネーサービスプロバイダーによって提供されます。VERTEX RAISE LIMITED 社はお客様にペイメントゲートウェイサービスを提供するのみであり、適用される契約書に記載されている規定を損なうことなく、サポートサービスおよびマネーサービスから生じる損失および損害に対して責任を負いません。
                      </li>
                      <li>
                        3.2 Rays Wallet は、お客様に決済サービスのサポートサービスを提供し、Rays Wallet は、サービスを提供する法的能力を有することを保証します。
                      </li>
                    </ol>
                    <h3>4.お客様のアカウント</h3>
                    <ol>
                      <li>
                        4.1 本規約は、VERTEX RAISE LIMITED 社がお客様にペイメントゲートウェイサービスを提供するための、お客様と当社の関係を管理するものです。また、本規約には、お客様の権利やお客様のお金の管理能力に影響を与える可能性のある重要な通知や情報が含まれています。アカウントを有効にすることにより、お客様は本規約に記載された条件を受け入れ、完全に理解したものとみなされ、お客様がペイメントゲートウェイサービスを利用することにより、または受け入れを表明することにより、これらを遵守することに同意するものとします。
                      </li>
                      <li>
                        4.2 お客様がアカウントを開設された場合、アカウントを有効化する必要があります。通常は、電子メールアドレスを確認してアクティベーションを完了すると、直ちにアカウントを使用できるようになります。アカウントの有効化を行わない場合、お客様が行おうとした取引が拒否される可能性があります。
                      </li>
                      <li>
                        4.3 アカウント所有者であるお客様は、アカウントの使用およびお客様に発生する可能性のある適用料金や手数料に対して責任を負います。お客様によるアカウントの使用は、お客様がアカウントの本規約を相手に伝え、それを受け入れて取引を実行したことを当社に確認したものとみなされます。
                      </li>
                    </ol>
                    <h3>5.アカウント構成</h3>
                    <ol>
                      <li>
                        5.1ペイメントゲートウェイサービスは、以下の製品・サービスで構成されます。
                        <ul>
                          <li>-カードアカウント</li>
                          <li>-資金移動</li>
                          <li>-通貨交換</li>
                          <li>-暗号通貨の交換</li>
                          <li>-その他のマネーサービス</li>
                        </ul>
                      </li>
                      <li>
                        5.2 ペイメントゲートウェイサービスは、上記を含む統合サービスとして提供されます。これらの口座サービスは、個人または法人を対象に提供されます。お客様1 人につき、1 口座のみの提供となります。
                      </li>
                      <li>
                        5.3
                        すべての口座保有者は、各商品・サービスについて本規約を遵守する必要があります。
                      </li>
                      <li>
                        5.4 当社は、利用者に理由を説明することなく、Sing-up を拒否することができます。また、当社は、適用される法律や金融機関の方針に基づき、独自の判断で利用者の取引を制限または停止する権限を有します。
                      </li>
                    </ol>
                    <h3>6.カード口座</h3>
                    <p>
                    お客様は、決済ゲートウェイ上で、VERTEX RAISE LIMITED が指定するプリペイドカードに入金することができます。お客さまは、お客さまの口座とカード口座との間の連携を行うために、お客さまの口座に十分な残高があることを確認し、カードスキーム、カード発行会社、カード機関および銀行が定めるKYC 資料に必要な情報を所定の期間内に提供するものとします。お客様は、資料の不備により、カード口座の閉鎖、お客様の口座とカード口座との連携の停止・終了を含むがこれに限定されない損失・損害を負担するものとします。
                    </p>
                    <p>
                      適用される法令に基づき、カードスキーム、カード発行会社及びカード機関がカード事業方針を変更したことにより、お客さまのカード口座が解約される場合がありますが、その場合、当社はできる限り事前にお客さまに通知し、カード発行会社の返金規定に基づきお客さまに返金します。お客様は、カードアカウントが適用される法律を遵守し、合法的な手段以外の活動を行わないことを保証するものとし、当社は、それに反してお客様のカードアカウントを解約する裁量を有するものとします。
                    </p>
                    <h3>7.送金について</h3>
                    <ol>
                      <li>
                        7.1 内部送金とは、口座利用者間の送金のことをいいます。お客様は、正当に指定されたプラットフォームの口座に資金を送金するものとしますが、指定されていない口座に資金を送金したことによる損失や損害については、当社は一切責任を負いません。
                      </li>
                      <li>
                        7.2 銀行振込とは、ペイメントゲートウェイからRays Wallet が提携している以外の銀行や金融機関に資金を送金することをいいます。お客様は、お客様の銀行口座または接続カード口座に資金を送金するものとします。指定口座への送金日から3 ヶ月以内に、送金情報の誤りまたは不備により、お客様が送金先口座に送金できなかった場合、当社は該当する金額の資金を送金先口座に返金し、取引費用はお客様が負担するものとします。送金国、送金目的、受取人の身元などが判明した場合、およびFATFが発行するAML およびテロ対策法令のガイドラインや他の金融機関の規制により高リスク取引と判断された場合には、当社は利用者に通知することなく送金を中止することができます。
                      </li>
                    </ol>
                    <h3>8.通貨交換</h3>
                    <ol>
                      <li>
                        8.1 本規約を遵守した場合、フィアット交換および暗号通貨交換に関連するサービスを提供する本サイトにアクセスする限定的な権利が付与されます。本サイトにアクセスする権利は、非独占的、譲渡不能、取消可能、限定的であり、制限と義務に従うものとします。本規約のいかなる条項も、本サイトまたは本サービスのライセンス（本項に定めるものを除く）、権利、タイトル、または所有権をお客様に与えるものではありません。
                      </li>
                      <li>
                        8.2 当社は、外国為替市場のもとで、本サイト上の別の通貨単位に対する通貨単位の相対的な価値を提供します。レート提供者が提供する交換レートに同意しない場合、お客様は交換を終了することができます。交換が完了した時点で、お客様は交換レートに合意したものとみなされ、その取り消しを要求することはできません。
                      </li>
                      <li>
                        8.3 お客様は、マーケティングの発展、当局の政策および適用される法律に起因する理由で為替レートが変更される可能性があることに同意するものとし、いかなる為替取引もお客様の意図に沿って行われるものとします。また、お客様は、為替による損失および損害、ならびに本サイトの利用によって被るすべての利益および損失を負担するものとします。
                      </li>
                    </ol>
                    <h3>9.暗号通貨の交換</h3>
                    <ol>
                      <li>
                        9.1 本サイトは、暗号通貨および暗号通貨に対する不換紙幣間の暗号通貨交換のための取引環境です。本サイトでは、資金を伴わない取引と資金を伴う取引の両方が可能です。未融資の購入は、お客様から預かった資金により取引参加者が全額を負担します。非融資取引でも融資取引でも、購入者が販売者の口座に全額を支払うことに対して、販売者が購入者の口座に全額を実際に引き渡すことで決済されます。
                      </li>
                      <li>
                        9.2 お客様は、本サイト上でのあらゆる取引および非取引活動、ならびに本サイト上のお客様のアカウントについて単独で責任を負い、また、本サイト上の他の当事者とのあらゆるポジションまたは契約の真の状況を知る責任を負います。お客様は以下のことを認め、同意します。(a) 本サイト上でのお客様の取引および非取引の行動および不作為、ならびに本サイトおよび本サービスの利用によって得られたすべての利益および損失について、全面的に責任を負うこと、(b) 本サイト上のお客様の口座のマイナス残高について責任を負うこと。(d) 本サイトおよび本サービスを通じて提供された秘密鍵、ユーザー名、パスワード、および銀行口座の詳細を含むがこれらに限定されない、本サイトおよび本サービスへのアクセスおよび情報を保護することに全責任を負うこと。
                      </li>
                      <li>
                        9.3 お客様は、本サイトにアクセスして、プロバイダーが提供するリアルタイムの為替レートを照会することができます。決済は、プロバイダーの為替政策に基づいて実行されます。
                      </li>
                      <li>
                        9.4 お客様は以下のことを認識し、同意するものとします。
                        <ul>
                          <li>
                            a) 一旦、為替決済が完了すると、その取引を取り消すことはできません。
                          </li>
                          <li>
                            b)最終的な交換額は、交換完了時にお客様の登録した電子メールに通知されます。
                          </li>
                          <li>
                            c)通貨／暗号通貨の交換費用は変動制であり、マネーサービスプロバイダーがマーケティングポリシーに基づいて調整することができる。
                          </li>
                          <li>
                            d)決済通貨および決済期間は、マネーサービス提供者の交換方針に基づいて提供されるものとします。
                          </li>
                          <li>
                            e)当社はお客様に暗号通貨交換ゲートウェイを提供するだけであり、お客様は通貨/暗号通貨交換サービスによるすべての損失および損害に対して責任を負うものとします。
                          </li>
                        </ul>
                      </li>
                      <li>
                        9.5 お客様は、本サイトを通じて処理される交換金額の制限が、銀行、適用される法律および当局の方針によって決定されることに同意します。
                      </li>
                    </ol>
                    <h3>10.KYC (Know Your Customer) の要件</h3>
                    <ol>
                      <li>
                        10.1 個人のお客様の場合、アカウント登録を行うには、18歳以上、または適用法で要求されるそれ以上の年齢の方でなければなりません。法人のお客様の場合、アダルトサービスやコンテンツ、ギャンブル、医薬品、違法団体、反社会的団体、その他適用法上の違法行為に関与していない事業を営むための法人格を有している必要があります。同様の状況下では、当社は、適用される法律に基づき、当社の裁量で口座開設を拒否したり、口座を閉鎖したりする権限を有します。
                      </li>
                      <li>
                        10.2 口座名義人になるために、当社は、適切な検証のためにお客様の身元を証明する証拠を要求することがあります。また、お客様は、適用法令により以下のように要求されるKYCおよびマネーロンダリング防止に関する規制要件を遵守する必要があります。
                      </li>
                      <li>
                        10.3 口座を開設した時点で、ここに記載された条件およびそれに関連する合意に従うことに同意したものとみなされます。
                      </li>
                      <li>
                        10.4 当社はまた、CDDのために必要な追加の身分証明書を、ランダムに、および／または、取引額または一連の取引の決済が10,000米ドル（または他の通貨での同等額）を超える場合、国内またはクロスボーダー業務の金額が500米ドル（または他の通貨での同等額）を超える場合、取引額にかかわらず疑わしい取引である場合、または、当局または当社によってお客様が特別な身分であることが確認された場合に、随時要求する権限を有します。
                      </li>
                      <li>
                        10.5 当社は、登録段階、開設段階または終了段階において、確認のために追加の身分証明書の提出を求めることがあります。その際には、ご登録いただいた電子メールアドレスまたは電話番号にご連絡いたします。提出された必要書類に不備があり、取引開始から30日間が経過した場合、当社はお客様との取引を中断し、今後の取引を行わないことができるものとします。さらに、本項に記載された書類が取引開始から起算して120日以内に提出されない場合、当社は契約を解除する権利を有するものとします。
                      </li>
                      <li>
                        10.6 口座情報、KYC書類、KYB書類、その他の個人データを含むお客様の個人データは、パスワードで保護された決済ゲートウェイを通じて閲覧・更新することができます。お客様は、適用されるマネーロンダリング法および適用される法律に基づき、お客様の個人データを削除および送信することができないことに同意し、契約期間中および関係終了後に、ペイメントゲートウェイのサーバーに保存されるものとします。
                      </li>
                      <li>
                        10.7 当社は、個人データを保護するために適切なセキュリティ対策を講じます。当社は、個人データが不正または偶発的なアクセス、処理、消去、または権限のない他者による使用から適切に保護されるようにします。決済ゲートウェイでは、工業規格の暗号化SSL技術と最先端のファイアウォール・プラットフォームを採用し、不正アクセスを効果的に防ぎ、データの盗難からお客様の情報を完全に保護します。当社は、お客様の個人データを保存するために、セキュリティ基準を満たす信頼性の高いサーバーを使用しています。個人情報の重要性を十分に認識し、当社の許可を受けた特別なスタッフのみがお客様の個人情報にアクセスできるようにしています。
                      </li>
                    </ol>
                    <h3> 11.休眠口座</h3>
                    <p>
                      12ヶ月間連続して取引が行われなかった場合、休眠口座としてタグ付けされる理由となります。この場合、アカウント管理料として、1ヶ月あたり1.82ドルが発生し、お客様のアカウントに直接請求されます。"取引」とは、マネーインソリューション、内部送金、銀行への送金、暗号通貨の支払い、通貨交換、カード取引、およびペイメントゲートウェイを介したその他の取引を含みますが、ログイン取引は本目的のための取引とはみなされません。
                      休眠口座では、マネーインソリューション以外の取引を行うことはできません。休眠アカウントは、カスタマーサポートに連絡することで、再度有効化することができます。
                    </p>
                    <h3>12.手数料および料金</h3>
                    <ol>
                      <li>
                        12.1 当社は、料金の更新、改訂を担当し、いつでも任意の通貨口座から料金を引き出す権限を有しています。お客様は、随時行われる料金の更新、改訂に注意を払うものとします。手数料の更新・改定は、当社の公式サイトでお知らせします。当社が公式サイトで料金表の更新または改定を発表した際に、お客様が所定の期間内に口座を解約しなかった場合、当社はお客様が料金の改定または改定に同意したものとみなします。
                      </li>
                      <li>
                        12.2 プラットフォームを停止する場合、お客様は、プラットフォーム停止月の翌月5日から15日までの間、お客様の口座にある資金を取り扱うためにプラットフォームにアクセスする必要があります。当該期間内に口座から資金を引き出すことができない場合には、プラットフォーム終了後、VERTEX RAISE LIMITED社がお客様の口座の残額を管理し、残額から口座管理料が差し引かれます。口座管理料には、管理料、取引手数料、その他の費用が含まれますが、これらに限定されません。
                      </li>
                    </ol>
                    <h3>13.サポートサービス</h3>
                    <p>
                      お取引のサポートサービスは、当社の営業日にRays Walletから電子メールで行います。営業日以外にお申し出いただいたサポートサービスは、翌営業日に反映されます。
                      当社は、上記にかかわらず、事前に通知することなく、システムの故障、修理、メンテナンスに起因する損失や損害について、一切の責任を負わないものとします。
                    </p>
                    <h3>14.払い戻し</h3>
                    <ol>
                      <li>
                        14.1 当社は、当局および／または取得した銀行／金融機関の方針に基づき、返金総額がマネー・サービス・プロバイダーが要求した返金額を上回る場合、今回の案件を返金すべきかどうかを決定する権利を有します。返金を請求する利用者とマネーサービス提供者との間で生じた紛争に起因して発生した費用および責任について、当社はお客様に対して一切の責任を負いません。
                      </li>
                      <li>
                        14.2 利用者が誤った情報を提供したために取引に失敗した場合、当社はこの失敗の通知が当社に届いた時点から90日以内に当該資金を返金しますが、その際の取引費用は利用者が負担するものとします。
                      </li>
                    </ol>
                    <h3>15.お客様の身元および取引に関する記録の保管について</h3>
                    <p>
                      お客様の身元および取引に関するすべての文書および記録は、お客様との取引関係を通じて保管され、取引関係の終了後も6年間は継続されます。
                    </p>
                    <h3>16.解約または停止</h3>
                    <ol>
                      <li>
                        16.1 お客様は、開始時に当社に提供した登録電子メールを使用して電子メールで解約要求および未使用資金の払い戻し請求を通知することにより、いつでも「ペイメントサービス」を解約することができます。この場合、当社のカスタマーサービス部門は、お客様の「支払サービス」の利用をすべて停止します。
                      </li>
                      <li>
                        16.2 お客様は、当社がお客様のために解約を完了し、未使用の資金の払い戻しを処理するために、KYCの身元確認書類の提出を求められる場合があります。
                      </li>
                      <li>
                        16.3 当社がお客様からすべての必要な情報(KYCを含む)を受領し、すべての取引および適用される手数料および料金が処理された後、当社は、利用可能な残高から当社に支払うべき手数料および料金を差し引いた金額をお客様に返金します。ただし、以下の場合に限ります。
                        <ul>
                          <li>
                            a)
                            お客様が、不正行為もしくは重大な過失、または不正行為もしくは重大な過失の合理的な疑いを生じさせるような方法で行動していない場合。
                          </li>
                          <li>
                            b)
                            法律または規制により、あるいは警察、裁判所、規制当局の要請により、お客様の利用可能残高の開示を求められていないこと。
                          </li>
                        </ul>
                      </li>
                      <li>
                        16.4 お客様が、プラットフォームのエラー、システムバグ、違法な操作、または人為的な欠陥から生じた利益を得た場合、お客様は、当社の要請に基づき、いつでもその不当な利益を返還するものとします。当社は、不適切な取引を取り消し、残高を従前の金額に調整する権利を有します。お客様は、当社の要請に応じてお客様が返還を行うことができない場合、当社がお客様の残高から不当利得を控除する権利を有することに同意するものとします。お客様の残高が控除するのに十分でない場合、当社は、不当利得およびその他の可能な手数料が完全に返還されるまで、お客様のすべての決済ゲートウェイでの取引の実施を停止する権利を有するものとします。
                      </li>
                      <li>
                        16.5 当社は、以下の場合、事前に通知することなく、お客様のアカウントを終了または停止する唯一の権利を有するものとします。
                        <ul>
                          <li>
                            a). 口座名義人が存在しない場合、または口座名義人の意思によらずに口座が開設された場合
                          </li>
                          <li>
                            b). 口座開設時に提供された情報に虚偽がある場合、または情報に疑義がある場合
                          </li>
                          <li>
                            c). 第三者がお客様のアカウントを技術的に使用していた場合、または目的にかかわらず、第三者が他人の電子メールアドレスや情報を示してアカウントを開設した場合
                          </li>
                          <li>
                            d). お客様の身元や、お客様、お客様のアカウント、取引に関するその他の情報を確認できない場合
                          </li>
                          <li>
                            e). お客様が法令、公序良俗に違反した場合、またはその疑いがある場合
                          </li>
                          <li>f). 口座名義人が存在しなくなった場合</li>
                          <li>g). 規約に違反した場合</li>
                          <li>
                            h).
                            法律、警察、裁判所、または関連する政府機関や規制当局から要求された場合
                          </li>
                          <li>
                            i).
                            状況に応じて判断される、強制的なアカウントの取り消し
                          </li>
                          <li>
                            j).
                            アダルトサービス・コンテンツ、賭博、医薬品、違法団体、反社会的勢力、マネーロンダリング、テロ資金供与等の違法行為に関与していることが判明した場合、またはそれらと何らかの関係がある場合
                          </li>
                          <li>k). 6ヶ月間、所定の料金を支払わない場合</li>
                          <li>
                            l).
                            ログイン認証後30日以内に、他の送金手段による送金等が確認できない場合
                            <ul>
                              <li>（i）暴力的な要求</li>
                              <li>（ii）法の範囲外の不合理な要求</li>
                              <li>（iii）脅迫や暴力を用いる行為</li>
                              <li>
                                （iv）虚偽の情報を流布し、偽計を用い、または脅迫することにより、当社および当社の信用を失墜させ、または当社および当社の事業活動を妨害する行為
                              </li>
                              <li>（v）(i)から(iv)までの行為に相当する行為</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        16.6 上記の場合のVERTEX RAISE LIMITED の解約または停止に伴う費用はユーザーが負担するものとします。VERTEX RAISE LIMITED は、本項の条件に違反して解約または停止されたことによりユーザーが被る損失や損害について、一切の責任を負いません。
                      </li>
                      <li>
                        16.7
                        利用者の資金は、上記の場合の契約終了後、当社に連絡することで換金することができます。当社は、当該利用可能残高の償還金から、管理費および償還遅延料の金額を控除する権利を有します。
                      </li>
                    </ol>
                    <h3>17.登録情報の変更手続き</h3>
                    <ol>
                      <li>
                        17.1 お客様は、アカウントのUsername、Passwordを紛失した場合や、氏名（法人名）、住所（勤務先住所）、電話番号、携帯電話番号、E-mailアドレスなどの登録情報に変更があった場合、またはお客様のデューデリジェンスを適切に行うために必要となるその他の変更があった場合には、当社に通知するものとします。
                      </li>
                      <li>
                        17.2 当社は、申込書に基づき、登録された電子メールアドレスおよび氏名に取引記録を通知または送付することがあります。当社は、これらの通知または文書を受け取った場合、お客様のアカウントの使用を制限する権利を有するものとします。この措置は、登録された電子メールアドレスが無効な場合にも適用されます。
                      </li>
                      <li>
                        17.3 当社は、お客様が期限内に当社に通知しなかったことにより発生した損害について、一切の責任を負いません。
                      </li>
                      <li>
                        17.4 登録された住所または電子メールアドレスへの郵送または電子メールの遅延または拒否は、ユーザーの行為または配送上の障害により発生する場合があります。ただし、当社は、郵便物や電子メールが通常の時間内に配達されたものとみなします。当社は、このような不着に起因する損失や損害について、一切の責任を負いません。
                      </li>
                    </ol>
                    <h3>18.リスク警告</h3>
                    <ol>
                      <li>
                        18.1 ペイメントゲートウェイサービスに関連するあらゆる取引は、お客様が行うものとします。Rays Wallet およびVERTEX RAISE LIMITED はお客様のビジネスに関与しないものとします。そのため、お客様は以下のことをご了承ください。
                        <ul>
                          <li>
                            a). マネーサービスに関連するあらゆる取引は、マーケティング、銀行の方針、規制文書、適用される法律および規制（為替レートの差、価格の変動、取引制限、地域制限を含むがこれに限定されない）の影響を受ける可能性があります。
                          </li>
                          <li>
                            b). 暗号通貨市場は定義されておらず、変動の影響を受けます。暗号通貨の取引は通常、多額の資金を必要とする一方で、商業市場で小売や使用されることは比較的少ない。暗号通貨の為替レートは、変動しやすい。
                          </li>
                          <li>
                            c). 本規約で予見または特定されていない追加のリスクがある可能性があります。お客様は、ご自身の財務状況やリスクに対する耐性が、通貨/暗号通貨の購入/販売/取引やその他のリアルマネー取引を行うのに適しているかどうかを慎重に判断する必要があります。お客様は、本規約に記載されているか否かにかかわらず、取引リスクによるいかなる損失および損害も負担する可能性があります。
                          </li>
                          <li>
                            d). Rays Wallet およびVERTEX RAISE LIMITED は、お客様の取引によるいかなる損失および損害に対しても責任を負いません。
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h3>19.免責事項に関する事項</h3>
                    <ol>
                      <li>
                        19.1 お客様の口座で行われる取引の実行は、他の銀行との提携により行われます。お客様の口座で行われた取引は、真正な利用者によって行われたものとみなし、理由の如何を問わず、第三者による違法行為、不正な利用者、アクセスの濫用等により生じた損害について、当社は一切の責任を負いません。また、強制的な転勤、戦争、災害、暴動、経済的な制裁、法的な規制や命令など、当社の無関係な原因についても、当社はお客様に対して一切の責任を負いません。故意または過失による事故、債務不履行、提携金融機関の倒産、関係当局の命令などによる影響も同様です。また、通信機器、回線、サーバーの障害、ソフトウェアの障害、停止などの不都合な理由により、お客様にサービスが提供できなかったことによる損失や損害について、当社は一切の責任を負いません。お客様は、書面による取引記録の証明により、お客様の記録との間に明らかな相違がない限り、当社の取引金額の記録が正しいことに同意するものとします。当社は、提示された取引履歴の日付から14日以内にお客様からの通知がない場合、お客様が取引履歴に同意したものとみなします。
                      </li>
                      <li>
                        19.2 ユーザーは、ペイメントゲートウェイとの間で資金を送金する前に、送金情報を確認しなければならないことを了承するものとします。利用者が送金情報の確認を怠ったために送金が失敗した場合、当社はそれによって生じたいかなる損失または損害についても責任を負いません。
                      </li>
                      <li>
                        19.3 実行された取引について、実行日以降の変更・取消には応じられません。
                      </li>
                    </ol>
                    <h3>20.お客様の情報の管理</h3>
                    <ol>
                      <li>
                        20.1 お客様情報は、適用される規則、規制、および法律によって決定されるKYCポリシーに従って管理されるものとします。
                      </li>
                      <li>
                        20.2 お客様は、当社が、上記のKYCポリシーに従って、ユーザー情報の管理を第三者に委託することを含め、当社のすべての事業活動を行う権利を有することに同意するものとします。
                      </li>
                      <li>
                        20.3 お客様は、国連、裁判所の判決、または法的機関からの要請があった場合、当社がお客様の情報を開示することに同意するものとします。お客様は、ユーザー名及びログインパスワード、出金パスワードなどの情報を厳重に保護する必要があります。また、これらの情報を当社認定の正規代理店、カスタマーサポート、その他の第三者に開示することはできません。
                      </li>
                      <li>
                        20.4 支払いゲートウェイにログインする際、ユーザーが誤ったユーザー名やパスワードを何度も使用した場合、当社はユーザーのアカウントを凍結することがあります。このような場合は、カスタマーサポートに連絡してアカウントを再有効化してください。
                      </li>
                      <li>
                        20.5 利用者が自分のユーザー名及びログインパスワード、出金パスワードを紛失した場合、または他人のユーザー名及びログインパスワード、出金パスワードを紛失した場合、直ちに当社に連絡し、凍結を依頼してください。その後、ユーザー名、ログインパスワード、退会用パスワードは、登録された電子メールアドレスに再発行されます。
                      </li>
                      <li>
                        20.6 当社は、ペイメントゲートウェイに登録されているユーザー名とパスワードに基づいて、ユーザーを識別します。ユーザー名とパスワードが登録された情報と一致した場合、当社はあなたのアカウントが合法的なユーザーによってアクセスされたものとみなします。当社は、ユーザー名およびパスワードの捏造、偽造、盗用、悪用、その他の違反行為によって生じた損失や損害について、ユーザーに対して一切の責任を負いません。ユーザーは、本条に記載されている本人確認手続きに同意し、自分のアカウントのログイン情報を第三者に提示することなく保護するものとします。お客様は、ユーザー名およびパスワードが危険にさらされた場合、直ちに当社に連絡するものとします。
                      </li>
                      <li>
                        20.7 当社は、これらの必要な手続きが完了する前に発生した損失または損害については、当社側に故意または重大な過失がある場合を除き、いかなる責任も負いません。
                      </li>
                    </ol>
                    <h3> 21.マネーインソリューション</h3>
                    <ol>
                      <li>
                        21.1
                        当社は、「マネー・イン・ソリューション」の性質、当局の方針、プロバイダーの要求、および適用される法律の下で、地域、決済通貨、送金チャネル、決済の最低額および最高額を制限する権利を留保します。
                      </li>
                      <li>
                        21.2
                        お客様は、返金手数料、チャージバック手数料、決済手数料、銀行手数料および取引手数料を含むがこれらに限定されない、本ソリューションから発生するすべての手数料を負担することを了承し、これに同意します。支払いゲートウェイに表示された手数料と実際に請求された手数料に差異がある場合、当社は監査を行う権利を有し、その結果は適用される法令に基づいて実施された監査報告書に基づく適切なものが優先され、反映されるものとします。
                      </li>
                      <li>
                        21.3
                        お客さまは、口座番号、参照番号などの取引関連情報、および入金ソリューションに必要なその他の情報がすべて正確かつ完全であることを確認する責任を負います。預け入れの場合、送金先銀行の選択は、預け入れ前に確認された銀行を介してのみ行うことができます。第三者が所有する送金口座については、適切なKYCおよびその他の書類が必要となり、その書類は当社が決定します。当社は、不正確または不十分な情報に起因するいかなる損失または損害に対しても責任を負いません。
                      </li>
                      <li>
                        21.4
                        資金の払い戻しができない場合は、他の銀行口座とは別の銀行口座に資金を振り込みます。正しい送金情報を提供することにより、この資金は、取引手数料を差し引いた後、元の送金通貨でお客様の口座に返金されます。
                      </li>
                      <li>
                        21.5
                        お客様は、出金証明書を保管し、これを開示しない義務があります。引き出し証明書を紛失したために生じた不都合（金銭を請求できなかった場合など）は、お客様が単独で責任を負うものとします。
                      </li>
                      <li>
                        21.6
                        お客様は、適用される法令に基づいて提供者が要求する支払処理サービスの条件を遵守することに同意するものとします。
                      </li>
                    </ol>
                    <h3>22.取引の制限</h3>
                    <p>
                      22.1 当社は、市場の急激な変動や世界的な経済状況の変化に応じて、利用者に対する決済サービスを停止または制限することができるものとします。このような場合に発生する利用者の損害について、当社は一切の責任を負わないものとします。
                    </p>
                    <h3>23.マネーロンダリング・テロ資金供与対策</h3>
                    <ol>
                      <li>
                        23.1 送金依頼がFATF発行のガイドラインに基づく高リスク国または地域を含む場合、当社は予告なしに送金を取り消す裁量権を有します。
                      </li>
                      <li>
                        23.2 当社は、AML/CFTガイドラインに関連するマネーロンダリング防止およびテロ資金供与防止活動に関して当局から要請があった場合、予告なしに情報を開示することがあります。私たちは、事業を行う国の最高の倫理基準に準拠して事業を行い、金融機関に関連するすべての法令を遵守します。当社のすべての顧客、代理人、従業員および関係者が、AMLまたはテロ対策の法令の範囲を十分に理解することが不可欠です。
                      </li>
                      <li>
                        23.3 当社は、お客様の海外送金取引に関して、証拠となる取引書類や調査を要求する権利を有します。これらの証拠書類が提出されない場合、お客様の取引を拒否または制限する根拠となります。当社は、この点に関して、お客様に補償する義務または責任を負う義務は一切ありません。当社は、マネーロンダリング、テロ資金調達、各種要注意人物、資金提供企業、およびこれらに類似する行為の阻止に関する当局からの要求に応じて、取引を停止し、または口座を解約することができます。当社は、これらの損失を補償する責任を負いません。
                      </li>
                      <li>
                        23.4 お客様は、そのために当社が被ったまたは負担した損害または損失について、適切な賠償責任を負うものとします。
                      </li>
                    </ol>
                    <h3>24.財産の相続</h3>
                    <ol>
                      <li>
                        24.1 個人の口座名義人が死亡または失踪を含めて不在の場合、口座の資金は、口座名義人の死亡および口座名義人と相続人の関係を証明する法的文書を提出する必要がある相続人の口座に移されるものとします。
                      </li>
                      <li>
                        24.2 口座名義人の死亡および相続人と口座名義人の関係を証明する書類が提出されるまで、口座を凍結することは当社の裁量です。提出された書類を慎重に評価した後、そのような目的に必要な書類が揃っている場合には、プラットフォームに残っている資金を相続人が指定した口座に移し、その後、元の口座を閉鎖するものとします。
                      </li>
                      <li>
                        24.3 法人口座名義人の正式な代表者が不在の場合、法人は新たな正式な代表者の委任状を当社に提出するものとします。当社は、この委任状を登録し、口座の権限をこの新しい代表者に移譲します。
                      </li>
                      <li>
                        24.4 相続人または第三者から提供された法的文書の正式なチェックのみが可能であり、仮想的なチェックについては一切の責任を負わないものとします。当社は、相続人または関連する第三者が提供した虚偽の情報によって生じた損失または損害について責任を負わないものとします。
                      </li>
                      <li>24.5 当社は、財産の相続を請求する権利を有します。</li>
                    </ol>
                    <h3>25.ご利用条件の変更</h3>
                    <p>
                      25.1 当社は、ここに規定されている条件をいつでも更新する裁量権を有しています。重要な変更がある場合には、少なくとも2ヶ月前に、ウェブサイト上での告知、電子メールまたは携帯端末を用いた通知によりお知らせします。2ヶ月の通知期間終了後、決済サービスの利用を継続することにより、更新または変更された規約に拘束されることを承諾したものとみなされます。これらの条件に拘束されることを希望しない場合、お客様は、当社のキャンセルポリシーに従い、直ちに本決済サービスの利用を中止してください。
                    </p>
                    <h3>26.紛争の解決</h3>
                    <p>
                      26.1 本規約に基づいて生じるすべての紛争は、ジョージア州法によって解決されるものとします。本規約に基づくすべての紛争は、ジョージア州の法律に準拠するものとします。本規約のすべての当事者は、ジョージア州の司法権に同意するものとします。
                    </p>
                    <h3>27.言語</h3>
                    <p>
                      27.1 本規約は英語で作成されています。英語版とその他の言語版の間に矛盾がある場合は、英語版が優先するものとします。本規約は、その用語の平易な英語の意味に基づいて解釈されるものとします。
                    </p>
                  </div>
                  <h2>マーチャントサービスの利用条件</h2>
                  <div className="terms_box">
                    <h3>1.定義および説明</h3>
                    <ol>
                      <li>
                        1.1
                        「マーチャントサービス」とは、プラットフォームを通じたマネーインソリューションサービスのことを意味します。
                      </li>
                      <li>
                        1.2
                        「入金」とは、プラットフォーム所有者の口座にお金を送金することを意味します。
                      </li>
                      <li>
                        1.3
                        「プラットフォーム番号」とは、プラットフォーム利用者が所有するプラットフォームの口座番号を意味します。
                      </li>
                      <li>
                        1.4
                        「提供者」とは、銀行およびマーチャントペイメントサービスを提供する法人または個人を意味します。
                      </li>
                    </ol>
                    <h3>2.通貨の交換</h3>
                    <p>
                      2.1
                      プラットフォーム上で発行された為替レートと実際の運用時の為替レートに相違がある場合、当社は、法的権限を有する証明書付きの関連金融機関が発行した為替レートに基づいて、お客様の口座に資金を入金します。
                    </p>
                    <h3>3.マーチャントサービスの金額について</h3>
                    <p>
                      3.1
                      当社は、「マーチャントサービス」の各決済金額を制限する権限を有しており、マーチャントサービスの性質上、最低金額と最高金額を提供するものとします。また、当社は、当局の方針、プロバイダーの要求、その他の客観的な理由により、決済通貨および金額を制限する権利を有します。
                    </p>
                    <h3>4.暗号通貨ソリューション</h3>
                    <ol>
                      <li>
                        4.1. 口座所有者は、すべての身分証明書がマネーサービスプロバイダに提供されていることを条件に、プラットフォームで暗号通貨ソリューションを申請することができます。
                      </li>
                      <li>
                        4.2. クライアントは以下のことを認め、同意します。
                        <ul>
                          <li>
                            a). 最終的な交換額は、交換プラットフォームに表示されるものとします。
                          </li>
                          <li>
                            b). 交換費用は変動制であり、マーケティングポリシーに基づいてマネーサービスプロバイダーが調整することがあります。
                          </li>
                          <li>
                            c). 取引所の決済が完了した後は、その取引を取り消すことはできません。VERTEX RAISE LIMITED は顧客に暗号通貨交換のゲートウェイを提供するだけであり、マネーサービスプロバイダーは暗号通貨交換サービスによるすべての損失および損害に対して責任を負うものとします。
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h3>5.手数料の負担</h3>
                    <p>
                      5.1
                      お客様は、マーチャントサービスから発生するすべての手数料（決済手数料、銀行取扱手数料、取引手数料等）を負担することに同意するものとします。プラットフォームシステム上に表示された手数料が実際の請求額と異なる場合、当社は適用される法令に基づき、手数料を監査し、修正する権利を有するものとします。お客様は、監査報告書が優先されることに同意するものとします。
                    </p>
                    <p>
                      5.2 プラットフォームが終了した場合、お客様にはアカウント内の資金を取り扱うことができる期間が与えられます。指定された期間内に口座から資金を引き出すことができない場合は、VERTEX RAISE LIMITED 社が残額を管理し、お客様は管理料を負担します。
                    </p>
                    <h3>6.送金情報</h3>
                    <p>
                      6.1
                      お客様は、入力されたプラットフォーム番号が送金のためのものであることを確認するものとします。
                    </p>
                    <h3>7.免責事項</h3>
                    <ol>
                      <li>
                        7.1
                        加盟店サービスの料金は、加盟店サービスリストに記載されるものとしますが、銀行の方針、適用される法律、取引先の方針等により変更される場合があり、当社はこれに応じて調整する権利を有するものとします。
                      </li>
                      <li>
                        7.2
                        不可抗力による遅延や障害が発生した場合、それによる損失や損害は当社に帰属しないものとします。
                      </li>
                      <li>
                        7.3
                        お客様は、マーチャントサービスを利用して、合法的、合理的、かつ妥当な決済を行うものとし、お客様が本サービスを不正に利用した場合、当社は当該不正利用による損失および損害について一切の責任を負わないものとします。
                      </li>
                      <li>
                        7.4
                        お客様の行為により送金が遅延した場合、それにより発生した損失・損害はお客様が単独で負担するものとします。
                      </li>
                      <li>
                        7.5
                        お客様は、適用される法令に基づきプロバイダが要求するマーチャントサービスの条件を遵守することに同意するものとします。
                      </li>
                    </ol>
                    <h3>8.禁止行為</h3>
                    <p>
                      8.1
                      お客様は、以下の行為を行わないことを確約するものとします。Rays Walletは、お客様の行為が適用される法令上の禁止行為に該当すると判断した場合、口座の凍結、口座の解約、資本金のロック、その他の処分を行う権利を有します。当社に対する禁止行為とは、以下のものを指します。
                    </p>
                    <ul>
                      <li>
                        a)プライバシー、名誉、信用、財産を侵害し、毀損する行為。
                      </li>
                      <li>
                        b)事業運営や開発を直接的または間接的に妨害・阻害する行為
                      </li>
                      <li>
                        c)マーチャントサービスの正常な運営を妨げたり、損害を与えたりする行為。
                      </li>
                      <li>d) 不利益を与える行為</li>
                      <li>
                        e)
                        書面による事前の許可なく、第三者にマーチャントサービスを提供する行為
                      </li>
                      <li>f) 適用される法律および規則に違反する行為</li>
                      <li>g) その他、適用法令上禁止される行為。</li>
                    </ul>
                    <p className="vr">Version 0.0.3 March 31, 2021</p>
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
