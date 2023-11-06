import Avatar from "@mui/material/Avatar";

function ProfileAvatar() {
  return (
    <>
      <Avatar
        alt="n/a"
        src="public\images\avatarpic.jpg"
        sx={{
          width: 300,
          height: 300,
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
        }}
      />
    </>
  );
}

export default ProfileAvatar;
