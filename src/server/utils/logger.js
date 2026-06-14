export const logger = (
  ...args
) => {
  if (
    process.env.NODE_ENV !==
    "production"
  ) {
    console.log(
      "[BACKEND]",
      ...args
    );
  }
};

export const errorLogger = (
  ...args
) => {
  console.error(
    "[BACKEND ERROR]",
    ...args
  );
};