import { HomeSharp, People } from "@material-ui/icons";
import PeopleIcon from '@material-ui/icons/People';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LinkPage from "../interfaces/link-page";

export const MENU:LinkPage[]  = [

    {
        icon:<HomeSharp></HomeSharp>,
        label:"Home",
        path:"/"
    },
    {
        icon:<PeopleIcon></PeopleIcon>, 
        label:"Users",
        path:"/users"
    },
    {
        icon:<AnnouncementIcon></AnnouncementIcon>, 
        label:"Posts",
        path:"/posts"
    },
    

]