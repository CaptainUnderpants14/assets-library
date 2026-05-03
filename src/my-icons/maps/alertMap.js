import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";
import * as aiIcons from "react-icons/ai";
import * as io5Icons from "react-icons/io5";

// Alert / Attention icons map
export const alertIcons = {
  // Notifications
  bell: faIcons.FaBell,
  notifications: mdIcons.MdNotifications,
  notificationsActive: mdIcons.MdNotificationsActive,
  notificationAlt: aiIcons.AiFillNotification,
  notificationIon: io5Icons.IoNotifications,

  // Silence / Mute
  silent: faIcons.FaBellSlash,
  mute: io5Icons.IoNotificationsOff,

  // Snooze
  snooze: mdIcons.MdSnooze,

  // Warnings
  warning: mdIcons.MdWarning,
  warningAlt: aiIcons.AiFillWarning,
  warningOutline: aiIcons.AiOutlineWarning,
  warningIon: io5Icons.IoWarning,
  reportProblem: mdIcons.MdReportProblem,

  // Exclamation / Attention
  exclamation: faIcons.FaExclamation,
  exclamationTriangle: faIcons.FaExclamationTriangle,
  exclamationCircle: faIcons.FaExclamationCircle,
  exclamationOutline: aiIcons.AiOutlineExclamationCircle,
  alertCircle: io5Icons.IoAlertCircle,
  alert: io5Icons.IoAlert,

  // Info
  info: mdIcons.MdInfo,
  infoCircle: faIcons.FaInfoCircle,
  infoOutline: aiIcons.AiOutlineInfoCircle,
  infoIon: io5Icons.IoInformationCircle,

  // Errors / Critical
  error: mdIcons.MdError,
  errorCircle: faIcons.FaTimesCircle,
  critical: faIcons.FaSkullCrossbones,
  report: mdIcons.MdReport,

  // Success
  success: faIcons.FaCheckCircle,

  // Help
  help: faIcons.FaQuestionCircle
};