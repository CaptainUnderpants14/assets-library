import {
  FaSyncAlt,
  FaRedo,
  FaHome,
  FaArrowLeft,
  FaArrowRight,
  FaTrash,
  FaTimes,
  FaEdit,
  FaPen,
  FaCopy,
  FaPaste,
  FaList,
  FaEllipsisH,
  FaBars
} from "react-icons/fa";

import {
  MdRefresh,
  MdHome,
  MdArrowBack,
  MdArrowForward,
  MdDelete,
  MdEdit,
  MdContentCopy,
  MdContentPaste,
  MdViewList,
  MdMoreHoriz,
  MdMenu
} from "react-icons/md";

import {
  AiOutlineReload,
  AiOutlineHome,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineCopy,
} from "react-icons/ai";

import {
  IoRefresh,
  IoHome,
  IoArrowBack,
  IoArrowForward,
  IoTrash,
  IoPencil,
  IoCopy,
  IoList,
  IoEllipsisHorizontal
} from "react-icons/io5";

import {
  TbRefresh,
  TbHome,
  TbArrowLeft,
  TbArrowRight,
  TbTrash,
  TbEdit,
  TbCopy,
  TbMenu2
} from "react-icons/tb";

import {
  FaHeart,
  FaRegHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaBookmark,
  FaRegBookmark,
  FaShare,
  FaComment,
  FaPaperPlane,
  FaReply,
  FaRetweet,
  FaPhone,
  FaPhoneAlt,
  FaVideo,
  FaCamera,
  FaCameraRetro,
  FaBroadcastTower
} from "react-icons/fa";

import {
  MdFavorite,
  MdFavoriteBorder,
  MdThumbUp,
  MdThumbDown,
  MdBookmark,
  MdBookmarkBorder,
  MdShare,
  MdChat,
  MdSend,
  MdReply,
  MdCall,
  MdVideocam,
  MdPhotoCamera,
  MdSwitchCamera,
  MdOutlineChat
} from "react-icons/md";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineLike,
  AiOutlineDislike,
//   AiOutlineBookmark,
  AiOutlineMore,
  AiOutlineShareAlt,
  AiOutlineComment,
  AiOutlineSend,
  AiOutlinePhone,
  AiOutlineCamera,
  AiOutlineVideoCamera
} from "react-icons/ai";

import {
  IoHeart,
  IoHeartOutline,
  IoThumbsUp,
  IoThumbsDown,
  IoBookmark,
  IoBookmarkOutline,
  IoShareSocial,
  IoChatbubble,
  IoChatbubbleOutline,
  IoSend,
  IoCall,
  IoVideocam,
  IoCamera,
  IoCameraReverse,
  IoSync
} from "react-icons/io5";

import {
  FaDownload,
  FaUpload,
  FaLink,
  FaUnlink,
  FaBell,
  FaBellSlash,
  FaCog,
  FaInfoCircle,
  FaBatteryFull,
  FaPowerOff,
  FaMoon,
  FaLock,
  FaUnlock,
  FaShieldAlt
} from "react-icons/fa";

import {
  MdDownload,
  MdUpload,
  MdLink,
  MdLinkOff,
  MdNotifications,
  MdNotificationsOff,
  MdSettings,
  MdInfo,
  MdBatteryFull,
  MdPowerSettingsNew,
  MdBedtime,
  MdLock,
  MdLockOpen,
  MdSecurity
} from "react-icons/md";

import {
  AiOutlineDownload,
  AiOutlineUpload,
  AiOutlineLink,
  AiOutlineDisconnect,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiOutlinePoweroff,
  AiOutlineLock,
  AiOutlineUnlock
} from "react-icons/ai";

import {
  IoDownload,
  // IoUpload,
  IoLink,
  IoLinkOutline,
  IoNotifications,
  IoNotificationsOff,
  IoSettings,
  IoInformationCircle,
  IoBatteryFull,
  IoPower,
  IoMoon,
  IoLockClosed,
  IoLockOpen
} from "react-icons/io5";

// Combined Social / Media Icons
export const uiIconsMap = {
  // ❤️ Like / Favorite
  like: FaHeart,
  likeOutline: FaRegHeart,
  likeMd: MdFavorite,
  likeMdOutline: MdFavoriteBorder,
  likeAlt: AiFillHeart,
  likeAltOutline: AiOutlineHeart,
  likeIon: IoHeart,
  likeIonOutline: IoHeartOutline,

  // 👍 / 👎 Reactions
  thumbsUp: FaThumbsUp,
  thumbsDown: FaThumbsDown,
  thumbsUpMd: MdThumbUp,
  thumbsDownMd: MdThumbDown,
  likeOutlineAlt: AiOutlineLike,
  dislikeOutlineAlt: AiOutlineDislike,
  thumbsUpIon: IoThumbsUp,
  thumbsDownIon: IoThumbsDown,

  // 🔖 Bookmark / Save
  bookmark: FaBookmark,
  bookmarkOutline: FaRegBookmark,
  bookmarkMd: MdBookmark,
  bookmarkMdOutline: MdBookmarkBorder,
//   bookmarkAlt: AiOutlineBookmark,
  bookmarkIon: IoBookmark,
  bookmarkIonOutline: IoBookmarkOutline,

  // ⋯ More / Options
  more: FaEllipsisH,
  moreMd: MdMoreHoriz,
  moreAlt: AiOutlineMore,
  moreIon: IoEllipsisHorizontal,

  // 💬 Comment / Chat
  comment: FaComment,
//   commentOutline: FaRegComment,
  commentMd: MdChat,
  commentMdOutline: MdOutlineChat,
  commentAlt: AiOutlineComment,
  commentIon: IoChatbubble,
  commentIonOutline: IoChatbubbleOutline,

  // ↩️ Reply / Thread
  reply: FaReply,
  replyMd: MdReply,

  // 🔁 Repost / Retweet
  repost: FaRetweet,
  repostIon: IoSync,

  // 🔗 Share
  share: FaShare,
  shareMd: MdShare,
  shareAlt: AiOutlineShareAlt,
  shareIon: IoShareSocial,

  // 📤 Send / DM
  send: FaPaperPlane,
  sendMd: MdSend,
  sendAlt: AiOutlineSend,
  sendIon: IoSend,

  // 📞 Call
  phone: FaPhone,
  phoneAlt: FaPhoneAlt,
  phoneMd: MdCall,
  phoneOutline: AiOutlinePhone,
  phoneIon: IoCall,

  // 🎥 Video
  video: FaVideo,
  videoMd: MdVideocam,
  videoOutline: AiOutlineVideoCamera,
  videoIon: IoVideocam,

  // 📸 Camera
  camera: FaCamera,
  cameraAlt: FaCameraRetro,
  cameraMd: MdPhotoCamera,
  cameraSwitch: MdSwitchCamera,
  cameraOutline: AiOutlineCamera,
  cameraIon: IoCamera,
  cameraFlip: IoCameraReverse,

  // 📡 Live / Broadcast
  live: FaBroadcastTower,

  // ================= ⬇️ DOWNLOAD =================
  download: FaDownload,
  downloadMd: MdDownload,
  downloadAlt: AiOutlineDownload,
  downloadIon: IoDownload,

  // ================= ⬆️ UPLOAD =================
  upload: FaUpload,
  uploadMd: MdUpload,
  uploadAlt: AiOutlineUpload,
  // uploadIon: IoUpload,

  // ================= 🔗 LINK =================
  link: FaLink,
  linkMd: MdLink,
  linkAlt: AiOutlineLink,
  linkIon: IoLink,

  // ================= ❌ UNLINK =================
  unlink: FaUnlink,
  unlinkMd: MdLinkOff,
  unlinkAlt: AiOutlineDisconnect,
  unlinkIon: IoLinkOutline,

  // ================= 🔔 NOTIFICATIONS =================
  notification: FaBell,
  notificationOff: FaBellSlash,
  notificationMd: MdNotifications,
  notificationMdOff: MdNotificationsOff,
  notificationAlt: AiOutlineBell,
  notificationIon: IoNotifications,
  notificationIonOff: IoNotificationsOff,

  // ================= ⚙️ SETTINGS =================
  settings: FaCog,
  settingsMd: MdSettings,
  settingsAlt: AiOutlineSetting,
  settingsIon: IoSettings,

  // ================= 🔐 SECURITY =================
  security: FaShieldAlt,
  securityMd: MdSecurity,

  lock: FaLock,
  unlock: FaUnlock,
  lockMd: MdLock,
  unlockMd: MdLockOpen,
  lockAlt: AiOutlineLock,
  unlockAlt: AiOutlineUnlock,
  lockIon: IoLockClosed,
  unlockIon: IoLockOpen,


  // ================= ℹ️ INFO =================
  info: FaInfoCircle,
  infoMd: MdInfo,
  infoAlt: AiOutlineInfoCircle,
  infoIon: IoInformationCircle,

  // ================= 🔋 BATTERY =================
  battery: FaBatteryFull,
  batteryMd: MdBatteryFull,
  batteryIon: IoBatteryFull,

  // ================= ⏻ POWER =================
  power: FaPowerOff,
  powerMd: MdPowerSettingsNew,
  powerAlt: AiOutlinePoweroff,
  powerIon: IoPower,

  // ================= 🌙 SLEEP =================
  sleep: FaMoon,
  sleepMd: MdBedtime,
  sleepIon: IoMoon,

  // ================= 🔄 REFRESH =================
refresh: FaSyncAlt,
refreshMd: MdRefresh,
refreshAlt: AiOutlineReload,
refreshIon: IoRefresh,
refreshTb: TbRefresh,
reload: FaRedo,


// ================= 🏠 HOME =================
home: FaHome,
homeMd: MdHome,
homeAlt: AiOutlineHome,
homeIon: IoHome,
homeTb: TbHome,
dashboard: FaHome,

// ================= ⬅️➡️ NAVIGATION =================
back: FaArrowLeft,
backMd: MdArrowBack,
backAlt: AiOutlineArrowLeft,
backIon: IoArrowBack,
backTb: TbArrowLeft,

forward: FaArrowRight,
forwardMd: MdArrowForward,
forwardAlt: AiOutlineArrowRight,
forwardIon: IoArrowForward,
forwardTb: TbArrowRight,

// ================= 🗑️ DELETE =================
delete: FaTrash,
deleteMd: MdDelete,
deleteAlt: AiOutlineDelete,
deleteIon: IoTrash,
deleteTb: TbTrash,
remove: FaTimes,
clear: FaTimes,

// ================= ✏️ EDIT =================
edit: FaEdit,
editMd: MdEdit,
editAlt: AiOutlineEdit,
editIon: IoPencil,
editTb: TbEdit,
write: FaPen,

// ================= 📋 COPY / PASTE =================
copy: FaCopy,
copyMd: MdContentCopy,
copyAlt: AiOutlineCopy,
copyIon: IoCopy,
copyTb: TbCopy,
duplicate: FaCopy,

paste: FaPaste,
pasteMd: MdContentPaste,

list: FaList,
listMd: MdViewList,
listIon: IoList,

// ================= ⋯ MORE =================
moreDots: FaEllipsisH,
menu: FaBars,
menuMd: MdMenu,
menuTb: TbMenu2,
};