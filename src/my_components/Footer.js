import React from "react";

export const Footer = () => {
  let footerStyle ={
    position: 'relative',
    top: '5vh',
    width: '100%',
  }
  return (
    <footer className="bg-dark text-light p-2" style={footerStyle}>
      <p className="text-center "> Copyright &copy; todolist.com</p>
    </footer>   
  );
};
