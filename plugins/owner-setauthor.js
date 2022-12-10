let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`[!] Masukkan Nama Author.`)
	global.db.data.datas.author = text
	m.reply(`Author berhasil diset menjadi :\n*${text}*`)
}

handler.menuowner = ['setauthor']
handler.tagsowner = ['ownerr']
handler.command = /^(setauthor(name)?)$/i

handler.rowner = true

export default handler