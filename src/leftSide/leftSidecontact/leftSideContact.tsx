const contact = [
  {
    icon: "email.svg",
    label: "example@example.com",
  },
  {
    icon: "phone.svg",
    label: "998 (20) 009-99-40",
  },

  {
    icon: "location",
    label: "Brooklyn, NY",
  },
];
const LeftSideContact = () => {
  return (
    <div>
      <p className="mini-titles">CONTACT</p>
      {contact.map((item, index) => (
        <div key={index} className="svg-text">
          <img className="svg-style" src={item.icon} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftSideContact;
