import chatBot from './contact';

export default (k) => {
  const data = chatBot();
  let currentBot;
  for (let i = k; i < k + 1; i += 1) {
    currentBot = data[i];
  }

  return currentBot;
};
