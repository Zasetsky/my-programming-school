import React from "react";
import { Button } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import LoginComponent from "../components/LoginComponent";
import RegistrationComponent from "../components/RegistrationComponent";
import "../assets/styles/components/main-page.scss";

export const MainPage = () => {
  const { role, handleOpen, resetRole } = useLogin();

  return (
    <div className="main-page">
      <h1 className="main-page__title">
        Добро пожаловать в школу программирования
      </h1>

      {role ? (
        role === "гость" ? (
          <RegistrationComponent resetRole={resetRole} />
        ) : (
          <LoginComponent resetRole={resetRole} />
        )
      ) : (
        <div className="main-page__role-selection">
          <p>Выберите свою роль:</p>
          <Button
            className="main-page__role-selection__button"
            onClick={() => handleOpen("учитель")}
          >
            Учитель
          </Button>
          <Button
            className="main-page__role-selection__button"
            onClick={() => handleOpen("ученик")}
          >
            Ученик
          </Button>
          <Button
            className="main-page__role-selection__button"
            onClick={() => handleOpen("гость")}
          >
            Гость
          </Button>
        </div>
      )}
    </div>
  );
};
