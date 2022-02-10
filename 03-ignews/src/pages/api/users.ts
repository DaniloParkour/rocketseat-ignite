//baseUrl/api/users

import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, resp: NextApiResponse) => {

  const users = [
    {id: 1, name: 'Cris'},
    {id: 2, name: 'Danilo'},
    {id: 3, name: 'Heitor'},
  ]

  return resp.json(users)
}
