import styles from "../style/style.module.css";
import { useContext } from "react";
import { ThemeContext } from "../contextApi/ThemeProvider";
const Maincontainer = () => {
  const [dark, setDark] = useContext(ThemeContext);
  return (
    <div className={styles.ContentWrapper}>
      <div className={styles.headingContainer}>
        <h1>My DashBoard</h1>
        <span className={styles.theme} onClick={() => setDark((e) => !e)}>
          {dark ? (
            <span>
              LightMode <i class="far fa-sun"></i>
            </span>
          ) : (
            <span>
              DarkMode <i class="fas fa-moon"></i>{" "}
            </span>
          )}
        </span>
      </div>
      {/* <span onClick={()=>setDark((e)=>!e)}>{dark?"Light Theme":"Dark Theme"}</span>     */}
      <div className={styles.card}>
        <div className={styles.state}>
          <div>Active User</div>
          <div>
            <span>for</span> August 2020
          </div>
        </div>
        <div className={styles.userHoolder}>
          <div className={styles.dp_and_add}>
            <img
              src="https://avatars.githubusercontent.com/u/54275322?v=4"
              alt=""
            />
            <div>
              Pradip Mandal <br />
              West Bengal ,Kolkata
            </div>
          </div>
          <div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className={styles.bar}>
          <div className={styles.fillBar}></div>
        </div>
        <div className={styles.level}>
          <div>Personal Level 15</div>
          <div>4723 point</div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.state}>
          <div>Active User</div>
          <div>
            <span>for</span> August 2020
          </div>
        </div>
        <div className={styles.userHoolder}>
          <div className={styles.dp_and_add}>
            <img
              src="https://avatars.githubusercontent.com/u/54275322?v=4"
              alt=""
            />
            <div>
              Pradip Mandal <br />
              West Bengal ,Kolkata
            </div>
          </div>
          <div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className={styles.bar}>
          <div className={styles.fillBar}></div>
        </div>
        <div className={styles.level}>
          <div>Personal Level 15</div>
          <div>4723 point</div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.state}>
          <div>Active User</div>
          <div>
            <span>for</span> August 2020
          </div>
        </div>
        <div className={styles.userHoolder}>
          <div className={styles.dp_and_add}>
            <img
              src="https://avatars.githubusercontent.com/u/54275322?v=4"
              alt=""
            />
            <div>
              Pradip Mandal <br />
              West Bengal ,Kolkata
            </div>
          </div>
          <div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className={styles.bar}>
          <div className={styles.fillBar}></div>
        </div>
        <div className={styles.level}>
          <div>Personal Level 15</div>
          <div>4723 point</div>
        </div>
      </div>
    </div>
  );
};
export default Maincontainer;
