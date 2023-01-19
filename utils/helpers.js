export const splitText = (text) => {
      const splitWords = text.split(' ');

      const words = [];

      for (const [, item] of splitWords.entries()) {
            words.push(item.split(''));
      }

      words.map((word) => {
            return word.push('\u00A0');
      })

      return words;
}

