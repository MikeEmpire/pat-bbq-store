import Image from "next/image";

import styles from "../../styles/Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu__container}>
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
