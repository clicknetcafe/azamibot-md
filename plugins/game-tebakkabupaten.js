import { tebakkabupaten } from '@bochilteam/scraper'

let timeout = 120000
let poin = 1999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.game == false && m.isGroup) return
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
        throw false
    }
    if (global.db.data.users[m.sender].limit < 1 && global.db.data.users[m.sender].money > 50000 && !isPrems) {
        throw `Beli limit dulu lah, duid lu banyak kan 😏`
    } else if (global.db.data.users[m.sender].limit > 0 && !isPrems) {
        global.db.data.users[m.sender].limit -= 1
    } else {

    }
    const json = await tebakkabupaten()
    let caption = `
🎮 *Tebak Kabupaten* 🎮

⭔ Timeout *${(timeout / 1000).toFixed(2)} detik*
⭔ Bonus: ${poin} Exp
`.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendFile(m.chat, json.url, 'tebakkabupaten.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, packname + ' - ' + author, ['tebakkabupaten', `${usedPrefix}tebakkabupaten`], conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
    console.log(json.title)
}
handler.menufun = ['tebakkabupaten (exp+)']
handler.tagsfun = ['game']
handler.command = /^(tebakkabupaten)$/i

handler.premium = true

export default handler