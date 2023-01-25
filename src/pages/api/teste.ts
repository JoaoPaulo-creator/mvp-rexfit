// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  const request = await fetch(
          'http://localhost:3333/api/v1/product/63be06360746a0e9d7180d75'
          )
          .then(response => response.json())
          .catch(err => console.error(err))

  res.status(200).json(request)
}
