import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";
import * as aiIcons from "react-icons/ai";
import * as io5Icons from "react-icons/io5";

// Add / Remove / CRUD icons map
export const actionIcons = {
  // ➕ Add
  add: faIcons.FaPlus,
  addMd: mdIcons.MdAdd,
  addAlt: aiIcons.AiOutlinePlus,
  addIon: io5Icons.IoAdd,
  addCircle: faIcons.FaPlusCircle,
  addCircleMd: mdIcons.MdAddCircle,

  // ➖ Remove
  remove: faIcons.FaMinus,
  removeMd: mdIcons.MdRemove,
  removeAlt: aiIcons.AiOutlineMinus,
  removeIon: io5Icons.IoRemove,
  removeCircle: faIcons.FaMinusCircle,
  removeCircleMd: mdIcons.MdRemoveCircle,

  // 🗑️ Delete
  delete: faIcons.FaTrash,
  deleteAlt: faIcons.FaTrashAlt,
  deleteMd: mdIcons.MdDelete,
  deleteOutline: aiIcons.AiOutlineDelete,
  deleteIon: io5Icons.IoTrash,

  // ✏️ Edit
  edit: faIcons.FaEdit,
  editMd: mdIcons.MdEdit,
  editOutline: aiIcons.AiOutlineEdit,

  // ✅ Confirm / Success
  check: faIcons.FaCheck,
  checkMd: mdIcons.MdCheck,
  checkOutline: aiIcons.AiOutlineCheck,
  checkIon: io5Icons.IoCheckmark,

  // ❌ Cancel / Close
  close: faIcons.FaTimes,
  closeMd: mdIcons.MdClose,
  closeOutline: aiIcons.AiOutlineClose,
  closeIon: io5Icons.IoClose
};