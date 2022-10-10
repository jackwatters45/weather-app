/* eslint-disable no-plusplus */
export default function upperCase(str) {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += `${words[i][0].toUpperCase() + words[i].substr(1)} `;
  }
  return result;
}
