'use client'
import React, { useState, useEffect } from 'react'
import data from './sats-data.json'

export default function Home() {
  const [sessions, setSessions] = useState<Session[]>([])

  useEffect(() => {
    setSessions(data.results)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-6">Sats Assignment</h1>
    </main>
  )
}
