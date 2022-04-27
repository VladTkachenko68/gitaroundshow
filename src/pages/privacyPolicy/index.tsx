import React from "react";
import { Container, Subtitle } from "../../components";
import "./privacyPolicy.css";

const data = [
  {
    header: null,
    para: "Protecting your private information is our priority. This Statement of Privacy applies to www.vapor.finance, and vapor Finance and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to vapor Finance include www.vapor.finance and vapor. The vapor website is a Financial Investing site. By using the vapor website, you consent to the data practices described in this statement.",
  },
  {
    header: "Collection of your Personal Information",
    para: "In order to better provide you with products and services offered, vapor may collect personally identifiable information, such as your:",
    para2: "- E-mail Address",
    para3: "- Wallet Address",
    para4:
      "We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.",
  },
  {
    header: "Use of your Personal Information",
    para: "vapor collects and uses your personal information to operate and deliver the services you have requested.",
    para2:
      "vapor may also use your personally identifiable information to inform you of other products or services available from vapor and its affiliates.",
  },
  {
    header: "Sharing Information with Third Parties",
    para: "vapor does not sell, rent or lease its customer lists to third parties.",
    para2:
      "vapor may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party. vapor may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to vapor, and they are required to maintain the confidentiality of your information.",
    para3:
      "vapor may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on vapor or the site; (b) protect and defend the rights or property of vapor; and/or (c) act under exigent circumstances to protect the personal safety of users of vapor, or the public.",
  },
  {
    header: "Opt-Out of Disclosure of Personal Information to Third Parties",
    para: "In connection with any personal information we may disclose to a third party for a business purpose, you have the right to know:",
    para2:
      "• The categories of personal information that we disclosed about you for a business purpose.",
    para3:
      "You have the right under the California Consumer Privacy Act of 2018 (CCPA) and certain other privacy and data protection laws, as applicable, to opt-out of the disclosure of your personal information. If you exercise your right to opt-out of the disclosure of your personal information, we will refrain from disclosing your personal information, unless you subsequently provide express authorization for the disclosure of your personal information. To opt-out of the disclosure of your personal information, visit this Web page _________________.",
  },
  {
    header: "Tracking User Behavior",
    para: "vapor may keep track of the websites and pages our users visit within vapor, in order to determine what vapor services are the most popular. This data is used to deliver customized content and advertising within vapor to customers whose behavior indicates that they are interested in a particular subject area.",
  },
  {
    header: "Automatically Collected Information",
    para: "Information about your computer hardware and software may be automatically collected by vapor. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the vapor website. ",
  },
  {
    header: "Use of Cookies",
    para: "The vapor website may use cookies to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.",
    para2:
      "One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize vapor pages, or register with vapor site or services, a cookie helps vapor to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same vapor website, the information you previously provided can be retrieved, so you can easily use the vapor features that you customized.",
    para3:
      "You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the vapor services or websites you visit.",
  },
  {
    header: "Right to Deletion",
    para: "Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:",
    para2: "• Delete your personal information from our records; and",
    para3:
      "• Direct any service providers to delete your personal information from their records.",
    para4:
      "Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:",
    para5:
      "• Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;",
    para6:
      "• Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;",
    para7:
      "• Debug to identify and repair errors that impair existing intended functionality;",
    para8:
      "• Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;",
    para9:
      "• Comply with the California Electronic Communications Privacy Act;",
    para10:
      "• Engage in public or peer-reviewed scientific, historical, or statistical research in thepublic interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;",
    para11:
      "• Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;",
    para12: "• Comply with an existing legal obligation; or",
    para13:
      "• Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.",
  },
  {
    header: "Children Under Thirteen",
    para: "vapor does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.",
  },
  {
    header: "Opt-Out & Unsubscribe from Third Party Communications",
    para: "We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from third-party partners of vapor by contacting us here:",
    para2: "- Web page: _________________",
    para3: "- Email: contact@vapor.finance",
    para4: "- Phone: _________________",
  },
  {
    header: "E-mail Communications",
    para: "From time to time, vapor may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from vapor or click on a link therein.",
    para2:
      "If you would like to stop receiving marketing or promotional communications via email from vapor, you may opt out of such communications by Unsubscribe button.",
  },
  {
    header: "External Data Storage Sites",
    para: "We may store your data on servers provided by third party hosting vendors with whom we have contracted.",
  },
  {
    header: "Changes to this Statement",
    para: "vapor reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.",
  },
  {
    header: "Contact Information",
    para: "vapor welcomes your questions or comments regarding this Statement of Privacy. If you believe that vapor has not adhered to this Statement, please contact vapor at:",
    para2: "vapor Finance",
    para3: "1500 42nd Ave E",
    para4: "Seattle, Washington 98112",
    para5: "Email Address:",
    para6: "contact@vapor.finance",
    para7: "Telephone number:",
    para8: "_________________",
    para9: "Effective as of January 26, 2022",
  },
];
const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="policy-container">
        <div className="policy-header">
          <Subtitle>PrivacyPolicy</Subtitle>
        </div>

        <div className="">
          {data.map((item, index) => (
            <section key={index} className="section-policy-content">
              <div className="header-policy-content">{item.header}</div>
              <div className="text-policy-content">{item.para}</div>
              {item.para2 && (
                <div className="text-policy-content">{item.para2}</div>
              )}
              {item.para3 && (
                <div className="text-policy-content">{item.para3}</div>
              )}
              {item.para4 && (
                <div className="text-policy-content">{item.para4}</div>
              )}
              {item.para5 && (
                <div className="text-policy-content">{item.para5}</div>
              )}
              {item.para6 && (
                <div className="text-policy-content">{item.para6}</div>
              )}
              {item.para7 && (
                <div className="text-policy-content">{item.para7}</div>
              )}
              {item.para8 && (
                <div className="text-policy-content">{item.para8}</div>
              )}
              {item.para9 && (
                <div className="text-policy-content">{item.para9}</div>
              )}
              {item.para10 && (
                <div className="text-policy-content">{item.para10}</div>
              )}
              {item.para11 && (
                <div className="text-policy-content">{item.para11}</div>
              )}
              {item.para12 && (
                <div className="text-policy-content">{item.para12}</div>
              )}
              {item.para13 && (
                <div className="text-policy-content">{item.para13}</div>
              )}
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
