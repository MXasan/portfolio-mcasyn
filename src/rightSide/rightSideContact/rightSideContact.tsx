import "./rightSideContact.css";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "hey@henrywalker.com",
    href: "mailto:hey@henrywalker.com",
  },
  {
    label: "Phone",
    value: "+555 123 4567",
    href: "tel:+5551234567",
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
    value: "/henryw",
    href: "https://linkedin.com/in/henryw",
  },
];

const RightSideContact = () => {
  return (
    <div className="contact-section right-container ">
      <p className="mini-titles box-for-element">Contact</p>

      <div className="contact-list box-for-element mb-4">
        {contacts.map((item, index) => (
          <div className="contact-row" key={index}>
            <span className="contact-label">{item.label}</span>

            {item.href ? (
              <a
                className="contact-value"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.value}
              </a>
            ) : (
              <span className="contact-value">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideContact;
