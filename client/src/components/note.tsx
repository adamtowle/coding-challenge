import React from 'react';
import styles from './note.module.scss';

interface INoteProps {
  dateTime: string;
  user: string;
  content: string;
}
const Note: React.FC<INoteProps> = ({ dateTime, user, content }) => {
  return (
    <div className={styles.noteContainer}>
      <p className={styles.noteUser}>{user}</p>
      <p className={styles.noteContent}>{content}</p>
      <div className={styles.noteDateTime}>{dateTime}</div>
    </div>
  )
}

export default Note;