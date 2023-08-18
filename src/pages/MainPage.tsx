import React from "react";
import { Button } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import LoginComponent from "../components/LoginComponent";
import RegistrationComponent from "../components/RegistrationComponent";
import AvatarCircle from "../components/AvatarCircle";
import { StudentIcon, TeacherIcon, GuestIcon } from "../assets/icons/index";
// import { useTheme as useAppTheme } from "../hooks/useTheme";
import { useTheme as useMuiTheme } from "@mui/material/styles";

import "../assets/styles/components/main-page.scss";

export const MainPage = () => {
  const { role, handleOpen, resetRole } = useLogin();
  // const { darkMode, setDarkMode } = useAppTheme();

  const theme = useMuiTheme();

  // const toggleTheme = () => {
  //   // Функция для переключения темы
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="main-page">
      <AvatarCircle />
      <div className="main-page__circle"></div>
      <h1 className="main-page__title">
        Добро пожаловать в школу программирования
      </h1>
      {/* <button
        className="main-page__role-selection__button"
        onClick={toggleTheme}
      >
        {darkMode
          ? "Переключить на светлую тему"
          : "Переключить на темную тему"}
      </button> */}
      {role ? (
        role === "гость" ? (
          <RegistrationComponent resetRole={resetRole} />
        ) : (
          <LoginComponent resetRole={resetRole} />
        )
      ) : (
        <div className="main-page__role-selection">
          <p>Выберите свою роль:</p>
          <div className="button-row">
            <div className="button-wrapper">
              <Button
                className="main-page__role-selection__button"
                variant="contained"
                onClick={() => handleOpen("ученик")}
              >
                <StudentIcon color={theme.palette.primary.contrastText} />
              </Button>
              Ученик
            </div>
            <div className="button-wrapper">
              <Button
                className="main-page__role-selection__button"
                variant="contained"
                onClick={() => handleOpen("учитель")}
              >
                <TeacherIcon color={theme.palette.primary.contrastText} />
              </Button>
              Учитель
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              variant="contained"
              className="main-page__role-selection__button"
              onClick={() => handleOpen("гость")}
            >
              <GuestIcon color={theme.palette.primary.contrastText} />
            </Button>
            Гость
          </div>
        </div>
      )}
    </div>
  );
};
