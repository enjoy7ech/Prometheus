import ZZClient from './ZZClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '周庄：梦江南'
};

export default function Page() {
  return <ZZClient />;
}
