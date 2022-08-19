// React Import
import React from 'react'

const Component = ({ ...props }) => {
  return (
    <>
      {/* DISPLAY PC ONLY */}
      <table className="table_xl">
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
            <td>無料</td>
          </tr>
          <tr>
            <td>口座維持費</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>インターナルトランスファー</td>
            <td>0.5%</td>
          </tr>
          <tr>
            <td>エクスチェンジ</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>4%（決済手数料別）</td>
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
            <td>出金 - BTC</td>
            <td>
              1.5%
              <br />
              （ミニマム：0.00005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - ETH</td>
            <td>
              1.5%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - XRP</td>
            <td>
              1.5%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - USDT / USDC</td>
            <td>
              1.5%
              <br />
              （20 USDT/USDC）
            </td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>ー</td>
          </tr>
          <tr>
            <td>口座間送金(送金者負担)</td>
            <td>0.50%</td>
          </tr>
          <tr>
            <td>
              非アクティブアカウント
              <br />
              管理費（12ヶ月以降）
            </td>
            <td>月額:1.82 ドル</td>
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
            <td>無料</td>
          </tr>
          <tr>
            <td>口座維持費</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>インターナルトランスファー</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>エクスチェンジ</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>2% (着金額から2%)</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>4%（決済手数料別）</td>
          </tr>
          <tr>
            <td>入金 - クレジットカード</td>
            <td>準備中</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（日本）</td>
            <td>
              2%
              <br />
              (ミニマム:35 ドル / 3500円)
            </td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（国際）</td>
            <td>
              2.5%
              <br />
              (ミニマム:60 ドル / 60ユーロ)
            </td>
          </tr>
          <tr>
            <td>出金 - BTC</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.00005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - ETH</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - XRP</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - USDT / USDC</td>
            <td>
              1.2%
              <br />
              （20 USDT/USDC）
            </td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>
              2%
              <br />
              (ミニマム:15ドル / 1700円)
            </td>
          </tr>
          <tr>
            <td>口座間送金(送金者負担)</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>
              非アクティブアカウント
              <br />
              管理費（12ヶ月以降）
            </td>
            <td>月額:1.82 ドル</td>
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
            <td>無料</td>
          </tr>
          <tr>
            <td>口座維持費</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>インターナルトランスファー</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>エクスチェンジ</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（日本）</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>入金 - 銀行振込（国際）</td>
            <td>2% (着金額から2%)</td>
          </tr>
          <tr>
            <td>入金 - 暗号通貨</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>入金 - ペイジー</td>
            <td>4%（決済手数料別）</td>
          </tr>
          <tr>
            <td>入金 - クレジットカード</td>
            <td>準備中</td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（日本）</td>
            <td>
              2%
              <br />
              (ミニマム:35 ドル / 3500円)
            </td>
          </tr>
          <tr>
            <td>出金 - 銀行振込（国際）</td>
            <td>
              2.5%
              <br />
              (ミニマム:60 ドル / 60ユーロ)
            </td>
          </tr>
          <tr>
            <td>出金 - BTC</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.00005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - ETH</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - XRP</td>
            <td>
              1.2%
              <br />
              （ミニマム：0.005 BTC）
            </td>
          </tr>
          <tr>
            <td>出金 - USDT / USDC</td>
            <td>
              1.2%
              <br />
              （20 USDT/USDC）
            </td>
          </tr>
          <tr>
            <td>出金 - プリペイドカードチャージ</td>
            <td>
              2%
              <br />
              (ミニマム:15ドル / 1700円)
            </td>
          </tr>
          <tr>
            <td>口座間送金(送金者負担)</td>
            <td>無料</td>
          </tr>
          <tr>
            <td>
              非アクティブアカウント
              <br />
              管理費（12ヶ月以降）
            </td>
            <td>月額:1.82 ドル</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Component
