import Header from './home/Header';
import SearchSection from './home/SearchSection';
import apiData from '@/data/apiMock';
import { JobProps } from '@/types/Job';
import JobTitleTags from './home/tags/JobTitleTags';
import RoleTags from './home/tags/RoleTags';
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
