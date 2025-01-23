import styles from '@/styles/Sbc.module.css';
import CompanyCard from './CompanyCard';
import { useState } from 'react';
import apiData from '@/data/apiMock';

const truncateString = (str: string, num: number): string => {
  if (str.length > num) return str.slice(0, num) + ' ...';
  else return str;
};

export default function SearchByCompany() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(apiData.data);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="font-roboto capitalize text-2xl font-semibold tracking-wide text-blue-700 mb-6">
          Companies hiring right now
        </h1>
      </div>

      <div className={styles.innerContainer}>
        {/* company card */}
        <div className={styles.companyCard}>
          {data.map(
            (company) =>
              company.employer_logo !== null && (
                <CompanyCard
                  key={company.job_id}
                  employer_name={company.employer_name}
                  employer_logo={company.employer_logo}
                  job_title={truncateString(company.job_title, 34)}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
