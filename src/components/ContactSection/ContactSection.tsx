import { FC } from "react";
// import sectionStyles from "./ContactSection.module.css";

export type ulTitled = {
  bulletIcon: string;
  bulletDetail: string;
  type?: string;
};

type ContactSectionProps = {
  title: string;
  logo: string;
  contactInfo: Array<ulTitled>;
  ulTitle: string;
  liTitles: Array<ulTitled>;
};

const ContactSection: FC<ContactSectionProps> = ({
  title,
  contactInfo,
  ulTitle,
  liTitles,
  logo,
}) => {
  const linkCheck = (type: string, detail: string) => {
    switch (type) {
      case "phone":
        return <a href={`tel:${detail}`}>{detail}</a>;
      case "email":
        return (
          <a href={`mailto:${detail}?subject=Website Inquiry:`}>{detail}</a>
        );
      default:
        return <p>{detail}</p>;
    }
  };

  return (
    <div
      className="flex flex-wrap lg:flex-row color-white container px-4 py-14"
      id="contact-us"
    >
      {/* Column 1 Container */}
      <div className="ml-0 mr-10 mb-10 sm:mb-0">
        <div className="flex items-center mb-4">
          <i className={`text-5xl text-gold mr-3 ${logo}`}></i>
          <div className="flex flex-col">
            <h1 className="text-2xl self-baseline font-bold">{title}</h1>
            <p className="tracking-widest text-center">ATTORNEY AT LAW</p>
          </div>
        </div>
        <ul className="ul-container flex flex-col flex-baseline">
          {contactInfo.map((contactType, index) => {
            return (
              <li
                className="flex items-center"
                key={`${contactType.bulletIcon}-${index}`}
              >
                <i
                  className={`ml-0 m-2 text-lg text-gold ${contactType.bulletIcon}`}
                ></i>
                {linkCheck(contactType.type!, contactType.bulletDetail)}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Column 2 Container */}
      <div className="flex flex-col ml-0">
        <div className="ml-0 mb-2">
          <h3 className="text-gold">{ulTitle}</h3>
        </div>
        <ul className="flex flex-col flex-wrap h-auto lg:max-h-44">
          {liTitles.map((listItems, index) => {
            return (
              <li
                className="flex items-baseline mb-2 mr-8"
                key={`$listItems.bulletIcon}-${index}`}
              >
                <i
                  className={`bg-dark-slate ml-0 mx-2 text-gold text-lg ${listItems.bulletIcon}`}
                ></i>
                <p className="">{listItems.bulletDetail}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
