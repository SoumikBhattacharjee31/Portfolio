import Typography from "@mui/material/Typography";

function ProfileDetails() {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        My details<br/>
        Name: Soumik Bhattacharjee<br/>
        Father's Name: Rabindra Narayan Bhattacharjee<br/>
        Mother's Name: Seema Rani Acharjee<br/>
        Present Address: Sadar, Dinajpur
      </Typography>
    </>
  );
}

export default ProfileDetails;
