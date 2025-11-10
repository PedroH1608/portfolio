import LightIcon from "/icons/light.svg";
import DarkIcon from "/icons/dark.svg";

export const themeConfig = {
  light: {
    name: "light",
    layout: {
      backgroundColor: "bg-background",
      textColor: "text-text-primary",
      borderColor: "border-border",
      buttonColor: "bg-button/70",
      buttonDescriptionColor: "bg-button",
      buttonHoverColor: "hover:bg-button-hover",
      foregroundColor: "bg-foreground",
      accentColor: "text-accent",
    },
    icon: LightIcon,
  },
  dark: {
    name: "dark",
    layout: {
      backgroundColor: "bg-background-dark",
      textColor: "text-text-primary-dark",
      borderColor: "border-border-dark",
      buttonColor: "bg-button-dark/70",
      buttonDescriptionColor: "bg-button-dark",
      buttonHoverColor: "hover:bg-button-hover-dark",
      foregroundColor: "bg-foreground-dark",
      accentColor: "text-accent",
    },
    icon: DarkIcon,
  },
};
