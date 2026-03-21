import NotFoundClient from './NotFoundClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '页面找不到了'
};

export default function Page() {
  return <NotFoundClient />;
}
