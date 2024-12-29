import React from "react";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header className=" border-b border-b-hoverColor bg-bodyColor text-white/80">
      <Container className="py-5 flex justify-between items-center max-w-screen-xl  mx-auto p-4">
        <Logo title="Battulga" subtitle=".G" />
        <div> Righgt</div>
      </Container>
    </header>
  );
};

export default Header;
