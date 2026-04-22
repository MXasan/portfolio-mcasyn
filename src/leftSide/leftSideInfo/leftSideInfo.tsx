const personalInfo = {
  name: "Xasan Ma'murov",
  photo: "Profile.jpg",
  about: "Brooklyn based full-stack software engineer with 7+ years of experience in building web and mobile apps."
  
};
const LeftSideInfo = () => {
  return (
    <div>
      <img
        className="profile-img"
        src={personalInfo.photo}
        alt={personalInfo.name}
      />
      <div className="per-name">
        <p className="persone-name">{personalInfo.name}</p>
        <img className="verified-badge" src="verified-badge.svg" alt="badge" />
      </div>
      <p className="user-name">mcasyn</p>
      <p className="mini-titles">ABOUT</p>
      <p className="about-info">
       {personalInfo.about}
      </p>
    </div>
  );
};

export default LeftSideInfo;
