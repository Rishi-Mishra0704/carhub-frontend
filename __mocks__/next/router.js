jest.mock('next/router');

const useRouter = jest.fn(() => ({
    push: jest.fn(),
  }));
  
  export { useRouter };
  