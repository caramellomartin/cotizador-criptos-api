import z from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema, TickerCryptoSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
export type TickerCrypto = z.infer<typeof TickerCryptoSchema>
