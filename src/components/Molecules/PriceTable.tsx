// React Import
import React from 'react'

const Component = ({ ...props }) => {
  return (
    <>
      {/* DISPLAY PC ONLY */}
      <table className="tayp_table table_xl">
        <tbody>
          <tr className="tayp_title">
            <th></th>
            <th>Fast口座</th>
            <th>Personal口座</th>
            <th className="non_line">Business口座</th>
          </tr>
          <tr>
            <td>口座開設</td>
            <td>メールで簡単開設</td>
            <td>
              本人確認完了にて
              <br />
              アップグレード
            </td>
            <td className="non_line">
              事業者確認完了にて
              <br />
              アップグレード
            </td>
          </tr>
          <tr>
            <td>ご利用上限</td>
            <td>累計1,000ドルまで</td>
            <td>50,000ドル/1日</td>
            <td className="non_line">応相談</td>
          </tr>
          <tr>
            <td>第三者への出金</td>
            <td>×</td>
            <td>×</td>
            <td className="non_line">○</td>
          </tr>
          <tr>
            <td>ご利用可能な法定通貨</td>
            <td>
              JPY/USD/EUR/PHP
              <br />
              エクスチェンジのみ{' '}
            </td>
            <td>JPY/USD/EUR/PHP</td>
            <td className="non_line">JPY/USD/EUR/PHP</td>
          </tr>
          <tr>
            <td>ご利用可能な暗号通貨</td>
            <td>BTC/ETH/XRP/USDC/USDT</td>
            <td>BTC/ETH/XRP/USDC/USDT</td>
            <td className="non_line">BTC/ETH/XRP/USDC/USDT</td>
          </tr>
        </tbody>
      </table>

      {/* DISPLAY MOBILE ONLY */}
      <table className="tayp_table table_md">
        <tbody>
          <tr className="tayp_title">
            <th>Fast口座</th>
          </tr>
          <tr>
            <td>口座開設</td>
          </tr>
          <tr>
            <td>メールで簡単開設</td>
          </tr>
          <tr>
            <td>ご利用上限</td>
          </tr>
          <tr>
            <td>累計1,000ドルまで</td>
          </tr>
          <tr>
            <td>第三者への出金</td>
          </tr>
          <tr>
            <td>×</td>
          </tr>
          <tr>
            <td>ご利用可能な法定通貨</td>
          </tr>
          <tr>
            <td>JPY/USD/EUR/PHP　エクスチェンジのみ</td>
          </tr>
          <tr>
            <td>ご利用可能な暗号通貨</td>
          </tr>
          <tr>
            <td>BTC/ETH/XRP/USDC/USDT</td>
          </tr>
        </tbody>
      </table>

      <table className="tayp_table table_md mt-4">
        <tbody>
          <tr className="tayp_title">
            <th>Personal口座</th>
          </tr>
          <tr>
            <td>口座開設</td>
          </tr>
          <tr>
            <td>本人確認完了にてアップグレード</td>
          </tr>
          <tr>
            <td>ご利用上限</td>
          </tr>
          <tr>
            <td>累計1,50,000ドル/1日</td>
          </tr>
          <tr>
            <td>第三者への出金</td>
          </tr>
          <tr>
            <td>×</td>
          </tr>
          <tr>
            <td>ご利用可能な法定通貨</td>
          </tr>
          <tr>
            <td>JPY/USD/EUR/PHP</td>
          </tr>
          <tr>
            <td>ご利用可能な暗号通貨</td>
          </tr>
          <tr>
            <td>BTC/ETH/XRP/USDC/USDT</td>
          </tr>
        </tbody>
      </table>

      <table className="tayp_table table_md mt-4">
        <tbody>
          <tr className="tayp_title">
            <th>Business口座</th>
          </tr>
          <tr>
            <td>口座開設</td>
          </tr>
          <tr>
            <td>事業者確認完了にてアップグレード</td>
          </tr>
          <tr>
            <td>ご利用上限</td>
          </tr>
          <tr>
            <td>応相談</td>
          </tr>
          <tr>
            <td>第三者への出金</td>
          </tr>
          <tr>
            <td>○</td>
          </tr>
          <tr>
            <td>ご利用可能な法定通貨</td>
          </tr>
          <tr>
            <td>JPY/USD/EUR/PHP</td>
          </tr>
          <tr>
            <td>ご利用可能な暗号通貨</td>
          </tr>
          <tr>
            <td>BTC/ETH/XRP/USDC/USDT</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Component
