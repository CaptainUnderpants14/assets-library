import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";
import * as aiIcons from "react-icons/ai";
import * as io5Icons from "react-icons/io5";
import * as tbIcons from "react-icons/tb";

// Combined Social / Media Icons
export const uiIconsMap = {
  // ❤️ Like / Favorite
  like: faIcons.FaHeart,
  likeOutline: faIcons.FaRegHeart,
  likeMd: mdIcons.MdFavorite,
  likeMdOutline: mdIcons.MdFavoriteBorder,
  likeAlt: aiIcons.AiFillHeart,
  likeAltOutline: aiIcons.AiOutlineHeart,
  likeIon: io5Icons.IoHeart,
  likeIonOutline: io5Icons.IoHeartOutline,

  // 👍 / 👎 Reactions
  thumbsUp: faIcons.FaThumbsUp,
  thumbsDown: faIcons.FaThumbsDown,
  thumbsUpMd: mdIcons.MdThumbUp,
  thumbsDownMd: mdIcons.MdThumbDown,
  likeOutlineAlt: aiIcons.AiOutlineLike,
  dislikeOutlineAlt: aiIcons.AiOutlineDislike,
  thumbsUpIon: io5Icons.IoThumbsUp,
  thumbsDownIon: io5Icons.IoThumbsDown,

  // 🔖 Bookmark / Save
  bookmark: faIcons.FaBookmark,
  bookmarkOutline: faIcons.FaRegBookmark,
  bookmarkMd: mdIcons.MdBookmark,
  bookmarkMdOutline: mdIcons.MdBookmarkBorder,
//   bookmarkAlt: AiOutlineBookmark,
  bookmarkIon: io5Icons.IoBookmark,
  bookmarkIonOutline: io5Icons.IoBookmarkOutline,

  // ⋯ More / Options
  more: faIcons.FaEllipsisH,
  moreMd: mdIcons.MdMoreHoriz,
  moreAlt: aiIcons.AiOutlineMore,
  moreIon: io5Icons.IoEllipsisHorizontal,

  // 💬 Comment / Chat
  comment: faIcons.FaComment,
//   commentOutline: FaRegComment,
  commentMd: mdIcons.MdChat,
  commentMdOutline: mdIcons.MdOutlineChat,
  commentAlt: aiIcons.AiOutlineComment,
  commentIon: io5Icons.IoChatbubble,
  commentIonOutline: io5Icons.IoChatbubbleOutline,

  // ↩️ Reply / Thread
  reply: faIcons.FaReply,
  replyMd: mdIcons.MdReply,

  // 🔁 Repost / Retweet
  repost: faIcons.FaRetweet,
  repostIon: io5Icons.IoSync,

  // 🔗 Share
  share: faIcons.FaShare,
  shareMd: mdIcons.MdShare,
  shareAlt: aiIcons.AiOutlineShareAlt,
  shareIon: io5Icons.IoShareSocial,

  // 📤 Send / DM
  send: faIcons.FaPaperPlane,
  sendMd: mdIcons.MdSend,
  sendAlt: aiIcons.AiOutlineSend,
  sendIon: io5Icons.IoSend,

  // 📞 Call
  phone: faIcons.FaPhone,
  phoneAlt: faIcons.FaPhoneAlt,
  phoneMd: mdIcons.MdCall,
  phoneOutline: aiIcons.AiOutlinePhone,
  phoneIon: io5Icons.IoCall,

  // 🎥 Video
  video: faIcons.FaVideo,
  videoMd: mdIcons.MdVideocam,
  videoOutline: aiIcons.AiOutlineVideoCamera,
  videoIon: io5Icons.IoVideocam,

  // 📸 Camera
  camera: faIcons.FaCamera,
  cameraAlt: faIcons.FaCameraRetro,
  cameraMd: mdIcons.MdPhotoCamera,
  cameraSwitch: mdIcons.MdSwitchCamera,
  cameraOutline: aiIcons.AiOutlineCamera,
  cameraIon: io5Icons.IoCamera,
  cameraFlip: io5Icons.IoCameraReverse,

  // 📡 Live / Broadcast
  live: faIcons.FaBroadcastTower,

  // ================= ⬇️ DOWNLOAD =================
  download: faIcons.FaDownload,
  downloadMd: mdIcons.MdDownload,
  downloadAlt: aiIcons.AiOutlineDownload,
  downloadIon: io5Icons.IoDownload,

  // ================= ⬆️ UPLOAD =================
  upload: faIcons.FaUpload,
  uploadMd: mdIcons.MdUpload,
  uploadAlt: aiIcons.AiOutlineUpload,
  // uploadIon: IoUpload,

  // ================= 🔗 LINK =================
  link: faIcons.FaLink,
  linkMd: mdIcons.MdLink,
  linkAlt: aiIcons.AiOutlineLink,
  linkIon: io5Icons.IoLink,

  // ================= ❌ UNLINK =================
  unlink: faIcons.FaUnlink,
  unlinkMd: mdIcons.MdLinkOff,
  unlinkAlt: aiIcons.AiOutlineDisconnect,
  unlinkIon: io5Icons.IoLinkOutline,

  // ================= 🔔 NOTIFICATIONS =================
  notification: faIcons.FaBell,
  notificationOff: faIcons.FaBellSlash,
  notificationMd: mdIcons.MdNotifications,
  notificationMdOff: mdIcons.MdNotificationsOff,
  notificationAlt: aiIcons.AiOutlineBell,
  notificationIon: io5Icons.IoNotifications,
  notificationIonOff: io5Icons.IoNotificationsOff,

  // ================= ⚙️ SETTINGS =================
  settings: faIcons.FaCog,
  settingsMd: mdIcons.MdSettings,
  settingsAlt: aiIcons.AiOutlineSetting,
  settingsIon: io5Icons.IoSettings,

  // ================= 🔐 SECURITY =================
  security: faIcons.FaShieldAlt,
  securityMd: mdIcons.MdSecurity,

  lock: faIcons.FaLock,
  unlock: faIcons.FaUnlock,
  lockMd: mdIcons.MdLock,
  unlockMd: mdIcons.MdLockOpen,
  lockAlt: aiIcons.AiOutlineLock,
  unlockAlt: aiIcons.AiOutlineUnlock,
  lockIon: io5Icons.IoLockClosed,
  unlockIon: io5Icons.IoLockOpen,


  // ================= ℹ️ INFO =================
  info: faIcons.FaInfoCircle,
  infoMd: mdIcons.MdInfo,
  infoAlt: aiIcons.AiOutlineInfoCircle,
  infoIon: io5Icons.IoInformationCircle,

  // ================= 🔋 BATTERY =================
  battery: faIcons.FaBatteryFull,
  batteryMd: mdIcons.MdBatteryFull,
  batteryIon: io5Icons.IoBatteryFull,

  // ================= ⏻ POWER =================
  power: faIcons.FaPowerOff,
  powerMd: mdIcons.MdPowerSettingsNew,
  powerAlt: aiIcons.AiOutlinePoweroff,
  powerIon: io5Icons.IoPower,

  // ================= 🌙 SLEEP =================
  sleep: faIcons.FaMoon,
  sleepMd: mdIcons.MdBedtime,
  sleepIon: io5Icons.IoMoon,

  // ================= 🔄 REFRESH =================
refresh: faIcons.FaSyncAlt,
refreshMd: mdIcons.MdRefresh,
refreshAlt: aiIcons.AiOutlineReload,
refreshIon: io5Icons.IoRefresh,
refreshTb: tbIcons.TbRefresh,
reload: faIcons.FaRedo,


// ================= 🏠 HOME =================
home: faIcons.FaHome,
homeMd: mdIcons.MdHome,
homeAlt: aiIcons.AiOutlineHome,
homeIon: io5Icons.IoHome,
homeTb: tbIcons.TbHome,
dashboard: faIcons.FaHome,

// ================= ⬅️➡️ NAVIGATION =================
back: faIcons.FaArrowLeft,
backMd: mdIcons.MdArrowBack,
backAlt: aiIcons.AiOutlineArrowLeft,
backIon: io5Icons.IoArrowBack,
backTb: tbIcons.TbArrowLeft,

forward: faIcons.FaArrowRight,
forwardMd: mdIcons.MdArrowForward,
forwardAlt: aiIcons.AiOutlineArrowRight,
forwardIon: io5Icons.IoArrowForward,
forwardTb: tbIcons.TbArrowRight,

// ================= 🗑️ DELETE =================
delete: faIcons.FaTrash,
deleteMd: mdIcons.MdDelete,
deleteAlt: aiIcons.AiOutlineDelete,
deleteIon: io5Icons.IoTrash,
deleteTb: tbIcons.TbTrash,
remove: faIcons.FaTimes,
clear: faIcons.FaTimes,

// ================= ✏️ EDIT =================
edit: faIcons.FaEdit,
editMd: mdIcons.MdEdit,
editAlt: aiIcons.AiOutlineEdit,
editIon: io5Icons.IoPencil,
editTb: tbIcons.TbEdit,
write: faIcons.FaPen,

// ================= 📋 COPY / PASTE =================
copy: faIcons.FaCopy,
copyMd: mdIcons.MdContentCopy,
copyAlt: aiIcons.AiOutlineCopy,
copyIon: io5Icons.IoCopy,
copyTb: tbIcons.TbCopy,
duplicate: faIcons.FaCopy,

paste: faIcons.FaPaste,
pasteMd: mdIcons.MdContentPaste,

list: faIcons.FaList,
listMd: mdIcons.MdViewList,
listIon: io5Icons.IoList,

// ================= ⋯ MORE =================
moreDots: faIcons.FaEllipsisH,
menu: faIcons.FaBars,
menuMd: mdIcons.MdMenu,
menuTb: tbIcons.TbMenu2,
};