import { useRouter } from 'next/router';
import React from 'react';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query; // Get company ID from URL
  return (
    <div className="flex justify-center items-center h-52">
      <p>{id}</p>
    </div>
  );
}
