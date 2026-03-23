import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const urls = [
  // Inside XCape
  'https://insidexcape.vn/phong-lien/',
  'https://insidexcape.vn/phong-xom-tro/',
  'https://insidexcape.vn/phong-am-hon/',
  'https://insidexcape.vn/zone4/',
  'https://insidexcape.vn/zone5/',

  // Master Escape
  'https://masterescape.vn/services/di-chung/',
  'https://masterescape.vn/services/nhap-trang/',
  'https://masterescape.vn/services/bich-nu/',
  'https://masterescape.vn/services/quy-do/',
  'https://masterescape.vn/services/ba-dong-the-medium/',
  'https://masterescape.vn/services/nha-xac-the-morgue/',
  'https://masterescape.vn/services/diet-vong-extinction/',
  'https://masterescape.vn/services/ki-tuc-xa-the-promise/',
  'https://masterescape.vn/services/hoa-nguc/',

  // Spirit Escape
  'https://spiritescape.vn/#home-box3'
];

async function scrape() {
  const results = [];
  for (const url of urls) {
    try {
      const res = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      const $ = cheerio.load(res.data);
      
      let title = $('meta[property="og:title"]').attr('content') || $('title').text();
      let image = $('meta[property="og:image"]').attr('content') || '';
      let desc = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
      
      // Clean up title
      title = title.replace(/[-|–].*$/g, '').trim();
      if (!desc) {
        desc = $('p').first().text().substring(0, 150) + '...';
      }

      let brand = 'genesis';
      if (url.includes('insidexcape')) brand = 'inside';
      if (url.includes('masterescape')) brand = 'master';
      if (url.includes('spiritescape')) brand = 'spirit';

      results.push({
        id: url.split('/').filter(Boolean).pop() || Math.random().toString(),
        url,
        brand,
        name: title,
        img: image,
        desc: desc,
        players: 'Đang cập nhật', // will fine-tune manually later
        difficulty: 'Đang cập nhật', // will fine-tune manually later
        price: brand === 'master' ? 'Từ 169K/NG' : 'Đang cập nhật'
      });
      console.log(`Scraped: ${url} -> ${title}`);
    } catch (err) {
      console.error(`Error scraping ${url}: ${err.message}`);
    }
  }
  
  fs.writeFileSync('scraped_data.json', JSON.stringify(results, null, 2));
  console.log('Done! Saved to scraped_data.json');
}

scrape();
