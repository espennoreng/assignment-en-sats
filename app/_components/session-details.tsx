import { Session } from '../_types/sats-data-types'
import Button from './button'

export default function SessionDetails({
  session,
}: Readonly<{ session: Session }>) {
  return (
    <div className="flex flex-row gap-4 w-full">
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
        {session.bookingInfo.memberBookingInfo.bookingState === 'Booked' ? (
          <>
            {session.bookingInfo.memberBookingInfo.waitingListPosition &&
            session.bookingInfo.memberBookingInfo.waitingListPosition > 0 ? (
              <Button variant="primary" outlined>
                Unbook
              </Button>
            ) : (
              <Button variant="secondary" outlined>
                Unbook
              </Button>
            )}
          </>
        ) : (
          <>
            {session.bookingInfo.waitingListCount > 0 ? (
              <Button variant="primary">Join waiting list</Button>
            ) : (
              <Button variant="primary">Book</Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}