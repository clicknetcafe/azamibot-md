let handler = async (m, { text }) => {
	if (!text) {
		global.db.data.chats[m.chat].isBanned = true
		m.reply('Bot dalam mode nyimak.')
	} else {
		try {
			global.db.data.chats[`${text.includes('@') ? text : text + '@g.us'}`].isBanned = true
			m.reply('Bot dalam mode nyimak.')
		} catch (e) {
			console.log(e)
			m.reply(`ID Grup tidak ada dalam database.`)
		}
	}
}

handler.menugroup = ['banchat']
handler.tagsgroup = ['owner']
handler.command = /^(banchat)$/i

handler.owner = true

export default handler