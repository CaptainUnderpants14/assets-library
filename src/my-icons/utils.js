// src/my-icons/utils.js

export const sizeMap = {
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36,
};

export const getIconSize = (size) => {
  if (typeof size === "string") {
    return sizeMap[size] || sizeMap.md; // fallback to md
  }
  return size || sizeMap.md;
};