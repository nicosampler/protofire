import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-align: center!important;
    color: #fff !important;
    text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  html, body {
    height: 100%;
    width: 100%;
    background-color: #333;
  }
`;
