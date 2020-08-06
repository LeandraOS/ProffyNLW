import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/50140771?s=460&u=0b5f97f0ce993d3445b888cf3c73f8dfeee5982d&v=4"
          alt="Leandra Oliveira"
        />
        <div>
          <strong>Leandra Oliveira</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Estudante de Ciência da Computação na Universidade Federal de Campina Grande (UFCG).
        <br />
        <br />
        Ama tecnologia e principalmente todos as transformações que ela causa na vida das pessoas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Icon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;