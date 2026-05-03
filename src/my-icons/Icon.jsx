import { iconMap } from "./iconMap";
import {
  getIconSize,
  extractIconFromClass,
  cleanIconClassName,
} from "./utils";

const Icon = ({
  name,
  group,
  size = "md",
  color = "currentColor",
  className = "",
  ...props
}) => {
  const parsed = extractIconFromClass(className);

  const finalGroup = parsed.group || group;
  const finalName = parsed.name || name;
  const finalSize = parsed.size || size;

  const IconComponent = iconMap[finalGroup]?.[finalName];

  if (!IconComponent) {
    console.warn(`Icon "${finalName}" not found in group "${finalGroup}"`);
    return null;
  }

  const cleanedClassName = cleanIconClassName(className);

  const iconProps = {
    size: getIconSize(finalSize),
    className: cleanedClassName,
    ...props,
  };

  // Only apply color if explicitly set
  if (color !== "currentColor") {
    iconProps.color = color;
  }

  return <IconComponent {...iconProps} />;
};

export default Icon;