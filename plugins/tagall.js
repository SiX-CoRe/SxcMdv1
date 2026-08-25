/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/

let handler = async (m, { Lumnztyz6x, isAdmins, isBotAdmins, reply, text }) => {
  if (!m.isGroup) return reply(mess.group);
  if (!isAdmins) return reply(mess.admin);
  if (!isBotAdmins) return reply(mess.botAdmin);

  let metadata = await Lumnztyz6x.groupMetadata(m.chat);
  let teks = `📢 *TagAll oleh Admin*\n\n${text ? text + "\n\n" : ""}`;
  let mentionAll = metadata.participants.map(a => a.id);
  mentionAll.forEach(u => (teks += `👤 @${u.split('@')[0]}\n`));

  await Lumnztyz6x.sendMessage(m.chat, { text: teks, mentions: mentionAll });
};

handler.command = ["tagall"];
handler.tags = ["group"];
handler.help = ["tagall"];
handler.group = true;

export default handler;