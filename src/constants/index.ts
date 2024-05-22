import { MdDashboardCustomize } from "react-icons/md";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { GiMantaRay } from "react-icons/gi";
import { DiYeoman } from "react-icons/di";

export const navLinks = [
    {
        name: "Dashboard",
        path: '/admin/dashboard',
        icon: MdDashboardCustomize
    },
    {
        name: "Gigolo",
        path: '/admin/gigolo',
        icon: DiYeoman
    },
    {
        name: "Talents",
        path: '/admin/talents',
        icon: GiMantaRay
    },
    {
        name: "Orders",
        path: '/admin/orders',
        icon: BsChatSquareHeartFill
    }
]