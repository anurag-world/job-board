import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.container}>
      <header className="w-full text-center">
        <h1 className="font-roboto text-5xl font-black tracking-wider text-blue-700 mx-auto my-6">
          Your Dream Job Awaits!
        </h1>
        <p className="font-open-sans text-xl italic font-medium mb-7">
          Discover thousands of opportunities tailored to your skills and
          aspirations.
        </p>
      </header>
      <section>
        <form onSubmit={handleSearch}>
          <div className={styles.formContainer}>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter skills / designations / companies"
              className={styles.formControl}
              style={{ minWidth: 350 }}
              required
            />
            <div className={styles.pipe}></div>
            <select className={styles.selectFormControl} required>
              <option>No Experience</option>
            </select>
            <div className={styles.pipe}></div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              className={styles.formControl}
              style={{ minWidth: 210 }}
              required
            />
            <button type="submit" className={styles.search}>
              Search
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
