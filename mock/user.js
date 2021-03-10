export default [
  {
    url: "/api/getUser",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data: ["tom"],
      };
    },
  },
];
