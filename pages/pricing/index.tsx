import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const Pricing= () => {
  return (
    <MainLayout>
      <DarkLayout>
        <h2>Home Pricing</h2>
        <h1 className={'title'}>
          Ir a <Link href="/">Home!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About!</Link>
        </h1>
        <h1 className={'title'}>
          Ir a <Link href="/contact">Contact!</Link>
        </h1>
        <p className={'description'}>
          Get started by editing {' '}
          <code className={'code'}>pages/pricing/index.js</code>
        </p>
      </DarkLayout>
    </MainLayout>
  )
}

export default Pricing
