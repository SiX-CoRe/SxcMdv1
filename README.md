# Sxcmd Botz

> WhatsApp Bot berbasis **Node.js + Baileys** dengan fitur group management, downloader, sticker tools, broadcast, auto-JPM, dan berbagai utility lainnya.

**Sxcmd Botz** dikembangkan untuk penggunaan pribadi dan pengembangan oleh **Sixcorecomunity / LumnzTyz6x**.

---

## ✨ Features

### 🤖 Bot System
- Multi-file authentication
- WhatsApp Pairing Code
- Auto reconnect
- Runtime & system information
- Owner / public mode
- Auto read message
- Auto read status
- Anti-call
- Auto join group
- Dynamic configuration melalui `settings.js`

### 👥 Group Tools
- Promote member
- Demote member
- Kick member
- Tag all member
- Hide tag
- Get group ID
- List group
- Join group
- Leave group
- Broadcast ke group

### 📢 Broadcast
- JPM (Jadwal / pesan broadcast)
- JPM ke channel
- JPM ke WhatsApp group
- Push contact
- Push contact berdasarkan ID
- Auto JPM
- Blacklist JPM
- Save contact ke VCF

### 🛠️ Tools
- Sticker / Stiker
- Sticker dari image/video
- Brat
- Brat video
- Meme generator
- Emoji mix
- QC
- IQC
- HD image
- To Image
- Image to URL
- Get profile picture
- Set bot name
- Set bot bio
- Set bot profile picture

### 📥 Downloader
- TikTok
- Instagram
- Twitter / X
- MediaFire
- Pinterest
- Spotify
- YouTube / Play
- CapCut

### 🔐 Owner Tools
- Add case
- Delete case
- Get case
- Public mode
- Self mode
- Bot settings
- Bot status
- Payment information
- Custom configuration

---

## 📦 Requirements

Pastikan sudah tersedia:

- **Node.js** 18 atau lebih baru
- **npm**
- Internet yang stabil
- Akun WhatsApp untuk pairing

Untuk beberapa fitur media, **FFmpeg** juga digunakan.

Cek versi Node.js:

```bash
node -v
npm -v
```

---

## 🚀 Installation

Clone repository:

```bash
git clone https://github.com/SiX-CoRe/SxcMdv1.git
cd Sxcmd
```

Install dependencies:

```bash
npm install
```

Jalankan bot:

```bash
npm start
```

atau:

```bash
node index.js
```

> Jika repository menggunakan nama/folder berbeda, sesuaikan perintah `git clone` dan `cd` dengan lokasi repository kamu.

---

## ⚙️ Configuration

File konfigurasi utama:

```text
settings.js
```

Contoh konfigurasi:

```js
global.ownernumber = "628xxxxxxxxxx"
global.ownername = "Nama Owner"

global.namabot = "Sxcmd"
global.nomorbot = "628xxxxxxxxxx"

global.botMode = true
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false
```

### Konfigurasi channel

```js
global.web = "https://lynk.id/six6core"
global.linkSaluran = "https://whatsapp.com/channel/0029Vb7XYjLKgsNyWrRHL10k"
global.idSaluran = "120363409912187282@newsletter"
global.nameSaluran = "sixcore"
```

### Konfigurasi broadcast

```js
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave"
```

> Jangan memasukkan token, password, API key, atau kredensial pribadi ke repository publik.

---

## 🔑 Pairing WhatsApp

Saat pertama kali menjalankan bot, sistem akan meminta:

1. Nomor owner
2. Nama owner
3. Nomor WhatsApp bot

Setelah itu bot akan membuat **pairing code**.

Masukkan pairing code tersebut melalui:

**WhatsApp → Perangkat tertaut → Tautkan perangkat → Tautkan dengan nomor telepon**

Folder session akan dibuat otomatis setelah proses autentikasi berhasil.

---

## 📁 Struktur Project

```text
Sxcmd/
├── case.js
├── index.js
├── module.js
├── settings.js
├── package.json
├── LICENSE
│
├── lib/
│   ├── color.js
│   ├── exif.js
│   ├── loader.js
│   ├── mongoDB.js
│   ├── myfunc.js
│   ├── store.js
│   ├── unused.js
│   └── upload.js
│
└── plugins/
    ├── cekidch.js
    ├── createch.js
    ├── delete.js
    ├── demote.js
    ├── hidetag.js
    ├── jpmslide.js
    ├── kick.js
    ├── listch.js
    ├── loli.js
    ├── notifch.js
    ├── owner-addplugins.js
    ├── owner-delplugins.js
    ├── promote.js
    └── tagall.js
```

Folder `database/` dan `session/` dapat dibuat otomatis ketika bot dijalankan.

---

## 📋 Command

Prefix pada bot bersifat fleksibel. Contoh penggunaan:

```text
.menu
.runtime
.tiktok
.play
.sticker
.brat
.qc
.jpm
.jpmch
.pushkontak
.tagall
.hidetag
.promote
.demote
.kick
.listgc
.join
.leave
.public
.self
```

### Downloader

```text
.tiktok <url>
.igdl <url>
.twitter <url>
.mediafire <url>
.pinterest <query>
.play <query>
.spotify <query>
.capcut <url>
```

### Sticker & Media

```text
.sticker
.stiker
.brat <text>
.bratvid <text>
.smeme
.sgif
.toimg
.tourl
.hd
```

### Group

```text
.tagall
.hidetag <text>
.promote @user
.demote @user
.kick @user
.cekidgc
.listgc
.join <link>
.leave
```

### Broadcast

```text
.jpm <text>
.jpmch <text>
.jpmht <text>
.bcgroup <text>
.pushkontak <text>
.pushkontakid <text>
```

> Beberapa command membutuhkan status **owner/admin** dan konteks group tertentu.

---

## 🗄️ Database

Sistem menggunakan beberapa metode penyimpanan yang tersedia melalui konfigurasi:

- JSON / LowDB
- MongoDB
- Database adapter

Database lokal utama berada di:

```text
database/database.json
database/user.json
database/penting.json
database/contacts.vcf
```

Folder database akan dibuat otomatis apabila belum tersedia.

---

## 🔧 Development

Untuk menambahkan command, kamu dapat mengedit:

```text
case.js
```

Untuk plugin tambahan, gunakan:

```text
plugins/
```

File konfigurasi:

```text
settings.js
```

Utility:

```text
lib/myfunc.js
```

Module dependency:

```text
module.js
```

---

## ⚠️ Disclaimer

Project ini dibuat untuk **pembelajaran, eksperimen, dan penggunaan pribadi**.

Gunakan fitur bot secara bertanggung jawab dan patuhi:

- Ketentuan layanan WhatsApp
- Hukum yang berlaku
- Privasi pengguna
- Aturan komunitas dan group

Developer tidak bertanggung jawab atas penyalahgunaan, spam, kerugian, pemblokiran akun, atau masalah lain yang timbul akibat penggunaan project ini.

---

## 📜 License

Project ini menggunakan lisensi **MIT – ID** dengan ketentuan tambahan yang tercantum pada file `LICENSE`.

Jangan menghapus credit:

```text
LumnzTyz6x
Sixcorecomunity
```

Jika melakukan rename, recode, atau modifikasi, tetap cantumkan credit asli sesuai ketentuan project.

---

## 🌐 Official

**Sixcorecomunity**

- Telegram Channel: https://t.me/sixcorecomunity
- WhatsApp Channel: https://whatsapp.com/channel/0029Vb7XYjLKgsNyWrRHL10k
- Website / Link: https://lynk.id/six6core

---

## ❤️ Credits

**Sxcmd Botz**  
Made with ❤️ by **LumnzTyz6x / Sixcorecomunity**

> Sxcmd — Simple, Powerful, Customizable WhatsApp Bot.
