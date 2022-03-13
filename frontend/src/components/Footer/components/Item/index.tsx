import React from "react";

type Contact = {
    type: string,
    content: string,
}

type Props = {
    label: string,
    contact: Contact,
}

const Item = ({ label, contact}: Props) => {
  return (
    <>
    <br />
      <span>{label}: </span>
      <a
        href={`${contact.type}${contact.content}`}
        className="text-decoration-none text-dark"
        target="_blank" rel="noreferrer"
      >
        {contact.content}
      </a>
      
    </>
  );
};

export default Item;
