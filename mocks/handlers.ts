import { rest } from 'msw';

import type { Book, Review } from './types';

export const handlers = [
  rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    );
  }),
  rest.get('/api/reviews', (_req, res, ctx) => {
    const data = [
      {
        id: 1,
        author: 'Juni Brosas',
        text: 'This is a sample text',
      },
      {
        id: 2,
        author: 'Juni Boy',
        text: 'Another sample text',
      },
    ];

    return res(ctx.json<Review[]>(data));
  }),
];
