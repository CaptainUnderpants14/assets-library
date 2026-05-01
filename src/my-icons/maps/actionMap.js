import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaTrashAlt,
  FaEdit,
  FaCheck,
  FaTimes,
  FaPlusCircle,
  FaMinusCircle
} from "react-icons/fa";

import {
  MdAdd,
  MdRemove,
  MdDelete,
  MdEdit,
  MdCheck,
  MdClose,
  MdAddCircle,
  MdRemoveCircle
} from "react-icons/md";

import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineClose
} from "react-icons/ai";

import {
  IoAdd,
  IoRemove,
  IoTrash,
  IoCheckmark,
  IoClose
} from "react-icons/io5";

// Add / Remove / CRUD icons map
export const actionIcons = {
  // ➕ Add
  add: FaPlus,
  addMd: MdAdd,
  addAlt: AiOutlinePlus,
  addIon: IoAdd,
  addCircle: FaPlusCircle,
  addCircleMd: MdAddCircle,

  // ➖ Remove
  remove: FaMinus,
  removeMd: MdRemove,
  removeAlt: AiOutlineMinus,
  removeIon: IoRemove,
  removeCircle: FaMinusCircle,
  removeCircleMd: MdRemoveCircle,

  // 🗑️ Delete
  delete: FaTrash,
  deleteAlt: FaTrashAlt,
  deleteMd: MdDelete,
  deleteOutline: AiOutlineDelete,
  deleteIon: IoTrash,

  // ✏️ Edit
  edit: FaEdit,
  editMd: MdEdit,
  editOutline: AiOutlineEdit,

  // ✅ Confirm / Success
  check: FaCheck,
  checkMd: MdCheck,
  checkOutline: AiOutlineCheck,
  checkIon: IoCheckmark,

  // ❌ Cancel / Close
  close: FaTimes,
  closeMd: MdClose,
  closeOutline: AiOutlineClose,
  closeIon: IoClose
};