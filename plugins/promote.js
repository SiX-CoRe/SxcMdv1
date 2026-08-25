/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/

let handler = async (m, { Lumnztyz6x, isAdmins, isBotAdmins, args, reply }) => {
  if (!m.isGroup) return reply(mess.group);
  if (!isAdmins) return reply(mess.admin);
  if (!isBotAdmins) return reply(mess.botAdmin);

  let user =
    m.quoted?.sender ||
    m.mentionedJid?.[0] ||
    (args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null);

  if (!user) return reply('Tag atau reply pesan user yang mau dijadikan admin.');

  await Lumnztyz6x.groupParticipantsUpdate(m.chat, [user], 'promote');
  return reply(`✅ Berhasil menaikkan @${user.split('@')[0]} menjadi admin grup.`, { mentions: [user] });
};

handler.command = ['promote'];
handler.tags = ['group'];
handler.help = ['promote'];
export default handler;