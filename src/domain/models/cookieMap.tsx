export interface CookieMapModel {
  id: string
  title: string
  description: string
  createdAt: Date
  positions: []
}

export interface MarkedPosition {
  id: string
  longitude: number
  latitude: number
}
