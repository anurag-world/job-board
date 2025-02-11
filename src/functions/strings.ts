const truncateString = (str: string, num: number): string => {
  if (str.length > num) return str.slice(0, num) + ' ...';
  else return str;
};

// Convert spaces to dashes
const createSlug = (str: string) => {
  return encodeURIComponent(str.toLowerCase().replace(/\s+/g, '-'));
};

export { truncateString, createSlug };
