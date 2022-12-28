import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { selected } from "utils";
import { useStyles } from "styles";
import { useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface setMobileOpenType {
  setMobileOpen?: () => void;
  menus: {
    primary: string;
    secondary?: string;
  }[];
  toolBarText: string;
}

// interface typeMenu {
//   primary: string;
//   secondary?: string;
// }
const MenuView: React.FC<setMobileOpenType> = ({
  setMobileOpen,
  menus,
  toolBarText,
}) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div>
      <Toolbar className={classes.drawerToolBarStyle}>{toolBarText} </Toolbar>
      <Divider />
      <List>
        {menus.map((text: any, index: number) => (
          <ListItem
            component={Link}
            to={text.url}
            key={text.primary}
            disablePadding
            className={
              selected(text.url, index, location)
                ? classes.selected
                : classes.notSelected
            }
          >
            <ListItemButton onClick={setMobileOpen}>
              <ListItemIcon>
                {
                  <text.icon
                    className={
                      selected(text.url, index, location)
                        ? classes.selectedIconStyle
                        : classes.iconStyle
                    }
                  />
                }
              </ListItemIcon>
              <ListItemText
                className={
                  selected(text.url, index, location)
                    ? classes.selectedPrimaryMenuStyle
                    : classes.primaryMenuStyle
                }
                primary={text.primary}
                secondary={
                  text?.secondary && (
                    <React.Fragment>
                      <Typography
                        className={
                          selected(text.url, index, location)
                            ? classes.selectedSecondaryMenuStyle
                            : classes.secondaryMenuStyle
                        }
                        component="span"
                        variant="body2"
                        // color="text.primary"
                      >
                        {text.secondary}
                      </Typography>
                    </React.Fragment>
                  )
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default MenuView;
