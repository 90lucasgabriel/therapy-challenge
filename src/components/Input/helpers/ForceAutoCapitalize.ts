import { ForceAutoCapitalizeProps } from '../types';

const ForceAutoCapitalize = (data: ForceAutoCapitalizeProps): string => {
  try {
    if (!data?.autoCapitalize || data?.autoCapitalize === 'none') {
      return data?.value;
    }

    const rules = { characters: '', words: ' ', sentences: '. ' };

    let valueArray = data?.value.split(rules[data?.autoCapitalize]);
    valueArray = valueArray.map(v => v.charAt(0).toUpperCase() + v.slice(1));

    const response = valueArray.join(rules[data?.autoCapitalize]);

    return response;
  } catch (e) {
    console.error('ForceAutoCapitalize: ', e); // eslint-disable-line
  }
};

export default ForceAutoCapitalize;
