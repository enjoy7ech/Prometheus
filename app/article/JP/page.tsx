import JPClient from './JPClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本行：玫瑰下的 Stille Nacht'
};

export default function Page() {
  return <JPClient />;
}
