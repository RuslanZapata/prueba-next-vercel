import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
      <h2>Contact Page</h2>
        <h1 className={'title'}>
          Ir a <Link href="/">Home!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/pricing">Pricing!</Link>
        </h1>
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/contact.js</code>
        </p>
    </MainLayout>
  )
}
