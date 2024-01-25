import texts from '../data/Text-detail.json';

export const getTextList = () => {
  return texts;
}

export const getTextDetail= (textCode) => {
  return texts.filter(text => text.textCode ===parseInt(textCode))[0];
}


export const searchText = (textName) => {
  return texts.filter(text => text.textName.match(textName));
}