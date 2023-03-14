import blockContent from './blockContent'

import project from './project'
import mediaItem from './mediaItem'
import aboutPage from './aboutPage'
import theme from './theme'
import awardPastNews from './awardPastNews'
import projectCategory from './projectCategory'

export const stdSlugValidationRegex = /[^\d\-a-zA-Z]+/gm
export const titleEnValidationRegex = /[^a-zA-Z0-9 ,:_\-.&]+/gm

export const stdSlugValidationErrorMsg =
  'Only latin characters (a-z), numbers (0-9), and hyphens (-) are valid.'
export const titleEnValidationErrorMsg =
  'Only alphanumeric characters and certain special characters are allowed ,:_-.'

export const schemaTypes = [
  blockContent,
  project,
  mediaItem,
  aboutPage,
  theme,
  awardPastNews,
  projectCategory,
]
