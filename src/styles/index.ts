import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

export const useStyles = makeStyles((theme: any) => {
  return {
    selected: {
      backgroundColor: "#00BFC7",
    },
    notSelected: {
      backgroundColor: "white",
    },
    selectedIconStyle: {
      fontWeight: "bold",
      color: "#ffffff",
    },
    iconStyle: {
      color: "#00BFC7",
      fontWeight: "bold",
    },
    primaryMenuStyle: {
      color: "#000000",
      fontWeight: "bold",
    },
    selectedPrimaryMenuStyle: {
      color: "#ffffff",
      fontWeight: "bold",
    },
    secondaryMenuStyle: {
      color: "#4d4d4d",
    },
    selectedSecondaryMenuStyle: {
      color: "#ffffff",
    },

    outerBoxStyle: {
      display: "flex",
    },
    drawerToolBarStyle: {
      color: "#545454 ",
    },
    toolBarStyle: {
      backgroundColor: "#00BFC7",
    },
    typoGraphyStyle: {
      color: "white",
    },
    containerBoxStyle: {
      padding: "10px 15px",
      height: "100vh",
      width: `calc(100% - ${drawerWidth}px)`,
      overflow: "scroll",
      [theme.breakpoints.down("sm")]: {
        padding: "0px",
        width: "100%",
      },
    },
    mobileDrawerStyle: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: "100%",
      },
    },

    desktopDrawerStyle: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
      },
    },
    tabPanelStyle: {
      "& .MuiTabs-indicator": {
        backgroundColor: "#00BFC7",
      },
      "& .MuiTab-textColorPrimary.Mui-selected": {
        color: "#00BFC7",
      },
    },
    imageStyle: {
      width: "100%",
      height: "600px",
      objectFit: "cover",
      objectPosition: "bottom",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "auto",
      },
    },
    bookChipStyle: {
      fontSize: "0.9rem !important",
      padding: "1rem 0.2rem !important",
      borderRadius: "30px !important",
      color: "green !important",
      borderColor: "green !important",
      borderWidth: "2px !important",
    },
    balanceChipStyle: {
      fontSize: "0.9rem !important",
      padding: "1rem 0.2rem !important",
      borderRadius: "30px !important",
      color: "black !important",
      borderColor: "black !important",
      borderWidth: "2px !important",
    },
    collapseChipStyle: {
      fontSize: "0.9rem !important",
      padding: "1rem 0.2rem !important",
      borderRadius: "30px !important",
      color: "#00BFC7 !important",
      borderColor: "#00BFC7 !important",
      borderWidth: "2px !important",
    },
    collapseChipIconStyle: {
      color: "#00BFC7 !important",
      fontSize: "1.2rem !important",
      display: "flex !important",
      alignItems: "center !important",
    },
    bookChipIconStyle: {
      color: "green !important",
      fontSize: "1.2rem !important",
      display: "flex !important",
      alignItems: "center !important",
    },
    balanceChipIconStyle: {
      color: "black !important",
      fontSize: "1.2rem !important",
      display: "flex !important",
      alignItems: "center !important",
    },

    spinnerStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
    avatarStyle: {
      backgroundColor: "#00BFC7!important",
    },
    moreVertIconStyle: {
      cursor: "pointer",
      marginRight: "7px",
    },
    pastRoomStyle: {
      padding: "1px 15px",
    },
    hotelDescriptStyle: {
      textAlign: "justify",
    },
    roomStatusOuterStyle: {
      padding: "15px",
    },
    roomStatusInnerStyle: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    imageHeaderStyle: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    collapseViewStyle: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      alignItems: "center",
      fontSize: "1.1rem",
      color: "#00BFC7",
      marginTop: "30px",
    },
    guestOuterStyle: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    transportOuterStyle: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    modifyPaymentOuterStyle: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
    },
  };
});
