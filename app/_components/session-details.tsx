import {
  getSpotsLeft,
  getUserBookedStatus,
  getWaitingList,
} from '../_helpers/sats-data-helpers'
import { Session } from '../_types/sats-data-types'
import Button from './button'

export default function SessionDetails({
  session,
}: Readonly<{ session: Session }>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-4 w-full">
        {
          // Left side
        }
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base font-medium text-gray-900">
            {new Date(session.zonedStartTime.dateTime).toLocaleTimeString(
              'en-US',
              {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: session.zonedStartTime.timeZone,
              }
            )}
          </p>
          <p className="text-xs md:text-sm font-normal text-gray-900">
            {session.durationInMinutes} min
          </p>
        </div>
        {
          // Middle
        }
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
        {
          // Right side
        }
        <div className="flex-grow"></div>
        <div className="flex flex-col justify-end">
          {getUserBookedStatus(session) === 'Booked' ? (
            <Button variant="secondary" outlined>
              Unbook
            </Button>
          ) : (
            <>
              {getWaitingList(session) > 0 ? (
                <Button variant="primary">Join waiting list</Button>
              ) : (
                <Button variant="primary">Book</Button>
              )}
            </>
          )}
        </div>
      </div>
      {
        // Bottom (TODO: not use hardcode ml values)
      }
      <div className="flex flex-row gap-4 w-full ml-[54px] md:ml-[61px]">
        {getWaitingList(session) > 0 && (
          <div className="flex flex-col gap-1 justify-end">
            <p className="text-xs md:text-sm font-normal text-indigo-600">
              {getWaitingList(session)} on waiting list
            </p>
          </div>
        )}
        {getUserBookedStatus(session) === 'NotBooked' &&
          getWaitingList(session) === 0 && (
            <div className="flex flex-col gap-1 justify-end">
              <p className="text-xs md:text-sm font-normal text-green-600">
                {getSpotsLeft(session)} spots left
              </p>
            </div>
          )}
      </div>
    </div>
  )
}
