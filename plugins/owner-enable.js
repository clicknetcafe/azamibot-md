import { somematch } from '../lib/others.js'

let handler = async (m, { conn, usedPrefix, command, isOwner, args }) => {
	if (isOwner && m.isGroup) {
		if (!args[0] || !somematch(['on','off'], args[0].toLowerCase())) return m.reply(`Usage : ${usedPrefix + command} on / off\n\nExample : *${usedPrefix + command} on*`)
		if (command == 'antilink') {
			if (args[0] == 'on') {
				global.db.data.chats[m.chat].antiLink = true
			} else {
				global.db.data.chats[m.chat].antiLink = false
			}
		} else {
			if (args[0] == 'on') {
				global.db.data.chats[m.chat][`${command.toLowerCase()}`] = true
			} else {
				global.db.data.chats[m.chat][`${command.toLowerCase()}`] = false
			}
		}
	}
}

handler.command = /^(welcome|nsfw|game|antilink|antivirus)$/i

export default handler