import styles from '@/styles/Sbc.module.css';
import CompanyCard from './CompanyCard';

export default function SearchByCompany() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h1 className="font-roboto capitalize text-2xl font-semibold tracking-wide text-blue-700 mb-6">
            Top companies hiring
          </h1>
        </div>

        {/* company card */}
        <div className={styles.companyCard}>
          <CompanyCard />
        </div>
      </div>
    </div>
  );
}
