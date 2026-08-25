/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/
let handler = async (m, { Lumnztyz6x, command }) => {
    const defaultMenu = `Klik nih ngab`;
    Lumnztyz6x.sendMessage(m.chat, {
        location: {
            degreesLatitude: -6.2088, // Ganti dengan latitude lokasi
            degreesLongitude: 106.8456 // Ganti dengan longitude lokasi
        },
        caption: defaultMenu,
        footer: foother,
        buttons: [
                {
                buttonId: `huu`,
                buttonText: {
                    displayText: '\nSaya pedo:v'
                },
                type: 1
            }
        ],
        headerType: 6,
        viewOnce: true
    }, { quoted: m });
};

handler.command = ["loli"]
export default handler 