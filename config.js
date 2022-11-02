import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
	['6282118165484'],
	['6282118165484'],
	['6282118165484', 'Syahrul A.S', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	bg: 'http://bochil.ddns.net',
	xteam: 'https://api.xteam.xyz',
	zahir: 'https://zahirr-web.herokuapp.com',
	zeks: 'https://api.zeks.xyz',
	pencarikode: 'https://pencarikode.xyz',
	LeysCoder: 'https://leyscoders-api.herokuapp.com',
	lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://api.xteam.xyz': 'd90a9e986e18778b',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
	'https://api.zeks.xyz': 'apivinz',
	'https://pencarikode.xyz': 'pais',
	'https://leyscoders-api.herokuapp.com': 'dappakntlll',
	'https://api.lolhuman.xyz': 'apikeylu'
}

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			bow: '🏹',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐎',
			cat: '🐈',
			dog: '🐕',
			fox: '🦊',
			wolf: '🐺',
			centaur: '🐎',
			phoenix: '🦜',
			dragon: '🐉',
			petfood: '🍖',
			iron: '⛓️',
			gold: '👑',
			emerald: '💚',
			bibitmangga: '🌾',
			bibitanggur: '🌾',
			bibitjeruk: '🌾',
			bibitpisang: '🌾',
			bibitapel: '🌾',
			mangga: '🥭',
			anggur: '🍇',
			jeruk: '🍊',
			pisang: '🍌',
			apel: '🍎',
			ayam: '🐔',
			kambing: '🐐',
			sapi: '🐄',
			kerbau: '🐃',
			babi: '🐖',
			harimau: '🐅',
			banteng: '🐂',
			monyet: '🐒',
			babihutan: '🐗',
			panda: '🐼',
			gajah: '🐘',
			buaya: '🐊',
			orca: '🐋',
			paus: '🐳',
			lumba: '🐬',
			hiu: '🦈',
			ikan: '🐟',
			lele: '🐟',
			bawal: '🐡',
			nila: '🐠',
			kepiting: '🦀',
			lobster: '🦞',
			gurita: '🐙',
			cumi: '🦑',
			udang: '🦐',
			steak: '🍝',
			sate: '🍢',
			rendang: '🍜',
			kornet: '🥣',
			nugget: '🍱',
			bluefin: '🍲',
			seafood: '🍛',
			sushi: '🍣',
			moluska: '🥘',
			squidprawm: '🍤',
			rumahsakit: '🏥',
			restoran: '🏭',
			pabrik: '🏯',
			tambang: '⚒️',
			pelabuhan: '🛳️'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
	}
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})
