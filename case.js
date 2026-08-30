/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/
import "./settings.js";
import {
  clockString,
  parseMention,
  isUrl,
  sleep,
  runtime,
  getBuffer,
  jsonformat,
  capital
} from "./lib/myfunc.js";
import uploader from "./lib/upload.js";
import makeWaSocket, {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  delay,
} from "@whiskeysockets/baileys";
import crypto from "crypto";
import { modul } from "./module.js";
import { exec, spawn, execSync } from "child_process";
import { color, bgcolor } from "./lib/color.js";
import path from "path";
import util from "util";
const {
  os,
  axios,
  baileys,
  chalk,
  cheerio,
  fs,
  PhoneNumber,
  process,
  moment,
  ms,
  ytdl,
} = modul;
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';

const readFile = util.promisify(fs.readFile);

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const yy1 = "`";
const yy2 = "```";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function mainHandler(Lumnztyz6x, m, chatUpdate, store) {
try {
  async function appenTextMessage(text, chatUpdate) {
    let messages = await generateWAMessage(
      m.chat,
      {
        text: text,
        mentions: m.mentionedJid,
      },
      {
        userJid: Lumnztyz6x.user.id,
        quoted: m.quoted && m.quoted.fakeObj,
      },
    );
    messages.key.fromMe = areJidsSameUser(m.sender, Lumnztyz6x.user.id);
    messages.key.id = m.key.id;
    messages.pushName = m.pushName;
    if (m.isGroup) messages.participant = m.sender;
    let msg = {
      ...chatUpdate,
      messages: [proto.WebMessageInfo.fromObject(messages)],
      type: "append",
    };
    Lumnztyz6x.ev.emit("messages.upsert", msg);
  }
  const { type, quotedMsg, mentioned, now, fromMe } = m;
  let body =
    m.mtype === "interactiveResponseMessage"
      ? JSON.parse(
          m.message.interactiveResponseMessage.nativeFlowResponseMessage
            .paramsJson,
        ).id
      : m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
          ? m.message.imageMessage.caption
          : m.mtype == "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype == "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.mtype == "buttonsResponseMessage"
                ? m.message.buttonsResponseMessage.selectedButtonId
                : m.mtype == "listResponseMessage"
                  ? m.message.listResponseMessage.singleSelectReply
                      .selectedRowId
                  : m.mtype == "templateButtonReplyMessage"
                    ? m.message.templateButtonReplyMessage.selectedId
                    : m.mtype == "messageContextInfo"
                      ? m.message.buttonsResponseMessage?.selectedButtonId ||
                        m.message.listResponseMessage?.singleSelectReply
                          .selectedRowId ||
                        m.text
                      : m.mtype === "editedMessage"
                        ? m.message.editedMessage.message.protocolMessage
                            .editedMessage.extendedTextMessage
                          ? m.message.editedMessage.message.protocolMessage
                              .editedMessage.extendedTextMessage.text
                          : m.message.editedMessage.message.protocolMessage
                              .editedMessage.conversation
                        : "";


//——————————[ require files ]——————————//             
const thumbs = global.thumb
const randomThumbUrl = global.thumb

//——————————[ Entitas Verification ]——————————//               
const budy = (typeof m.text == 'string' ? m.text : '.')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
  const chath = body;
  const pes = body;
  const messagesC = pes.slice(0).trim();
  const content = JSON.stringify(m.message);
  const isCmd = body.startsWith(prefix);
  const from = m.key.remoteJid;
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase();
  const command = body
    .replace(prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  const args = body.trim().split(/ +/).slice(1);
  const lidBotNumber = await Lumnztyz6x.decodeJid(Lumnztyz6x.user.lid);
  const botNumber = await Lumnztyz6x.decodeJid(Lumnztyz6x.user.id);
  const isCreator = m.sender === global.ownernumber + "@s.whatsapp.net" ||
   m.sender === botNumber ||
    m.sender === global.lidownernumber + "@lid" ||
     m.sender === lidBotNumber;
  const pushname = m.pushName || "Anomali";
  const q = args.join(" ");
  const text = q;
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || "";
  const qmsg = quoted.msg || quoted;
  const isMedia = /image|video|sticker|audio/.test(mime);
  const isImage = type == "imageMessage";
  const isVideo = type == "videoMessage";
  const isAudio = type == "audioMessage";
  const isSticker = type == "stickerMessage";
  const isQuotedImage =
    type === "extendedTextMessage" && content.includes("imageMessage");
  const isQuotedLocation =
    type === "extendedTextMessage" && content.includes("locationMessage");
  const isQuotedVideo =
    type === "extendedTextMessage" && content.includes("videoMessage");
  const isQuotedSticker =
    type === "extendedTextMessage" && content.includes("stickerMessage");
  const isQuotedAudio =
    type === "extendedTextMessage" && content.includes("audioMessage");
  const isQuotedContact =
    type === "extendedTextMessage" && content.includes("contactMessage");
  const isQuotedDocument =
    type === "extendedTextMessage" && content.includes("documentMessage");
  const sender = m.isGroup
    ? m.key.participant
      ? m.key.participant
      : m.participant
    : m.key.remoteJid;
  const senderNumber = sender.split("@")[0];
  const isGroup = m.chat.endsWith('@g.us')
  const groupMetadata = m.isGroup
    ? await Lumnztyz6x.groupMetadata(m.chat).catch((e) => {})
    : "";
  const participants =
    m.isGroup && groupMetadata ? groupMetadata.participants : [];
  const groupAdmins = m.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : [];
  const groupName = m.isGroup && groupMetadata ? groupMetadata.subject : [];
  const groupOwner = m.isGroup && groupMetadata ? groupMetadata.owner : [];
  const groupMembership =
    m.isGroup && groupMetadata ? groupMetadata.membership : [];
  const groupMembers =
    m.isGroup && groupMetadata ? groupMetadata.participants : [];
  const isBotAdmins = m.isGroup ? groupAdmins.includes(Lumnztyz6x.user.lid.split(":")[0]+"@lid") : false;
  const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
  const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  const deviceinfo = /^3A/.test(m.id) ? 'ɪᴏs' : m.id.startsWith('3EB') ? 'ᴡᴇʙ' : /^.{21}/.test(m.id) ? 'ᴀɴᴅʀᴏɪᴅ' : /^.{18}/.test(m.id) ? 'ᴅᴇsᴋᴛᴏᴘ' : 'ᴜɴᴋɴᴏᴡ';
  const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
  const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
  const mentionUser = [
    ...new Set([
      ...(m.mentionedJid || []),
      ...(m.quoted ? [m.quoted.sender] : []),
    ]),
  ];
  const mentionByTag =
    type == "extendedTextMessage" &&
    m.message.extendedTextMessage.contextInfo != null
      ? m.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  const mentionByReply =
    type == "extendedTextMessage" &&
    m.message.extendedTextMessage.contextInfo != null
      ? m.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  const numberQuery =
    q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
  const usernya = mentionByReply ? mentionByReply : mentionByTag[0];
  const Input = mentionByTag[0]
    ? mentionByTag[0]
    : mentionByReply
      ? mentionByReply
      : q
        ? numberQuery
        : false;

//——————————[ Load Penting Json ]——————————//
const pentingPath = path.join(process.cwd(), "database", "penting.json")
let penting = JSON.parse(fs.readFileSync(pentingPath))

// Simpan perubahan ke file
function savePenting() {
  fs.writeFileSync(pentingPath, JSON.stringify(penting, null, 2))
}

//——————————[ Time ]——————————//
  const xtime = moment.tz("Asia/Jakarta").format("HH:mm:ss");
  const xdate = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
  const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
  if (time2 < "23:59:00") {
    var timewisher = `Selamat Malam`;
  }
  if (time2 < "19:00:00") {
    var timewisher = `Selamat Malam`;
  }
  if (time2 < "18:00:00") {
    var timewisher = `Selamat Sore`;
  }
  if (time2 < "15:00:00") {
    var timewisher = `Selamat Siang`;
  }
  if (time2 < "11:00:00") {
    var timewisher = `Selamat Pagi`;
  }
  if (time2 < "05:00:00") {
    var timewisher = `Selamat Pagi`;
  }
  // Waktu sekarang di zona Asia/Jakarta
  let sekarang = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }),
  );
  // Fungsi tanggal, bulan, tahun
  function tanggal(ms) {
    return new Date(ms).getDate().toString().padStart(2, "0");
  }
  function bulan(ms) {
    return (new Date(ms).getMonth() + 1).toString().padStart(2, "0"); // +1 karena Januari = 0
  }
  function tahun(ms) {
    return new Date(ms).getFullYear();
  }
  // Fungsi jam:menit:detik
  function formatJam(date) {
    let jam = date.getHours().toString().padStart(2, "0");
    let menit = date.getMinutes().toString().padStart(2, "0");
    let detik = date.getSeconds().toString().padStart(2, "0");
    return `${jam}:${menit}:${detik}`;
  }
  // Output akhir
  let futureDescription = `
📅 *Update Kurs:* ${tanggal(sekarang.getTime())}/${bulan(sekarang.getTime())}/${tahun(sekarang.getTime())}
🕰 *Waktu Jakarta (WIB):* ${formatJam(sekarang)}`

//——————————[ Template quoted ]——————————//

const qkuro = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: global.idSaluran, newsletterName: 'ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ', caption: `${namabot} Made By ${ownername}`, inviteExpiration: 0}}}

const qtext = {
  key: { 
    remoteJid: "status@broadcast", 
    participant: "0@s.whatsapp.net"
  },
  message: {
    extendedTextMessage: {
      text: global.namabot
    }
  }
};

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${global.namabot} by ${ownername}`,jpegThumbnail: ""}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${global.namabot} Made By ${ownername}`,jpegThumbnail: ""}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `Payment By ${ownername}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${ownername}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

var ppuser
try {
ppuser = await Lumnztyz6x.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}

async function reply(txt) {
const Kuroko = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.nameSaluran,
newsletterJid: global.idSaluran,
},
externalAdReply: {  
title: `- ${namabot} -`,
body: `Runtime : ${runtime(process.uptime())}`,
thumbnailUrl: global.img,
sourceUrl: '',
},
},
text: txt,
}
return Lumnztyz6x.sendMessage(m.chat, Kuroko, {
quoted: m,
})
}

const reply2 = (teks) => {
Lumnztyz6x.sendMessage(from, { text : teks }, { quoted : m })
}

const example = async (teks) => {
  await Lumnztyz6x.sendMessage(m.chat, {
    react: { text: '✖️', key: m.key }
  });

  const commander = `• *Example:* ${prefix+command} ${teks}`;

  return Lumnztyz6x.sendMessage(m.chat, {
    text: commander,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: idSaluran,
        newsletterName: nameSaluran,
      },
      externalAdReply: {
        title: `Dame dayo !!!!`,
        body: `Runtime : ${runtime(process.uptime())}`,
        thumbnailUrl: global.thumbxm,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const larang = async () => {
  await Lumnztyz6x.sendMessage(m.chat, {
    react: { text: '✖️', key: m.key }
  });

  return Lumnztyz6x.sendMessage(m.chat, {
    text: mess.creator,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.nameSaluran,
      },
      externalAdReply: {
        title: `- Prohibition Message -`,
        body: `Command ${prefix+command} From ${pushname}`,
        thumbnailUrl: global.img,
        sourceUrl: '',
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: qlocJpm });
};

//——————————[ Message Log ]——————————//
if (!Lumnztyz6x.public && !m.key.fromMe && !global.ownernumber.includes(m.sender.split("@")[0])) {
  return;
}

if (m.message) {
    const time = chalk.yellow(moment().tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss'))
    const msgType = chalk.cyan(budy ? budy : m.mtype)
    const owner = `${chalk.green("Owner: ")} ${chalk.white(isCreator ? "YES" : "NOPE")}`
    const sender = `${chalk.green(pushname)} ${chalk.gray(`<${m.sender}>`)}`
    const location = m.isGroup
        ? `${chalk.blue('Group:')} ${chalk.yellow(groupName)} ${chalk.gray(`(${m.chat})`)}`
        : chalk.blue('Private Chat')
    console.log(
`${chalk.white('┌' + '─'.repeat(15) + '[ NEW MESSAGE ]' + '─'.repeat(16) + '┐')}
📅 ↳ ${time}
💬 ↳ ${msgType}
🙋 ↳ ${sender}
📍 ↳ ${location}
📸 ↳ ${owner}
${chalk.white('└' + '─'.repeat(50) + '┘')}`
    )
}

if (global.autojoingc) {
  if (m.text && m.text.includes("chat.whatsapp.com/")) {
    let regex = /(chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24}))/i;
    let [_, __, code] = m.text.match(regex) || [];
    if (code) {
      try {
        await Lumnztyz6x.groupAcceptInvite(code);
      } catch (e) {
        // Bisa log error kalau mau: console.log("Autojoin failed:", e.message)
      }
    }
  }
}

//——————————[ Function ]——————————//   
  async function sendconnMessage(chatId, message, options = {}) {
    let generate = await generateWAMessage(chatId, message, options);
    let type2 = getContentType(generate.message);
    if ("contextInfo" in options)
      generate.message[type2].contextInfo = options?.contextInfo;
    if ("contextInfo" in message)
      generate.message[type2].contextInfo = message?.contextInfo;
    return await Lumnztyz6x.relayMessage(chatId, generate.message, {
      messageId: generate.key.id,
    });
  }
  
  function GetType(Data) {
    return new Promise((resolve, reject) => {
      let Result, Status;
      if (Buffer.isBuffer(Data)) {
        Result = new Buffer.from(Data).toString("base64");
        Status = 0;
      } else {
        Status = 1;
      }
      resolve({
        status: Status,
        result: Result,
      });
    });
  }
  
  function randomId() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  
  function monospace(string) {
    return '```' + string + '```'
}

function monospa(string) {
    return '`' + string + '`'
}

function getRandomFile(ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`;
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prefixOperator = {
  telkomsel: ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'],
  indosat: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
  xl: ['0817', '0818', '0819', '0859', '0877', '0878'],
  axis: ['0838', '0831', '0832', '0833'],
  tri: ['0895', '0896', '0897', '0898', '0899'],
  smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  byu: ['0851']
};

function detectOperator(nomor) {
  const prefix = nomor.slice(0, 4);
  for (let [operator, daftar] of Object.entries(prefixOperator)) {
    if (daftar.includes(prefix)) {
      return operator.charAt(0).toUpperCase() + operator.slice(1);
    }
  }
  return 'Tidak diketahui';
}

function makeProgressBar(current, total, length = 20) {
  const progress = Math.floor((current / total) * length);
  const bar = "▓".repeat(progress) + "░".repeat(length - progress);
  return `[${bar}] ${Math.floor((current / total) * 100)}%`;
}

async function listbut2(m, teks, listnye, qtext) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idSaluran,
newsletterName: nameSaluran,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `${namabot} By ${ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: randomThumbUrl } }, { upload: Lumnztyz6x.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: qtext})
await Lumnztyz6x.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function dellCase(filePath, caseNameToRemove) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Terjadi kesalahan:', err);
                    return;
                }

                const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
                const modifiedData = data.replace(regex, '');

                fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return;
                    }

                    console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
                });
            });
        }

//——————————[ Plugin ]——————————//
    const pluginsLoader = async (directory) => {
  let plugins = [];
  const folders = fs.readdirSync(directory);

  for (const file of folders) {
    const filePath = path.join(directory, file);
    if (filePath.endsWith('.js')) {
      try {
        const plugin = await import(`file://${filePath}?update=${Date.now()}`);
        plugins.push(plugin.default || plugin);
      } catch (error) {
        console.log(`Error loading plugin at ${filePath}:`, error);
      }
    }
  }
  return plugins;
};

    let pluginsDisable = true;
    const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"));
    const Lumnztyz6xXx = { Lumnztyz6x, prefix, command, reply, text, isGroup: m.isGroup, isCreator, example, sender, senderNumber, pushname, args, runtime, sleep, getBuffer, isBotAdmins, isAdmins, isCmd, qtext, randomNomor, monospace, pickRandom, getRandomFile };
    for (let plugin of plugins) {
      if (plugin.command.find((e) => e == command.toLowerCase())) {
        pluginsDisable = false;
        if (typeof plugin !== "function") return;
        await plugin(m, Lumnztyz6xXx);
      }
    }
    if (!pluginsDisable) return;
  
  
switch (command) {
case "menu": {
let teksmenu = `
\`𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 && 𝐓𝐚𝐦𝐩𝐢𝐥𝐚𝐦 𝐁𝐨𝐭\`
╭─────────────────────➤
┃ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *${ownername}*
│ 𝐍𝐮𝐦𝐛𝐞𝐫 : *${global.ownernumber}*
┃ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : *${global.namabot}*
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *${version}*
┃ 𝐌𝐨𝐝𝐞 : *${global.botMode ? 'Public' : 'Self'}*
│ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
┃ 𝐕𝐏𝐒 𝐔𝐩𝐭𝐢𝐦𝐞 : *${runtime(os.uptime())}*
╰─────┈➤
╭─────────────────────➤
│╭─▣「 *𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 」▣─╮
││ ⟿ .cekidch
│╰─➤
│
│╭─▣「 *𝐆𝐫𝐨𝐮𝐩 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .delete
││ ⟿ .leavegc
││ ⟿ .leavegc2
││ ⟿ .promote
││ ⟿ .demote
││ ⟿ .kick
││ ⟿ .hidetag
││ ⟿ .tagall
││ ⟿ .upswgc
│╰─➤
│
│╭─▣「 *𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭 𝐆𝐫𝐨𝐮𝐩* 」▣─╮
││ ⟿ .autojpm
││ ⟿ .bcgc
││ ⟿ .bljpm
││ ⟿ .cekidgc
││ ⟿ .jpm
││ ⟿ .jpmht
││ ⟿ .jpmslide
││ ⟿ .listgc
│╰─➤
│
│╭─▣「 *𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭 𝐊𝐨𝐧𝐭𝐚𝐤* 」▣─╮
││ ⟿ .pushkontak
││ ⟿ .pushkontak2
││ ⟿ .pushkontak3
││ ⟿ .pushkontakid
││ ⟿ .pushkontakid2
││ ⟿ .savekontak
││ ⟿ .tutor
│╰─➤
│
│╭─▣「 *𝐅𝐮𝐧 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .bluearchive
││ ⟿ .cosplayba
││ ⟿ .cekkhodam
││ ⟿ .cekkontol
││ ⟿ .getpp
││ ⟿ .pinterest
││ ⟿ .iqc
││ ⟿ .remini
││ ⟿ .waifu
│╰─➤
│
│╭─▣「 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .play
││ ⟿ .capcut
││ ⟿ .igdl
││ ⟿ .mediafire
││ ⟿ .spotify
││ ⟿ .ttdl
││ ⟿ .twitter
│╰─➤
│
│╭─▣「 *𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .addcase
││ ⟿ .addplugin
││ ⟿ .ambilq
││ ⟿ .anticall
││ ⟿ .autoread
││ ⟿ .autoreadsw
││ ⟿ .autojoingc
││ ⟿ .delcase
││ ⟿ .delplugin
││ ⟿ .getcase
││ ⟿ .joingc
││ ⟿ .runtime
││ ⟿ .setbiobot
││ ⟿ .setnamabot
││ ⟿ .setppbot
││ ⟿ .setting
│╰─➤
│
│╭─▣「 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .toaudio
││ ⟿ .toimg
││ ⟿ .tovid
││ ⟿ .tourl
│╰─➤
│
│╭─▣「 *𝐒𝐭𝐢𝐤𝐞𝐫 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .brat
││ ⟿ .bratvid
││ ⟿ .sticker
││ ⟿ .smeme
││ ⟿ .emojimix
││ ⟿ .qc
│╰─➤
│
│╭─▣「 *𝐏𝐚𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞* 」▣─╮
││ ⟿ .dana
││ ⟿ .gopay
││ ⟿ .ovo
││ ⟿ .qris
│╰─➤
│
│╭==⊱ *𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐒𝐨𝐮𝐫𝐜𝐞 𝐂𝐨𝐝𝐞* ▣─╮
││↻ Saluran: https://whatsapp.com/channel/0029Vb7XYjLKgsNyWrRHL10k
││↻ Website: ${global.web}
│╰───➤
╰─────┈➤

    ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
    『 *t.me/sixcorecomunity* 』
  `
await Lumnztyz6x.sendMessage(m.chat, {
  text: teksmenu,
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: idSaluran,
      newsletterName: nameSaluran
    },
    externalAdReply: {
      title: `© ${namabot} - v${version}`,
      body: `Made by ${ownername}.`,
      thumbnailUrl: randomThumbUrl,
      renderLargerThumbnail: true,
      sourceUrl: '',
      mediaType: 1
    }
  }
}, { quoted: qkuro });
}
break
case "upswgc":
case "swgc":
case "swgrup": {
  if (!m.isGroup) return reply(mess.group);
  if (!isAdmins) return reply(mess.admin);
  if (!isBotAdmins) return reply(mess.botAdmin);

  const qmsg = m.quoted ? m.quoted : m;
  const mime = (qmsg.msg || qmsg).mimetype || "";
  const caption = text.replace(new RegExp(`^${prefix + command}\\s*`, "i"), "").trim();

  try {
    if (!mime && !caption) {
      return example(`Halo semua (opsional reply media)`);
    }
    async function groupStatus(sock, jid, content) {
      const { backgroundColor } = content;
      delete content.backgroundColor;

      const inside = await generateWAMessageContent(content, {
        upload: sock.waUploadToServer,
        backgroundColor
      });

      const messageSecret = crypto.randomBytes(32);

      const msg = generateWAMessageFromContent(
        jid,
        {
          messageContextInfo: { messageSecret },
          groupStatusMessageV2: {
            message: {
              ...inside,
              messageContextInfo: { messageSecret }
            }
          }
        },
        {}
      );

      await sock.relayMessage(jid, msg.message, {
        messageId: msg.key.id
      });

      return msg;
    }

    let payload = {};

    if (/image/.test(mime)) {
      const buffer = await qmsg.download();
      payload = {
        image: buffer,
        caption
      };
    } 
    else if (/video/.test(mime)) {
      const buffer = await qmsg.download();
      payload = {
        video: buffer,
        caption
      };
    } 
    else if (/audio/.test(mime)) {
      const buffer = await qmsg.download();
      payload = {
        audio: buffer,
        mimetype: "audio/mp4"
      };
    } 
    else if (caption) {
      payload = {
        text: caption
      };
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    await groupStatus(Lumnztyz6x, m.chat, payload);

    m.reply("✅ Status grup berhasil diposting.");

  } catch (err) {
    console.error("upswgc error:", err);
    m.reply("❌ Gagal upload status grup.", err);
  }
}
break
case "emojimix": {
  if (!text) return example("😭+😂");

  let [emoji1, emoji2] = text.split("+");
  if (!emoji1 || !emoji2) return example("😭+😂");

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  try {
    const apiUrl = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`;

    const { data } = await axios.get(apiUrl);

    if (!data?.results?.length) {
      return m.reply("❌ Emoji mix tidak ditemukan.");
    }

    const imgUrl = data.results[0].media_formats.png_transparent.url;

    // download gambar
    const res = await axios.get(imgUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(res.data);

    const tempFile = `./database/emojimix-${Date.now()}.png`;
    await fs.promises.writeFile(tempFile, buffer);

    // kirim sebagai stiker
    await Lumnztyz6x.sendImageAsSticker(
      m.chat,
      tempFile,
      m,
      { packname: global.packname, author: global.author }
    );

    // hapus file temp
    try { fs.unlinkSync(tempFile); } catch {}

  } catch (err) {
    console.error("emojimix cmd error:", err);
    m.reply("❌ Gagal membuat emoji mix.");
  }
}
break
case "iqc": {
  if (!text) return example("teks nya");

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  try {
    let jam = new Date().toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit"
    });

    let batre = Math.floor(Math.random() * 90) + 5;

    const apiUrl = `https://api-faa.my.id/faa/iqcv2?prompt=${encodeURIComponent(text)}&jam=${encodeURIComponent(jam)}&batre=${batre}`;

    const res = await axios.get(apiUrl, {
      responseType: "arraybuffer"
    });

    const buffer = Buffer.from(res.data);

    await Lumnztyz6x.sendMessage(m.chat, {
      image: buffer,
      caption: `🖼️ *Image Quote Creator*\n\n"${text}"`
    }, { quoted: m });

  } catch (err) {
    console.error("iqc cmd error:", err);
    m.reply("❌ Gagal membuat image quote.");
  }
}
break
case "jpmch": {
  if (!isCreator) return larang()
  if (!text && !m.quoted) return example(`Halo semua!\nKirim media + caption (opsional)`)

  const qmsg = m.quoted ? m.quoted : m
  const mime = (qmsg.msg || qmsg).mimetype || ""
  let mediaPath, broadcastMsg

  if (/image|video|audio|document/.test(mime)) {
    mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg)
  }

  const allCh = await Lumnztyz6x.newsletterFetchAllParticipating()
  const chIDs = Object.keys(allCh)

  let validChannels = []
  for (const id of chIDs) {
    const ch = allCh[id]
    if (
      ch &&
      ch.state === "ACTIVE" &&
      ch.viewer_metadata &&
      ch.viewer_metadata.role === "ADMIN" &&
      !penting.blacklistJpm.includes(id)
    ) {
      validChannels.push(id)
    }
  }

  if (validChannels.length === 0) {
    return reply(`❌ Tidak ada channel aktif yang memenuhi kriteria (role: admin, mute: off, tidak di blacklist).`)
  }

  // Buat pesan sesuai tipe
  if (mediaPath) {
    if (/image/.test(mime)) broadcastMsg = { image: fs.readFileSync(mediaPath), caption: text || "" }
    if (/video/.test(mime)) broadcastMsg = { video: fs.readFileSync(mediaPath), caption: text || "" }
    if (/audio/.test(mime)) broadcastMsg = { audio: fs.readFileSync(mediaPath), mimetype: "audio/mpeg", ptt: true }
    if (/document/.test(mime)) {
      broadcastMsg = {
        document: fs.readFileSync(mediaPath),
        mimetype: qmsg.mimetype,
        fileName: `file_${Date.now()}`
      }
    }
  } else {
    broadcastMsg = { text }
  }

  const qmeta = {
    key: {
      participant: `13135550002@s.whatsapp.net`,
      ...(botNumber ? { remoteJid: `status@broadcast` } : {})
    },
    message: {
      contactMessage: {
        displayName: `Sxcmd Botz JPM Channel: ${mediaPath ? mime : "Text"}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+62 823-2334-4736\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        sendEphemeral: true
      }
    }
  }

  const processMsg = await Lumnztyz6x.sendMessage(
    m.chat,
    {
      text: `⏳ *Memproses JPM Channel...*\nJumlah Channel: ${validChannels.length}\nTipe: ${mediaPath ? mime : "Text"}`
    },
    { quoted: m }
  )

  let sentCount = 0
  for (const id of validChannels) {
    try {
      await Lumnztyz6x.sendMessage(id, broadcastMsg, { quoted: qmeta })
      sentCount++
    } catch (e) {
      console.log(`[Gagal kirim ke CH] ${id}`, e)
    }
    await sleep(global.delayJpm || 4000)
  }

  if (mediaPath) fs.unlinkSync(mediaPath)

  await Lumnztyz6x.sendMessage(
    m.chat,
    {
      text: `✅ *JPM Channel Selesai!*\nBerhasil terkirim ke *${sentCount}* channel dari total ${validChannels.length}.`,
      edit: processMsg.key
    }
  )
}
break
case "getpp": {
    if (!m.quoted && !m.mentionedJid?.length) {
        return example(`Tag atau reply user target.\n\nContoh: *${prefix + command} @user*`)
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } })

    try {
        let target
        if (m.quoted) {
            target = m.quoted.sender
        } else if (m.mentionedJid?.length) {
            target = m.mentionedJid[0]
        } else {
            target = m.sender
        }
        let no = target.split("@")[0]
        let pp
        try {
            pp = await Lumnztyz6x.profilePictureUrl(target, "image")
        } catch {
            return m.reply("❌ User tidak punya foto profil atau disembunyikan.")
        }

        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                image: { url: pp },
                caption: `✅ Foto profil @${no}`,
                mentions: [target]
            },
            { quoted: m }
        )

    } catch (err) {
        console.error(err)
        m.reply("❌ Gagal mengambil foto profil.")
    }
}
break

case "waifu": {
    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } })

    try {
        let res = await axios.get("https://api.ryuu-dev.offc.my.id/random/waifupic", {
            responseType: "arraybuffer"
        })
        let buffer = Buffer.from(res.data)

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: buffer, caption: "✅ *Random Waifu Pic* 💮" },
            { quoted: m }
        )
    } catch (err) {
        console.error(err)
        m.reply(`❌ Error: ${err.message}`)
    }
}
break

case "cosba":
case "cosplayba": {
    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } })

    try {
        let res = await axios.get("https://api.ryuu-dev.offc.my.id/random/cosplay-ba", {
            responseType: "arraybuffer"
        })
        let buffer = Buffer.from(res.data)

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: buffer, caption: "✅ *Random Blue Archive Cosplay*" },
            { quoted: m }
        )
    } catch (err) {
        console.error(err)
        m.reply(`❌ Error: ${err.message}`)
    }
}
break

case "bluearchive":
case "ba": {
    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } })

    try {
        let res = await axios.get("https://api.ryuu-dev.offc.my.id/random/ba", {
            responseType: "arraybuffer"
        })
        let buffer = Buffer.from(res.data)

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: buffer, caption: "✅ *Random Blue Archive Waifu*" },
            { quoted: m }
        )
    } catch (err) {
        console.error(err)
        m.reply(`❌ Error: ${err.message}`)
    }
}
break

case "pinterest":
case "pin": {
    if (!text) return example(`Masukkan query!\n\n*Contoh:* ${prefix + command} Sunaookami Shiroko`)

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } })

    try {
        let { data } = await axios.get(`https://api.ryuu-dev.offc.my.id/search/pinterest?query=${encodeURIComponent(text)}`)
        if (!data.status || !data.result?.length) return m.reply("❌ Tidak ada hasil ditemukan.")

        // ambil random dari result
        let res = data.result[Math.floor(Math.random() * data.result.length)]

        let caption = `✅ *Pinterest Result*\n\n` +
                      `👤 Uploader: *${res.fullname || res.upload_by}*\n` +
                      `👥 Followers: *${res.followers}*\n` +
                      `💬 Caption: ${res.caption || "-"}\n` +
                      `🔗 Source: ${res.source}`

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: { url: res.image }, caption },
            { quoted: m }
        )
    } catch (err) {
        console.error(err)
        m.reply(`❌ Error: ${err.message}`)
    }
}
break

case "play": {
    if (!text) return example(`cinta`);
    if (!text.includes("|")) {
        return await Lumnztyz6x.sendButton(m.chat, {
            text: `🎧 Pilih sumber musik untuk:\n*${text}*`,
            footer: global.foother,
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "▶ YouTube",
                        id: `.play yt|${text}`
                    })
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🎵 Spotify",
                        id: `.play spotify|${text}`
                    })
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "☁ SoundCloud",
                        id: `.play soundcloud|${text}`
                    })
                }
            ]
        }, { quoted: m });
    }
    const [source, ...queryArr] = text.split("|");
    const query = queryArr.join("|").trim().toLowerCase();

    if (!query) return m.reply("❌ Query lagu tidak boleh kosong.");

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        let info, audioUrl, thumbnail, title, artist, sourceUrl;
        if (source === "spotify") {
            const apiUrl = `https://api-faa.my.id/faa/spotify-play?q=${encodeURIComponent(query)}`;
            const { data } = await axios.get(apiUrl);

            if (!data.status) return m.reply("❌ Lagu tidak ditemukan di Spotify.");

            info = data.info;
            audioUrl = data.download.url;
            thumbnail = info.thumbnail;
            title = info.title;
            artist = info.artist;
            sourceUrl = info.spotify_url;
        }
        else if (source === "yt" || source === "youtube") {
            const apiUrl = `https://api-faa.my.id/faa/ytplay?query=${encodeURIComponent(query)}`;
            const { data } = await axios.get(apiUrl);

            if (!data.status) return m.reply("❌ Lagu tidak ditemukan di YouTube.");

            const res = data.result;
            audioUrl = res.mp3;
            thumbnail = res.thumbnail;
            title = res.title;
            artist = res.author;
            sourceUrl = res.url;
        }
        else if (source === "soundcloud" || source === "sc") {
            const apiUrl = `https://api-faa.my.id/faa/soundcloud-play?query=${encodeURIComponent(query)}`;
            const { data } = await axios.get(apiUrl);

            if (!data.status) return m.reply("❌ Lagu tidak ditemukan di SoundCloud.");

            const res = data.result;
            audioUrl = res.download_url;
            thumbnail = res.thumbnail;
            title = res.title;
            artist = res.user;
            sourceUrl = res.source_url;
        }

        else {
            return m.reply("❌ Sumber tidak dikenal. Gunakan: yt | spotify | soundcloud");
        }
        await Lumnztyz6x.sendMessage(m.chat, {
            text:
`🎵 *PLAY MUSIC*

📌 Judul : ${title}
🎤 Artis : ${artist}

🔗 Sumber:
${sourceUrl}`,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: artist,
                    thumbnailUrl: thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: sourceUrl
                }
            }
        }, { quoted: m });
        await Lumnztyz6x.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            ptt: false
        }, { quoted: m });

    } catch (err) {
        console.error("play cmd error:", err);
        m.reply("❌ Terjadi kesalahan saat memutar lagu.");
    }
}
break

case "capcut": {
    if (!text) return example(`https://www.capcut.com/tv2/`);
    if (!/^https?:\/\/(www\.)?capcut\.com\//i.test(text)) {
        return m.reply("❌ URL CapCut tidak valid.");
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        const apiUrl = `https://api.siputzx.my.id/api/d/capcutv2?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data || !data.data.medias.length) {
            return m.reply("❌ Gagal mengambil media dari CapCut.");
        }

        const { title, thumbnail, medias } = data.data;

        // Pilih kualitas HD No Watermark kalau ada
        let media = medias.find(m => /HD No Watermark/i.test(m.quality)) || medias[0];

        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                video: { url: media.url },
                caption: `✅ *CapCut Template*\n\n🎬 Judul: ${title}\n💾 Kualitas: ${media.quality}\n📦 Size: ${media.formattedSize}`
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "twitter":
case "twitdl": {
    if (!text) return example(`https://twitter.com/9GAG/status/`);
    if (!/^https?:\/\/(www\.)?(twitter|x)\.com\//i.test(text)) {
        return m.reply("❌ URL Twitter/X tidak valid.");
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        const apiUrl = `https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data || !data.data.downloadLink) {
            return m.reply("❌ Gagal mengambil media dari Twitter.");
        }

        const { downloadLink, imgUrl, videoTitle, videoDescription } = data.data;

        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                video: { url: downloadLink },
                caption: `✅ *Twitter Video Downloaded*\n\n🎬 Title: ${videoTitle || "-"}\n📝 Desc: ${videoDescription || "-"}`
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "igdl": {
    if (!text) return example(`https://www.instagram.com/reel/DaiG6BeTrCc/?igsi=MXZ4NzNrdjlhazluYw==`);

    if (!/^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\//i.test(text)) {
        return m.reply("❌ URL Instagram tidak valid.");
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        const apiUrl = `https://api-faa.my.id/faa/igdl?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.result || !data.result.url || !data.result.url.length) {
            return m.reply("❌ Gagal mengambil media dari Instagram.");
        }

        const { url: medias, metadata } = data.result;

        for (let mediaUrl of medias) {
            if (metadata.isVideo || mediaUrl.includes(".mp4")) {
                // kirim video
                await Lumnztyz6x.sendMessage(
                    m.chat,
                    {
                        video: { url: mediaUrl },
                        caption: `✅ Instagram Video berhasil didownload.\n\n👤 ${metadata.username}\n❤️ ${metadata.like}\n💬 ${metadata.comment}`
                    },
                    { quoted: m }
                );
            } else {
                // kirim foto
                await Lumnztyz6x.sendMessage(
                    m.chat,
                    {
                        image: { url: mediaUrl },
                        caption: `✅ Instagram Photo berhasil didownload.\n\n👤 ${metadata.username}\n❤️ ${metadata.like}\n💬 ${metadata.comment}`
                    },
                    { quoted: m }
                );
            }

            await sleep(1500);
        }

    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "spotify": {
    if (!text) return example(`https://open.spotify.com/track/`);
    if (!/^https?:\/\/(open|play)\.spotify\.com\/.+/i.test(text)) {
        return m.reply("❌ URL Spotify tidak valid.");
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        const apiUrl = `https://api.siputzx.my.id/api/d/spotifyv2?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) return m.reply("❌ Gagal mengambil detail lagu dari Spotify.");

        const track = data.data;

        let cap = `🎶 *Spotify Downloader*\n\n`;
        cap += `🎵 Judul: *${track.songTitle}*\n`;
        cap += `👤 Artis: *${track.artist}*\n`;
        cap += `🔗 [Link Asli](${track.url})\n\n`;
        cap += `✅ Lagu berhasil didownload!`;

        // Kirim audio + cover
        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                audio: { url: track.mp3DownloadLink },
                mimetype: "audio/mpeg",
                fileName: `${track.songTitle}.mp3`,
                ptt: false, // biar bukan VN
                contextInfo: {
                    externalAdReply: {
                        title: track.songTitle,
                        body: track.artist,
                        mediaType: 2,
                        thumbnailUrl: track.coverImage,
                        sourceUrl: track.url
                    }
                }
            },
            { quoted: m }
        );

        // Info + cover image
        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                image: { url: track.coverImage },
                caption: cap
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "mediafire": {
  if (!text) return example(`https://www.mediafire.com/file/658c0wn28wlox87/SpamOtpSxCE.py/file`);
  if (!/^https?:\/\/(www\.)?mediafire\.com\/.+/i.test(text)) {
    return m.reply("❌ URL MediaFire tidak valid.");
  }

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "📥", key: m.key } });

  try {
    const apiUrl = `https://api-faa.my.id/faa/mediafire?url=${encodeURIComponent(text)}`;
    const { data } = await axios.get(apiUrl);

    if (!data.status || !data.result) {
      return m.reply("❌ Gagal mengambil file dari MediaFire.");
    }

    const file = data.result;

    let cap = `📥 *MediaFire Downloader*\n\n`;
    cap += `📌 Nama File: *${file.filename}*\n`;
    cap += `📦 Ukuran: *${file.size}*\n`;
    cap += `📂 Tipe: ${file.mime}\n\n`;
    cap += `⏬ File sedang dikirim...`;

    await Lumnztyz6x.sendMessage(m.chat, {
      document: { url: file.download_url },
      fileName: file.filename,
      mimetype: "application/zip",
      caption: cap
    }, { quoted: m });

  } catch (err) {
    console.error("mediafire cmd error:", err);
    m.reply("❌ Terjadi kesalahan saat download file MediaFire.");
  }
}
break

case "tt-dl":
case "tt":
case "tiktok": {
    if (!text) return example(`https://vt.tiktok.com/`);
    if (!/^https?:\/\/(www\.)?(tiktok\.com|vt\.tiktok\.com|vm\.tiktok\.com|m\.tiktok\.com)\/.+/i.test(text)) {
        return m.reply("❌ URL TikTok tidak valid.");
    }

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        const { data } = await axios.get("https://tiktok-scraper7.p.rapidapi.com", {
            headers: {
                "Accept-Encoding": "gzip",
                "Connection": "Keep-Alive",
                "Host": "tiktok-scraper7.p.rapidapi.com",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                "X-RapidAPI-Host": "tiktok-scraper7.p.rapidapi.com",
                "X-RapidAPI-Key": "ca5c6d6fa3mshfcd2b0a0feac6b7p140e57jsn72684628152a" // ganti pake keymu
            },
            params: { url: text, hd: "1" }
        });

        const res = data.data;
        if (!res || !res.hdplay) return m.reply("❌ Gagal mengambil data video TikTok.");

        let cap = `✅ *Tiktok Downloader*\n\n`;
        cap += `🎥 Judul: ${res.title || "-"}\n`;
        cap += `👤 Author: ${res.author?.nickname || "-"} (@${res.author?.unique_id || "-"})\n`;
        cap += `🌎 Region: ${res.region}\n`;
        cap += `▶️ Play Count: ${res.play_count}\n❤️ Likes: ${res.digg_count}\n💬 Comments: ${res.comment_count}\n🔄 Share: ${res.share_count}`;

        await Lumnztyz6x.sendMessage(
            m.chat,
            {
                video: { url: res.hdplay },
                caption: cap
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "toimg": {
    let quoted = m.quoted ? m.quoted : m;
    let mime = (quoted.msg || quoted).mimetype || "";
    if (!/webp/.test(mime)) return example(" Sambil Kirim atau reply sticker untuk diubah jadi gambar.");

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        let mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(quoted);
        let url = await uploader.uguu(mediaPath);

        if (!url) {
            if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
            return m.reply("❌ Gagal upload sticker.");
        }

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: { url }, caption: `✅ *Sticker berhasil diubah jadi gambar*\n📎 URL: ${url}` },
            { quoted: m }
        );

        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "autojpm": {
  if (!isCreator) return larang()

  let [cmd, ...args] = text.split(" ")
  cmd = cmd ? cmd.toLowerCase() : null

  if (!cmd) {
    let list = penting.autoJpm.messages.map((m, i) => `${i + 1}. ${m.caption || m.text || "(media tanpa teks)"}`).join("\n") || "- kosong -"
    return reply(
`*AUTO JPM SYSTEM*

Status: ${penting.autoJpm.status ? "ON" : "OFF"}
Interval: ${penting.autoJpm.interval} ${penting.autoJpm.type}
Pesan tersimpan:
${list}

Command:
.autojpm on
.autojpm off
.autojpm add <teks/caption> (reply gambar/video jika ada media)
.autojpm del <nomor/all>
.autojpm set <angka> menit/jam/hari`
    )
  }

  if (cmd === "on") {
    if (penting.autoJpm.status) return m.reply("✖️ Auto JPM sudah aktif.")
    if (!penting.autoJpm.interval || !penting.autoJpm.messages.length) {
      return m.reply("✖️ Set interval dan tambah pesan dulu!")
    }
    penting.autoJpm.status = true
    savePenting()
    reply("✅ Auto JPM berhasil diaktifkan.")
  }

  else if (cmd === "off") {
    penting.autoJpm.status = false
    savePenting()
    reply("✅ Auto JPM dimatikan.")
  }

  else if (cmd === "add") {
  let qmsg = m.quoted ? m.quoted : m
  let mime = (qmsg.msg || qmsg).mimetype || ''
  let caption = args.join(" ")
  let tmpDir = path.join(process.cwd(), "tmp", "autojpm")
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true })

  if (/image|video/.test(mime)) {
    let ext = mime.split("/")[1] || "bin"
    let fileName = `autojpm_${Date.now()}_${Math.floor(Math.random() * 10000)}.${ext}`
    let filePath = path.join(tmpDir, fileName)

    let buffer = await qmsg.download()
    fs.writeFileSync(filePath, buffer)

    penting.autoJpm.messages.push({
      type: /image/.test(mime) ? "image" : "video",
      path: filePath,
      caption
    })
  } else {
    penting.autoJpm.messages.push({
      type: "text",
      text: caption
    })
  }
  penting.autoJpm._lastRun = 0

  savePenting()
  reply("✅ Pesan berhasil ditambahkan ke Auto JPM.")
}

  else if (cmd === "del") {
    let idx = args[0]
    if (!idx) return reply("✖️ Masukkan nomor pesan atau 'all'.")
    if (idx === "all") {
      penting.autoJpm.messages = []
    } else {
      idx = parseInt(idx) - 1
      if (isNaN(idx) || idx < 0 || idx >= penting.autoJpm.messages.length) {
        return m.reply("✖️ Nomor tidak valid.")
      }
      penting.autoJpm.messages.splice(idx, 1)
    }
    savePenting()
    reply("✅ Pesan berhasil dihapus.")
  }

  else if (cmd === "set") {
    let num = parseInt(args[0])
    let unit = (args[1] || "").toLowerCase()
    if (isNaN(num) || num <= 0) return m.reply("✖️ Masukkan angka yang valid.")
    if (!["menit","jam","hari","minute","hour","day"].includes(unit)) {
      return reply("✖️ Gunakan satuan menit/jam/hari.")
    }

    penting.autoJpm.interval = num
    penting.autoJpm.type = unit.startsWith("m") ? "minute" : unit.startsWith("j") ? "hour" : "day"
    savePenting()
    reply(`✅ Interval diatur ke ${num} ${penting.autoJpm.type}.`)
  }
}
break
 
case "remini": case "hd": {
    let quoted = m.quoted ? m.quoted : m;
    let mime = (quoted.msg || quoted).mimetype || "";
    if (!/image/.test(mime)) return example(" Sambil kirim atau reply gambar untuk di-HD-in.");

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        let mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(quoted);
        let url = await uploader.uguu(mediaPath);

        // API upscale 4K
        let apiUrl = `https://api-faa.my.id/faa/hdv2?url=${encodeURIComponent(url)}`;
        let { data } = await axios.get(apiUrl);

        if (!data.status || !data.result) {
            if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
            return m.reply(`❌ Gagal memproses gambar: ${data.message || 'Unknown error'}`);
        }

        await Lumnztyz6x.sendMessage(
            m.chat,
            { image: { url: data.result }, caption: `✅ *Successful Upscale 4k Quality*\n📎 URL: ${data.result}` },
            { quoted: m }
        );

        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error(err);
        m.reply(`❌ Error: ${err.message}`);
    }
}
break

case "tourl": {
    if (!m.quoted) return example(`Reply media yang mau diupload.\nContoh: *${prefix+command}*`);
    let mime = (m.quoted.msg || m.quoted).mimetype || "";
    if (!mime) return m.reply("Media tidak ditemukan.");

    await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

    try {
        let mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(m.quoted);
        let url = await uploader.catbox(mediaPath);
        await m.reply(`✅ *Berhasil Upload*\n\n📎 *URL:* ${url}`);
        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error(err);
        m.reply(`❌ Gagal upload: ${err.message}`);
    }
}
break

case "bratvid": {
  if (!text) return example("teksnya");
  try {
    await Lumnztyz6x.sendMessage(m.chat, {
      react: { text: "👁️‍🗨️", key: m.key }
    });

    const url = `https://api-faa.my.id/faa/bratvid?text=${encodeURIComponent(text)}`;
    const response = await axios.get(url, { responseType: "arraybuffer" });

    await Lumnztyz6x.sendVideoAsSticker(
      m.chat,
      response.data,
      m,
      {
        packname: global.packname,
        author: global.author
      }
    );

  } catch (err) {
    console.error("Error:", err);
    await Lumnztyz6x.sendMessage(m.chat, {
      text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat video. Coba lagi nanti."
    }, { quoted: m });
  }
}
break

case "brat": {
  if (!text) return example("teksnya");
  try {
    await Lumnztyz6x.sendMessage(m.chat, {
      react: { text: "👁️‍🗨️", key: m.key }
    });

    const url = `https://api-faa.my.id/faa/brat?text=${encodeURIComponent(text)}`;
    const response = await axios.get(url, { responseType: "arraybuffer" });

    await Lumnztyz6x.sendImageAsSticker(
      m.chat,
      response.data,
      m,
      {
        packname: global.packname,
        author: global.author
      }
    );

  } catch (err) {
    console.error("Error:", err);
    await Lumnztyz6x.sendMessage(m.chat, {
      text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti."
    }, { quoted: m });
  }
}
break

case "sticker":
case "stiker":
case "sgif":
case "s": {
  if (!/image|video|webp/.test(mime)) return example("Kirim atau reply gambar/video (maks 15 detik)");

  // batasin durasi video biar gak berat
  if (/video/.test(mime) && (qmsg?.seconds > 15)) {
    return m.reply("✖️ Durasi video maksimal 15 detik.");
  }

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  let media;
  try {
    // download ke file sementara
    media = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg);

    // kirim sesuai tipe
    if (/image|webp/.test(mime)) {
      await Lumnztyz6x.sendImageAsSticker(
        m.chat,
        media,
        m,
        { packname: global.packname, author: global.author }
      );
    } else if (/video/.test(mime)) {
      await Lumnztyz6x.sendVideoAsSticker(
        m.chat,
        media,
        m,
        { packname: global.packname, author: global.author }
      );
    } else {
      return m.reply("✖️ Format tidak didukung. Kirim gambar atau video pendek.");
    }

  } catch (e) {
    console.error("sticker cmd error:", e);
    m.reply("✖️ Terjadi kesalahan saat mengeksekusi perintah.");
  } finally {
    try { if (media && fs.existsSync(media)) fs.unlinkSync(media); } catch {}
  }
}
break

case "smeme": {
  if (!/image|webp/.test(mime)) {
    return example("Kirim atau reply gambar/webp dengan teks atas|bawah");
  }

  let [atas, bawah] = text.split("|");
  if (!atas) return example("teksatas|teksbawah (teks bawah opsional)");

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  let media, uploadedUrl, tempFile;
  try {
    // 1. Download media
    media = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg);
    tempFile = media;

    // 2. Upload ke Catbox (versi aman)
    uploadedUrl = await uploader.uguu(tempFile);

    // 3. Panggil API smeme
    const apiUrl = `https://api.ryuu-dev.offc.my.id/tools/smeme?img=${encodeURIComponent(uploadedUrl)}&atas=${encodeURIComponent(atas)}&bawah=${encodeURIComponent(bawah || "")}`;
    const { data } = await axios.get(apiUrl, { responseType: "arraybuffer" });

    // 4. Kirim hasil sebagai stiker
    await Lumnztyz6x.sendImageAsSticker(
      m.chat,
      data,
      m,
      { packname: global.packname, author: global.author }
    );

  } catch (err) {
    console.error("❌ smeme cmd error:", err);
    m.reply(`✖️ Terjadi kesalahan saat membuat meme:\n${err.message || err}`);
  } finally {
    // 5. Bersihin file temp
    try {
      if (tempFile && fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    } catch (cleanupErr) {
      console.error("Gagal hapus file temp:", cleanupErr);
    }
  }
}
break

case "qc": {
  if (!text) return example('teksnya');

  // Ambil foto profil atau fallback
  let ppuser;
  try {
    ppuser = await Lumnztyz6x.profilePictureUrl(m.sender, "image");
  } catch {
    ppuser = "https://i.ibb.co/6BRf4Rc/no-profile.png";
  }

  // Warna random
  let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"];
  let reswarna = warna[Math.floor(Math.random() * warna.length)];

  // ID unik untuk nama file
  let makeid = Date.now();

  const json = {
    type: "quote",
    format: "png",
    backgroundColor: reswarna,
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: m.pushName || "User",
          photo: { url: ppuser }
        },
        text: text,
        replyMessage: {}
      }
    ]
  };

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  let tempnya;
  try {
    const { data } = await axios.post('https://bot.lyo.su/quote/generate', json, {
      headers: { 'Content-Type': 'application/json' }
    });

    const buffer = Buffer.from(data.result.image, 'base64');
    tempnya = `./database/${makeid}.png`;

    await fs.promises.writeFile(tempnya, buffer);

    // Kirim sebagai stiker image
    await Lumnztyz6x.sendImageAsSticker(
      m.chat,
      tempnya,
      m,
      { packname: global.packname, author: global.author }
    );

  } catch (err) {
    console.error("qc cmd error:", err);
    m.reply("✖️ Terjadi kesalahan saat membuat quote.");
  } finally {
    // Bersihkan file temp
    try { if (tempnya && fs.existsSync(tempnya)) fs.unlinkSync(tempnya); } catch {}
  }
}
break

case "setppbot": case "setpp": {
if (!isCreator) return larang();
if (/image/g.test(mime)) {
let media = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg)
await Lumnztyz6x.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return example("dengan mengirim foto")
}
break

case "setnamabot": {
if (!isCreator) return larang();
if (!text) return example("teksnya")
Lumnztyz6x.updateProfileName(text)
m.reply("*Berhasil Mengganti Nama Bot ✅*")
}
break

case "setbio": case "setbiobot": {
if (!isCreator) return larang();
if (!text) return example("teksnya")
Lumnztyz6x.updateProfileStatus(text)
m.reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
        
case "self": {
if (!isCreator) return m.reply(mess.creator)

global.botMode = false

let file = path.join(process.cwd(), "settings.js")
let text = fs.readFileSync(file, "utf8")

text = text.replace(/global\.botMode\s*=\s*(true|false)/, "global.botMode = false")

fs.writeFileSync(file, text)

m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
        
case "public": {
if (!isCreator) return larang()

global.botMode = true

let file = path.join(process.cwd(), "settings.js")
let text = fs.readFileSync(file, "utf8")

text = text.replace(/global\.botMode\s*=\s*(true|false)/, "global.botMode = true")

fs.writeFileSync(file, text)

m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break

case "getcase": {
   if (!isCreator) return larang();
   if (!text) return m.reply(example("menu"))

   const getcase = (cases) => {
      let data = fs.readFileSync('./case.js', 'utf-8')
      let regex = new RegExp(`case ['"]${cases}['"]([\\s\\S]*?)break`, "i")
      let hasil = data.match(regex)
      return hasil ? hasil[0] : null
   }

   let result = getcase(text)
   if (result) {
      m.reply(result)
   } else {
      m.reply(`❌ Case *${text}* Tidak Ditemukan`)
   }
}
break

case 'bcgc':
case 'bcgroup': {
if (!isCreator) return larang();
if (!text) return example(`teksnya`)
  let getGroups = await Lumnztyz6x.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(global.delayJpm)
  let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
Lumnztyz6x.sendMessage(i, {
  text: a,
   contextInfo: {
            externalAdReply: {
            title: `Broadcast By ${namabot}`,
            body: `Telah Terkirim ${i.length} Group`,
            thumbnailUrl: global.thumbbc,
            sourceUrl: global.linksaluran,
            mediaType: 1,
            renderLargerThumbnail: true
                            }
                        }
                    })
                }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "tutor":
case "tutorial": {
let ttutor = `
📦 *PUSH KONTAK GRUP TERBUKA*
Digunakan untuk push kontak dari dalam grup itu sendiri (terbuka), tanpa ID grup.

🔸 *.pushkontak teksmu*
🔸 *.pushkontak2 teksmu*
🔸 *.pushkontak3 jeda|teksmu*

📌 *Catatan:*
- Kirim perintah langsung di dalam grup target.
- *jeda* adalah delay per kontak. Contoh: \`1000 = 1 detik\`.
- Auto-save hanya berlaku untuk *.pushkontak2* dan *.pushkontak3*.
- *pushkontak* biasa hanya mengirim tanpa simpan kontak.

📡 *PUSH KONTAK GRUP TERTUTUP*
Digunakan untuk push kontak dari luar grup, menggunakan ID grup manual.

🔸 *.pushkontakid idgc|teksmu*
🔸 *.pushkontakid2 idgc|teksmu*
🔸 *.pushkontakid3 idgc|jeda|teksmu*

📌 *Contoh:*
\`\`\`
.pushkontakid2 1203xxx@g.us|Save saya
.pushkontakid3 1203xxx@g.us|1500|Save saya
\`\`\`

📌 *Catatan:*
- Ketik *.listgc* atau *.cekidgc* untuk melihat ID grup.
- pushkontakid tidak auto-save, pushkontakid2 dan pushkontak3 auto-save.
- *pushkontakid3* paling advance karena ada delay dan nama kontak!

💾 *SAVE KONTAK (AUTO / MANUAL)*
Digunakan untuk menyimpan kontak member grup sebelum push.

🔸 *.savekontak idgc|nama* (private message)
🔸 *.savekontak nama* (dalam grup)

📌 *Contoh:*
\`\`\`
.savekontak 1203xxx@g.us|buyerku
.savekontak buyerku
\`\`\`

📣 *JPM / BROADCAST GROUP CHAT*
Digunakan untuk mengirim pesan ke seluruh grup, dengan atau tanpa tag.

🔸 *.jpm teksmu* — Kirim pesan biasa
🔸 *.jpmht teksmu* — Kirim pesan + mention semua anggota
🔸 *.bljpm on/off|<angka>* (private message)
🔸 *.bljpm on/off* (dalam grup)

*Auto Jpm Beta*
.autojpm on
.autojpm off
.autojpm add <teks/caption> (reply gambar/video jika ada media)
.autojpm del <nomor/all>
.autojpm set <angka> menit/jam/hari

📌 *Tips:*
- Kamu bisa kirim media juga, dengan reply atau caption media + cmd.
- Hindari spam *.jpmht* agar tidak mengganggu member 🙏

⚠️ *PERINGATAN DAN SARAN:*
- Jangan push terlalu cepat, bisa kena limit WhatsApp!
- Gunakan jeda minimal \`6000 ms\` (6 detik) agar lebih aman.
- Simpan kontak dulu sebelum push untuk memperbesar deliver rate & menghindari blokir.

_*©Lumnztyz6x*_
  `
await Lumnztyz6x.sendMessage(m.chat, {
  text: ttutor,
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender],
    forwardedNewsletterMessageInfo: {
      newsletterJid: idSaluran,
      newsletterName: nameSaluran
    },
    externalAdReply: {
      title: `© ${namabot} - v${version}`,
      body: `Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: img,
      renderLargerThumbnail: false,
      sourceUrl: '',
      mediaType: 1
    }
  }
}, { quoted: qkuro });
}
break

case 'pushkontak': {
  if (!isGroup) return m.reply(mess.group);
  if (!isCreator) return larang();

  const groupMetadata = await Lumnztyz6x.groupMetadata(from);
  const participants = groupMetadata.participants;

  if (!text) return example('Save Namaku!');

  const pesan = text.trim();
  let success = 0;
  let failed = 0;
  const total = participants.length;

  const progMsg = await Lumnztyz6x.sendMessage(m.chat, {
    text: `*⏳ Memulai push kontak...*\nTarget: ${total} kontak\n\n⚠️ Jangan spam atau pakai command berat (seperti JPM) selama push berlangsung!`
  }, { quoted: m });

  for (let i = 0; i < participants.length; i++) {
    const member = participants[i];
    try {
      await Lumnztyz6x.sendMessage(member.id, { text: pesan }, { quoted: qkuro });
      success++;
    } catch {
      failed++;
    }
    await sleep(global.delayPushkontak);

    // Update progres tiap 20%
    const percent = Math.floor(((i + 1) / total) * 100);
    if (percent % 20 === 0 || i + 1 === total) {
      const bar = makeProgressBar(i + 1, total);
      await Lumnztyz6x.sendMessage(m.chat, {
        text: `*Progres Push Kontak*\n${i + 1}/${total} kontak\n${bar}\n\n⚠️ Jangan spam atau jalankan command lain dulu.`
      }, { edit: progMsg.key });
    }
  }

  await Lumnztyz6x.sendMessage(m.chat, {
    text: `*✅ Push Kontak Selesai!*\n\nTotal: ${total}\nBerhasil: ${success}\nGagal: ${failed}\n\n_(Opsional: pakai *.savekontak* untuk simpan kontak)_`
  }, { quoted: m });
}
break

case 'pushkontak2': {
  if (!isGroup) return m.reply(mess.group);
  if (!isCreator) return larang();

  const groupMetadata = await Lumnztyz6x.groupMetadata(from);
  const participants = groupMetadata.participants || [];

  if (!text) return example('Save Namaku!');

  const pesan = text.trim();
  let success = 0;
  let failed = 0;
  const total = participants.length;
  let vcfList = '';

  const progMsg = await Lumnztyz6x.sendMessage(m.chat, {
    text: `*⏳ Memulai push kontak (mode VCF)...*\nTarget: ${total} kontak\n\n⚠️ Jangan spam atau pakai command berat selama push berlangsung!`
  }, { quoted: m });

  for (let i = 0; i < participants.length; i++) {
    const member = participants[i];
    try {
      // kirim pesan tetap pakai id (lid aman)
      await Lumnztyz6x.sendMessage(member.id, { text: pesan }, { quoted: qkuro });
      success++;

      // simpan kontak pakai phoneNumber
      if (member.phoneNumber) {
        const nomor = member.phoneNumber.split('@')[0];
        vcfList += `BEGIN:VCARD
VERSION:3.0
FN:${global.namakontak || 'Contact'} - ${nomor}
TEL;type=CELL;type=VOICE;waid=${nomor}:+${nomor}
END:VCARD

`;
      }

    } catch {
      failed++;
    }

    await sleep(global.delayPushkontak || 1500);

    // Update progres tiap 20%
    const percent = Math.floor(((i + 1) / total) * 100);
    if (percent % 20 === 0 || i + 1 === total) {
      const bar = makeProgressBar(i + 1, total);
      await Lumnztyz6x.sendMessage(m.chat, {
        text: `*Progres Push Kontak (VCF)*\n${i + 1}/${total} kontak\n${bar}\n\n⚠️ Jangan jalankan command berat lain dulu.`
      }, { edit: progMsg.key });
    }
  }

  // Simpan file VCF
  const vcfPath = `./database/contacts.vcf`;
  fs.writeFileSync(vcfPath, vcfList);

  await Lumnztyz6x.sendMessage(m.sender, {
    document: fs.readFileSync(vcfPath),
    fileName: `KontakGrup-${groupMetadata.subject}.vcf`,
    mimetype: 'text/x-vcard',
    caption: `*Push Kontak Selesai!*\nGrup: ${groupMetadata.subject}\nTotal: ${total}\nBerhasil: ${success}\nGagal: ${failed}`
  }, { quoted: m });

  fs.unlinkSync(vcfPath);
}
break

case 'pushkontak3': {
  if (!isCreator) return larang();
  if (!text.includes('|')) return example(`jeda(ms)|pesan\n\n*Contoh:* 1000|Halo semua`);

  const [jedaStr, ...pesanArr] = text.split('|');
  const delay = Number(jedaStr.trim());
  const pesan = pesanArr.join('|').trim();
  if (isNaN(delay) || !pesan) return m.reply("Format salah!");

  const groupMetadata = await Lumnztyz6x.groupMetadata(m.chat);
  const participants = groupMetadata.participants || [];
  const total = participants.length;

  let success = 0, failed = 0;
  let vcfList = '';

  const progMsg = await Lumnztyz6x.sendMessage(m.chat, {
    text: `*⏳ Broadcast dimulai...*\nTarget: ${total} kontak\nDelay: ${delay}ms\n\n⚠️ Jangan spam/jalankan command lain dulu.`
  }, { quoted: m });

  for (let i = 0; i < participants.length; i++) {
    const member = participants[i];
    try {
      await Lumnztyz6x.sendMessage(member.id, { text: pesan }, { quoted: qkuro });
      success++;
      if (member.phoneNumber) {
        const nomor = member.phoneNumber.split('@')[0];
        vcfList += `BEGIN:VCARD
VERSION:3.0
FN:${global.namakontak || 'Contact'} - ${nomor}
TEL;type=CELL;type=VOICE;waid=${nomor}:+${nomor}
END:VCARD

`;
      }

    } catch {
      failed++;
    }

    await sleep(delay);

    // Progress tiap 20%
    const percent = Math.floor(((i + 1) / total) * 100);
    if (percent % 20 === 0 || i + 1 === total) {
      const bar = makeProgressBar(i + 1, total);
      await Lumnztyz6x.sendMessage(m.chat, {
        text: `*Progres Broadcast*\n${i + 1}/${total} kontak\n${bar}\n\n⚠️ Jangan jalankan command berat lain dulu.`
      }, { edit: progMsg.key });
    }
  }

  // Simpan file VCF
  const vcfPath = './database/push_contacts.vcf';
  fs.writeFileSync(vcfPath, vcfList);

  await Lumnztyz6x.sendMessage(m.sender, {
    document: fs.readFileSync(vcfPath),
    mimetype: 'text/x-vcard',
    fileName: 'PushKontak.vcf',
    caption: `*✅ Broadcast selesai!*\nTotal: ${total}\nSukses: ${success}\nGagal: ${failed}`
  }, { quoted: m });

  fs.unlinkSync(vcfPath);
}
break

case 'pushkontakid': {
  if (!isCreator) return larang();

  const args = text.split('|');
  if (args.length < 2) return example(`<id_grup>|<pesan>\nKetik *.listgc* untuk menampilkan ID grup`);

  const groupId = args[0].trim();
  const pesan = args[1].trim();

  try {
    const groupMetadata = await Lumnztyz6x.groupMetadata(groupId);
    const participants = groupMetadata.participants;

    let success = 0;
    let failed = 0;
    const total = participants.length;
    let vcfList = '';

    const progMsg = await Lumnztyz6x.sendMessage(m.chat, {
      text: `*⏳ Memulai push kontak...*\nTarget: ${total} anggota di grup *${groupMetadata.subject}*\n\n⚠️ Jangan spam atau jalankan command berat lain selama proses ini.`
    }, { quoted: m });

    for (let i = 0; i < participants.length; i++) {
      const member = participants[i];
      try {
        await Lumnztyz6x.sendMessage(member.id, { text: pesan }, { quoted: qkuro });
        success++;
        if (member.phoneNumber) {
          const nomor = member.phoneNumber.split('@')[0];
          vcfList += `BEGIN:VCARD
VERSION:3.0
FN:${global.namakontak} - ${nomor}
TEL;type=CELL;type=VOICE;waid=${nomor}:+${nomor}
END:VCARD

`;
        }

      } catch {
        failed++;
      }

      await sleep(global.delayPushkontak || 1500);

      const percent = Math.floor(((i + 1) / total) * 100);
      if (percent % 20 === 0 || i + 1 === total) {
        const bar = makeProgressBar(i + 1, total);
        await Lumnztyz6x.sendMessage(m.chat, {
          text: `*Progres Push Kontak*\n${i + 1}/${total} anggota\n${bar}\n\n⚠️ Jangan jalankan command lain dulu.`
        }, { edit: progMsg.key });
      }
    }

    const vcfPath = `./database/contacts.vcf`;
    fs.writeFileSync(vcfPath, vcfList);

    await Lumnztyz6x.sendMessage(m.sender, {
      document: fs.readFileSync(vcfPath),
      fileName: `Kontak-${groupMetadata.subject}.vcf`,
      mimetype: 'text/x-vcard',
      caption: `✅ Pushkontak ke *${total} member* selesai!\nBerhasil: *${success}*\nGagal: *${failed}*`
    });

    fs.unlinkSync(vcfPath);

  } catch (err) {
    console.error(err);
    return m.reply('❌ Gagal mengambil metadata grup. Pastikan ID grup valid dan bot masih ada di grup.');
  }
}
break

case 'pushkontakid2': {
  if (!isCreator) return larang();
  if (!text.includes('|')) return example(`idgc|jeda(ms)|pesan\n\n*Note:* 1 detik = 1000\nGunakan *.listgc* atau *.cekidgc* untuk melihat id grup`);

  const [idgc, jedaStr, ...pesanArr] = text.split('|');
  const delay = Number(jedaStr.trim());
  const pesan = pesanArr.join('|').trim();

  if (!idgc.endsWith('@g.us')) return m.reply("❌ ID Grup tidak valid!");
  if (isNaN(delay)) return m.reply("❌ Format jeda tidak valid!\nGunakan angka (contoh: 1000)");
  if (!pesan) return m.reply("❌ Pesan tidak boleh kosong!");

  let groupMetadata;
  try {
    groupMetadata = await Lumnztyz6x.groupMetadata(idgc.trim());
  } catch {
    return m.reply("❌ Gagal ambil metadata grup! Pastikan bot masih ada di grup.");
  }

  const participants = groupMetadata.participants || [];
  const halls = participants.map(p => p.id).filter(Boolean);
  const phoneMap = {};
participants.forEach(p => {
  if (p.id && p.phoneNumber) {
    phoneMap[p.id] = p.phoneNumber;
  }
});

  const contactName = global.namakontak || "Kuroko Broadcast";
  let success = 0, failed = 0;
  let contacts = [];

  const progMsg = await Lumnztyz6x.sendMessage(m.chat, {
    text: `*⏳ Broadcast dimulai...*\nTarget: ${halls.length} kontak di grup *${groupMetadata.subject}*\nDelay: ${delay}ms\n\n⚠️ Jangan spam atau pakai command berat lain.`
  }, { quoted: m });

  for (let i = 0; i < halls.length; i++) {
    try {
      await Lumnztyz6x.sendMessage(halls[i], { text: pesan }, { quoted: qkuro });
      success++;
      contacts.push(halls[i]);
    } catch { failed++; }
    await sleep(delay);

    // Progres tiap 20%
    const percent = Math.floor(((i + 1) / halls.length) * 100);
    if (percent % 20 === 0 || i + 1 === halls.length) {
      const bar = makeProgressBar(i + 1, halls.length);
      await Lumnztyz6x.sendMessage(m.chat, {
        text: `*Progres Broadcast*\n${i + 1}/${halls.length} kontak\n${bar}\n\n⚠️ Jangan jalankan command lain dulu.`
      }, { edit: progMsg.key });
    }
  }

  // Generate VCF File
  try {
    const uniqueContacts = [...new Set(contacts)];
    const vcardContent = uniqueContacts.map((lid, i) => {
    const pn = phoneMap[lid];
  if (!pn) return null;

  const num = pn.split("@")[0];
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contactName} ${i + 1}`,
    `TEL;type=CELL;type=VOICE;waid=${num}:+${num}`,
    'END:VCARD', ''
  ].join('\n');
}).filter(Boolean).join('\n');

    fs.writeFileSync('./database/push_contacts.vcf', vcardContent, 'utf8');

    await Lumnztyz6x.sendMessage(m.sender, {
      document: fs.readFileSync('./database/push_contacts.vcf'),
      mimetype: 'text/vcard',
      fileName: 'contacts.vcf',
      caption: `✅ *Push Kontak Selesai!*\nTotal: ${halls.length}\nSukses: ${success}\nGagal: ${failed}`
    }, { quoted: qkuro });

  } catch (err) {
    console.error('❌ Gagal generate vcf:', err);
    await m.reply('⚠️ Push selesai, namun gagal membuat file .vcf');
  }
}
break

case 'savekontak': {
  if (!isCreator) return larang();

  const buildVcard = (list, contactName) => {
    let vcard = ''
    let no = 1

    for (let jid of list) {
      const num = jid.split('@')[0]
      vcard += `BEGIN:VCARD
VERSION:3.0
FN:${contactName} ${no}
TEL;type=CELL;type=VOICE;waid=${num}:+${num}
END:VCARD

`
      no++
    }

    return vcard
  }

  const getContacts = (participants) => {
    return [...new Set(
      participants
        .map(p => p.phoneNumber || p.id)
        .filter(jid => jid && jid.endsWith('@s.whatsapp.net') && jid !== m.sender)
    )]
  }

  // MODE GRUP
  if (m.isGroup && !text.includes('|')) {
    if (!text) return example("nama kontak");

    const contactName = text.trim()
    let metadata

    try {
      metadata = await Lumnztyz6x.groupMetadata(m.chat)
    } catch (e) {
      return m.reply("❌ Gagal mengambil metadata grup!")
    }

    const kontakUnik = getContacts(metadata.participants)

    if (!kontakUnik.length) return m.reply("⚠️ Tidak ada kontak yang bisa disimpan!")

    const vcardList = buildVcard(kontakUnik, contactName)
    const filePath = './database/kontak-grup.vcf'

    fs.writeFileSync(filePath, vcardList)

    await Lumnztyz6x.sendMessage(m.sender, {
      document: fs.readFileSync(filePath),
      fileName: 'kontak-grup.vcf',
      mimetype: 'text/x-vcard',
      caption: `📥 *Kontak Grup Tersimpan!*\n\n👥 Grup: *${metadata.subject}*\n📁 Jumlah: *${kontakUnik.length}*\n🔖 Nama Kontak: *${contactName}*`,
    }, { quoted: m })

    await m.reply("✅ File kontak berhasil dikirim ke chat pribadi Anda!")
    fs.unlinkSync(filePath)
  }

  // MODE PV PAKAI IDGC|NAMA
  else {
    if (!text.includes('|')) {
      return example("<idgc>|<namakontak>\nKetik *.listgc* untuk menampilkan idgc")
    }

    const [idgc, contactName] = text.split('|').map(v => v.trim())
    if (!idgc || !contactName) return m.reply("✖️ Format salah!")

    let metadata
    try {
      metadata = await Lumnztyz6x.groupMetadata(idgc)
    } catch (e) {
      return m.reply("✖️ ID grup tidak valid atau bot tidak ada di grup!")
    }

    const kontakUnik = getContacts(metadata.participants)
    if (!kontakUnik.length) return m.reply("⚠️ Tidak ada kontak yang bisa disimpan!")

    const vcardList = buildVcard(kontakUnik, contactName)
    const filePath = './database/kontak-saved.vcf'

    fs.writeFileSync(filePath, vcardList)

    await Lumnztyz6x.sendMessage(m.sender, {
      document: fs.readFileSync(filePath),
      fileName: "kontak-saved.vcf",
      mimetype: "text/x-vcard",
      caption: `*✅ Kontak Berhasil Disimpan!*\n📁 Total: *${kontakUnik.length}* kontak\n📌 Nama: *${contactName}*`,
    }, { quoted: m })

    m.reply("✅ File kontak berhasil dikirim ke chat pribadi Anda!")
    fs.unlinkSync(filePath)
  }
}
break

case "jpm": {
  if (!isCreator) return larang()
  if (!text && !m.quoted) return example(`Halo semua!\nKirim media + caption (opsional)`)

  let mediaPath, broadcastMsg
  if (/image|video|audio|document/.test(mime)) {
    mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg)
  }

  const allGroups = await Lumnztyz6x.groupFetchAllParticipating()
  const groupIDs = Object.keys(allGroups)
  let sentCount = 0

  if (mediaPath) {
    if (/image/.test(mime)) broadcastMsg = { image: fs.readFileSync(mediaPath), caption: text || "" }
    if (/video/.test(mime)) broadcastMsg = { video: fs.readFileSync(mediaPath), caption: text || "" }
    if (/audio/.test(mime)) broadcastMsg = { audio: fs.readFileSync(mediaPath), mimetype: "audio/mpeg", ptt: true }
    if (/document/.test(mime)) broadcastMsg = { document: fs.readFileSync(mediaPath), mimetype: qmsg.mimetype, fileName: `file_${Date.now()}` }
  } else {
    broadcastMsg = { text }
  }

  const processMsg = await Lumnztyz6x.sendMessage(
  m.chat,
  {
    text: `⏳ *Memproses JPM...*\nJumlah grup: ${groupIDs.length}\nTipe: ${mediaPath ? mime : "Text"}`
  },
  { quoted: m }
)

  for (const id of groupIDs) {
    if (penting.blacklistJpm.includes(id)) continue
    try {
      await Lumnztyz6x.sendMessage(id, broadcastMsg, { quoted: qloc })
      sentCount++
    } catch {}
    await sleep(global.delayJpm || 4000)
  }

  if (mediaPath) fs.unlinkSync(mediaPath)

  await Lumnztyz6x.sendMessage(
  m.chat,
  {
    text: `✅ *JPM Selesai!*\nBerhasil terkirim ke *${sentCount}* grup dari total ${groupIDs.length}.`,
    edit: processMsg.key
  }
)
}
break

case "jpmht": {
  if (!isCreator) return larang()
  if (!text && !m.quoted) return example(`Halo semua!\nKirim media + caption (opsional)`)

  let mediaPath, msgContent
  if (/image|video|audio|document/.test(mime)) {
    mediaPath = await Lumnztyz6x.downloadAndSaveMediaMessage(qmsg)
  }

  const allGroups = await Lumnztyz6x.groupFetchAllParticipating()
  const groupIDs = Object.keys(allGroups)
  let sentCount = 0

  const processMsg = await Lumnztyz6x.sendMessage(
  m.chat,
  {
    text: `⏳ *Memproses Broadcast Hidetag...*\nJumlah grup: ${groupIDs.length}\nTipe: ${mediaPath ? mime : "Text"}`
  },
  { quoted: m }
)

  for (const id of groupIDs) {
    if (penting.blacklistJpm.includes(id)) continue
    const metadata = await Lumnztyz6x.groupMetadata(id)
    const participants = metadata.participants.map(p => p.id)

    if (mediaPath) {
      if (/image/.test(mime)) msgContent = { image: fs.readFileSync(mediaPath), caption: text || "", mentions: participants }
      if (/video/.test(mime)) msgContent = { video: fs.readFileSync(mediaPath), caption: text || "", mentions: participants }
      if (/audio/.test(mime)) msgContent = { audio: fs.readFileSync(mediaPath), mimetype: "audio/mpeg", ptt: true, mentions: participants }
      if (/document/.test(mime)) msgContent = { document: fs.readFileSync(mediaPath), mimetype: qmsg.mimetype, fileName: `file_${Date.now()}`, mentions: participants }
    } else {
      msgContent = { text: text, mentions: participants }
    }

    try {
      await Lumnztyz6x.sendMessage(id, msgContent, { quoted: qloc })
      sentCount++
    } catch {}
    await sleep(global.delayJpm || 4000)
  }

  if (mediaPath) fs.unlinkSync(mediaPath)

  await Lumnztyz6x.sendMessage(
  m.chat,
  {
    text: `✅ *Hidetag Broadcast Selesai!*\nBerhasil terkirim ke *${sentCount}* grup dari total ${groupIDs.length}.`,
    edit: processMsg.key
  }
)
}
break

case "bljpm": {
  if (!isCreator) return larang();

  // path database
  const pentingPath = path.join(process.cwd(), "database", "penting.json");
  if (!fs.existsSync(pentingPath)) {
    fs.writeFileSync(pentingPath, JSON.stringify({ blacklistJpm: [] }, null, 2));
  }
  let penting = JSON.parse(fs.readFileSync(pentingPath));
  function savePenting() {
    fs.writeFileSync(pentingPath, JSON.stringify(penting, null, 2));
  }

  let [act, arg] = text.split("|").map(a => a?.trim()?.toLowerCase());

  if (m.isGroup) {
    const gid = m.chat;
    if (act === "on") {
      if (!penting.blacklistJpm.includes(gid)) {
        penting.blacklistJpm.push(gid);
        savePenting();
        return reply(`✅ Grup ini berhasil ditambahkan ke *Blacklist JPM*.`);
      } else return reply(`✖️ Grup ini sudah ada di daftar blacklist.`);
    } else if (act === "off") {
      if (penting.blacklistJpm.includes(gid)) {
        penting.blacklistJpm = penting.blacklistJpm.filter(x => x !== gid);
        savePenting();
        return reply(`✅ Grup ini berhasil dihapus dari *Blacklist JPM*.`);
      } else return reply(`✖️ Grup ini belum ada di daftar blacklist.`);
    } else return reply(`Gunakan:\n.bljpm on\n.bljpm off`);
  }

  // === kalau perintah dipakai di CHANNEL ===
  if (m.chat.endsWith("@newsletter")) {
    const cid = m.chat;
    if (act === "on") {
      if (!penting.blacklistJpm.includes(cid)) {
        penting.blacklistJpm.push(cid);
        savePenting();
        return reply(`✅ Channel ini berhasil ditambahkan ke *Blacklist JPM*.`);
      } else return reply(`✖️ Channel ini sudah ada di daftar blacklist.`);
    } else if (act === "off") {
      if (penting.blacklistJpm.includes(cid)) {
        penting.blacklistJpm = penting.blacklistJpm.filter(x => x !== cid);
        savePenting();
        return reply(`✅ Channel ini berhasil dihapus dari *Blacklist JPM*.`);
      } else return reply(`✖️ Channel ini belum ada di daftar blacklist.`);
    } else return reply(`Gunakan:\n.bljpm on\n.bljpm off`);
  }

  // === kalau perintah dipakai di PRIVATE CHAT ===
  if (!m.isGroup && !m.chat.endsWith("@newsletter")) {
    const allGroups = await Lumnztyz6x.groupFetchAllParticipating();
    const groupIDs = Object.keys(allGroups);
    const allChannels = await Lumnztyz6x.newsletterFetchAllParticipating();
    const channelIDs = Object.keys(allChannels);

    if (!groupIDs.length && !channelIDs.length)
      return reply("✖️ Tidak ada grup atau channel yang diikuti bot.");

    // tampilkan daftar kalau tidak ada argumen
    if (!act) {
      let listText = `*📋 Daftar Grup & Channel Bot:*\n\n`;

      // grup section
      listText += `*🧩 Grup:*\n`;
      groupIDs.forEach((id, i) => {
        const isBl = penting.blacklistJpm.includes(id);
        listText += `${i + 1}. ${allGroups[id].subject} ${isBl ? "(BL)" : ""}\n`;
      });

      // channel section
      if (channelIDs.length) {
        listText += `\n*📢 Channel:*\n`;
        channelIDs.forEach((id, i) => {
          const index = groupIDs.length + i + 1;
          const name = allChannels[id]?.name || "Tanpa Nama";
          const isBl = penting.blacklistJpm.includes(id);
          listText += `${index}. ${name} ${isBl ? "(BL)" : ""}\n`;
        });
      }

      listText += `\nGunakan:\n.bljpm on|1,3\n.bljpm off|2\n\nNomor sesuai urutan di atas.`;
      return reply(listText);
    }

    const idxList = arg.split(",").map(x => parseInt(x.trim()) - 1);
    const isOn = act === "on";
    const isOff = act === "off";
    let hasil = [];

    const combined = [...groupIDs, ...channelIDs];
    for (const idx of idxList) {
      if (isNaN(idx) || idx < 0 || idx >= combined.length) continue;
      const targetID = combined[idx];
      const isChannel = targetID.endsWith("@newsletter");

      if (isOn) {
        if (!penting.blacklistJpm.includes(targetID)) {
          penting.blacklistJpm.push(targetID);
          hasil.push(`✅ ${isChannel ? "Channel" : "Grup"} *${isChannel ? allChannels[targetID]?.name : allGroups[targetID]?.subject}* ditambahkan ke blacklist.`);
        } else {
          hasil.push(`⚠️ ${isChannel ? "Channel" : "Grup"} *${isChannel ? allChannels[targetID]?.name : allGroups[targetID]?.subject}* sudah ada di blacklist.`);
        }
      } else if (isOff) {
        if (penting.blacklistJpm.includes(targetID)) {
          penting.blacklistJpm = penting.blacklistJpm.filter(x => x !== targetID);
          hasil.push(`✅ ${isChannel ? "Channel" : "Grup"} *${isChannel ? allChannels[targetID]?.name : allGroups[targetID]?.subject}* dihapus dari blacklist.`);
        } else {
          hasil.push(`⚠️ ${isChannel ? "Channel" : "Grup"} *${isChannel ? allChannels[targetID]?.name : allGroups[targetID]?.subject}* belum ada di blacklist.`);
        }
      }
    }

    savePenting();
    if (!hasil.length) return reply("✖️ Tidak ada ID yang valid.");
    return reply(hasil.join("\n"));
  }
}
break

case 'listgc':
case 'listgrup': {
  if (!isCreator) return larang();
  
  await Lumnztyz6x.sendMessage(m.chat, { react: { text: '👁️‍🗨️', key: m.key } });

  let gcall;
  try {
    gcall = Object.values(await Lumnztyz6x.groupFetchAllParticipating());
  } catch (e) {
    return m.reply("*✖️ Gagal mengambil daftar grup.*");
  }

  let teks = `*📦 Daftar Grup Terkait (${gcall.length} Grup):*\n\n`;
  gcall.forEach((group, index) => {
    teks += `*${index + 1}. ${group.subject}*\n`;
    teks += `├ ID: ${group.id}\n`;
    teks += `├ Member: ${group.participants.length}\n`;
    teks += `├ Status: ${group.announce ? "🔒 Tertutup" : "🔓 Terbuka"}\n`;
    teks += `└ Pembuat: ${group.owner ? "@" + group.owner.split('@')[0] : '✖️ Tidak Diketahui'}\n\n`;
  });

  Lumnztyz6x.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `${gcall.length} Grup Aktif`,
        body: `Runtime : ${runtime(process.uptime())}`,
        sourceUrl: global.web,
        thumbnail: await getBuffer(global.img),
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break

case 'cekidgc': case 'getidgrup': {
   if (!isCreator) return larang()
   if (!q) return example(`link grupnya`)
   let linkRegex = args.join(" ")
   let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
   if (!coded) return m.reply("Link Invalid")

   try {
      let res = await Lumnztyz6x.groupGetInviteInfo(coded)
      let tekse = res.id ? res.id : "undefined"
      m.reply(tekse)
   } catch (e) {
      console.log(e)
      m.reply("❌ Gagal mengambil ID grup, mungkin link invalid / sesi error")
   }
}
break

case "autoread": {
if (!isCreator) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
m.reply("*Berhasil Menyalakan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
m.reply("*Berhasil Mematikan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break

case "autoreadsw": {
if (!isCreator) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (autoreadsw) return m.reply("*Autoreadsw* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = true
m.reply("*Berhasil Menyalakan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoreadsw) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = false
m.reply("*Berhasil Mematikan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
}}
break

case "anticall": {
if (!isCreator) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = true
m.reply("*Berhasil Menyalakan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
m.reply("*Berhasil Mematikan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break

case "autojoingc": {
    if (!isCreator) return larang()
    if (!text) return example("on/off")

    let input = text.trim().toLowerCase()
    if (input === "on") {
    if (autojoingc) return m.reply("*Autojoingc* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
        autojoingc = true
        reply("✅ Fitur Auto Join GC berhasil diaktifkan.")
    } else if (input === "off") {
    if (autojoingc) return m.reply("*Autojoingc* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
        autojoingc = false
        reply("✅ Fitur Auto Join GC berhasil dimatikan.")
    } else {
        return example("on/off")
    }
}
break

case "setting":
case "settingbot":
case "option":
case "statusbot": {
  if (!isCreator) return larang()

  var teks = `
*List Status Setting Bot :*

* Autoread   : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Autojoingc : ${global.autojoingc ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall   : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}
* AutoJPM    : ${penting.autoJpm.status ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
.autoread on/off
`
  m.reply(teks)
}
break

case "joingc": case "join": {
if (!isCreator) return larang()
if (!text && !m.quoted) return example('linknya')
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Lumnztyz6x.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isCreator) return larang()
if (!isGroup) return m.reply(mess.group)
await m.reply("Otw Bosss")
await sleep(3000)
await Lumnztyz6x.groupLeave(m.chat)
}
break

case "leavegc2": case "leave2": {
    if (!isCreator) return larang();
    
    let gcall = Object.values(await Lumnztyz6x.groupFetchAllParticipating().catch(_ => null));
    let num = [];
    let listgc = `*Contoh Cara Penggunaan :*\nKetik *${prefix+command}* <Nomor Grup / all / tertutup>\n\n`;

    gcall.forEach((u, i) => {
        num.push(i);
        listgc += `*${i+1}.* ${u.subject}
* ID:* ${u.id}
* Total Member:* ${u.participants.length} Member
* Status Grup:* ${u.announce == true ? "Tertutup" : "Terbuka"}
* Pembuat:* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`;
    });

    // Kalau tidak ada argumen, kirim daftar grup
    if (!args[0]) {
        return Lumnztyz6x.sendMessage(
            m.chat,
            {
                text: listgc,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        thumbnail: await getBuffer(ppuser),
                        title: `[ ${gcall.length} Group Chat ] `,
                        body: `Runtime : ${runtime(process.uptime())}`,
                        sourceUrl: '',
                        previewType: "PHOTO"
                    }
                }
            },
            { quoted: qkuro }
        );
    }

    // Opsi keluar semua grup
    if (args[0].toLowerCase() === "all") {
        for (let gc of gcall) {
            await Lumnztyz6x.groupLeave(gc.id);
        }
        return m.reply(`Berhasil keluar dari semua grup ✅`);
    }

    // Opsi keluar grup tertutup & bot bukan admin
    if (args[0].toLowerCase() === "tertutup") {
        let leftCount = 0;
        for (let gc of gcall) {
            if (gc.announce && !gc.participants.find(p => p.id === Lumnztyz6x.user.id && p.admin)) {
                await Lumnztyz6x.groupLeave(gc.id);
                leftCount++;
            }
        }
        return m.reply(`Berhasil keluar dari ${leftCount} grup tertutup di mana bot bukan admin ✅`);
    }

    // Opsi keluar berdasarkan nomor
    if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan");
    let leav = Number(args[0]) - 1;
    await m.reply(`Berhasil keluar dari grup:\n*${gcall[leav].subject}*`);
    await Lumnztyz6x.groupLeave(gcall[leav].id);
}
break

case'cekkhodam': 
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}
 m.reply(`
╭━━━━°「 *Khodam ${text}* 」°
┃
┊• Nama : ${text}
┊• Khodam : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang'])}
┊• Mendampingi dari : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
┃• Expired : ${pickRandom(['2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'])}
╰═┅═━––––––๑`)
break

case'cekkontol': 
 if (!text) return m.reply('Nama nya mana yang mau di cek kontol nya')
 m.reply(`
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┃• ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}
╰═┅═━––––––๑`)
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
m.reply(jsonData)
}
break
case "dana": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}
*A/N :* ${an.dana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await Lumnztyz6x.sendText(m.chat, teks, qkuro)
}
break
case "ovo": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}
*A/N :* ${an.ovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await Lumnztyz6x.sendText(m.chat, teks, qkuro)
}
break
case "gopay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}
*A/N :* ${an.gopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await Lumnztyz6x.sendText(m.chat, teks, qkuro)
}
break
case "qris": {
  if (!global.qris == false) return m.reply('Payment QRIS Tidak Tersedia')
  m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')

  let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*
_WAJIB TAMBAH 500P KALAU PAKAI QRIS_
*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
  `.trim()

await Lumnztyz6x.sendMessage(
    m.chat,
    {
      image: { url: global.qris },
      caption: teks
    },
    { quoted: qkuro }
  )
  break
}

// MAIN
      case "runtime":
      {
        let lowq = `*Telah Online Selama:*\n${runtime(
          process.uptime(),
        )}*`;
        m.reply(`${lowq}`);
      }
      break

// OWNER
case 'addcase': {
 if (!isCreator) return reply(mess.creator)
 if (!text) return reply('Mana case nya');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Sukses Menambahkan Fitur\nJika Ingin Menginfokan Ss Dan Reply Ssan Barcaption .newfitur');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'delcase': {
if (!isCreator) return reply('Fitur Khusus Owner!')
if (!text) return reply('Mana case nya bang?');
dellCase('./case.js', q)
m.reply('Berhasil menghapus case!.');
}
break
case 'self':
  if (!isCreator) return m.reply('Khusus owner!')
  Lumnztyz6x.public = false
  m.reply('Berhasil masuk ke mode *Self* (hanya owner yang bisa menggunakan bot)')
  break

case 'public':
  if (!isCreator) return m.reply('Khusus owner!')
  Lumnztyz6x.public = true
  m.reply('Berhasil masuk ke mode *Public* (semua orang bisa menggunakan bot)')
  break
      
    default:
    
if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));

        if (typeof evaled !== 'string') {
            const util = await import('util')
            evaled = util.inspect(evaled, { depth: 1 })
        }

        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = __filename;
fs.watchFile(file, async () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${file}`));
    try {
        const module = await import(`${file}?update=${Date.now()}`); 
    } catch (err) {
        console.error(err);
    }
});
