import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Header from './home/Header';
import SearchSection from './home/SearchSection';

export default function Home() {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.container}>
      <Header />
      <SearchSection
        styles={styles}
        skills={skills}
        setSkills={setSkills}
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
      />
    </div>
  );
}
