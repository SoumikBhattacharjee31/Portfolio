

function ProfileImage() {
  return (
    <>
      <img
        alt="n/a"
        src="public\images\avatarpic.jpg"
          width= "300"
          height= "300"
          style={{
            position: 'absolute',
            left: '10%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
      />
    </>
  );
}

export default ProfileImage;
