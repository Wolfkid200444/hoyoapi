import {config} from 'dotenv'
import { GenshinImpact, ICookie, LanguageEnum } from '../../src'
config()

export const cookie: ICookie = {
  accountId: Number(process.env.ACCOUNT_ID),
  cookieToken: process.env.COOKIE_TOKEN,
  ltoken: process.env.LTOKEN ?? '',
  ltuid: Number(process.env.LTUID),
  cookieTokenV2: process.env.COOKIE_TOKEN_V2 ?? '',
  accountIdV2: Number(process.env.ACCOUNT_ID_V2)
}

export const genshin = async () => {
  return await GenshinImpact.create({
    cookie,
    lang: LanguageEnum.ENGLISH,
  })
}