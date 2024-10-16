/**
 * Shuffle an array in place using the Fisher-Yates algorithm.
 * @param array - The array to shuffle.
 * @returns A new shuffled array.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]; // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    // Swap the current element with the random element
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray; // Return the shuffled array
};
