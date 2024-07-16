const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_14_33_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInI2VEhVcFFMeXJCQmhRV1lVOG5oU1VKVkNTMG1OWkk5L3VQdVpWTWU3RW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFDN3kwcGcwUjdLSFRDR1FZeUh5b2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTcwZjZkMTUtODc3MC00ZTA1LTkyMTEtODc4NmQzMTBhZjhhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE4OSxcbiAgICAgIDE2NixcbiAgICAgIDEwNyxcbiAgICAgIDIzMyxcbiAgICAgIDEyLFxuICAgICAgMTYwLFxuICAgICAgMTIzLFxuICAgICAgNSxcbiAgICAgIDIzMSxcbiAgICAgIDEyNCxcbiAgICAgIDkxLFxuICAgICAgNjgsXG4gICAgICAxMTUsXG4gICAgICA1MSxcbiAgICAgIDc5LFxuICAgICAgNTMsXG4gICAgICAyMTMsXG4gICAgICAxODksXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTcwLFxuICAgICAgMjEyLFxuICAgICAgMTc5LFxuICAgICAgMTgzLFxuICAgICAgODksXG4gICAgICA4NyxcbiAgICAgIDE3NSxcbiAgICAgIDE3OCxcbiAgICAgIDIwNSxcbiAgICAgIDg5LFxuICAgICAgODMsXG4gICAgICAyNTEsXG4gICAgICA3NixcbiAgICAgIDE5NixcbiAgICAgIDc1LFxuICAgICAgNzIsXG4gICAgICA3NixcbiAgICAgIDE1NyxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIloxVkFFRkdOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxOTQ1NjIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTU5NjUyMTk1MTMwMTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTZHc1TUhFTU9KMnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZUR5U29wRGJGNGM3dk1RdXZPWjM4ZXVLUVc4RTZ3c3RWUHRiOG16S0ZXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1SEg5cW92R3FpbXc1ZTZCbnI1dXY1TDV4Mk1oTWdMVnEyamRvN1VWWDd1Qzk5RWd3NWYzeFVpMDIxMG5FN1JoUzN2MldBSEJjazZLY2tadldES0REQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5ZUVqOHI5UlZtNjFGSEFodFVaaGp0ZjIreVpnNXhTa3ZpTGxicUtUMWxWYlJPTlBJZUtDM3ZLZTN6eFJZbE53M3F0cXNNVkRqNnB6b0c0U3l4M2lqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxOTQ1NjIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0MDQyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJablwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlpuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiemp2WVhDWWZmaUtEME9wdTVEdlZCMy96MzgvV01CR2tmcEMwdVlvL2xPOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE5OTk1NTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk0Mjk3NzM0OTFcIn0iCn0=|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
