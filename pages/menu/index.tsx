import Image from "next/image";
import { useState } from "react";

function Menu() {
  return (
    <div>
      <Image
        height={400}
        width={200}
        alt="P Train's BBQ Menu"
        src="/CateringMenu.jpg"
      />
    </div>
  );
}

export default Menu;
