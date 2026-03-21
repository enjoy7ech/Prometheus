import XTClient from './XTClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '斜塘：重拾旧时的街道记忆'
};

export default function Page() {
  return <XTClient />;
}
