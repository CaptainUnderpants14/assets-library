// ================= IMPORTS =================
import {
  FaMousePointer,
  FaHandPointer,
  FaCrosshairs,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

import {
  MdMouse,
  MdTouchApp,
  MdOpenWith,
  MdZoomIn,
  MdZoomOut,
  MdDragIndicator,
  MdPanTool,
} from "react-icons/md";

import {
  TbPointer,
  TbHandFinger,
  TbCursorText,
  TbCursorOff,
  TbArrowsMove,
  TbArrowsHorizontal,
  TbArrowsVertical,
  TbResize,
  TbZoomIn,
  TbZoomOut,
  TbDragDrop,
} from "react-icons/tb";

import {
  GiArrowCursor,
  GiClick,
  GiGrab,
} from "react-icons/gi";

import {
  AiOutlineDrag,
  AiOutlineSelect,
} from "react-icons/ai";

import { IoIosResize, IoMdResize  } from "react-icons/io";

// ================= MAP =================
export const cursorIcons = {
  // ================= 🖱️ BASIC POINTER =================
  pointer: FaMousePointer,
  pointerAlt: TbPointer,
  arrow: GiArrowCursor,

  // ================= 👆 HAND / CLICK =================
  hand: FaHandPointer,
  handAlt: TbHandFinger,
  click: GiClick,
  tap: MdTouchApp,
  mouse: MdMouse,

  // ================= ✍️ TEXT =================
  textCursorAlt: TbCursorText,

  // ================= 🎯 TARGET =================
  crosshair: FaCrosshairs,

  // ================= 🔄 DRAG =================
  drag: MdDragIndicator,
  dragAlt: AiOutlineDrag,
  dragMove: TbDragDrop,
  grab: GiGrab,
  move: MdOpenWith,
  moveAlt: TbArrowsMove,

  // ================= ↔️ RESIZE =================
  resize: TbResize,
  resizeWidth: IoIosResize,
  resizeHeight: IoMdResize,
  horizontalResize: TbArrowsHorizontal,
  verticalResize: TbArrowsVertical,
  expand: FaExpand,
  collapse: FaCompress,

  // ================= 🔍 ZOOM =================
  zoomIn: MdZoomIn,
  zoomOut: MdZoomOut,
  zoomInAlt: TbZoomIn,
  zoomOutAlt: TbZoomOut,

  // ================= ✋ INTERACTION =================
  grabHand: MdPanTool,
  select: AiOutlineSelect,

  // ================= 🚫 DISABLED =================
  disabled: TbCursorOff,
};