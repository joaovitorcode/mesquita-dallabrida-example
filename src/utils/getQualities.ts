import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getQualities() {
  const query = `
    query MyQuery {
      qualities(first: 20) {
        type
        caption
        heading
      }
    }  
  `

  return fetchHygraphQuery(query)
}