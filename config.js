const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlNUkVTRGpnZ0VmbnRZSmZVdGlrdnFUd25xVHA5M0tDOG0relBsa2FGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTRBV2JLdTRkSGpiSEFGVmNwUTZoa1NLSWVrOW1XejhlTXNyZ1hTRER3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR1JYcUVva2VJQ0RLOWhqMWI1bi91b096d1RKZ25LbHZiMjNacXN6c0VvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNDFaVm5jOEV4N25sUVRHTXBCQjkwSHF3a3NDdkF6YnZSQU1TcUpVcjFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QalorUGhZS0pzb3BhSDN2cjQyVVpVaVRVMU4xRkk0SlVpVStMUlB0bTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRwTlNxUHVlcnFRaGtMUFBxcC9rSFFOTXRkekc0MElnQ25SV2prdTRBeVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0V6bWFYNGNkSzRUbkowWDg0eXlFUmZsTFZxQTF1S3M3cUpwMEJjUkNVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW9SbDlIb3NiYVRyWnNNU1VZRVVuRWhZODZHZjFIRjBYM3ZWYkxKZitpVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEVGhYT1ZsOEovanRwQVNTaU45WGEwTXZOcEZ2TUNTNFBZa0htaXpQU1lnYTdZOFI3eFRGU3JqUlFoQ0YrRkxwT3JBYkZEYmVZR0JYR2ZZeHcrWkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiYUJCdnoveVFYU1pscmE1N2d1bjBzMFB6d0ViUDhCYk1RcURDTWpHMGFNaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIzODY2NTcwMTYyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTA3MjUzRTY4OEJBQUVCQzA2OEIxQUM5MURFOTFGNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NzIyMTIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzODY2NTcwMTYyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTFCREVBNjg0NTk4RkQ5MzExOEFCREE3RjExNDAzMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NzIyMTIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzODY2NTcwMTYyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUYzOUFFMjY2NzAzQzQxNTcwOEM0Q0EzMUY4RUNGNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NzIyMTI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCTVRXU1lDViIsIm1lIjp7ImlkIjoiMzg2NjU3MDE2Mjk6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDcnlzdGFsIFNlcmVuYSIsImxpZCI6IjUzMTc4MDcxMDAwNjQ6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPYnk0RUNFSVgxak1jR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpRbm9aQlRyY0RTdjA3SUFqYVEwM1BQUGpuSDdESjNoTG9ldDFGT1htWGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InY5TXRYZWprWFU0a0ZOZTUyZGFpb1ZuZzFZUDY0aEtDSENuOTlzUzlEWDR5MDRhQWY3anUzSXFiMnA0VTFFNW9KWTNuTzJPUTMwRVhiZ2htN1c2NEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3Q1dnRmZPaCt1Z09FNFdzZG9IbVprVjl0RUhnVTFpK3l3SUJOSHFncFByN3U5QkZTdkhkZlc3b00zckFTYW05OXV0Qm5ydGtnWWdBYitxdGVocUpCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjM4NjY1NzAxNjI5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzBKNkdRVTYzQTByOU95QUkya05Oenp6NDV4K3d5ZDRTNkhyZFJUbDVsMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NzIyMTIxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1hZIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
