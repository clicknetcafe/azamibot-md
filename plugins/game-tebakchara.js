import fetch from 'node-fetch'

let timeout = 120000
let poin = 2999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.game == false && m.isGroup) return
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (id in conn.tebakchara) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakchara[id][0])
        throw false
    }
    if (global.db.data.users[m.sender].limit < 1 && global.db.data.users[m.sender].money > 50000 && !isPrems) {
        throw `Beli limit dulu lah, duid lu banyak kan 😏`
    } else if (global.db.data.users[m.sender].limit > 0 && !isPrems) {
        global.db.data.users[m.sender].limit -= 1
    } else {

    }
    let res = await fetch(`https://api.lolhuman.xyz/api/tebakchara?apikey=${global.api}`)
    if (!res.ok) throw 'Fitur Error!'
    let json = await res.json()
    let caption = `
🎮 *Tebak Character* 🎮

⭔ Timeout *${(timeout / 1000).toFixed(2)} detik*
⭔ Bonus: ${poin} Exp and ${poin} Money
`.trim()
    conn.tebakchara[id] = [
        await conn.sendFile(m.chat, json.result.image, 'tebakchara.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakchara[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.name}*`, packname + ' - ' + author, ['tebakchara', `${usedPrefix}tebakchara`], conn.tebakchara[id][0])
            delete conn.tebakchara[id]
        }, timeout)
    ]
    console.log(json.result.name)
}

handler.menufun = ['tebakchara (exp+) (money+)']
handler.tagsfun = ['game']
handler.command = /^(tebakchara)$/i

handler.premium = true
handler.limit = true

export default handler