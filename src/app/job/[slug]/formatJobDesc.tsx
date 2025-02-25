import styles from '@/styles/JobDetail.module.css';

// Clean up job description
const formatJobDescription = (
  description: string
): string | React.ReactElement[] => {
  if (!description) return '';

  const lines = description
    .replace(/\n\n/g, '\n') // Reduce double newlines to a single newline
    .split('\n') // Split into an array
    .filter((line) => line.trim() !== '');

  const formattedContent: React.ReactElement[] = [];
  let bulletPoints: React.ReactElement[] = [];

  lines.forEach((line, index) => {
    if (line.startsWith('•')) {
      bulletPoints.push(
        <li className="pb-[2px]" key={index}>
          {line.replace('•', '').trim()}
        </li>
      );
    } else {
      if (bulletPoints.length > 0) {
        formattedContent.push(
          <ul key={`ul-${index}`} className="font-open-sans list-disc pl-5">
            {bulletPoints}
          </ul>
        );
        bulletPoints = [];
      }

      if (
        line.match(/Overview|Key Responsibilities|Required Qualifications/g)
      ) {
        formattedContent.push(
          <h3 key={index} className="font-roboto font-bold mb-2 mt-4">
            {line}
          </h3>
        );
      } else {
        formattedContent.push(
          <p key={index} className={styles.jobText}>
            {line.replaceAll(',', ', ')}
          </p>
        );
      }
    }
  });

  if (bulletPoints.length > 0) {
    formattedContent.push(
      <ul key="ul-last" className="font-open-sans list-disc pl-5">
        {bulletPoints}
      </ul>
    );
  }

  return formattedContent;
};

export default formatJobDescription;
