import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

export function dateFormatter(unformattedDate: string) {
  const formattedDate = formatDistanceToNow(new Date(unformattedDate), {
    addSuffix: true,
    locale: enUS,
  })

  return formattedDate
}
