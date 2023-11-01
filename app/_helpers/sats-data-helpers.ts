import { Session } from '../_types/sats-data-types'

export const getUserBookedStatus = (session: Session) => {
  return session.bookingInfo.memberBookingInfo.bookingState
}

export const getWaitingList = (session: Session) => {
  return session.bookingInfo.waitingListCount
}

export const getSpotsLeft = (session: Session) => {
  return session.bookingInfo.capacity - session.bookingInfo.bookedCount
}
