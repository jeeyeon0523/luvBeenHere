import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent_intense: "#e65d6e",
  accent_normal: "#fe9e95",
  accent_weak: "#fedab3",
  bg_intense: "#91677e",
  bg_normal: "#95a5c3",
  bg_weak: "#cad8e7",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        padding-top: 70px;
        background-color: white;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color:rgb(38, 38, 38);
    }
    a {
      text-decoration: none;
    }
`;
