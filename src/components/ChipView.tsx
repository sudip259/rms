import Chip from "@mui/material/Chip";
import { useStyles } from "styles";

interface propsType {
  label: string;
  icon: any;
}

const ChipView: React.FC<propsType> = (props) => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.collapseChipStyle}
      icon={<props.icon className={classes.collapseChipIconStyle} />}
      label={props.label}
      variant="outlined"
    />
  );
};
export default ChipView;
