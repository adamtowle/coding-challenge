import React from 'react';
import styles from './note.module.scss';

const Note = () => {
  return (
    <div>
      <div>
        <div className={styles.noteDateTime}>2023-09-24T07:29:40.382Z</div>
        <p className={styles.noteUser}>Orland Doyle</p>
      </div>
      <div>
        <p className={styles.noteContent}>Magnam expedita iste enim cum quia qui dolores vel ut ea debitis sed ad sed qui et sint odio saepe est maxime aliquid saepe quisquam cumque architecto aut possimus deserunt.</p>
      </div>
    </div>
  )
}

export default Note;