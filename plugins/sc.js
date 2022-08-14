import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'

let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*「 RECODED BY ZERENITY 」*\n\n*Original Base From :*\nhttps://github.com/BochilGaming\n\n*RPG Features :*\nhttps://github.com/Hyzerr`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler