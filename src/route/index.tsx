import Guests from "pages/account/Guests";
import MyProfile from "pages/account/MyProfile";
import CancelMyReservation from "pages/trip/CancelMyReservation";
import MakePayment from "pages/trip/MakePayment";
import ManageTransfer from "pages/trip/ManageTransfer";
import ModifyMyReservation from "pages/trip/ModifyMyReservation";
import MyTrips from "pages/trip/MyTrips";
import RoomManagement from "pages/trip/RoomManagement";
import { Route, Routes } from "react-router-dom";

export default function RouterView() {
  return (
    <Routes>
      {/* available routes for all pages */}
      <Route path="/" element={<MyTrips />} />
      <Route path="/home" element={<MyTrips />} />
      <Route path="/my-trips" element={<MyTrips />} />
      <Route path="/manage-transfers" element={<ManageTransfer />} />
      <Route path="/make-payment" element={<MakePayment />} />
      <Route path="/modify-my-reservation" element={<ModifyMyReservation />} />
      <Route path="/cancel-my-reservations" element={<CancelMyReservation />} />
      <Route path="/room-management" element={<RoomManagement />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/guests" element={<Guests />} />
    </Routes>
  );
}
