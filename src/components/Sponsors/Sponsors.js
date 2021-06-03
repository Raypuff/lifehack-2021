import styles from "./Sponsors.module.css";

// const Sponsors = () => {
//   return (
//     <div className={styles.sponsors} name="sponsors">
//       this is sponsors
//     </div>
//   );
// };

const Sponsors = () => {
  return (
      <div className={styles.sponsors}>
          <div className={styles.title}>
              <h2>
                  Sponsors and Organizers
              </h2>
          </div>
          <h3>
              Sponsored by
          </h3>
          <div className={styles.sponsorList}>
              Sponsor Placeholder
          </div>
          <h3>
              Training Providers
          </h3>
          <div className={styles.trainerList}>
              Sponsor Placeholder
          </div>
          <h3>Organized by</h3>
          <div className={styles.organizerList}>
              Organizer Placeholder
          </div>
      </div>
  );
};

export default Sponsors;
