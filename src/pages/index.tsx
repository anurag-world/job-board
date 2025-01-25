import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Header from './home/Header';
import SearchSection from './home/SearchSection';
import apiData from '@/data/apiMock';
import { CompanyCardProps } from '@/types/Job';
import ScrollContainer from '@/components/ScrollContainer';
import CompanyCardContainer from './home/sbc/CompanyCardContainer';

export default function Home() {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState<CompanyCardProps[]>([]);

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  useEffect(() => {
    setData(apiData.data);
  }, []);

  return (
    <div>
      <Header />
      <SearchSection
        styles={styles}
        skills={skills}
        setSkills={setSkills}
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
      />
      <ScrollContainer
        title="Companies hiring right now"
        content={<CompanyCardContainer data={data} />}
      />
      <ScrollContainer
        title="Remote Jobs"
        content={<CompanyCardContainer data={data} />}
      />
    </div>
  );
}
