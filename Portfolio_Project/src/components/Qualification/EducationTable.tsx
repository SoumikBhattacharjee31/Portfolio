import Typography from "@mui/material/Typography";

function ProfileDetails() {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
        //   right: "10%",
          transform: "translateY(-50%)",
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Educational Qualification:<br/>
        <table>
            <tr>
            <th>Examination</th>
            <th>Board/University</th>
            <th>Year</th>
            <th>Grade</th>
            </tr>
            <tr>
                <td>SSC</td>
                <td>Dinajpur Board</td>
                <td>2018</td>
                <td>GPA 5.00</td>
            </tr>
            <tr>
                <td>HSC</td>
                <td>Dinajpur Board</td>
                <td>2020</td>
                <td>GPA 5.00</td>
            </tr>
        </table>
      </Typography>
    </>
  );
}

export default ProfileDetails;
