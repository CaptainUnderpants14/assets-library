import {
  FaBell,
  FaExclamation,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
  FaQuestionCircle,
  FaTimesCircle,
  FaCheckCircle,
  FaSkullCrossbones,
  FaBellSlash
} from "react-icons/fa";

import {
  MdWarning,
  MdError,
  MdInfo,
  MdNotifications,
  MdNotificationsActive,
  MdReport,
  MdReportProblem,
  MdSnooze 
} from "react-icons/md";

import {
  AiFillWarning,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiFillNotification
} from "react-icons/ai";

import {
  IoWarning,
  IoNotifications,
  IoAlertCircle,
  IoAlert,
  IoInformationCircle,
  IoNotificationsOff 
} from "react-icons/io5";

// Alert / Attention icons map
export const alertIcons = {
  // Notifications
  bell: FaBell,
  notifications: MdNotifications,
  notificationsActive: MdNotificationsActive,
  notificationAlt: AiFillNotification,
  notificationIon: IoNotifications,

  // Silence / Mute
  silent: FaBellSlash,
  mute: IoNotificationsOff,

  // Snooze
  snooze: MdSnooze,

  // Warnings
  warning: MdWarning,
  warningAlt: AiFillWarning,
  warningOutline: AiOutlineWarning,
  warningIon: IoWarning,
  reportProblem: MdReportProblem,

  // Exclamation / Attention
  exclamation: FaExclamation,
  exclamationTriangle: FaExclamationTriangle,
  exclamationCircle: FaExclamationCircle,
  exclamationOutline: AiOutlineExclamationCircle,
  alertCircle: IoAlertCircle,
  alert: IoAlert,

  // Info
  info: MdInfo,
  infoCircle: FaInfoCircle,
  infoOutline: AiOutlineInfoCircle,
  infoIon: IoInformationCircle,

  // Errors / Critical
  error: MdError,
  errorCircle: FaTimesCircle,
  critical: FaSkullCrossbones,
  report: MdReport,

  // Success
  success: FaCheckCircle,

  // Help
  help: FaQuestionCircle
};