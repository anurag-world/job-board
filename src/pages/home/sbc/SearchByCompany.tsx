import styles from '@/styles/Sbc.module.css';
import CompanyCard from './CompanyCard';
import { useRef, useState } from 'react';
import apiData from '@/data/apiMock';
import ScrollButtons from '@/app/components/ScrollButtons';

const truncateString = (str: string, num: number): string => {
  if (str.length > num) return str.slice(0, num) + ' ...';
  else return str;
};

export default function SearchByCompany() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(apiData.data);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className="container pl-4">
        <h1 className="font-roboto capitalize text-2xl font-semibold tracking-wide text-blue-700 mb-6">
          Companies hiring right now
        </h1>
      </div>

      <div className="relative container">
        {/* Company card - Scrollable container */}
        <div ref={scrollContainerRef} className={styles.companyCard}>
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

        {/* Left Arrow */}
        <ScrollButtons direction="left" scroll={scroll} />

        {/* Right Arrow */}
        <ScrollButtons direction="right" scroll={scroll} />
      </div>
    </div>
  );
}
