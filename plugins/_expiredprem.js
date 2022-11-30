export async function all(m) {
    let chats = global.db.data.users[m.sender]
    let prems = global.db.data.store.prems
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.sendMessage(m.chat, { text: '[!] Durasi premium anda telah berakhir.', mentions: [m.sender] }, { quoted: m })
        chats.expired = null
        global.db.data.store.prems = await prems.filter(v => v.user !== m.sender)
    }
}