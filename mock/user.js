export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        message: 'ok',
        data: ['tom'],
      };
    },
  },
];
