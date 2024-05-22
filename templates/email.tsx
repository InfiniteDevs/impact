import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  number,
  text,
}) => (
  <div>
    <h3>
      Name: {firstName} {lastName}
    </h3>
    <p>Email / Discord ID: {email}</p>
    <p>Phone Number: {number}</p>
    <p>Text: {text}</p>
  </div>
);

export default EmailTemplate;
