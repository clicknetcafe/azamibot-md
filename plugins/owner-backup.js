import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	m.reply(`_[!] Wait, sending database. . ._`)
	try {
		let database = await fs.readFileSync(`./database.json`)
		let session = await fs.readFileSync(`./session.data.json`)
		await conn.sendMsg(m.sender, {document: database, mimetype: 'application/json', fileName: 'database.json'}, { quoted : m })
		await conn.sendMsg(m.sender, {document: session, mimetype: 'application/json', fileName: 'session.data.json'}, { quoted : m })
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi.`)
	}
}

handler.menuowner = ['backup']
handler.tagsowner = ['owner']
handler.command = /^(backup(db|database)?)$/i

handler.owner = true

export default handler