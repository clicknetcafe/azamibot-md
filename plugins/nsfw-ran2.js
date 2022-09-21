import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat]
    if (!chat.nsfw && m.isGroup) throw `[ *NSFW GAK AKTIF* ]`
    try {
        let fimg = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/anime${command}?apikey=${global.api}`)
        //if (!fimg.ok) throw 'Fitur Error!'
        let fimgb = Buffer.from(await fimg.arrayBuffer())
        conn.sendButton(m.chat, `_Random pic : ${command}_`, packname + ' - ' + author, fimgb, [[`⧑ next ${command} ⧑`, `${usedPrefix + command}`]], m)
    } catch (e) {
        console.log(e)
        m.reply(`Terjadi kesalahan, coba lagi nanti.`)
    }
}

handler.menunsfw = ['feets','booty','armpits']
handler.tagsnsfw = ['randompic']
handler.command = /^(feets|booty|armpits)$/i

handler.premium = true
handler.limit = true

export default handler