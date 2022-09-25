const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "farnood",
          last: "07",
        },
        picture: {
          large:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUMjPWJM2TXEK6Djy50MhsT42SopKYfWU-Q&usqp=CAU",
        },
        login: {
          username: "far",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
