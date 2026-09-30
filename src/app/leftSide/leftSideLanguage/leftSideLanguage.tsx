const languages = [
  {
    text: "Uzbek",
    image: "uz.svg",
  },
  {
    text: "English",
    image: "eng.svg",
  },
  {
    text: "Russian",
    image: "ru.svg",
  },
];
const LeftSideLanguage = () => {
  return (
    <div>
      <p className="mini-titles">LANGUAGES</p>
      <div className="skills-container">
        {languages.map((language, index) => (
          <div className="border-SL" key={index}>
            <img src={language.image} alt="" />
            <p>{language.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideLanguage;
