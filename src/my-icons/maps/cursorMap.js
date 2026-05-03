import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";
import * as tbIcons from "react-icons/tb";
import * as giIcons from "react-icons/gi";
import * as aiIcons from "react-icons/ai";
import * as ioIcons from "react-icons/io";

// ================= IMPORTS =================
// ================= MAP =================
export const cursorIcons = {
  // ================= 🖱️ BASIC POINTER =================
  pointer: faIcons.FaMousePointer,
  pointerAlt: tbIcons.TbPointer,
  arrow: giIcons.GiArrowCursor,

  // ================= 👆 HAND / CLICK =================
  hand: faIcons.FaHandPointer,
  handAlt: tbIcons.TbHandFinger,
  click: giIcons.GiClick,
  tap: mdIcons.MdTouchApp,
  mouse: mdIcons.MdMouse,

  // ================= ✍️ TEXT =================
  textCursorAlt: tbIcons.TbCursorText,

  // ================= 🎯 TARGET =================
  crosshair: faIcons.FaCrosshairs,

  // ================= 🔄 DRAG =================
  drag: mdIcons.MdDragIndicator,
  dragAlt: aiIcons.AiOutlineDrag,
  dragMove: tbIcons.TbDragDrop,
  grab: giIcons.GiGrab,
  move: mdIcons.MdOpenWith,
  moveAlt: tbIcons.TbArrowsMove,

  // ================= ↔️ RESIZE =================
  resize: tbIcons.TbResize,
  resizeWidth: ioIcons.IoIosResize,
  resizeHeight: ioIcons.IoMdResize,
  horizontalResize: tbIcons.TbArrowsHorizontal,
  verticalResize: tbIcons.TbArrowsVertical,
  expand: faIcons.FaExpand,
  collapse: faIcons.FaCompress,

  // ================= 🔍 ZOOM =================
  zoomIn: mdIcons.MdZoomIn,
  zoomOut: mdIcons.MdZoomOut,
  zoomInAlt: tbIcons.TbZoomIn,
  zoomOutAlt: tbIcons.TbZoomOut,

  // ================= ✋ INTERACTION =================
  grabHand: mdIcons.MdPanTool,
  select: aiIcons.AiOutlineSelect,

  // ================= 🚫 DISABLED =================
  disabled: tbIcons.TbCursorOff,
};