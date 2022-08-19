// React Import
import React from 'react'

const Component = ({ ...props }) => {
  return (
    <>
      {/* DISPLAY PC ONLY */}
      <table className='table_xl'>
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
            <th>Rays Wallet間送金・エクスチェンジ</th>
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

      {/* DISPLAY MOBILE ONLY */}
      <table className="table_md">
        <tbody>
          <tr>
            <th colSpan={2}>
              <img src="./img/tiger_list4.png"></img>
              Fast口座
            </th>
          </tr>
          <tr>
            <td>口座開設</td>
            <td>メール登録のみで完了</td>
          </tr>
          <tr>
            <td>KYC・KYB・銀行口座認証</td>
            <td>１営業日</td>
          </tr>
          <tr>
            <td>Rays Wallet間送金・エクスチェンジ</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5分（目安）</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>即時（3承認）</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - クレジットカード</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（日本）</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（国際）</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>出金 - 暗号通貨</td>
            <td>１分（目安）</td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>プリペイドカード発行</td>
            <td>ー</td>
          </tr>
        </tbody>
      </table>

      <table className="table_md">
        <tbody>
          <tr>
            <th colSpan={2}>
              <img src="./img/tiger_list5.png"></img>
              Personal口座
            </th>
          </tr>
          <tr>
            <td>口座開設</td>
            <td>本人確認手続き+最短5分〜</td>
          </tr>
          <tr>
            <td>KYC・KYB・銀行口座認証</td>
            <td>１営業日</td>
          </tr>
          <tr>
            <td>Rays Wallet間送金・エクスチェンジ</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5分（目安）</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>3 - 5 営業日（目安）</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>即時（3承認）</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - クレジットカード</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（日本）</td>
            <td>１営業日(目安)</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（国際）</td>
            <td>3 - 5 営業日（目安）</td>
          </tr>
          <tr>
            <td>出金 - 暗号通貨</td>
            <td>１分（目安）</td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>1 - 2 営業日（目安）</td>
          </tr>
          <tr>
            <td>プリペイドカード発行</td>
            <td>3 営業日~10営業日</td>
          </tr>
        </tbody>
      </table>

      <table className="table_md">
        <tbody>
          <tr>
            <th colSpan={2}>
              <img src="./img/tiger_list6.png"></img>
              Business口座
            </th>
          </tr>
          <tr>
            <td>口座開設</td>
            <td>本人確認手続き+最短5分〜</td>
          </tr>
          <tr>
            <td>KYC・KYB・銀行口座認証</td>
            <td>1-3営業日</td>
          </tr>
          <tr>
            <td>Rays Wallet間送金・エクスチェンジ</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5分（目安）</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>3 - 5 営業日（目安）</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>即時（3承認）</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>入金 - クレジットカード</td>
            <td>即時</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（日本）</td>
            <td>１営業日(目安)</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（国際）</td>
            <td>3 - 5 営業日（目安）</td>
          </tr>
          <tr>
            <td>出金 - 暗号通貨</td>
            <td>１分（目安）</td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>1 - 2 営業日（目安）</td>
          </tr>
          <tr>
            <td>プリペイドカード発行</td>
            <td>3 営業日~10営業日</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Component
