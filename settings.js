require('dotenv').config();

const settings = {
  packname: 'Moon Bot',
  author: '‎',
  botName: "Moon Bot",
  botOwner: 'MOON', // Your name
  ownerNumber: '254745541538', //Set your number here without + symbol, just add country code & number without any space
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "private",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "3.0.8",
  updateZipUrl: "https://github.com/3joke/somiejokerbot-MD/archive/refs/heads/main.zip",
  // Media / Knight API (song, video, cards, etc.)
  somiejokerApiUrl: process.env.KNIGHT_API_URL || 'https:/somiejokerbotapi.stream',
  somiejokerApiKey: process.env.KNIGHT_API_KEY || 'somie',
  mediaApiUrl: process.env.MEDIA_API_URL || 'https://somiejokertbotapi.stream',
  mediaApiKey: process.env.MEDIA_API_KEY || 'somie',
  princeApiUrl: process.env.PRINCE_API_URL || 'https://api.princetechn.com',
  princeApiKey: process.env.PRINCE_API_KEY || 'prince',
};

module.exports = settings;
