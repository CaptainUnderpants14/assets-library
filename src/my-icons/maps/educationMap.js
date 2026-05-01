// ================= IMPORTS =================
import {
  FaPen,
  FaPencilAlt,
  FaEraser,
  FaHighlighter,
  FaRuler,
  FaCut,
  FaBook,
  FaBookOpen,
  FaStickyNote,
  FaEnvelope,
  FaLaptop,
  FaTabletAlt,
  FaUsb,
  FaCalculator,
  FaHeadphones,
  FaCamera,
  FaFlask,
  FaMicroscope,
  FaThermometerHalf,
  FaAtom,
  FaPalette,
  FaPaintBrush,
  FaBrush,
  FaShapes,
  FaPaperclip,
  FaFolder,
  FaFileAlt,
  FaArchive,
  FaTshirt,
  FaRunning,
  FaStopwatch,
  FaChalkboard,
  FaGlobe,
  FaMap,
  FaPuzzlePiece,
  FaKey,
  FaLock,
  FaIdCard,
  FaCalendarAlt,
  FaBookmark,
  FaSearch,
  FaSquareRootAlt,
  FaSuperscript,
  FaDivide,
  FaEquals,
  FaInfinity,
} from "react-icons/fa";

import {
  MdSchool,
  MdScience,
  MdDevices,
  MdBatteryChargingFull,
  MdSpeaker,
  MdVideocam,
  MdBiotech,
  MdCleaningServices,
  MdSportsSoccer,
  MdEventNote,
  MdFunctions,
  MdTimeline,
} from "react-icons/md";

import {
  GiScissors,
  GiCompass,
  GiNotebook,
  GiTestTubes,
  GiBurningDot,
  GiMagnifyingGlass,
  GiPaintBucket,
  GiClayBrick,
  GiSewingNeedle,
  GiAbacus,
  GiMolecule,
  GiChemicalDrop,
  GiMagnet,
  GiElectric,
  GiSoundWaves,
  GiDna1,
  GiBrain,
  GiAtom 
//   GiCell,
} from "react-icons/gi";

import {
  TbNotebook,
  TbBottle,
  TbSpeakerphone,
  TbDeviceWatch,
  TbCalendar,
} from "react-icons/tb";

import { LuAtom } from "react-icons/lu";

// ================= MAP =================
export const schoolIcons = {
  // ✏️ Writing Tools
  pen: FaPen,
  pencil: FaPencilAlt,
  eraser: FaEraser,
  highlighter: FaHighlighter,
  marker: FaHighlighter,
  correctionPen: FaPaintBrush,
  ruler: FaRuler,
  compass: GiCompass,
  scissors: FaCut,
  glue: FaPaintBrush,

  // 📚 Books & Paper
  notebook: GiNotebook,
  register: TbNotebook,
  book: FaBook,
  openBook: FaBookOpen,
  stickyNotes: FaStickyNote,
  envelope: FaEnvelope,
  paperclip: FaPaperclip,
  folder: FaFolder,
  binder: FaArchive,
  file: FaFileAlt,

  // 💻 Devices
  laptop: FaLaptop,
  tablet: FaTabletAlt,
  usb: FaUsb,
  powerbank: MdBatteryChargingFull,
  headphones: FaHeadphones,
  calculator: FaCalculator,
  smartwatch: TbDeviceWatch,
  speaker: MdSpeaker,
  webcam: FaCamera,
  devices: MdDevices,
  speakerPhone: TbSpeakerphone,

  // 🧪 Lab Equipment
  beaker: FaFlask,
  testTubes: GiTestTubes,
  bunsenBurner: GiBurningDot,
  microscope: FaMicroscope,
  lab: MdScience,
  thermometer: FaThermometerHalf,
  chemical: GiChemicalDrop,
  molecule: GiMolecule,

  // 🎨 Art & Craft
  sketchbook: FaBookOpen,
  drawingPad: FaBook,
  charcoal: FaPaintBrush,
  pastels: FaPalette,
  watercolor: FaPaintBrush,
  brush: FaBrush,
  paintBucket: GiPaintBucket,
  clay: GiClayBrick,
  origami: FaShapes,
  craftKnife: GiScissors,
  thread: GiSewingNeedle,
  fabric: FaTshirt,

  // 🎒 Essentials
  pencilCase: FaPen,
  lunchbox: TbBottle,
  waterBottle: TbBottle,

  // 🏃 Sports
  shoes: FaRunning,
  tracksuit: FaTshirt,
  stopwatch: FaStopwatch,
  cone: MdSportsSoccer,

  // 🧑‍🏫 Classroom
  whiteboard: FaChalkboard,
  duster: MdCleaningServices,
  projector: MdVideocam,
  flashcards: FaStickyNote,
  charts: FaMap,
  globe: FaGlobe,
  map: FaMap,
  abacus: GiAbacus,
  puzzle: FaPuzzlePiece,

  // 🧼 Utility
  sanitizer: MdCleaningServices,
  lock: FaLock,
  key: FaKey,
  idCard: FaIdCard,

  // 📅 Planning
  planner: MdEventNote,
  calendar: FaCalendarAlt,
  calendarAlt: TbCalendar,
  bookmark: FaBookmark,

  // 🔍 Tools
  magnifyingGlass: GiMagnifyingGlass,
  search: FaSearch,

  // ================= 📐 MATH =================
  math: MdFunctions,
  algebra: FaSuperscript,
  calculus: MdTimeline,
  geometry: FaShapes,
  division: FaDivide,
  equals: FaEquals,
  infinity: FaInfinity,
  squareRoot: FaSquareRootAlt,

  // ================= ⚛️ PHYSICS =================
  physics: MdScience,
  magnet: GiMagnet,
  electricity: GiElectric,
  waves: GiSoundWaves,
  motion: MdTimeline,
  atom: FaAtom,
  atom2: GiAtom,
  atom3: LuAtom,

  // ================= 🧪 CHEMISTRY =================
  chemistry: MdScience,
  reaction: GiChemicalDrop,

  // ================= 🧬 BIOLOGY =================
  biology: MdBiotech,
  dna: GiDna1,
//   cell: GiCell,
  brain: GiBrain,

  // 🏫 General
  school: MdSchool,
};