import { formatNum } from './formatNum'
export const formatSetDate = (date: Date, char?: string) => `${date.getFullYear()}${char? char : "/"}${formatNum(date.getMonth()+1)}${char? char : "/"}${formatNum(date.getDate())}`