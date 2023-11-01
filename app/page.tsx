'use client'
import React, { useState, useEffect } from 'react'
import data from './sats-data.json'

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
          {sessions.map((session, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 border-t border-gray-200 py-4"
            >
              <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    {new Date(
                      session.zonedStartTime.dateTime
                    ).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                      timeZone: session.zonedStartTime.timeZone,
                    })}
                  </p>
                  <p className="text-xs md:text-sm font-normal text-gray-900">
                    {session.durationInMinutes} min
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    {session.name}
                  </p>
                  <p className="text-xs md:text-sm font-normal text-gray-900">
                    w/{session.instructor}
                  </p>
                  <p className="text-xs md:text-sm font-normal text-gray-900">
                    {session.clubName}
                  </p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex flex-col justify-end">
                  {session.bookingInfo.memberBookingInfo.bookingState ===
                  'Booked' ? (
                    <>
                      {session.bookingInfo.memberBookingInfo
                        .waitingListPosition &&
                      session.bookingInfo.memberBookingInfo
                        .waitingListPosition > 0 ? (
                        <button className="bg-transparent border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-base py-2 px-4 rounded-lg">
                          Unbook
                        </button>
                      ) : (
                        <button className="bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-base py-2 px-4 rounded-lg">
                          Unbook
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {session.bookingInfo.waitingListCount > 0 ? (
                        <button className="bg-indigo-600 text-white hover:bg-indigo-500 font-base py-2 px-4 rounded-lg">
                          Book
                        </button>
                      ) : (
                        <button className="bg-blue-900 text-white hover:bg-blue-800 font-base py-2 px-4 rounded-lg">
                          Book
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-4 w-full ml-[54px] md:ml-[61px]">
                {session.bookingInfo.memberBookingInfo.bookingState ===
                  'Booked' &&
                session.bookingInfo.memberBookingInfo.waitingListPosition &&
                session.bookingInfo.memberBookingInfo.waitingListPosition >
                  0 ? (
                  <div className="flex flex-col gap-1 justify-end">
                    <p className="text-xs md:text-sm font-normal text-gray-900">
                      Waiting list position:{' '}
                      {
                        session.bookingInfo.memberBookingInfo
                          .waitingListPosition
                      }
                    </p>
                  </div>
                ) : (
                  <>
                    {session.bookingInfo.waitingListCount > 0 && (
                      <div className="flex flex-col gap-1 justify-end">
                        <p className="text-xs md:text-sm font-normal text-indigo-600">
                          {session.bookingInfo.waitingListCount} on waiting list
                        </p>
                      </div>
                    )}
                  </>
                )}
                {session.bookingInfo.memberBookingInfo.bookingState ===
                  'NotBooked' &&
                  session.bookingInfo.waitingListCount === 0 && (
                    <div className="flex flex-col gap-1 justify-end">
                      <p className="text-xs md:text-sm font-normal text-green-600">
                        {session.bookingInfo.capacity -
                          session.bookingInfo.bookedCount}{' '}
                        spots left
                      </p>
                    </div>
                  )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
