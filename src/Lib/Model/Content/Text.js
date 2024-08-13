import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo, PiVideoFill } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { PiShareFatThin } from "react-icons/pi";

export const Text = {
    sideItems: [
        {
            title: "Ana Sayfa",
            icon: <GoHome />,
            selectedIcon:<GoHomeFill />,
        },
        {
            title: "Shorts",
            icon: <SiYoutubeshorts />,
            selectedIcon:<SiYoutubeshorts />,
        },
        {
            title: "Abonelikler",
            icon: <PiVideo />,
            selectedIcon:<PiVideoFill/>,
        },
        {
            title: "Oynatma Listesi",
            icon: <RiPlayList2Line />,
            selectedIcon:<RiPlayList2Line />,
        },
        {
            title: "Geçmiş",
            icon: <GiBackwardTime/>,
            selectedIcon:<GiBackwardTime/>,
        },
    ],
    menuItems:[
        {
            title: "Daha sonra izle",
            icon: <IoTimeOutline />,
        },
        {
            title: "Paylaş",
            icon: <PiShareFatThin />,
        },
        {
            title: "Oynatma listesine ekle",
            icon: <RiPlayList2Line />,
        },
    ]
}
