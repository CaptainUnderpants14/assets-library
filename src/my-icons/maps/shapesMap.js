// ================= IMPORTS =================
import {
  FaSquare, FaRegSquare, FaCircle, FaRegCircle, FaSquareFull
} from "react-icons/fa";

import {
  BsSquare, BsSquareFill, BsCircle, BsCircleFill,
  BsTriangle, BsTriangleFill, BsDiamond, BsDiamondFill
} from "react-icons/bs";

import {
  TbSquare, TbSquareRounded, TbSquareRotated, TbSquareDashed,
  TbCircle, TbCircleDashed, TbCircleHalf,
  TbTriangle, TbTriangleFilled, TbTriangleInverted,
  TbHexagon, TbHexagonFilled,
  TbPentagon, TbPentagonFilled,
  TbOctagon, TbOctagonFilled,
  TbDiamond, TbDiamondFilled,
  TbRectangle, TbRectangleVertical,
  TbOval, TbOvalVertical,
  TbBox, TbBoxMultiple,
} from "react-icons/tb";

import {
  MdOutlineCircle, MdOutlineSquare,
  MdOutlineHexagon, MdOutlinePentagon,
  MdOutlineRectangle
} from "react-icons/md";

import {
  GiCube, GiTriangleTarget,
     GiRoundStar,
  GiMeshBall, GiCrystalBall
} from "react-icons/gi";

import {
  AiOutlineBorder, AiOutlineRadiusSetting
} from "react-icons/ai";

import {
  HiOutlineSquare2Stack, HiOutlineCube
} from "react-icons/hi2";

import {
  IoSquareOutline, IoSquare, IoTriangle, IoEllipse
} from "react-icons/io5";

import {
  PiSquare, PiSquareFill, PiCircle, PiCircleFill,
  PiHexagon, PiHexagonFill, PiCylinder
} from "react-icons/pi";

import {
  LuSquare, LuCircle, LuTriangle, LuHexagon
} from "react-icons/lu";

import {
  BiSquare, BiCircle
} from "react-icons/bi";

import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import {
  TbStar,
  TbStarFilled,
  TbStarHalf,
} from "react-icons/tb";

import {
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

import {
  MdStar,
  MdStarBorder,
  MdStarHalf,
} from "react-icons/md";

import {
  GiStarShuriken,
} from "react-icons/gi";

import {
  IoStar,
  IoStarOutline,
} from "react-icons/io5";

// ================= MAP =================
export const shapesIcons = {
  // ================= SQUARE =================
  square: FaSquare,
  squareOutline: FaRegSquare,
  squareFill: FaSquareFull,
  squareBs: BsSquare,
  squareBsFill: BsSquareFill,
  squareTb: TbSquare,
  squareRounded: TbSquareRounded,
  squareRotated: TbSquareRotated,
  squareDashed: TbSquareDashed,
  squareMd: MdOutlineSquare,
  squareIo: IoSquare,
  squareIoOutline: IoSquareOutline,
  squarePi: PiSquare,
  squarePiFill: PiSquareFill,
  squareLu: LuSquare,
  squareBi: BiSquare,
  squareStack: HiOutlineSquare2Stack,

  // ================= CIRCLE =================
  circle: FaCircle,
  circleOutline: FaRegCircle,
  circleBs: BsCircle,
  circleBsFill: BsCircleFill,
  circleTb: TbCircle,
  circleDashed: TbCircleDashed,
  circleHalf: TbCircleHalf,
  circleMd: MdOutlineCircle,
  circlePi: PiCircle,
  circlePiFill: PiCircleFill,
  circleLu: LuCircle,
  circleBi: BiCircle,
  meshCircle: GiMeshBall,
  crystalBall: GiCrystalBall,

  // ================= TRIANGLE =================
  triangle: TbTriangle,
  triangleFill: TbTriangleFilled,
  triangleBs: BsTriangle,
  triangleBsFill: BsTriangleFill,
  triangleInverted: TbTriangleInverted,
  triangleTarget: GiTriangleTarget,
  triangleIo: IoTriangle,
  triangleLu: LuTriangle,

  // ================= RECTANGLES =================
  rectangle: TbRectangle,
  rectangleVertical: TbRectangleVertical,
  rectangleMd: MdOutlineRectangle,
  rectangleBorder: AiOutlineBorder,

  // ================= HEXAGON =================
  hexagon: TbHexagon,
  hexagonFill: TbHexagonFilled,
  hexagonMd: MdOutlineHexagon,
  hexagonPi: PiHexagon,
  hexagonPiFill: PiHexagonFill,
  hexagonLu: LuHexagon,
//   hexagonBi: BiHexagon,

  // ================= PENTAGON =================
  pentagon: TbPentagon,
  pentagonFill: TbPentagonFilled,
  pentagonMd: MdOutlinePentagon,

  // ================= OCTAGON =================
  octagon: TbOctagon,
  octagonFill: TbOctagonFilled,

  // ================= DIAMOND =================
  diamond: TbDiamond,
  diamondFill: TbDiamondFilled,
  diamondBs: BsDiamond,
  diamondBsFill: BsDiamondFill,

  // ================= OVAL =================
  oval: TbOval,
  ovalVertical: TbOvalVertical,
  ellipse: IoEllipse,

  // ================= 3D SHAPES =================
  cube: GiCube,
  cubeOutline: HiOutlineCube,
  box: TbBox,
  boxes: TbBoxMultiple,
  cylinder: PiCylinder,

  starRound: GiRoundStar,
  radius: AiOutlineRadiusSetting,

  // ================= EXTRA VARIANTS =================
  squareAlt1: TbSquare,
  squareAlt2: BsSquare,
  squareAlt3: PiSquare,
  circleAlt1: TbCircle,
  circleAlt2: BsCircle,
  circleAlt3: PiCircle,
  triangleAlt1: TbTriangle,
  triangleAlt2: BsTriangle,
  triangleAlt3: IoTriangle,
  hexAlt1: TbHexagon,
  hexAlt2: PiHexagon,

  // ================= FILL VARIANTS =================
  fillCircleAlt: BsCircleFill,
  fillSquareAlt: BsSquareFill,
  fillTriangleAlt: BsTriangleFill,
  fillDiamondAlt: BsDiamondFill,
  // ================= ⭐ STARS =================
star: FaStar,
starOutline: FaRegStar,
starHalf: FaStarHalfAlt,

starTb: TbStar,
starTbFill: TbStarFilled,
starTbHalf: TbStarHalf,

starBs: BsStar,
starBsFill: BsStarFill,
starBsHalf: BsStarHalf,

starMd: MdStar,
starMdOutline: MdStarBorder,
starMdHalf: MdStarHalf,

starIo: IoStar,
starIoOutline: IoStarOutline,

starShuriken: GiStarShuriken, // stylistic variation

// ================= ▭ RECTANGLES (NON-SQUARE) =================
rectangleAlt: TbRectangle,
rectangleVerticalAlt: TbRectangleVertical,

rectangleWide: TbRectangle,          // horizontal use
rectangleTall: TbRectangleVertical,  // vertical use

rectangleAlt2: MdOutlineRectangle,
rectangleBorderAlt: AiOutlineBorder,

rectangleSoft: TbRectangle,          // UI usage variant
rectangleFrame: TbRectangle,
};