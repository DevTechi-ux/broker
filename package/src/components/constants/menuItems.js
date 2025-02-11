import { text } from "framer-motion/client";
import "bootstrap-icons/font/bootstrap-icons.css"; 

export const adminMenu = [
    { text: "Dashboard", icon: "bi-speedometer2", route: "/admin/dashboard" },
    { text: "Manage-Users", icon: "bi-people", route: "/admin/users" },
    { text: "Deposit/WDL", icon: "bi-credit-card", route: "/admin/payments" },
    { text: "Reports/Log", icon: "bi-bar-chart", route: "/admin/reports" },
    { text: "Abook", icon: "bi-gear", route: "/admin/settings" },
    { text:"Bbook,", icon:"bi-gear", route:"/admin/settings"  },
    {text:"Abook Margin", icon:"bi-gear", route:"/admin/settings"  },
    {text:"Bbook Margin", icon:"bi-gear", route:"/admin/settings"  },
    {text:"Pnl", icon:"bi-gear", route:"/admin/settings"  },
  ];
  
  export const userMenu = [
    { text: "Home", icon: "bi-house-door", route: "/home" },
    { text: "Wallet", icon: "bi-wallet2", route: "/wallet" },
    { text: "Strategy", icon: "bi-lightbulb", route: "/strategy" },
    { text: "Payment", icon: "bi-credit-card", route: "/payment" },
    { text: "Chart", icon: "bi-bar-chart", route: "/chart" },
    { text: "Settings", icon: "bi-gear", route: "/settings" },
  ];
  