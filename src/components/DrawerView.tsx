import menus from "utils/menus";
import MenuView from "./MenuView";

interface setMobileOpenType {
  setMobileOpen: () => void;
}

const DrawerView: React.FC<setMobileOpenType> = ({ setMobileOpen }) => {
  return (
    <>
      <MenuView
        setMobileOpen={setMobileOpen}
        menus={menus.tripMenus}
        toolBarText={"Trip Management"}
      />

      <MenuView
        setMobileOpen={setMobileOpen}
        menus={menus.accountMenus}
        toolBarText={"Account Management"}
      />
    </>
  );
};

export default DrawerView;
