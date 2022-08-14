import fs from 'fs'
import path from 'path'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async (m, { conn, text, usedPrefix, command }) => {
    //if (m.isGroup) return m.reply(`[ private chat only ]`)
    try {
        let database = await fs.readFileSync(`./database.json`, 'utf8')
        await fs.writeFileSync(`C:/bunnyv5/database.json`, database.replace('4331762','5000000'))
        //m.reply(`Berhasil migrate data ke *Azami Backup*`)
        m.reply(`tes duid 5000000`)
    } catch (e) {
    	console.log(e)
    	m.reply(`Terjadi kesalahan, coba lagi.`)
    }
}

handler.menugroup = ['movedata']
handler.tagsgroup = ['owner']
handler.command = /^((move|switch)(data)?)$/i

handler.owner = true

export default handler