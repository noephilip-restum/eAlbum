// import styles of this component
import styles from "./Header.module.css";

// import other components
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from "../../Jsons/HeaderBoxes.json";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>

        <Nav />
        {/* <BrickLayout /> */}

        <div
          className={`${styles["headings-header"]} flex justify-content-center flex-column `}
        >
          <h2 className={styles["heading-header-title"]}>
            I can't find a way to untangle my heart from yours.
          </h2>
          <h1 className={styles["heading-header-second-title"]}>
            Without you there's a hollow space inside me <br />
            That will never be filled.
          </h1>
        </div>
      </ContainerCard>
    </header>
  );
};

export default Header;
