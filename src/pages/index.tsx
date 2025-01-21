import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <h1>Find Your Dream Job</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter job title or keyword"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
