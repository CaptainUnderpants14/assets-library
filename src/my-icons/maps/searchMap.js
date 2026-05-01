import {
  FaSearch,
  FaSearchPlus,
  FaSearchMinus,
  FaFilter,
  FaSort,
  FaSortUp,
  FaSortDown
} from "react-icons/fa";

import {
  MdSearch,
  MdFilterList,
  MdSort,
  MdZoomIn,
  MdZoomOut,
  MdManageSearch
} from "react-icons/md";

import {
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlineSortAscending,
  AiOutlineSortDescending
} from "react-icons/ai";

import {
  IoSearch,
  IoFilter,
  IoFunnel,
  IoSwapVertical
} from "react-icons/io5";

// Search / Filter / Discover icons map
export const searchIcons = {
  // 🔍 Basic search
  search: FaSearch,
  searchMd: MdSearch,
  searchAlt: AiOutlineSearch,
  searchIon: IoSearch,
  manageSearch: MdManageSearch,

  // 🔎 Zoom (advanced search)
  zoomIn: FaSearchPlus,
  zoomOut: FaSearchMinus,
  zoomInAlt: MdZoomIn,
  zoomOutAlt: MdZoomOut,

  // 🧰 Filters
  filter: FaFilter,
  filterMd: MdFilterList,
  filterAlt: AiOutlineFilter,
  filterIon: IoFilter,
  funnel: IoFunnel,

  // ↕️ Sorting
  sort: FaSort,
  sortAsc: FaSortUp,
  sortDesc: FaSortDown,
  sortMd: MdSort,
  sortAscAlt: AiOutlineSortAscending,
  sortDescAlt: AiOutlineSortDescending,
  swap: IoSwapVertical
};