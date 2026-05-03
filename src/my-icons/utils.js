// src/my-icons/utils.js

// ================= SIZE MAP =================
export const sizeMap = {
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36,
};

// ================= GET SIZE =================
export const getIconSize = (size) => {
  if (typeof size === "string") {
    return sizeMap[size] || sizeMap.md;
  }
  return size || sizeMap.md;
};

// ================= EXTRACT ICON =================
// Supports:
// "business_chartLine_40"
// "business_chartLine_lg"
// "business_chartLine"

export const extractIconFromClass = (className = "") => {
  const parts = className.split(" ").filter(Boolean);

  for (let part of parts) {
    if (part.includes("_")) {
      // Remove trailing underscores like "business_chart_40_"
      const cleaned = part.replace(/_+$/, "");

      const tokens = cleaned.split("_").filter(Boolean);

      const group = tokens[0] || null;
      const name = tokens[1] || null;

      let size = null;

      if (tokens.length > 2) {
        const sizeToken = tokens[2];
        size = isNaN(sizeToken) ? sizeToken : Number(sizeToken);
      }

      return { group, name, size };
    }
  }
  return { group: null, name: null, size: null };
};

// ================= CLEAN CLASSNAME =================
export const cleanIconClassName = (className = "") => {
  const parts = className.split(" ").filter(Boolean);

  const iconToken = parts.find((p) => p.includes("_"));

  return parts.filter((p) => p !== iconToken).join(" ");
};