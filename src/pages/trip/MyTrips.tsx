import { useRoomQuery } from "app/services/room";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "components/TabPanel";
import Paper from "@mui/material/Paper";
import { useStyles } from "styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getTravelDate } from "utils";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Divider, Typography } from "@mui/material";
import TypoGraphyView from "components/TypoGraphyView";
import CollapseView from "components/trips/CollapseView";

export default function MyTrips() {
  const roomIds = [
    "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
    "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  ].toString();

  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const { data: roomsList, isFetching: roomsFetching } = useRoomQuery({
    params: { roomIds },
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      {roomsFetching ? (
        <CircularProgress className={classes.spinnerStyle} />
      ) : (
        <>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className={classes.tabPanelStyle}
          >
            {roomsList?.roomInfo?.map((item: any, index: number) => (
              <Tab
                label={item?.room?.[0]?.roomName}
                key={index}
                className={classes.tabPanelStyle}
              />
            ))}
          </Tabs>
          <Paper>
            {roomsList?.roomInfo?.map((item: any, index: number) => (
              <TabPanel value={selectedTab} index={index}>
                <div className={classes.imageHeaderStyle}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.avatarStyle}>
                          <MeetingRoomIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item?.room?.[0]?.roomName}
                        secondary={
                          <>
                            <React.Fragment>
                              {item?.room?.[0]?.roomType}
                            </React.Fragment>
                            <br />
                            <React.Fragment>
                              {getTravelDate(item?.room?.[0]?.travelStartDate)}{" "}
                              - &nbsp;
                              {getTravelDate(item?.room?.[0]?.travelEndDate)}
                            </React.Fragment>
                          </>
                        }
                      />
                    </ListItem>
                  </List>

                  <div className={classes.moreVertIconStyle}>
                    <MoreVertIcon />
                  </div>
                </div>
                {imageLoading && (
                  <CircularProgress className={classes.spinnerStyle} />
                )}
                <img
                  className={classes.imageStyle}
                  src={item?.hotel?.[0]?.hotelImage}
                  alt={item?.room?.[0]?.roomName}
                  loading="lazy"
                  onLoad={() => setImageLoading(false)}
                />
                <div className={classes.roomStatusOuterStyle}>
                  <div className={classes.roomStatusInnerStyle}>
                    <Chip
                      className={classes.bookChipStyle}
                      icon={
                        item?.room?.[0]?.roomStatus ? (
                          <CheckCircleOutlineIcon
                            className={classes.bookChipIconStyle}
                          />
                        ) : (
                          <CancelOutlinedIcon
                            className={classes.bookChipIconStyle}
                          />
                        )
                      }
                      label="Booked"
                      variant="outlined"
                    />
                    <Chip
                      className={classes.balanceChipStyle}
                      icon={
                        <MonetizationOnOutlinedIcon
                          className={classes.balanceChipIconStyle}
                        />
                      }
                      label={`Balance Due - $ ${item?.room?.[0]?.remainingBalance}`}
                      variant="outlined"
                    />
                  </div>
                  <Typography className={classes.hotelDescriptStyle}>
                    {item?.hotel?.[0]?.hotelDescription}
                  </Typography>
                  <CollapseView />
                </div>
                <Divider />
                <div className={classes.pastRoomStyle}>
                  <TypoGraphyView label="Past Rooms" />

                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.avatarStyle}>
                          <MeetingRoomIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={"No Past Rooms"}
                        secondary={
                          "We could not find any past rooms in your account"
                        }
                      />
                    </ListItem>
                  </List>
                </div>
              </TabPanel>
            ))}
          </Paper>
        </>
      )}
    </>
  );
}
