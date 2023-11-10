import ProfileImage from "../components/Profile/ProfileImage";
import ProfileDetails from "../components/Profile/ProfileDetails";
import Box from "@mui/material/Box";
function Home() {
  return (
    <>
      <Box
        sx={{
          // width: "100vw",
        //   height: "100vh",
          backgroundColor: "white",
          display: "flex",
        //   flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileImage />
        <ProfileDetails />
      </Box>
    </>
  );
}

export default Home;
