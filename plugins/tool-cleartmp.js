import { tmpdir } from 'os'
import path, { join } from 'path'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	const tmp = [tmpdir(), 'C:/bunnyv4.3/tmp']
	const filename = []
	tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
	return filename.map(file => {
		const stats = statSync(file)
		unlinkSync(file)
	})
	m.reply(`sukses lah tolong`)
}

handler.help = ['cleartmp']
handler.tags = ['tools']
handler.command = /^(cleartmp)$/i

handler.rowner = true

export default handler