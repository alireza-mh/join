import { format } from 'date-fns'

export const primaryDateFormat = (date: string) =>
  format(new Date(date), 'LLL dd, yyyy')
