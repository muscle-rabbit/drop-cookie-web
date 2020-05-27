export interface CookieMapModel {
  id: string
  title: string
  description: string
  createdAt: Date
  positions: Array<MarkedPosition>
}

export interface MarkedPosition {
  id: string
  longitude: number
  latitude: number
}

