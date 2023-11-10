import HomeDetails from "../components/Home/HomeDetails";
import HomeAvatar from "../components/Home/HomeAvatar";
import Box from "@mui/material/Box";
// import FacebookIcon from '@mui/icons-material/Facebook';
function Home() {
  return (
    <>
      <Box
        sx={{
          // width: "100vw",
          // height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomeAvatar />
        <HomeDetails />
      </Box>
    </>
  );
}

export default Home;
