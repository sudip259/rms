import Typography from "@mui/material/Typography";
interface propTypes {
  label: string;
}
const TypoGraphyView = (props: propTypes) => {
  return (
    <Typography variant="h6" gutterBottom style={{ marginTop: "12px" }}>
      {props.label}
    </Typography>
  );
};
export default TypoGraphyView;
