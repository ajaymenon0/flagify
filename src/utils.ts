export const generateRandomNumbers = (x: number, n: number): number[] => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < x) {
    const randomNumber = Math.floor(Math.random() * n);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};
