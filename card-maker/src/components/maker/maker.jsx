import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
      id: "3",
      name: "sungsoo3",
      company: "openbase",
      theme: "colorful",
      title: "Software Engineer",
      email: "fereverv@naver.com",
      message: "go for it",
      fileName: "sung",
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
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
        <Editor cards={cards} addCard={addCard}></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
