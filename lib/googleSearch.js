// simple image search script from https://gist.github.com/ronniery/1c49786fad10f1849302f80b0eb08028
import fetch from 'node-fetch';
import cheerio from 'cheerio';

export default async (query) => {
  // Fetches Items from Google Image Search URL
  const res = await fetch(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
          'Referer': 'https://www.google.com/'
      }
  });

  const html = await res.text();

  let $ = cheerio.load(html);
  return $("[data-src]").map((idx, img) =>
      $(img).data('src')
  ).toArray();
};
