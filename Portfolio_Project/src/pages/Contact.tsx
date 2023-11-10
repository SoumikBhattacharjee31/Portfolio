import ContactDetails from "../components/Contact/ContactDetails";
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
        <ContactDetails />
      </Box>
    </>
  );
}

export default Home;
