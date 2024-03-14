import { CreditCard, Settings, DiscAlbumIcon } from "lucide-react";
import paths from "./paths";

const navItems = [
  { name: "Life", href: paths.life(), icon: DiscAlbumIcon },

  { name: "Billing", href: paths.billing(), icon: CreditCard },

  { name: "Settings", href: paths.settings(), icon: Settings },
];

export default navItems;
