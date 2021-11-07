export enum Pages {
  LANDING = 'landing',
  SEARCH = 'search',
  RESULT = 'result'
}

export interface PageInterface {
  readonly changePageTo?: React.Dispatch<React.SetStateAction<Pages>>
  readonly logout?: () => void
}