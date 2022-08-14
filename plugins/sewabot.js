import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async (m, { conn, command }) => {
	let ini_txt = `[ LIST HARGA ]

╔╣ *PREMIUM USER*
║ • Infinity Limit
║ • Akses Private Chat
╚══╣ *Harga :* Rp.10.000 / bulan

╔╣ *SEWA BOT*
║ • Dapat Premium
║ • Bebas Invit ke 1 Grup
╚══╣ *Harga :* Rp.15.000 / bulan

╔╣ *JASA RUN BOT* ${readMore}
║ • Run SC Kamu Via RDP
╚══╣ *Harga :* Rp.20.000 / bulan

╔╣ *JADI BOT*
║ • Jadi Bot Azami Always ON
║ • Bisa Req Tampilan atau Fitur
╚══╣ *Harga :* Rp.25.000 / bulan

- Pembayaran via OVO / Dana / GoPay
  ke nomor 082337245566
- Whatsapp Multi Device
- Run via RDP (Always ON)
- Request Fitur?

Silahkan Chat Owner.
wa.me/6282337245566`

	/*const sections = [
		{
			title: `━ ━ ━ ━ 『 INI AJA 』 ━ ━ ━ ━`,
			rows: [
				{title: '⚡ BOT JOIN', rowId: '', description: 'Bot join bonus jadi premium'},
				{title: '🎫 JADI BOT', rowId: '', description: 'Menjadi Azami Bot'},
			]
		}, {
			title: `━ ━ ━ ━ 『 OPSI LAIN 』 ━ ━ ━ ━`,
			rows: [
				{title: '🎪 PREMIUM', rowId: '', description: 'Jadi Premium'},
				{title: '🎎 SEWA BOT', rowId: '', description: 'Invit Bot ke Grup'},
			]
		}
	]
	const listMessage = {
		text: ini_txt,
		footer: packname,
		//title: `⎔───「 ${packname} 」───⎔`,
		buttonText: `Hidangan`,
		sections
	}*/
	m.reply(ini_txt)
}

handler.menugroup = ['jadibot','premium','sewabot']
handler.tagsgroup = ['group']
handler.command = /^(sewa|(jadi|sewa)bot|premium)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)