import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiResponse, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Raquel' },
    { id: 2, name: 'Anne' },
    { id: 3, name: 'Daniel' },
  ];

  return response.json(users);
};
