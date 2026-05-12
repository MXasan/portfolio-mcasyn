const personalInfo = {
  name: "Xasan Ma'murov",
  photo: "Profile.jpg",
  about: "Frontend Developer proficient in building dynamic web platforms and catalog applications using React and Next.js. Successfully delivered two production projects, translating Figma designs into responsive user interfaces through client collaboration.",
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
