import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tags = links.map((value) => {
    return <a key={value} href={"#"+value}> {value}</a>
  })

  
  return <nav>{tags}</nav>
}

export default NavBar;
