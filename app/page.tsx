'use client'
import React, { useState, useEffect } from 'react'
import data from './sats-data.json'
import Button from './_components/button'
import SessionDetails from './_components/session-details'
import { Session } from './_types/sats-data-types'

export default function Home() {
  const [sessions, setSessions] = useState<Session[]>([])

  useEffect(() => {
    setSessions(data.results)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10 bg-gray-50">
      <div className="max-w-lg w-full flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Group training
        </h1>
        <ol className="flex flex-col gap-4">
          {sessions.map((session) => (
            <li
              key={session.id}
              className="flex flex-col gap-2 border-t border-gray-200 py-4"
            >
              <SessionDetails session={session} />
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
