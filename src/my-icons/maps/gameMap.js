// ================= IMPORTS =================
import {
  FaFutbol,
  FaFootballBall,
  FaBasketballBall,
  FaVolleyballBall,
  FaBaseballBall,
  FaTableTennis,
  FaGolfBall,
  FaRunning,
  FaSwimmer,
  FaHorse,
  FaCar,
  FaChess,
  FaDice,
} from "react-icons/fa";

import {
  MdSportsSoccer,
  MdSportsBasketball,
  MdSportsVolleyball,
  MdSportsCricket,
  MdSportsBaseball,
  MdSportsTennis,
  MdSportsGolf,
  MdSportsEsports,
} from "react-icons/md";

import {
  GiSoccerBall,
  GiBasketballBall,
  GiCricketBat,
  GiBaseballBat,
  GiTennisBall,
  GiPingPongBat,
  GiBoxingGlove,
  GiArcheryTarget,
  GiSkis,
  GiSnowboard,
  GiSurfBoard,
  GiBoatFishing,
  GiMountainClimbing,
  GiParachute,
  GiRaceCar,
  GiCardPlay,
  GiDart,
  GiSoccerKick,
  GiWhip,
} from "react-icons/gi";

import {
  TbBallFootball,
  TbBallBasketball,
  TbBallVolleyball,
  TbBallTennis,
  TbBallBowling,
  TbHorseToy,
  TbDeviceGamepad2,
} from "react-icons/tb";

// ================= MAP =================
export const gameIcons = {
  // ================= 🏆 TEAM SPORTS =================
  football: FaFutbol,
  soccerMd: MdSportsSoccer,
  soccerAlt: GiSoccerBall,

  americanFootball: FaFootballBall,
  rugby: TbBallFootball,

  basketball: FaBasketballBall,
  basketballMd: MdSportsBasketball,
  basketballAlt: GiBasketballBall,

  volleyball: FaVolleyballBall,
  volleyballMd: MdSportsVolleyball,
  volleyballAlt: TbBallVolleyball,

  cricket: GiCricketBat,
  cricketMd: MdSportsCricket,

  baseball: FaBaseballBall,
  baseballMd: MdSportsBaseball,
  baseballBat: GiBaseballBat,

  kabaddi: GiSoccerKick,
  netball: TbBallBasketball,

  // ================= 🎾 RACKET SPORTS =================
  tennis: GiTennisBall,
  tennisMd: MdSportsTennis,
  badminton: TbBallTennis,
  tableTennis: FaTableTennis,
  squash: GiPingPongBat,
  pickleball: TbBallTennis,

  // ================= ⚔️ COMBAT =================
  boxing: GiBoxingGlove,
  archery: GiArcheryTarget,

  // ================= ❄️ WINTER =================
  skiing: GiSkis,
  snowboarding: GiSnowboard,

  // ================= ⚾ BALL SPORTS =================
  golf: FaGolfBall,
  golfMd: MdSportsGolf,
  bowling: TbBallBowling,
  dodgeball: TbBallBasketball,

  // ================= 🏃 ATHLETICS =================
  running: FaRunning,

  // ================= 🌊 WATER =================
  swimming: FaSwimmer,
  surfing: GiSurfBoard,
  fishing: GiBoatFishing,


  // ================= 🐎 EQUESTRIAN =================
  horseRacing: FaHorse,
  polo: TbHorseToy,

  // ================= 🏎️ MOTORSPORT =================
  formula1: GiRaceCar,
  nascar: FaCar,

  // ================= 🪂 EXTREME =================
  climbing: GiMountainClimbing,
  skydiving: GiParachute,

  // ================= 🧠 MIND GAMES =================
  chess: FaChess,
  poker: GiCardPlay,
  darts: GiDart,
  esports: MdSportsEsports,


  // ================= ♿ PARA SPORTS =================
  wheelchairBasketball: MdSportsBasketball,
  wheelchairTennis: MdSportsTennis,

  // ================= ✨ FANTASY =================
  quidditch: GiSoccerBall,
  podracing: GiRaceCar,

  // ================= 🛡️ HISTORICAL =================
  jousting: GiWhip,
  pankration: GiBoxingGlove,

  // ================= 🎪 KIDS =================
  marbles: FaDice,
  gamePad: TbDeviceGamepad2
};