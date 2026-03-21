import JPFGClient from './JPFGClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '上海到福冈：一次惊心动魄的海上冒险'
};

export default function Page() {
  return <JPFGClient />;
}
