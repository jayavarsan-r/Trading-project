import React from "react";
import styles from '../styles/features.module.css'
import buisness from '../assets/businessman.png'
import student from '../assets/student-1.png'
import newbie from '../assets/newbie-1.png'


function Features() {
  return (
    <div>
      <div className={styles.section3}>
        <h3 className={styles.heading}>Who is this webinar for?</h3>

        <div className={styles.content}>
          <div>
            <img src={buisness} alt="" />
            <p className={styles.bText}>Working professionals</p>
            <p className={styles.pText}>
              As a working professional, I'm sure a secondary source of income
              would improve the quality of your life. Establishing trading as a
              profitable side hustle is the need of the hour. You've come to the
              right place.
            </p>
          </div>
          <div>
            <img src={student} alt="" />
            <p className={styles.bText}>College students</p>
            <p className={styles.pText}>
              As a college student, establishing a source of income is
              imperative. Let's kickstart your journey and put you in a position
              where you can become a profitable trader and take care of your own
              finances.
            </p>
          </div>
          <div>
            <img src={newbie} alt="" />
            <p className={styles.bText}>Absolute beginners</p>
            <p className={styles.pText}>
              This webinar is beginner friendly and basics shall be covered. So
              come join us in and learn how you can establish trading as a
              profitable side hustle !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
