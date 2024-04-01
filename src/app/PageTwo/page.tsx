'use client'
import { useAppContext } from '@/Context/context';
import { useRouter } from 'next/navigation'
import React from 'react'

const PageTwo = () => {

    const router = useRouter();

    const handlePageChange = () => {
        router.push('/')
    }

    const { pageTwoName, setPageTwoName } = useAppContext()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Page Two Name: {pageTwoName}</h1>
    <button onClick={handlePageChange}>Change Page</button>
  </main>
  )
}

export default PageTwo
