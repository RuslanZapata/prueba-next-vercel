import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <MainLayout>
      <h2>About Page</h2>
        <h1 className={'title'}>
          Ir a <Link href="/">Home!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/contact">Contact!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/pricing">Pricing!</Link>
        </h1>
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/about.js</code>
        </p>
    </MainLayout>
  )
}
