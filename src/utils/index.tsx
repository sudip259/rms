import { format } from "date-fns";
import { Location } from "react-router-dom";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
export const selected = (text: string, index: number, location: Location) => {
  return (
    location.pathname === "/" + text ||
    (index === 0 && location.pathname === "/" && text === "my-trips") ||
    (index === 0 && location.pathname === "/home" && text === "my-trips")
  );
};

export const getTravelDate = (dateString: string) => {
  const date = new Date(dateString);

  // Format the date as a string in the format "day month year"
  const formattedDateString = format(date, "dd-MMM-yy");

  return formattedDateString;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
