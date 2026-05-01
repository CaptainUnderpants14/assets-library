import { iconMap } from "./iconMap";
import { getIconSize } from "./utils";

const Icon = ({
  name,
  group = "general", // default group
  size = "md",
  color = "currentColor",
  className = "",
  ...props
}) => {
  const IconComponent = iconMap[group]?.[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in group "${group}"`);
    return null;
  }

  return (
    <IconComponent
      size={getIconSize(size)}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Icon;