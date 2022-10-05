import React from 'react';

const Header = () => <header><h1>Diginote</h1></header>;

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer><p>Copyright©{year}</p></footer>
  );
}

// export default Header;
export {Header, Footer};
