export interface Advert {
  bets: Bet[]
  subject_priorities: SubjectPriority[]
}

interface Bet {
  article: number
  url: string
  image: string
  image_big: string
  advert_id: number
  cpm: number
  position: number
  position_on_page: number
  page: number
  subject: {
    id: number
    name: string
  }
  delivery_time: number
}

interface SubjectPriority {
  id: number
  name: string
  position: number
}
