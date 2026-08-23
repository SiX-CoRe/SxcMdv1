/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/
import './settings.js'

import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  Browsers,
  makeCacheableSignalKeyStore,
  delay,
  jidDecode,
  downloadContentFromMessage,
  extractMessageContent,
  proto,
  getDevice,
  prepareWAMessageMedia,
  getBinaryNodeChild,
  generateWAMessage,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  WA_DEFAULT_EPHEMERAL,
} from "@whiskeysockets/baileys";
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';

import { modul } from './module.js'
import moment from 'moment-timezone'
import figlet from 'figlet'
import gradient from 'gradient-string'

const {
  baileys,
  chalk,
  fs,
  fileTypeFromBuffer,
  path,
  pino,
  PhoneNumber,
  axios
} = modul

import { makeInMemoryStore } from './lib/store.js'
import { color, bgcolor } from './lib/color.js'
import { uncache, nocache } from './lib/loader.js'

import Pino from 'pino'
import readline from 'readline'
import yargs from 'yargs/yargs'
import _ from 'lodash'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import mongoDB from './lib/mongoDB.js'
import NodeCache from 'node-cache'

import {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep,
  tanggal,
  day,
  bulan,
  tahun,
  weton,
  loadModule,
  protex
} from './lib/myfunc.js'

import {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  addExif
} from './lib/exif.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const prefix = "";
const type = (x) => x?.constructor?.name || (x === null ? "null" : "undefined");
const isStringSame = (x, y) => (Array.isArray(y) ? y.includes(x) : y === x);
const buttonTypes = [];

// Path utama database
const dbPath = path.join(__dirname, "database");
const dbFile = path.join(dbPath, "database.json");
const pentingFile = path.join(dbPath, "penting.json");
const usersJson = path.join(dbPath, "user.json");
const contactsFile = path.join(dbPath, "contacts.vcf");

if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath);
  console.log(chalk.greenBright("[Database] Folder dibuat otomatis."));
}
if (!fs.existsSync(dbFile)) {
  fs.writeFileSync(dbFile, JSON.stringify({}, null, 2));
  console.log(chalk.greenBright("[Database] File database.json dibuat."));
}
if (!fs.existsSync(usersJson)) {
  const userDefault = []
  fs.writeFileSync(usersJson, JSON.stringify(userDefault, null, 2));
  console.log(chalk.greenBright("[Database] File user.json dibuat."));
}
if (!fs.existsSync(pentingFile)) {
  const pentingDefault = {
    blacklistJpm: [],
    autoJpm: {
      status: false,
      interval: 0,
      type: "hour",
      messages: [],
      lastIndex: 0,
    },
  };
  fs.writeFileSync(pentingFile, JSON.stringify(pentingDefault, null, 2));
  console.log(chalk.greenBright("[Database] File penting.json dibuat."));
}

if (!fs.existsSync(contactsFile)) {
  fs.writeFileSync(contactsFile, "");
  console.log(chalk.greenBright("[Database] File contacts.vcf dibuat."));
}
const pentingPath = path.join(process.cwd(), "database", "penting.json")

function loadPenting() {
  return JSON.parse(fs.readFileSync(pentingPath))
}

function savePenting(data) {
  fs.writeFileSync(pentingPath, JSON.stringify(data, null, 2))
}

let mainHandler;
const loadHandler = async () => {
    delete await import.meta.resolve('./case.js');
    mainHandler = (await import(`./case.js?update=${Date.now()}`)).default;
};
loadHandler();

const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store",
  }),
});
async function initLidOwner(Lumnztyz6x) {
  if (global.lidownernumber) return global.lidownernumber;

  const jid = global.ownernumber + "@s.whatsapp.net";
  const lid = await Lumnztyz6x.signalRepository.lidMapping
    .getLIDForPN(jid);

  global.lidownernumber = lid.split("@")[0];
  return global.lidownernumber;
}
// GLOBAL OPTS
global.opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const defaultData = {
  users: [],
  chats: [],
  settings: {}
}
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '')
    ? new cloudDBAdapter(opts['db'])
    : /mongodb/.test(opts['db'] || '')
      ? new mongoDB(opts['db'])
      : new JSONFile('./database/database.json'),
  defaultData
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

let phoneNumber = `${nomorbot}`;
const pairingCode = false;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    })
};

console.clear();
console.log(
  chalk.yellow("[ Starting ] ") + chalk.white.bold("Welcome In Terminal Sixcore!")
);

process.on("unhandledRejection", (reason, promise) => {
  console.log(chalk.red("[Error] Unhandled Rejection →"), reason);
});
process.on("rejectionHandled", (promise) => {
  console.log(chalk.gray("[Info] Rejection handled."));
});
process.on("Something went wrong", function (err) {
  console.log(chalk.red("[Exception]"), err);
});

setTimeout(() => {
  console.clear();
  console.log(
    chalk.cyan.bold(
      figlet.textSync("SxCode", { horizontalLayout: "full" })
    )
  );
  console.log(gradient.pastel.multiline("Sixcore..."));
  console.log(chalk.gray("──────────────────────────────────────────────"));
  console.log(chalk.white("Welcome to SxcMd - Ig : LumnzTyz"));
  console.log(chalk.gray("──────────────────────────────────────────────\n"));

  console.log(
    chalk.cyan.bold("Operating System Information:"),
    "\n",
    chalk.white(`├ Platform : ${modul.os.platform()} ${modul.os.arch()}`),
    "\n",
    chalk.white(`├ Release  : ${modul.os.release()}`),
    "\n",
    chalk.white(`├ Hostname : ${modul.os.hostname()}`),
    "\n",
    chalk.white(`├ Total RAM: ${(modul.os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`),
    "\n",
    chalk.white(`├ Free RAM : ${(modul.os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`),
    "\n",
    chalk.white(`└ Uptime   : ${modul.os.uptime()} sec\n`)
  );

  console.log(chalk.magenta.bold("==============================================="));
  console.log(chalk.cyan.bold("Preparing environment..."));
}, 1000);
protex();
const ask = (text) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(text, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

async function startsesi() {
  await new Promise((r) => setTimeout(r, 5000));
  console.clear();
  console.log(gradient.morning(figlet.textSync("SxcMd v1", { horizontalLayout: "full" })));
  console.log(chalk.gray("──────────────────────────────────────────────"));
  console.log(chalk.cyanBright("Initializing System..."));
  console.log(chalk.gray("──────────────────────────────────────────────\n"));

  console.log(chalk.white.bold("Isi Data Owner & Bot"));
  console.log(chalk.gray("Data ini akan disimpan secara permanen di settings.js\n"));

  const settingsPath = "./settings.js";
  let settingsContent = fs.existsSync(settingsPath)
    ? fs.readFileSync(settingsPath, "utf-8")
    : "";

  if (!global.ownernumber || global.ownernumber.trim() === "") {
console.log(chalk.yellow("Daftarkan nomor owner (ex: 628xxxxxx): "));
global.ownernumber = await ask("> ");
}

if (!global.ownername || global.ownername.trim() === "") {
console.log(chalk.yellow("Siapa nama mu?: "));
global.ownername = await ask("> ");
}

if (!global.nomorbot || global.nomorbot.trim() === "") {
console.log(chalk.yellow("Masukkan nomor bot untuk pairing (ex: 628xxxxxx): "));
global.nomorbot = await ask("> ");
}

  try {
    settingsContent = settingsContent
      .replace(/global\.ownernumber\s*=\s*(['"`]).*?\1/, `global.ownernumber = '${global.ownernumber}'`)
      .replace(/global\.ownername\s*=\s*(['"`]).*?\1/, `global.ownername = '${global.ownername}'`)
      .replace(/global\.nomorbot\s*=\s*(['"`]).*?\1/, `global.nomorbot = '${global.nomorbot}'`);
    fs.writeFileSync(settingsPath, settingsContent, "utf-8");
    console.log(chalk.greenBright("\nData berhasil disimpan ke settings.js"));
  } catch (err) {
    console.log(chalk.red("Gagal menyimpan ke settings.js:"), err);
  }

  console.log(chalk.cyanBright("\nSystem Info:"));
  console.log(chalk.white(`├ Hostname : ${modul.os.hostname()}`));
  console.log(chalk.white(`├ Platform : ${modul.os.platform()} ${modul.os.arch()}`));
  console.log(chalk.white(`├ RAM Total: ${(modul.os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`));
  console.log(chalk.white(`├ Node.js  : ${process.version}`));
  console.log(chalk.white(`└ Owner    : ${global.ownername} (${global.ownernumber})`));

  console.log(chalk.gray("\n──────────────────────────────────────────────"));
  console.log(chalk.blueBright("Membuat koneksi dan pairing code...\n"));

  // ========== PAIRING ==========
  const { saveCreds, state } = await useMultiFileAuthState("./session");
  const msgRetryCounterCache = new NodeCache();
  const { version } = await fetchLatestBaileysVersion();
  const Lumnztyz6x = makeWASocket({
    version,
    logger: Pino({ level: "silent" }),
    printQRInTerminal: false,
    browser: Browsers.macOS("Safari"),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "silent" })),
    },
    markOnlineOnConnect: false,
    generateHighQualityLinkPreview: false,
    msgRetryCounterCache,
  });

  Lumnztyz6x.ev.on("creds.update", saveCreds);

  if (!Lumnztyz6x.authState.creds.registered) {
    await new Promise((r) => setTimeout(r, 3000));
    const code = await Lumnztyz6x.requestPairingCode(global.nomorbot, pair);
    console.log(chalk.black.bgGreen("Ini kode pairing kamu:"), chalk.white.bold(code));
  }

setInterval(async () => {
  try {
    const penting = loadPenting()
    if (!penting.autoJpm || !penting.autoJpm.status) return

    const messages = penting.autoJpm.messages
    if (!Array.isArray(messages) || !messages.length) return

    let ms = penting.autoJpm.interval * 60000
    if (penting.autoJpm.type === "hour") ms *= 60
    if (penting.autoJpm.type === "day") ms *= 1440

    if (!penting.autoJpm._lastRun) penting.autoJpm._lastRun = 0
    if (Date.now() - penting.autoJpm._lastRun < ms) return

    penting.autoJpm._lastRun = Date.now()

    if (typeof penting.autoJpm.lastIndex !== "number") penting.autoJpm.lastIndex = 0

    let pesan = null
    let idx = penting.autoJpm.lastIndex

    for (let i = 0; i < messages.length; i++) {
      const current = messages[idx % messages.length]

      if (current.type === "text") {
        pesan = current
        break
      }

      if (current.type !== "text" && current.path && fs.existsSync(current.path)) {
        pesan = current
        break
      }

      idx++
    }

    if (!pesan) {
      console.log("⚠️  Semua pesan AutoJPM invalid")
      return
    }

    const allGroups = await Lumnztyz6x.groupFetchAllParticipating()
    const groupIDs = Object.keys(allGroups).filter(id => !penting.blacklistJpm.includes(id))

    for (const gid of groupIDs) {
      try {
        if (pesan.type === "text") {
          await Lumnztyz6x.sendMessage(gid, { text: pesan.text })
        } else {
          await Lumnztyz6x.sendMessage(gid, {
            [pesan.type]: fs.readFileSync(pesan.path),
            caption: pesan.caption || ""
          })
        }

        await sleep(global.delayJpm || 4000)
      } catch (e) {
        console.error(`❌ Gagal kirim ke ${gid}:`, e.message)
      }
    }

    penting.autoJpm.lastIndex = (idx + 1) % messages.length
    savePenting(penting)

  } catch (err) {
    console.error("❌ AutoJpm Error:", err.message)
  }
}, 60 * 1000)
    
    // FUNGSI CONNECTION - update tampilan
    Lumnztyz6x.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "connecting") {
            console.log(chalk.yellow("Connecting to WhatsApp..."));
        } else if (connection === "open") {
            await sleep(3000);
            await initLidOwner(Lumnztyz6x);
            loadModule(Lumnztyz6x);
            console.log(chalk.green.bold('✅ Connected Successfully to WhatsApp'));
            const ownerJid = Lumnztyz6x.user.id.split(":")[0] + "@s.whatsapp.net";
            await Lumnztyz6x.sendMessage(ownerJid, {
                text: `Selamat Kamu berhasil terhubung oleh bot SxcMd V1, tolong untuk dengan bijak untuk menggunakan bot ini ya man teman. Btw bantu follow ig developer https://www.instagram.com/lumnztyz?igsi=eXNmYWxiOHNiaGQw  --- agar tahu info update bisa juga join channel whatsapp/telegram https://t.me/sixcorecomunity    
                `
            });
        } else if (connection === "close") {
            console.log(chalk.red("Connection closed, restarting..."));
            startsesi();
        }
    });
  
  Lumnztyz6x.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Lumnztyz6x.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Lumnztyz6x.sendContact(ff.from, [global.ownernumber], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Lumnztyz6x.updateBlockStatus(ff.from, "block")
}}
}})
  
  Lumnztyz6x.ev.on("messages.upsert", async (chatUpdate) => {
  try {
    const kay = chatUpdate.messages[0];
    if (!kay.message) return;

    // Ekstrak isi pesan (jika ephemeral)
    kay.message =
      Object.keys(kay.message)[0] === "ephemeralMessage"
        ? kay.message.ephemeralMessage.message
        : kay.message;

    const m = smsg(Lumnztyz6x, kay, store); // Setelah message didecode
    
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) Lumnztyz6x.readMessages([m.key])
}
let fill = [global.ownernumber]
if (!Lumnztyz6x.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) Lumnztyz6x.readMessages([m.key])

// FUNGSI SELF / PUBLIC
if (
  !Lumnztyz6x.public &&
  !(
    kay.key.fromMe ||
    (kay.key.participant &&
      global.ownernumber.includes(kay.key.participant.split("@")[0])) ||
    global.ownernumber.includes(m.sender.split("@")[0]) ||
    nomorbot.includes(m.sender.split("@")[0])
  ) &&
  chatUpdate.type === "notify"
) {
  return;
}

  Lumnztyz6x.public = global.botMode;

    // FUNGSI CEGAH PROSES CHAT DUPLIKAT
    if (kay.key.id.startsWith("BAE5") && kay.key.id.length === 16) return;

    // HANDLE UTAMA
    await loadHandler();
    mainHandler(Lumnztyz6x, m, chatUpdate, store);
  } catch (err) {
    console.error("Error saat memproses pesan:", err);
  }
});

  Lumnztyz6x.ev.on("messages.update", async (chatUpdate) => {
    for (const { key, update } of chatUpdate) {
      if (update.pollUpdates && key.fromMe) {
        const pollCreation = await getMessage(key);
        if (pollCreation) {
          const pollUpdate = await getAggregateVotesInPollMessage({
            message: pollCreation,
            pollUpdates: update.pollUpdates,
          });
          var toCmd = pollUpdate.filter((v) => v.voters.length !== 0)[0]?.name;
          if (toCmd == undefined) return;
          var prefCmd = prefix + toCmd;
          Lumnztyz6x.appenTextMessage(prefCmd, chatUpdate);
        }
      }
    }
  });
  Lumnztyz6x.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    Lumnztyz6x.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net",
          ),
        },
        ...options,
      },
      {
        quoted,
      },
    );
  Lumnztyz6x.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  Lumnztyz6x.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = Lumnztyz6x.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = {
          id,
          name: contact.notify,
        };
    }
  });
  Lumnztyz6x.getName = (jid, withoutContact = false) => {
    id = Lumnztyz6x.decodeJid(jid);
    withoutContact = Lumnztyz6x.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = Lumnztyz6x.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international",
            ),
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === Lumnztyz6x.decodeJid(Lumnztyz6x.user.id)
            ? Lumnztyz6x.user
            : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international",
      )
    );
  };
  Lumnztyz6x.parseMention = (text = "") => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net",
    );
  };
  Lumnztyz6x.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await Lumnztyz6x.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Lumnztyz6x.getName(i)}\nFN:${await Lumnztyz6x.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    Lumnztyz6x.sendMessage(
      jid,
      {
        contacts: {
          displayName: `${list.length} Contact`,
          contacts: list,
        },
        ...opts,
      },
      {
        quoted,
      },
    );
  };
  Lumnztyz6x.setStatus = (status) => {
    Lumnztyz6x.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  Lumnztyz6x.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    return await Lumnztyz6x.sendMessage(
      jid,
      {
        image: buffer,
        caption: caption,
        ...options,
      },
      {
        quoted,
      },
    );
  };
  Lumnztyz6x.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await Lumnztyz6x.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      },
    ).then((response) => {
      fs.unlinkSync(buffer);
      return response;
    });
  };
  Lumnztyz6x.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await Lumnztyz6x.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      },
    );
    return buffer;
  };
  Lumnztyz6x.sendImageAsStickerAvatar = async (
    jid,
    path,
    quoted,
    options = {},
  ) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImgAvatar(buff, options);
    } else {
      buffer = await imageToWebpAvatar(buff);
    }
    await Lumnztyz6x.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      },
    ).then((response) => {
      fs.unlinkSync(buffer);
      return response;
    });
  };
  Lumnztyz6x.sendVideoAsStickerAvatar = async (
    jid,
    path,
    quoted,
    options = {},
  ) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVidAvatar(buff, options);
    } else {
      buffer = await videoToWebpAvatar(buff);
    }
    await Lumnztyz6x.sendMessage(
      jid,
      {
        sticker: {
          url: buffer,
        },
        ...options,
      },
      {
        quoted,
      },
    );
    return buffer;
  };
  Lumnztyz6x.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {},
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {},
    );
    await Lumnztyz6x.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };
  Lumnztyz6x.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true,
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await fileTypeFromBuffer(buffer);
    let trueFileName;
    if (type.ext == "ogg" || type.ext == "opus") {
      trueFileName = attachExtension ? filename + ".mp3" : filename;
      await fs.writeFileSync(trueFileName, buffer);
    } else {
      trueFileName = attachExtension ? filename + "." + type.ext : filename;
      await fs.writeFileSync(trueFileName, buffer);
    }
    return trueFileName;
  };
  Lumnztyz6x.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };
  Lumnztyz6x.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
        ? Buffer.from(PATH.split`,`[1], "base64")
        : /^https?:\/\//.test(PATH)
          ? await (res = await getBuffer(PATH))
          : fs.existsSync(PATH)
            ? ((filename = PATH), fs.readFileSync(PATH))
            : typeof PATH === "string"
              ? PATH
              : Buffer.alloc(0);
    let type = (await fileTypeFromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };
  Lumnztyz6x.sendText = (jid, text, quoted = "", options) =>
    Lumnztyz6x.sendMessage(
      jid,
      {
        text: text,
        ...options,
      },
      {
        quoted,
      },
    );
  Lumnztyz6x.serializeM = (m) => smsg(Lumnztyz6x, m, store);
  /**
   * Send Media/File with Automatic Type Specifier
   * @param {String} jid
   * @param {String|Buffer} path
   * @param {String} filename
   * @param {String} caption
   * @param {import('@whiskeysockets/baileys').proto.WebMessageInfo} quoted
   * @param {Boolean} ptt
   * @param {Object} options
   */
  Lumnztyz6x.sendFile = async (
    jid,
    path,
    filename = "",
    caption = "",
    quoted,
    ptt = false,
    options = {},
  ) => {
    let type = await Lumnztyz6x.getFile(path, true);
    let { res, data: file, filename: pathFile } = type;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw {
          json: JSON.parse(file.toString()),
        };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    const fileSize = fs.statSync(pathFile).size / 1024 / 1024;
    if (fileSize >= 1800) throw new Error(" The file size is too large\n\n");
    let opt = {};
    if (quoted) opt.quoted = quoted;
    if (!type) options.asDocument = true;
    let mtype = "",
      mimetype = options.mimetype || type.mime,
      convert;
    if (
      /webp/.test(type.mime) ||
      (/image/.test(type.mime) && options.asSticker)
    )
      mtype = "sticker";
    else if (
      /image/.test(type.mime) ||
      (/webp/.test(type.mime) && options.asImage)
    )
      mtype = "image";
    else if (/video/.test(type.mime)) mtype = "video";
    else if (/audio/.test(type.mime))
      (convert = await toAudio(file, type.ext)),
        (file = convert.data),
        (pathFile = convert.filename),
        (mtype = "audio"),
        (mimetype = options.mimetype || "audio/mpeg; codecs=mp3");
    else mtype = "document";
    if (options.asDocument) mtype = "document";
    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;
    let message = {
      ...options,
      caption,
      ptt,
      [mtype]: {
        url: pathFile,
      },
      mimetype,
      fileName: filename || pathFile.split("/").pop(),
    };
    /**
     * @type {import('@whiskeysockets/baileys').proto.WebMessageInfo}
     */
    let m;
    try {
      m = await Lumnztyz6x.sendMessage(jid, message, {
        ...opt,
        ...options,
      });
    } catch (e) {
      console.error(e);
      m = null;
    } finally {
      if (!m)
        m = await Lumnztyz6x.sendMessage(
          jid,
          {
            ...message,
            [mtype]: file,
          },
          {
            ...opt,
            ...options,
          },
        );
      file = null; // releasing the memory
      return m;
    }
  };
  Lumnztyz6x.sendFile = async (jid, media, options = {}) => {
    let file = await Lumnztyz6x.getFile(media);
    let mime = file.ext,
      type;
    // Tentukan tipe file berdasarkan ekstensi
    if (mime == "mp3") {
      type = "audio";
      options.mimetype = "audio/mpeg";
      options.ptt = options.ptt || false;
    } else if (mime == "jpg" || mime == "jpeg" || mime == "png") {
      type = "image";
    } else if (mime == "webp") {
      type = "sticker";
    } else if (mime == "mp4") {
      type = "video";
    } else {
      type = "document";
    }
    // Menambahkan caption dan quoted ke pengiriman pesan
    return Lumnztyz6x.sendMessage(
      jid,
      {
        [type]: file.data,
        caption: options.caption || "", // Menambahkan caption jika ada
        ...options,
      },
      {
        quoted: options.quoted || "", // Menambahkan quoted jika ada
        ...options,
      },
    );
  };
  Lumnztyz6x.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
    let mime = "";
    let res = await axios.head(url);
    mime = res.headers["content-type"];
    if (mime.split("/")[1] === "gif") {
      return Lumnztyz6x.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          gifPlayback: true,
          ...options,
        },
        {
          quoted: quoted,
          ...options,
        },
      );
    }
    let type = mime.split("/")[0] + "Message";
    if (mime === "application/pdf") {
      return Lumnztyz6x.sendMessage(
        jid,
        {
          document: await getBuffer(url),
          mimetype: "application/pdf",
          caption: caption,
          ...options,
        },
        {
          quoted: quoted,
          ...options,
        },
      );
    }
    if (mime.split("/")[0] === "image") {
      return Lumnztyz6x.sendMessage(
        jid,
        {
          image: await getBuffer(url),
          caption: caption,
          ...options,
        },
        {
          quoted: quoted,
          ...options,
        },
      );
    }
    if (mime.split("/")[0] === "video") {
      return Lumnztyz6x.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          mimetype: "video/mp4",
          ...options,
        },
        {
          quoted: quoted,
          ...options,
        },
      );
    }
    if (mime.split("/")[0] === "audio") {
      return Lumnztyz6x.sendMessage(
        jid,
        {
          audio: await getBuffer(url),
          caption: caption,
          mimetype: "audio/mpeg",
          ...options,
        },
        {
          quoted: quoted,
          ...options,
        },
      );
    }
  };
  Lumnztyz6x.sendButton = async (jid, content = {}, options = {}) => {
      if (!Lumnztyz6x.user?.id) {
        throw new Error("User not authenticated");
      }

      const {
        text = "",
        caption = "",
        title = "",
        footer = "",
        buttons = [],
        hasMediaAttachment = false,
        image = null,
        video = null,
        document = null,
        mimetype = null,
        jpegThumbnail = null,
        location = null,
        product = null,
        businessOwnerJid = null,
      } = content;

      if (!Array.isArray(buttons) || buttons.length ===
        0) {
        throw new Error(
          "buttons must be a non-empty array");
      }

      const interactiveButtons = [];

      for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];

        if (!btn || typeof btn !== "object") {
          throw new Error(
            `button[${i}] must be an object`);
        }

        if (btn.name && btn.buttonParamsJson) {
          interactiveButtons.push(btn);
          continue;
        }

        if (btn.id || btn.text || btn.displayText) {
          interactiveButtons.push({
            name: "quick_reply",
            buttonParamsJson: JSON
              .stringify({
                display_text: btn
                  .text || btn
                  .displayText ||
                  `Button ${i + 1}`,
                id: btn.id ||
                  `quick_${i + 1}`,
              }),
          });
          continue;
        }

        if (btn.buttonId && btn.buttonText
          ?.displayText) {
          interactiveButtons.push({
            name: "quick_reply",
            buttonParamsJson: JSON
              .stringify({
                display_text: btn
                  .buttonText
                  .displayText,
                id: btn.buttonId,
              }),
          });
          continue;
        }

        throw new Error(
          `button[${i}] has invalid shape`);
      }

      let messageContent = {};
      if (image) {
        const mediaInput = {};
        if (Buffer.isBuffer(image)) {
          mediaInput.image = image;
        } else if (typeof image === "object" && image
          .url) {
          mediaInput.image = {
            url: image.url
          };
        } else if (typeof image === "string") {
          mediaInput.image = {
            url: image
          };
        }

        const preparedMedia =
          await prepareWAMessageMedia(mediaInput, {
            upload: Lumnztyz6x.waUploadToServer,
          });

        messageContent.header = {
          title: title || "",
          hasMediaAttachment: hasMediaAttachment,
          imageMessage: preparedMedia
            .imageMessage,
        };
      } else if (video) {
        const mediaInput = {};
        if (Buffer.isBuffer(video)) {
          mediaInput.video = video;
        } else if (typeof video === "object" && video
          .url) {
          mediaInput.video = {
            url: video.url
          };
        } else if (typeof video === "string") {
          mediaInput.video = {
            url: video
          };
        }

        const preparedMedia =
          await prepareWAMessageMedia(mediaInput, {
            upload: Lumnztyz6x.waUploadToServer,
          });

        messageContent.header = {
          title: title || "",
          hasMediaAttachment: hasMediaAttachment,
          videoMessage: preparedMedia
            .videoMessage,
        };
      } else if (document) {
        const mediaInput = {
          document: {}
        };

        if (Buffer.isBuffer(document)) {
          mediaInput.document = document;
        } else if (typeof document === "object" &&
          document.url) {
          mediaInput.document = {
            url: document.url
          };
        } else if (typeof document === "string") {
          mediaInput.document = {
            url: document
          };
        }

        if (mimetype) {
          if (typeof mediaInput.document ===
            "object") {
            mediaInput.document.mimetype = mimetype;
          }
        }

        if (jpegThumbnail) {
          if (typeof mediaInput.document ===
            "object") {
            if (Buffer.isBuffer(jpegThumbnail)) {
              mediaInput.document.jpegThumbnail =
                jpegThumbnail;
            } else if (typeof jpegThumbnail ===
              "string") {
              try {
                const response = await fetch(
                  jpegThumbnail);
                const arrayBuffer =
                  await response
                  .arrayBuffer();
                mediaInput.document
                  .jpegThumbnail = Buffer
                  .from(arrayBuffer);
              } catch {
              }
            }
          }
        }

        const preparedMedia =
          await prepareWAMessageMedia(mediaInput, {
            upload: Lumnztyz6x.waUploadToServer,
          });

        messageContent.header = {
          title: title || "",
          hasMediaAttachment: hasMediaAttachment,
          documentMessage: preparedMedia
            .documentMessage,
        };
      } else if (location && typeof location ===
        "object") {
        messageContent.header = {
          title: title || location.name ||
            "Location",
          hasMediaAttachment: hasMediaAttachment,
          locationMessage: {
            degreesLatitude: location
              .degressLatitude || location
              .degreesLatitude || 0,
            degreesLongitude: location
              .degressLongitude || location
              .degreesLongitude || 0,
            name: location.name || "",
            address: location.address || "",
          },
        };
      } else if (product && typeof product === "object") {
        let productImageMessage = null;
        if (product.productImage) {
          const mediaInput = {};
          if (Buffer.isBuffer(product.productImage)) {
            mediaInput.image = product.productImage;
          } else if (
            typeof product.productImage ===
            "object" &&
            product.productImage.url
          ) {
            mediaInput.image = {
              url: product.productImage.url,
            };
          } else if (typeof product.productImage ===
            "string") {
            mediaInput.image = {
              url: product.productImage,
            };
          }

          const preparedMedia =
            await prepareWAMessageMedia(
              mediaInput, {
                upload: Lumnztyz6x.waUploadToServer,
              });
          productImageMessage = preparedMedia
            .imageMessage;
        }

        messageContent.header = {
          title: title || product.title ||
            "Product",
          hasMediaAttachment: hasMediaAttachment,
          productMessage: {
            product: {
              productImage: productImageMessage,
              productId: product.productId ||
                "",
              title: product.title || "",
              description: product
                .description || "",
              currencyCode: product
                .currencyCode || "USD",
              priceAmount1000: parseInt(
                product.priceAmount1000
              ) || 0,
              retailerId: product
                .retailerId || "",
              url: product.url || "",
              productImageCount: product
                .productImageCount || 1,
            },
            businessOwnerJid: businessOwnerJid ||
              product.businessOwnerJid || Lumnztyz6x
              .user.id,
          },
        };
      } else if (title) {
        messageContent.header = {
          title: title,
          hasMediaAttachment: false,
        };
      }

      const hasMedia = !!(image || video || document ||
        location || product);
      const bodyText = hasMedia ? caption : text ||
        caption;

      if (bodyText) {
        messageContent.body = {
          text: bodyText
        };
      }

      if (footer) {
        messageContent.footer = {
          text: footer
        };
      }

      messageContent.nativeFlowMessage = {
        buttons: interactiveButtons,
      };

      const payload = proto.Message.InteractiveMessage
        .create(messageContent);

      const msg = generateWAMessageFromContent(
        jid, {
          viewOnceMessage: {
            message: {
              interactiveMessage: payload,
            },
          },
        }, {
          userJid: Lumnztyz6x.user.id,
          quoted: options?.quoted || null,
        }
      );
      const isGroup = jid.endsWith("@g.us");
      const additionalNodes = [{
        tag: "biz",
        attrs: {},
        content: [{
          tag: "interactive",
          attrs: {
            type: "native_flow",
            v: "1",
          },
          content: [{
            tag: "native_flow",
            attrs: {
              v: "9",
              name: "mixed",
            },
          }, ],
        }, ],
      }, ];

      if (!isGroup) {
        additionalNodes.push({
          tag: "bot",
          attrs: {
            biz_bot: "1"
          },
        });
      }

      await Lumnztyz6x.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
        additionalNodes,
      });

      return msg;
    }
  /**
   *
   * @param {*} jid
   * @param {*} name
   * @param [*] values
   * @returns
   */
  /*
  Lumnztyz6x.sendPoll = (jid, name = "", values = [], selectableCount = 1) => {
    return Lumnztyz6x.sendMessage(jid, {
      poll: {
        name,
        values,
        selectableCount,
      },
    });
  };
  */
  /**
   * @typedef Media
   * @prop {"image"|"video"|"document"} type
   * @prop {buffer|{ url: string }} data
   * @prop {{}} [options]
   */
  /**
   * @typedef Button
   * @prop {Section[]} [sections]
   */
  /**
   * @typedef Section
   * @prop {string} title
   * @prop {Row[]} rows
   */
  /**
   * @typedef Row
   * @prop {string} header
   * @prop {string} title
   * @prop {string} description
   * @prop {string} id
   */
  /**
   * Function to send interactiveMessage
   *
   * @param {string} jid
   * @param {string} body
   * @param {string} [footer]
   * @param {string} title
   * @param {string} [subtitle]
   * @param {Media} [media]
   * @param {Button[]} buttons
   * @param {proto.WebMessageInfo} [quoted]
   * @param {{}} [options={}]
   * @returns {Promise<proto.WebMessageInfo>}
   */
 
    // ### End of sending message ###
  return Lumnztyz6x;
}
startsesi();

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