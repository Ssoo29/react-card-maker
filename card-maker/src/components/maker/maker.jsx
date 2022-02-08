import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    '1': {
      id: "1",
      name: "sungsoo1",
      company: "openbase",
      theme: "light",
      title: "Software Engineer",
      email: "fereverv@naver.com",
      message: "go for it",
      fileName: "sung",
      fileURL: null,
    },
    '2': {
      id: "2",
      name: "sungsoo2",
      company: "openbase",
      theme: "dark",
      title: "Software Engineer",
      email: "fereverv@naver.com",
      message: "go for it",
      fileName: "sung",
      fileURL: null,
    },
    '3': {
      id: "3",
      name: "sungsoo3",
      company: "openbase",
      theme: "colorful",
      title: "Software Engineer",
      email: "fereverv@naver.com",
      message: "go for it",
      fileName: "sung",
      fileURL: null,
    }
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    })
  };
  
  const deleteCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    })
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} ></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
