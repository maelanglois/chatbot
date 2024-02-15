import chatBot from './contact';

export default (k) => {
  const data = chatBot();
  let currentBot = data.map((Bot) => Bot);
  for (let i = k; i < k + 1; i += 1) {
    currentBot = currentBot[i];
  }

  return currentBot;
};
