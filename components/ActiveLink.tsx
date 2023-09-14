import React, { CSSProperties, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  text: string
  url: string
}

const styles:CSSProperties = {
  color: '#0070F3',
  textDecoration: 'underline',
}

const ActiveLink: FC<Props> = ({text, url}) => {
  const {asPath} = useRouter();

  return (
    <Link href={url} style={asPath === url ? styles : undefined}>{text}</Link>
  )
}

export default ActiveLink