const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/accent-blue/g, 'accent-yellow');
  content = content.replace(/text-blue/g, 'text-yellow');
  content = content.replace(/0,\s*240,\s*255/g, '229, 255, 0');
  content = content.replace(/#00F0FF/gi, '#E5FF00');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Replacement complete.');
