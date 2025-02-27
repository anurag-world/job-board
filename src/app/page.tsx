'use client';

import { useState } from 'react';
import Header from './home/Header';
import SearchSection from './home/SearchSection';
import apiData from '@/data/apiMock';
import { JobProps } from '@/types/Job';
import ScrollContainer from '@/components/ScrollContainer';
import CompanyCardContainer from './home/company-scroll/CompanyCardContainer';
import AgentCardContainer from './home/agent-scroll/AgentCardContainer';
import JobTitleTags from './home/job-title/JobTitleTags';
import RoleTags from './home/RoleTags';

export default function Home() {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');

  function handleSearch(): void {
    throw new Error('Function not implemented.');
  }

  const data: JobProps[] = apiData.data;

  return (
    <div>
      <Header />
      <SearchSection
        skills={skills}
        setSkills={setSkills}
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
      />
      <ScrollContainer
        title="Companies Hiring Right Now"
        content={<CompanyCardContainer data={data} />}
      />
      <ScrollContainer
        title="Jobs on LinkedIn"
        content={<AgentCardContainer data={data} />}
      />
      <JobTitleTags data={data} />
      <RoleTags />
    </div>
  );
}
