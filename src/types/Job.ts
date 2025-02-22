export interface JobProps {
  job_id?: string;
  employer_name: string;
  employer_logo: string | null;
  job_title: string;
  job_publisher?: string;
}

export interface JobDetailProps {
  job_title: string;
  employer_name: string;
  employer_logo: string;
  job_location: string;
  job_employment_type: string;
  job_description: string;
  job_apply_link: string;
  job_posted_at: string;
}
