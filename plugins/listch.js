/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/

import { getBuffer, runtime } from "../lib/myfunc.js";

let handler = async (m, { Lumnztyz6x, isCreator, reply }) => {
  if (!isCreator) return reply("⚠️ Fitur ini hanya untuk Developer bot!");

  await Lumnztyz6x.sendMessage(m.chat, { react: { text: "👁️‍🗨️", key: m.key } });

  let channels;
  try {
    channels = await Lumnztyz6x.newsletterFetchAllParticipating();
  } catch (e) {
    console.error(e);
    return m.reply("*✖️ Gagal mengambil daftar channel.*");
  }

  let chList = Object.values(channels);
  if (!chList.length) return m.reply("⚠️ Tidak ada channel yang kamu ikuti.");

  let teks = `*📡 Daftar Channel Detail (${chList.length} Channel):*\n\n`;
  chList.forEach((ch, i) => {
 
    let role = ch.viewer_metadata?.role || "–";
    let mute = ch.viewer_metadata?.mute || "–";
    let verified = ch.verification || "–";
    let state = ch.state || "–";

    teks += `*${i + 1}. ${ch.name || "Tanpa Nama"}*\n`;
    teks += `├ ID: ${ch.id || "❓"}\n`;
    teks += `├ Subscribers: ${ch.subscribers || 0}\n`;
    teks += `├ Role kamu: ${role}\n`;
    teks += `├ Mute: ${mute}\n`;
    teks += `├ Verifikasi: ${verified}\n`;
    teks += `├ State: ${state}\n`;
    teks += `└ Link: ${ch.invite ? `https://whatsapp.com/channel/${ch.invite}` : "❌ Tidak tersedia"}\n\n`;
  });

  await Lumnztyz6x.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `${chList.length} Channel Aktif`,
          body: `Runtime : ${runtime(process.uptime())}`,
          sourceUrl: global.linksaluran || "https://whatsapp.com",
          thumbnail: await getBuffer(global.img),
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m }
  );
};

handler.command = ["listchannel", "listch"];
handler.tags = ["info"];
handler.help = ["listchannel"];

export default handler;