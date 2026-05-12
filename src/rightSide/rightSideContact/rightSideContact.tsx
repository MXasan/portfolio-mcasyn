import "./rightSideContact.css";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "mamurovxemail@gmail.com",
    href: "mailto:mamurovxemail@gmail.com",
  },
  {
    label: "Phone",
    value: "+998 20 009-99-40",
    href: "tel:+99820009940",
  },
  {
    label: "Meeting",
    value: "Book call",
    href: "https://cal.com/henrywalker",
  },
  {
    label: "Website",
    value: "henrywalker.com",
    href: "https://henrywalker.com",
  },
  {
    label: "X (Twitter)",
    value: "@henrywalker",
    href: "https://x.com/henrywalker",
  },
  {
    label: "LinkedIn",
    value: "/mamurovx",
    href: "https://linkedin.com/in/mamurovx/",
  },
];

const RightSideContact = () => {
  return (
    <div className="contact-section right-container ">
      <p className="mini-titles box-for-element">Contact</p>

      <div className="contact-list box-for-element ">
        {contacts.map((item, index) => (
          <div key={index}>
            <a
              className="contact-row cursor-Up"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a className="contact-value">{item.value}</a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideContact;
