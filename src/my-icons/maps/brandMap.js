import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaDiscord,
  FaSnapchatGhost,
  FaPinterest,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
  FaTiktok
} from "react-icons/fa";

import {
  SiX,            // Twitter/X (new logo)
  SiGoogle,
//   SiLinkedin,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiDiscord,
  SiTiktok,
  SiReddit,
  SiWhatsapp,
  SiTelegram,
  SiSnapchat
} from "react-icons/si";

// Brand / Platform icons
export const brandIcons = {
  // 📸 Social media
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,     // legacy twitter
  x: SiX,                 // new Twitter/X
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
  snapchat: FaSnapchatGhost,
  reddit: FaReddit,
  pinterest: FaPinterest,

  // 💬 Messaging
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  discord: FaDiscord,

  // 🧑‍💻 Dev / Auth
  github: FaGithub,
  google: FaGoogle,

  // 🔁 Alternative (Simple Icons - cleaner logos)
  googleAlt: SiGoogle,
  githubAlt: SiGithub,
//   linkedinAlt: SiLinkedin,
  instagramAlt: SiInstagram,
  facebookAlt: SiFacebook,
  youtubeAlt: SiYoutube,
  discordAlt: SiDiscord,
  tiktokAlt: SiTiktok,
  redditAlt: SiReddit,
  whatsappAlt: SiWhatsapp,
  telegramAlt: SiTelegram,
  snapchatAlt: SiSnapchat
};