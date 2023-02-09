import db from '../lib/database.js'

let handler = async (m, { conn, isPrems }) => {
	let { limit } = db.data.users[m.sender]
	let lemon
	if (isPrems) {
		lemon = `~ Infinity ~`
	} else {
		lemon = limit
	}
	await m.reply(`*「 LIMIT USER 」*
sisa limit anda : ${lemon}

🍻NOTE : untuk mendapatkan limit, bisa dengan main games atau command *.buy* 🍻`)
}

handler.menufun = ['limit']
handler.tagsfun = ['rpg']
handler.command = /^(limit)$/i

export default handler