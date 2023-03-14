import blockContent from './blockContent'
import post from './post'

import mediaItem from './mediaItem'
import aboutPage from './aboutPage'
import theme from './theme'
import awardPastNews from './awardPastNews'
import projectCategory from './projectCategory'

export const stdSlugValidationRegex = /[^\d\-a-zA-Z]+/gm

export const stdSlugValidationErrorMsg =
  'Only latin characters (a-z), numbers (0-9), and hyphens (-) are valid.'

export const schemaTypes = [
  blockContent,
  post,
  mediaItem,
  aboutPage,
  theme,
  awardPastNews,
  projectCategory,
]
