import Typography from "@mui/material/Typography";

function ProfileDetails() {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          fontSize: '36px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Welcome!<br/>
        This is <i><b>Soumik Bhattacharjee</b></i><br/>
        & you are watching <b>My Portfolio</b>
      </Typography>
    </>
  );
}

export default ProfileDetails;
