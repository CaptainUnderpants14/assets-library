// ================= IMPORTS =================
import {
  FaHammer,
  FaWrench,
  FaScrewdriver,
  FaCut,
  FaRuler,
} from "react-icons/fa";

import {
  MdConstruction,
  MdBuild,
  MdSettings,
} from "react-icons/md";

import {
  GiClaw,
  GiHatchet,
  GiHandSaw,
  GiWrench,
  GiScrew,
  GiChisel,
  GiClamp,
  GiTrowel,
  GiSpade,
  GiRake,
  GiDrill,
  GiPaintBrush,
  GiToolbox,
  GiBurningEmbers,
  GiStapler,
} from "react-icons/gi";

import {
  TbRuler,
  TbClipboard,
  TbRuler3,
  TbTool
} from "react-icons/tb";

// ================= MAP =================
export const toolsIcons = {
  // 🔨 HAMMERS
  hammer: FaHammer,
  clawHammer: GiClaw,

  // 🔧 WRENCH / DRIVER
  wrench: FaWrench,
//   wrenchAlt: TbWrench,
  ratchet: GiWrench,
  screwdriver: FaScrewdriver,
//   screwdriverAlt: TbScrewdriver,

  // ✂️ CUTTING / GRIP
  scissors: FaCut,

  // ⚙️ FASTENERS
  screw: GiScrew,

  // 🪚 SAWS
  handsaw: GiHandSaw,

  // 🪓 AXE / CHISEL
  hatchet: GiHatchet,
  chisel: GiChisel,

  // ⚡ POWER TOOLS
  drill: GiDrill,
  drillAlt: MdBuild,
  nailGun: GiStapler,
  heatGun: GiBurningEmbers,

  // 📏 MEASURING
  ruler: TbRuler,
  rulerAlt: FaRuler,
  chalkLine: TbClipboard,
  square: TbRuler3,

  // 🔌 ELECTRICAL
  multimeter: MdSettings,


  // 🧱 CLAMPING
  clamp: GiClamp,

  // 🧱 MASONRY
  trowel: GiTrowel,
  caulkingGun: GiPaintBrush,

  // 🌿 GARDEN
  spade: GiSpade,
  rake: GiRake,
  shears: FaCut,

  // 🌿 OUTDOOR
  trimmer: GiRake,

  // 🛠️ GENERAL
  toolbox: GiToolbox,
  tools: TbTool,
  build: MdConstruction,
};