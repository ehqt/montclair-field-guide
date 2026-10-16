export const CATEGORIES = {
  'township-government': 'Township government',
  'land-use': 'Land use',
  schools: 'Schools',
  services: 'Services',
  'county-state': 'County and state',
  'civic-groups': 'Civic groups',
} as const

export type CategoryId = keyof typeof CATEGORIES
