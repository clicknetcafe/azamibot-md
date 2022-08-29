import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw 'Fitur Error!'
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, `_Random pic : ${command}_`, packname + ' - ' + author, json.url, [[`⧑ next ${command} ⧑`, `${usedPrefix + command}`]], m)
}
handler.menuanime = ['neko']
handler.tagsanime = ['randompic']
handler.command = /^(neko)$/i

export default handler