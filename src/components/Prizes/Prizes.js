import styles from "./Prizes.module.css";

const column = (classId, cat1, val1, cat2, val2) => {
  return (
    <div className={classId}>
      <div >
        <h4>{cat1}</h4>
        <h4>{val1}</h4>
      </div>
      <div >
        <h4>{cat2}</h4>
        <h4>{val2}</h4>
      </div>
    </div>
  );
}

const Prizes = () => {
  return (
    <div className={styles.prizes} name="prizes">  
      <h2>Prizes</h2>
      <p className={styles.text}>These prizes will be awarded to 2 teams, one from each group</p>
      <div className={styles.place}>
        <h4>1<sup>st</sup> place</h4>
        <h4>$3200</h4>
      </div>
      <div className={styles.place}>
        <h4>2<sup>nd</sup> place</h4>
        <h4>$1600</h4>
      </div>
      <div className={styles.place}>
        <h4>3<sup>rd</sup> place</h4>
        <h4>$800</h4>
      </div>
      <div>
        <h2>Special Category Prizes</h2>
        <div className={styles.wrapper}>
          <div className={styles.row}>  
            {column(styles.first, "special category name", "value", "special category name", "value")}
            {column(styles.second, "special category name", "value", "special category name", "value")}
            {column(styles.third, "special category name", "value", "special category name", "value")}
          </div>
        </div>
      </div>
  </div>
  );
};

export default Prizes;
