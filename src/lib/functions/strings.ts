import slugify from 'slugify';
import { truncate } from 'lodash';

const truncateString = (str: string, num: number): string => {
  // if (str.length > num) return str.slice(0, num) + ' ...';
  // else return str;
  return truncate(str, {
    length: num,
  });
};

// Convert spaces to dashes
const createSlug = (str: string) => {
  return slugify(str, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: true,
    trim: true,
  });
};

export { truncateString, createSlug };
