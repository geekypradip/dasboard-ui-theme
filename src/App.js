import Maincontainer from "./Components/content/MainContainer";
import SideNavBar from "./Components/sideNavbar/SideNavBar";
import styles from "./Components/style/style.module.css";
import { useContext } from "react";
import { ThemeContext } from "./Components/contextApi/ThemeProvider";
export default function App() {
  const [dark] = useContext(ThemeContext);
  console.log(dark);
  return (
    <div className="App">
      <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
        <SideNavBar />
        <Maincontainer />
      </div>
    </div>
  );
}
