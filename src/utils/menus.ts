import LocalMallIcon from "@mui/icons-material/LocalMall";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import CancelIcon from "@mui/icons-material/Cancel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
const tripMenus = [
  {
    primary: "My Trips",
    secondary: "View and manage tour travel",
    icon: LocalMallIcon,
    url: "my-trips",
  },
  {
    primary: "Manage Transfers",
    secondary: "Book of modify transportation",
    icon: DirectionsBusFilledIcon,
    url: "manage-transfers",
  },
  {
    primary: "Make a Payment",
    secondary: "Make and view payment history",
    icon: MonetizationOnIcon,
    url: "make-payment",
  },
  {
    primary: "Modify My Reservation",
    secondary: "Make changes and see pricing",
    icon: EditLocationIcon,
    url: "modify-my-reservation",
  },
  {
    primary: "Cancel My Reservation",
    secondary: "Review policiec and cancel",
    icon: CancelIcon,
    url: "cancel-my-reservations",
  },
  {
    primary: "Room Management",
    secondary: "Manage Rooms",
    icon: MeetingRoomIcon,
    url: "room-management",
  },
];

const accountMenus = [
  { primary: "My Profile", icon: ManageAccountsIcon, url: "my-profile" },
  { primary: "Guests", icon: GroupsIcon, url: "guests" },
];

const menus = { tripMenus, accountMenus };
export const drawerWidth = 300;
export default menus;
