import {
  FaHeart,
  FaRegHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisH,
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
  MdMoreHoriz,
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
  IoEllipsisHorizontal,
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
  live: FaBroadcastTower
};