let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text || isNaN(text)) throw `Masukkan nominal !\n\nContoh : *${usedPrefix + command} 10000*`
    let awal = global.db.data.users[m.sender].money
    let awal2 = parseInt(awal) + parseInt(text)
    if (awal2 > 1000000000000000) throw `Kebanyakan`
    if (awal2 < 0) throw `Jangan sampai saldo minus.`
    global.db.data.users[m.sender].money += parseInt(text)
    await delay(500)
    if (text.includes('-')) {
        m.reply(`Anda menyetor sebesar ${text}\n\nSaldo 💵 : ${global.db.data.users[m.sender].money}`)
    } else {
        m.reply(`Sukses menarik uang.\n\nSaldo 💵 : ${global.db.data.users[m.sender].money}`)
    }
}

handler.menugroup = ['cash <nominal>']
handler.tagsgroup = ['owner']
handler.command = /^(cash)$/i

handler.owner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))