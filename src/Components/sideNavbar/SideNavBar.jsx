import styles from "../style/style.module.css";
const SideNavBar = () => {
  return (
    <div className={styles.SideNavBarContainer}>
      <div className={styles.profilePicHolder}>
        <img
          src="https://avatars.githubusercontent.com/u/54275322?v=4"
          alt=""
          className={styles.profilePic}
        />
      </div>
      <div className={styles.navIconHolder}>
        <div>
          <i class="fas fa-chart-bar"></i>
          <i class="fab fa-usps"></i>
          <i class="fas fa-shopping-basket"></i>
          <i class="fas fa-comment-alt"></i>
          <i class="fas fa-paste"></i>
          <i class="fas fa-cog"></i>
        </div>
      </div>
      <div className={styles.navLastPlusSignHolder}>
        <div>
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
};
export default SideNavBar;
