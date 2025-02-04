import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <p>&copy; {`${year} Kodebloc | TOS | Privacy Policy | Manage Cookies`}</p>
    </div>
  );
}
