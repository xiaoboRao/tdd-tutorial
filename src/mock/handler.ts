import { rest } from 'msw'

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        {
          text: 'Learn about React',
          isCompleted: false,
        },
        {
          text: 'Meet friend for lunch',
          isCompleted: false,
        },
        {
          text: 'Build something',
          isCompleted: false,
        },
      ])
    )
  }),
]
