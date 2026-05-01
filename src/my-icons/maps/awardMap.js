import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCrown,
  FaStar,
  FaRegStar,
  FaCertificate,
  FaRibbon,
  FaGem
} from "react-icons/fa";

import {
  MdEmojiEvents,
  MdMilitaryTech,
  MdWorkspacePremium,
  MdStars,
  MdCardGiftcard
} from "react-icons/md";

import {
  AiFillTrophy,
  AiFillStar,
  AiOutlineStar
} from "react-icons/ai";

import {
  GiLaurelCrown,
  GiTrophyCup,
  GiGoldBar,
  GiRank3,
  GiPodiumWinner,
  GiAchievement
} from "react-icons/gi";

// Awards / Achievements / Rewards icons
export const awardIcons = {
  // 🏆 Trophy
  trophy: FaTrophy,
  trophyAlt: AiFillTrophy,
  trophyGame: GiTrophyCup,

  // 🥇 Medal / Rank
  medal: FaMedal,
  medalMd: MdMilitaryTech,
  rank: GiRank3,
  podium: GiPodiumWinner,

  // 🎖️ Award / Premium
  award: FaAward,
  awardMd: MdEmojiEvents,
  premium: MdWorkspacePremium,
  achievement: GiAchievement,

  // 👑 Crown / Prestige
  crown: FaCrown,
  laurel: GiLaurelCrown,

  // ⭐ Stars / Ratings
  star: FaStar,
  starOutline: FaRegStar,
  starAlt: AiFillStar,
  starAltOutline: AiOutlineStar,
  starsMd: MdStars,

  // 🎀 Badge / Ribbon / Certificate
  ribbon: FaRibbon,
  certificate: FaCertificate,

  // 💎 Rewards / Value
  gem: FaGem,
  gold: GiGoldBar,
  gift: MdCardGiftcard
};