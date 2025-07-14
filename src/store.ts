import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { CryptoCurrency, CryptoPrice, Pair, TickerCrypto } from "./types"
import { fetchCurrentCryptoPrice, getCryptos, getTickerData } from "./services/CryptoService"

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[]
  result: CryptoPrice
  loading: boolean
  tickerData: TickerCrypto[]
  fetchCryptos: () => Promise<void>
  fetchTickerData: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools(
  (set) => ({
    cryptoCurrencies: [],
    result: {
      IMAGEURL: '',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGEPCT24HOUR: '',
      LASTUPDATE: ''
    },
    tickerData: [],
    loading: false,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos()
      set(() => ({
        cryptoCurrencies
      }))
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true
      }))
      const result = await fetchCurrentCryptoPrice(pair)
      set(() => ({
        result,
        loading: false
      }))
    },
    fetchTickerData: async () => {
      const tickerData = await getTickerData()
      if(tickerData) {
        set(() => ({
          tickerData
        }))
      }
    }
  }))
)
