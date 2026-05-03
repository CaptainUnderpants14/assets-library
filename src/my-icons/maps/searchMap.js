import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as mdIcons from "react-icons/md";
import * as aiIcons from "react-icons/ai";
import * as io5Icons from "react-icons/io5";

// Search / Filter / Discover icons map
export const searchIcons = {
  // 🔍 Basic search
  search: faIcons.FaSearch,
  searchMd: mdIcons.MdSearch,
  searchAlt: aiIcons.AiOutlineSearch,
  searchIon: io5Icons.IoSearch,
  manageSearch: mdIcons.MdManageSearch,

  // 🔎 Zoom (advanced search)
  zoomIn: faIcons.FaSearchPlus,
  zoomOut: faIcons.FaSearchMinus,
  zoomInAlt: mdIcons.MdZoomIn,
  zoomOutAlt: mdIcons.MdZoomOut,

  // 🧰 Filters
  filter: faIcons.FaFilter,
  filterMd: mdIcons.MdFilterList,
  filterAlt: aiIcons.AiOutlineFilter,
  filterIon: io5Icons.IoFilter,
  funnel: io5Icons.IoFunnel,

  // ↕️ Sorting
  sort: faIcons.FaSort,
  sortAsc: faIcons.FaSortUp,
  sortAscAlt2: tbIcons.TbSortAscending,
  sortDescAlt2: tbIcons.TbSortDescending,
  sortDesc: faIcons.FaSortDown,
  sortMd: mdIcons.MdSort,
  sortAscAlt: aiIcons.AiOutlineSortAscending,
  sortDescAlt: aiIcons.AiOutlineSortDescending,
  swap: io5Icons.IoSwapVertical
};