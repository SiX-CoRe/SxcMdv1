/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/

let handler = async (m, { Lumnztyz6x, isAdmins, isBotAdmins, text, participants }) => {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  let message =
    text ||
    m.quoted?.text ||
    m.quoted?.caption;

  if (!message) return m.reply('Kirim teks atau reply pesan untuk dihidetag.');

  // fallback kalau participants kosong
  if (!participants || !participants.length) {
    const meta = await Lumnztyz6x.groupMetadata(m.chat);
    participants = meta.participants;
  }

  let member = participants.map(u => u.id);

  await Lumnztyz6x.sendMessage(m.chat, {
    text: message,
    mentions: member
  });
};

handler.command = ['hidetag', 'ht'];
handler.tags = ['group'];
handler.help = ['hidetag'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;