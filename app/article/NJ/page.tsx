import NJClient from './NJClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '莫愁，莫愁'
};

export default function Page() {
  return <NJClient />;
}
