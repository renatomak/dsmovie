import React from "react";
import { Contacts } from "store/content";
import Item from "./components/Item";

export default function Footer() {
  return (
    <footer className="border-top text-muted bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-6 text-center">
            &copy; 2022 - DS Movies
            <br />
            Projeto desenvolvido na semana 7 DevSuperior
          </div>

          <div className="col-12 col-md-6 text-center">
              Contatos
              {Contacts.map(({label, contact}, index) =>(<Item label={label} contact={contact} key={index}/>) )}
          </div>
        </div>
      </div>
    </footer>
  );
}
