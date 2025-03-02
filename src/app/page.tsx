import Header from './home/header';
import SearchSection from './home/searchSection';
import apiData from '@/data/apiMock';
import { JobProps } from '@/types/Job';
import JobTitleTags from './home/tags/jobTitleTags';
import RoleTags from './home/tags/roleTags';
import HomeScroll from './home/home-scroll/homeScroll';

export default function Home() {
  const data: JobProps[] = apiData.data;

  return (
    <div>
      <Header />
      <SearchSection />
      <HomeScroll data={data} />
      <JobTitleTags data={data} />
      <RoleTags />
    </div>
  );
}
