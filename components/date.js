import { parseISO, format } from 'date-fns';

//* https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}