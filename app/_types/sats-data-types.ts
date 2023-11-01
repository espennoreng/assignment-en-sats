export type BookingInfo = {
  capacity: number
  bookedCount: number
  waitingListCount: number
  memberBookingInfo: {
    participationId: string
    bookingState: string
    waitingListPosition?: number
  }
}

export type Session = {
  id: string
  durationInMinutes: number
  instructor: string
  clubName: string
  name: string
  bookingInfo: BookingInfo
  followingBookingCount: number
  followingBookings: any[]
  participationProbability?: string
  zonedStartTime: {
    timeZone: string
    dateTime: string
  }
}

export type Data = {
  results: Session[]
}
