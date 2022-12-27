
export type BulletsSchema = Array<{
  image: string,
  bulletTitle: string,
  link: Link
}>

export interface Link {
  url: string,
  attributeNofollow: boolean,
  attributeTitle?: string,
  openNewTab?: boolean,
  newTab?: boolean
}