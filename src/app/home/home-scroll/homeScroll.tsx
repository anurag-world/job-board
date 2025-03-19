'use client';

import ScrollContainer from '@/components/ScrollContainer';
import CompanyCardContainer from './company/companyCardContainer';
import AgentCardContainer from './agent/agentCardContainer';
import { DataJobProps } from '@/types/Data';

export default function HomeScroll({ data }: DataJobProps) {
  return (
    <>
      <ScrollContainer
        title="Companies Hiring Right Now"
        content={<CompanyCardContainer data={data} />}
      />
      <ScrollContainer
        title="Jobs on LinkedIn"
        content={<AgentCardContainer data={data} />}
      />
    </>
  );
}
