import { useEffect } from "react"
import { useCryptoStore } from "../store"

export default function CryptoTickerBar() {
  const tickerData = useCryptoStore((state) => state.tickerData)
  const fetchTickerData = useCryptoStore((state) => state.fetchTickerData)
  
  useEffect(() => {
    fetchTickerData()
  }, [])

  return (
    <div className="ticker-bar-wrapper">
      <div className="ticker-bar">
        {tickerData.map(({ CoinInfo, RAW }) => (
          <div className="ticker-item" key={CoinInfo.Name}>
            <span className="symbol">{CoinInfo.Name}</span>
            <span className="price">$ {RAW.USD.PRICE.toFixed(2)}</span>
            <span
              className={`change ${
                RAW.USD.CHANGEPCT24HOUR >= 0 ? "positive" : "negative"
              }`}
            >{RAW.USD.CHANGEPCT24HOUR >= 0 ? '▲' : '▼'}{RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
