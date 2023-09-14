import type { ReactElement } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h2>Home Page</h2>
      <h1 className={'title'}>
        Ir a <Link href="/about">About!</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/contact">Contact!</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/pricing">Pricing!</Link>
      </h1>
      <p className={'description'}>
        Get started by editing {' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

Home.getLayout = function getLayout(page:ReactElement) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default Home
