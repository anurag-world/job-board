export type Job = {
  job_id: string;
  job_title: string;
  employer_name: string;
  job_country: string;
};

export type CompanyCardProps = {
  job_id?: string;
  employer_name: string;
  employer_logo: string | null;
  job_title: string;
};
