import { SiYoutubeshorts } from "react-icons/si";
import { PiVideo, PiVideoFill } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";

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
    ]
}
