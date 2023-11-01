export type BookingInfo = {
  capacity: number
  bookedCount: number
  waitingListCount: number
  memberBookingInfo: {
    participationId: string
    bookingState: string
    waitingListPosition?: number // Optional since not every entry has it
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
  followingBookings: any[] // Assuming it's an array, you can further type this if its structure is known
  participationProbability?: string // Optional since not every entry has it
  zonedStartTime: {
    timeZone: string
    dateTime: string
  }
}

export type Data = {
  results: Session[]
}
