import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
];

export const socials = [
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://crystlfinance.medium.com/",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/crystlfinance/",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/CrystlFinance",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/CrystlFinance",
  },
  {
    label: "Gitbook",
    icon: "GitbookIcon",
    href: "https://polycrystal.gitbook.io/polycrystal-finance/",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.com/invite/ZD8WW49ZbB",
  },
  {
    label: "Youtube",
    icon: "YoutubeIcon",
    href: "https://www.youtube.com/channel/UCzg0zBiYixyqJ_IcuRut_aQ",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
