let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • E-Wallet 」
│      *OVO/GOPAY*
│ •  [0822-3048-4350]
│    *DANA/SHOPEEPAY*
│ •  [0813-3033-2970]
│       *Pulsa*
│ •  [0813-3033-2970]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282230484350
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
