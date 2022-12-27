export async function all(m) {
	let chats = global.db.data.users[m.sender]
	if (!chats.expired)
		return !0
	if (+new Date() > chats.expired) {
		try {
			let prems = global.db.data.datas.prems
			await this.sendMessage(m.chat, { text: '[!] Durasi premium anda telah berakhir.', mentions: [m.sender] }, { quoted: m })
			chats.expired = null
			global.db.data.datas.prems = await prems.filter(v => v.user !== m.sender)
		} catch (e) {
			console.log(e)
		}
	}
}