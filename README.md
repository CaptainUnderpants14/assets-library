================================================================================
                    REACT ICON LIBRARY - USAGE GUIDE
================================================================================

================================================================================
WITH TAILWIND(MAIN USP)
================================================================================
The main feature: Combine three parameters with Tailwind CSS for full control.

<Icon className="group_iconName_size* tailwind-classes"/> (*size is optional as default is 20px)

  // Numeric size + Tailwind color
  <Icon className="business_chartLine_50 text-red-500" />
  // Size + color + hover effect
  <Icon className="dev_html_40 text-blue-500 hover:scale-110" />
  // Full styling
  <Icon className="app_google_50 text-purple-500 hover:scale-125 transition duration-300" />

WITHOUT TAILWIND
================================================================================
// basic
<Icon group="business" name="chartLine" />
// numeric size
<Icon group="dev" name="spring" size={50} />
OR
// predefined sizes
<Icon group="business" name="chartLine" size="sm" />
<Icon group="dev" name="express" size="md" />
<Icon group="education" name="math" size="lg" />
<Icon group="business" name="chartLine" size="xl" />

// numeric size + color
<Icon group="business" name="chartLine" size={50} color="blue"/>

SIZING OPTIONS
================================================================================

ClassName DSL:
  <Icon className="business_chartLine_40" />      // numeric pixels
  <Icon className="business_chartLine_sm" />      // small
  <Icon className="business_chartLine_md" />      // medium (default)
  <Icon className="business_chartLine_lg" />      // large
  <Icon className="business_chartLine_xl" />      // extra large

Props:
  <Icon group="business" name="chartLine" size={40} />
  <Icon group="business" name="chartLine" size="sm" />
  <Icon group="business" name="chartLine" size="md" />
  <Icon group="business" name="chartLine" size="lg" />
  <Icon group="business" name="chartLine" size="xl" />


COLORS & STYLING
================================================================================

With Tailwind CSS:
  <Icon className="business_chartLine text-red-500" />
  <Icon className="business_chartLine text-blue-500" />
  <Icon className="business_chartLine text-green-500" />

With color prop:
  <Icon group="business" name="chartLine" color="red" />
  <Icon group="business" name="chartLine" color="blue" />

Inherit from parent:
  <div className="text-green-600">
    <Icon group="business" name="chartLine" />
  </div>

Hover & animation effects:
  <Icon className="business_chartLine hover:scale-110" />
  <Icon className="business_chartLine hover:scale-125 transition duration-300" />


MIXED APPROACH (CLASS + PROPS)
================================================================================

Class defines icon, prop defines size:
  <Icon className="business_chartLine" size={60} />
  <Icon className="business_chartLine" size="lg" />

Class defines icon + size, prop overrides:
  <Icon className="business_chartLine_40" size="xl" />

Class defines icon, prop defines color:
  <Icon className="business_chartLine" color="green" />

Combine everything:
  <Icon
    className="business_chartLine_50 text-blue-500 hover:scale-110 transition"
    size="lg"
    color="purple"
  />


QUICK REFERENCE
================================================================================
Format (ClassName DSL):
  <Icon className="{group}_{iconName}[_{size}] [tailwind-classes]" />

  Examples:
    business_chartLine
    business_chartLine_50
    business_chartLine_md text-red-500 hover:cursor-pointer

Format (Props):
  <Icon group="{group}" name="{iconName}" [size] [className] [color] />

  Examples:
    <Icon group="business" name="chartLine" />
    <Icon group="business" name="chartLine" size={50} className="text-red-500" />
    <Icon group="business" name="chartLine" size="lg" color="blue" />


NOTES
================================================================================

• Numeric sizes are flexible (any pixel value: 32, 40, 50, 60, etc.)
• Predefined sizes map to specific pixel values
• Minor typos are handled gracefully (e.g., "business_chartLine_40_")
• Tailwind classes work directly in className attribute
• Props and classes can be mixed for maximum flexibility
• Color prop takes precedence over Tailwind color classes