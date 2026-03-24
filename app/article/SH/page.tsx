import SHClient from './SHClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '石湖：越堤之上的湖光山色'
};

export default function Page() {
  return <SHClient />;
}
