import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl  bg-white shadow-lg rounded-lg   p-5">
        <h2 className="text-3xl mb-6">CastellTech Limited Privacy Statement</h2>

        <div className="text-gray-700">
          <p>
            CastellTech Limited, its subsidiaries and branch operations
            hereinafter referred as ‘CastellTech’, ‘we’, ‘us’ or ‘our’ is
            committed to respect your privacy and choices. The privacy statement
            (hereinafter “Privacy Statement” or “Statement”) highlights our
            privacy practices regarding Personal Information that we collect and
            process in compliance to applicable data privacy regulations.
          </p>

          <h3 className="text-2xl mt-6 mb-3">Objective:</h3>
          <p>
            Through this privacy statement we intend to provide a synopsis of
            our privacy practices regarding Personal Information that we collect
            and process about you through various sources. Although the primary
            focus of this statement is on the data collected and processed
            through our websites, that link to this Privacy Statement, which
            include www.castelltech.com and their sub-domains such as
            blogs.castelltech.com, abm.castelltech.com, etc. (Collectively
            referred to as “CastellTech Websites”), our adherence to the below
            mentioned principles remain across the organization towards personal
            data processing. Depending on the purposes of processing and your
            relationship with us as a data subject, we may provide additional
            customized privacy statements, more information on which can be
            found below.
          </p>

          {/* ... More content ... */}

          <h3 className="text-2xl mt-6 mb-3">
            Contact your Local Data Protection Authority
          </h3>
          <p>
            If you are unhappy with how we safeguard your personal data,
            depending on the laws of the countries where you reside, you have
            the right to bring a complaint to your local data protection
            authority.
          </p>

          <h3 className="text-2xl mt-6 mb-3">Linked websites</h3>
          <p>
            Our privacy practices regarding Personal Information that we collect
            and store about you through our portals such as Recruitment and
            Global Alumni will be as per the privacy policy of those portals.
          </p>

          <p>
            CastellTech provides links to third-party websites and services.
            However, CastellTech is not responsible for the privacy statements,
            practices, or the contents of such third-party websites.
          </p>

          <h3 className="text-2xl mt-6 mb-3">Children’s Privacy</h3>
          <p>
            CastellTech Websites, its associated products or services and hosted
            contents, are not intended for the use by children.
          </p>

          {/* ... More content ... */}
        </div>

        <div className="mt-8 text-gray-600">
          <p>
            If you have any questions regarding our privacy practices or this
            privacy statement, or to request this privacy statement in another
            format, please contact us at:
          </p>
          <p className="font-bold">Contact person: Swornim Shrestha +977 9745349101</p>
          <p className="font-bold">
            Contact address: Sinamangal-9, Omnagar, Kathmandu
          </p>
          <p className="font-bold">Phone: +977 9828225659/9845829770</p>
          <p className="font-bold">Email: info@castelltech.com</p>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            CastellTech may change the data privacy practices and update this
            privacy statement as and when the need arises, and the same will be
            made available on the website. However, our commitment to protect
            the privacy of website users will continue to remain.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
