import EditLocationIcon from "@mui/icons-material/EditLocation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ChipView from "components/ChipView";
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import StarIcon from "@mui/icons-material/Star";
import { ExpandMore } from "utils";
import { CardContent, Collapse } from "@mui/material";
import TypoGraphyView from "components/TypoGraphyView";
import React from "react";
import { useStyles } from "styles";

export default function CollapseView() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <>
      <CardActions disableSpacing>
        <div className={classes.collapseViewStyle}>
          <div className={classes.modifyPaymentOuterStyle}>
            <div>
              <EditLocationIcon />
            </div>
            <div>MODIFY</div>
          </div>
          <div className={classes.modifyPaymentOuterStyle}>
            <div>
              <PaidOutlinedIcon />
            </div>
            <div>MAKE PAYMENT</div>
          </div>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TypoGraphyView label="Guest in this room" />
          <div className={classes.guestOuterStyle}>
            <ChipView label="Adult 1" icon={PersonIcon} />
            <ChipView label="Adult 2" icon={PersonIcon} />
            <ChipView label="Child 1" icon={ChildCareIcon} />
          </div>
          {/* Room Extra */}
          <TypoGraphyView label=" Room Extras" />
          <div className={classes.transportOuterStyle}>
            <ChipView label="Transport Purchased" icon={PersonIcon} />
            <ChipView label="Travel Protection" icon={StarIcon} />
          </div>
        </CardContent>
      </Collapse>
    </>
  );
}
