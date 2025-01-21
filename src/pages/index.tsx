import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [query, setQuery] = useState('');

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.container}>
      <header id={styles.header}>
        <h1 className={styles.title}>Find Your Dream Job</h1>
      </header>
      <section>
        <form onSubmit={handleSearch}>
          <div className={styles.formContainer}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter skills / designations / companies"
              className={styles.formControl}
              style={{ minWidth: 320 }}
            />
            <div className={styles.pipe}></div>
            <select className={styles.selectFormControl}>
              <option>No Experience</option>
            </select>
            <div className={styles.pipe}></div>
            <input
              type="text"
              value=""
              onChange={(e) => console.log(e.target.value)}
              placeholder="Enter Location"
              className={styles.formControl}
              style={{ minWidth: 200 }}
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
