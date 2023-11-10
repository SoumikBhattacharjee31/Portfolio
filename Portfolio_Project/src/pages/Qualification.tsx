import EducationTable from "../components/Qualification/EducationTable";
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
        <EducationTable />
      </Box>
    </>
  );
}

export default Home;
