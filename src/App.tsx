import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RouterView from "route";
import { useStyles } from "styles";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import DrawerView from "components/DrawerView";

const drawerWidth = 300;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function App(props: Props) {
  const classes = useStyles();
  // useLocation hook for pathname

  const { window } = props;

  // state for full view temporary drawer in mobile view
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // open/close drawer in mobile view while clicking on toggle button
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // check if menu is selected in drawer

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // drawer menus

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.outerBoxStyle}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // not working while using useStyles hook, so style is defined inside sx props
          sx={{
            // calculate width of app bar by substracting drawer width
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className={classes.toolBarStyle}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // open close drawer while clicking on hamburger
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className={classes.typoGraphyStyle}
              variant="h6"
              noWrap
              component="div"
            >
              Room Management
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* mobile view drawer */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            className={classes.mobileDrawerStyle}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <DrawerView
              setMobileOpen={() => {
                setMobileOpen(!mobileOpen);
              }}
            />
          </Drawer>

          {/* desktop view drawer  */}
          <Drawer
            className={classes.desktopDrawerStyle}
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            open
          >
            <DrawerView
              setMobileOpen={() => {
                setMobileOpen(!mobileOpen);
              }}
            />
          </Drawer>
        </Box>

        {/* container */}
        <Box className={classes.containerBoxStyle} component="main">
          <Toolbar />
          <RouterView />
        </Box>
      </Box>{" "}
    </ThemeProvider>
  );
}
