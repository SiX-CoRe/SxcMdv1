/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/
import fs from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';
import moment from "moment-timezone";

//——————————[ Config Owner ]——————————//
global.ownernumber = '' // Ganti nomer mu
global.lidownernumber = null;
global.ownername = 'User'

//——————————[ Config Bot ]——————————//
global.namabot = "Sxcmd"
global.nomorbot = '' // Ganti no botmu
global.pair = "00000000"
global.version = '1.0'
global.botMode = true
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————————[ Config Sosmed ]——————————//
global.web = "https://lynk.id/six6core"
global.linkSaluran = "https://whatsapp.com/channel/0029Vb7XYjLKgsNyWrRHL10k"
global.idSaluran = "120363409912187282@newsletter"
global.nameSaluran = "sixcore"

//——————————[ Config Wm ]——————————//
global.packname = `𝑑𝑖 𝑏𝑢𝑎𝑡 𝑜𝑙𝑒ℎ 𝑙𝑢𝑚𝑛𝑧𝑡𝑦𝑧6𝑥⏰ ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}
Sєωα вσт ρυѕнкσитαк? Cнαт: ${ownernumber}`
global.author = ``
global.foother = '© 2026 - Made By Sixcorecomunity'

//——————————[ Config Payment ]——————————//
//Note : Kalau gada isi aja jadi false
global.dana = "08888888888"
global.ovo = false
global.gopay = "08888888888"
global.qris = false
global.an = {
    dana: "nama_dana",
    ovo: "nama_ovo",
    gopay: "nama_gopay"
}

//——————————[ Config Media ]——————————//
global.img = "https://files.cloudkuimages.guru/images/aDTzWN7n.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/50pv8y.png"
global.thumb = "https://files.catbox.moe/fy3iqd.png"

//——————————[ Config Broadcast ]——————————//
// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave"

//——————————[ Config Message ]——————————//
global.mess = {
  success: 'Sєℓєѕαι. Bєянαѕιℓ ∂ιєкѕєкυѕι.',
  wait: 'Tυиɢɢυ ѕєвєитαя. Aкυ ѕє∂αиɢ вєкєяנα...',
  admin: 'Kαмυ вυкαи A∂мιи ∂ι ѕιиι.',
  botAdmin: 'Aкυ вєℓυм мєиנα∂ι A∂мιи ∂ι Gяσυρ ιиι.',
  creator: 'Kαмυ ѕιαρα? Pєяιитαн ιиι нαиуα υитυк Oωиєякυ.',
  group: 'Nɢɢαк вιѕα ∂ι ѕιиι. Pαкαι ∂ι Gяσυρ.',
  private: 'Pαкαι ∂ι Cнαт Pяιвαт αנα.',
  error: 'Tєяנα∂ι Eяяσя. Cσвα ℓαɢι.',
  limit: 'Lιмιтмυ нαвιѕ. Iѕтιяαнαт ∂υℓυ уα.',
}


// *** message *** 
global.closeMsgInterval = 30; // 30 menit. maksimal 60 menit, minimal 1 menit
global.backMsgInterval = 2; // 2 jam. maksimal 24 jam, minimal 1 jam


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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