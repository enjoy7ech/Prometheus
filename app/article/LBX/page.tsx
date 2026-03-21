import LBXClient from './LBXClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '灵白线：在巨石与山脊间寻找自由'
};

export default function Page() {
  return <LBXClient />;
}
