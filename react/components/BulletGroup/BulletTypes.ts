
export type BulletsSchema = Array<{
  bulletImage: string,
  bulletTitle: string,
  link: LinkProps
}>

export interface LinkProps {
  url: string,
  attributeNofollow: boolean,
  attributeTitle?: string,
  openNewTab?: boolean,
  newTab?: boolean
}