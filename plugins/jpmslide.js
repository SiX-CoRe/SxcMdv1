/*
• RENAME/RECODE? BOLEH ASAL KASI CREDITS : LUMNZTYZ.
DAN TEMPEL KAN LINK IG/CHANNEL KU YA
*/

import { generateWAMessageFromContent, generateWAMessage, proto } from "@whiskeysockets/baileys";
import fs from "fs";

let handler = async (m, { penting, Lumnztyz6x, isCreator, text }) => {
  if (!isCreator) return m.reply("⚠️ Fitur ini hanya untuk Developer bot!")

  const allGroups = await Lumnztyz6x.groupFetchAllParticipating()
  const groupIDs = Object.keys(allGroups)
  let sentCount = 0
  if (!groupIDs.length) return m.reply("❌ Tidak ada grup terdaftar.")

  const processMsg = await Lumnztyz6x.sendMessage(m.chat, { text: `*⏳ Memproses JPM Slide...*\nJumlah grup: ${groupIDs.length}\nTipe: Carousel Slide` }, { quoted: m })

  // === DATA SLIDE ===
  const dataSlide = [
    {
      title: `</> ${global.ownername} Menyediakan </>`,
      caption: `* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

* *Channel Testimoni :*
${global.linkSaluran}`,
      image: global.thumbbc,
      button: "Hubungi Kami",
      source: "https://wa.me/" + global.owner,
    },
    {
      title: "</> List Panel Run Bot Private </>",
      caption: `* Ram 1GB : Rp2000
* Ram 2 GB : Rp3000
* Ram 3 GB : Rp4000
* Ram 4 GB : Rp5000
* Ram 5 GB : Rp6000
* Ram 6 GB : Rp7000
* Ram 7 GB : Rp8000
* Ram 8 GB : Rp9000
* Ram 9 GB : Rp10.000
* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
_• Server private & kualitas terbaik!_
_• Script bot dijamin aman (anti drama/maling)_
_• Garansi 30 hari (unlimited replace)_
_• Server anti delay/lemot!_
_• Claim garansi wajib bawa bukti transaksi_`,
      image: global.thumbbc,
      button: "Beli Sekarang",
      source: "https://t.me/LumnzTyz",
    },
    {
      title: "</> Simulasi Template Slide </>",
      caption: `* Tsundere : Rp99999
* Loli : Rp99999999999
* Milf : Rp99999999
* Kuudere : Rp9000
* Dandere : Rp99000
* Yandere : Rp1000
* Onee-chan : Rp999999999999999
* Shoujo : Rp9000
* Maid : Rp10.000

_Benefit:_
• Kualitas terbaik
• Anti drama
• Garansi sekian kali
• Anti delay
• Masih segel pastinya 😳`,
      image: global.thumbbc,
      button: "Klik aja",
      source: "https://t.me/LumnzTyz",
    },
  ]

  for (const id of groupIDs) {
    if (penting?.blacklistJpm?.includes(id)) continue
    try {
      const cards = []

      for (const item of dataSlide) {
        const imgMsg = await generateWAMessage(
          m.chat,
          { image: { url: item.image } },
          { upload: Lumnztyz6x.waUploadToServer }
        )

        cards.push({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: item.caption || "",
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: item.title || "",
            hasMediaAttachment: true,
            imageMessage: imgMsg.message.imageMessage,
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: item.button || "Open",
                  url: item.source || "https://lynk.id/six6core",
                }),
              },
            ],
          }),
        })
      }

      const bot = generateWAMessageFromContent(
        id,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `*All Transaksi Open*\n*Cek Produk Kami Dibawah Ini*`,
                }),
               
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false,
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards,
                }),
              }),
            },
          },
        },
        {}
      )

      await Lumnztyz6x.relayMessage(id, bot.message, { messageId: bot.key.id })
      sentCount++
      await new Promise(resolve => setTimeout(resolve, global.delayJpm || 4000))
    } catch (err) {
      console.error(`❌ Gagal kirim ke ${id}:`, err)
    }
  }

  await Lumnztyz6x.sendMessage(m.chat, { text: `✅ JPM Slide Selesai!*\nBerhasil terkirim ke *${sentCount}* grup dari total ${groupIDs.length}.` }, { edit: processMsg.key })
}

handler.help = ["jpmslide"]
handler.tags = ["owner"]
handler.command = ["jpmslide"]

export default handler;