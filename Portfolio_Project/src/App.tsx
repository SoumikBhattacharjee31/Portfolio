import ProfileDetails from "./components/Profile/ProfileDetails";
import ProfileAvatar from "./components/Profile/ProfileAvatar";
import Box from "@mui/material/Box";
import FacebookIcon from '@mui/icons-material/Facebook';
function App() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileAvatar />
        <ProfileDetails />
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "brown",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>It's incomplete. Get out</h1>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "purple",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://www.facebook.com/soumik.bhattacharjee.904"><FacebookIcon sx={{ color: "blue", fontSize: 40 }}/></a>
      </Box>
    </>
  );
}

export default App;
