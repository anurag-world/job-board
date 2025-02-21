import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <p className="font-open-sans text-sm font-medium">
        &copy; {`${year} Kodebloc | TOS | Privacy Policy | Manage Cookies`}
      </p>
    </div>
  );
}
