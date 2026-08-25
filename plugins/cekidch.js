/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/
import { runtime } from "../lib/myfunc.js";

let handler = async (m, { Lumnztyz6x, reply, text }) => {

  if (!text) return reply("⚠️ Masukkan minimal 1 link channel!");
  const processMsg = await Lumnztyz6x.sendMessage(m.chat, { text: "Sedang memeriksa channel..." });

  const links = text.split(/\s+/).slice(0, 10);
  let captionArr = [];

  for (let link of links) {
    if (!link.includes("https://whatsapp.com/channel/")) {
      captionArr.push(`[  !  ] Link tidak valid: ${link}`);
      continue;
    }

    let idPart = link.split('https://whatsapp.com/channel/')[1];

    try {
      let res = await Lumnztyz6x.newsletterMetadata("invite", idPart);

      captionArr.push(
        `*${res.name || "Tanpa Nama"}*\n` +
        `* ID Channel: ${res.id}\n` +
        `* Pengikut: ${res.subscribers || 0}\n` +
        `* Verifikasi: ${res.verification || "–"}\n` +
        `* State: ${res.state || "–"}\n`
      );

    } catch (err) {
      console.error("❌ Error cek ID channel:", err);
      captionArr.push(`[  x  ] Gagal cek channel: ${link}`);
    }
  }

  const caption = captionArr.join("\n\n") || "[  x  ] Tidak ada channel valid untuk dicek.";

  // Edit pesan awal dengan hasil
  await Lumnztyz6x.sendMessage(
    m.chat,
    {
      text: caption,
      edit: processMsg.key
    }
  );
};

handler.command = ["cekidch", "idch"];
handler.tags = ["info"];
handler.help = ["cekidch <link1> [link2]"];

export default handler;
