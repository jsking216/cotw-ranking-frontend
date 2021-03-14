import GoogleImageSearch from '../../lib/googleSearch';
import csv from 'csv-parser';
import fs from 'fs';

export default async (req, res) => {
  const {
    query: { keywords },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // sort words by uniqueness
      const wordUniqueness = [];
      const stream = fs.createReadStream('./pages/api/unigram_freq.csv')
        .pipe(csv())
        .on('data', (row) => {
          if (keywords.includes(row.word)) {
            wordUniqueness.push({ word: row.word, count: row.count});
          }
        });
      const end = new Promise(function(resolve, reject) {
        stream.on('end', () => resolve());
        stream.on('error', reject); // or something like that. might need to close `hash`
      });
      await end;
      
      wordUniqueness.sort((a, b) => a.count - b.count);
      console.log(`searching for images of: ${wordUniqueness[0].word}`);
      // google search keyword
      const images = await GoogleImageSearch(wordUniqueness[0].word);
      res.status(200).json(images);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}