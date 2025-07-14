import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import './Spinner.css'
import CryptoTickerBar from "./components/CryptoTickerBar"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <CryptoTickerBar />
        <div className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
