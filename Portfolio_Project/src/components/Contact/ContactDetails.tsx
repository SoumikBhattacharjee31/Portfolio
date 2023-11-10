import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";

function ProfileDetails() {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <IconButton color="primary" aria-label="add to shopping cart">
          <FacebookIcon />
        </IconButton>
      </Typography>
    </>
  );
}

export default ProfileDetails;
