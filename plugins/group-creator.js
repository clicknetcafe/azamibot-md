let handler = async (m, { conn, command, usedPrefix}) => {
	const data = [...global.db.data.datas.rowner.filter(([id, isCreator]) => id && isCreator), ...global.db.data.datas.owner.filter(([id, isCreator]) => id && isCreator)]
	if (data.length == 0) throw `*[ ! ] Real Owner belum di set.*\n\n*${usedPrefix}addrealowner* untuk menambahkan Owner Asli.\n\n*${usedPrefix}addowner* untuk menambahkan Owner Biasa.`
	await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}

handler.menugroup = ['owner']
handler.tagsgroup = ['group']
handler.command = /^(owner|creator)$/i

export default handler