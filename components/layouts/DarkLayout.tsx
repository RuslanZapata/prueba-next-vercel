import React, { FC, ReactNode } from 'react'

type BoxProps = {
  children: ReactNode; // 👈️ added type for children
};

export const DarkLayout:FC<BoxProps> = ({children}) => {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}
    >
      <h3>Dark-Layouts</h3>
      {children}
    </div>
  )
}
