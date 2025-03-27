import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>      
      <nav>
        <h1>navbar</h1>
      </nav>
      {children}
    </>
  )
}

export default RootLayout