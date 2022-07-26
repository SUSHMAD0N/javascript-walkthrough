const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


//finding length of the string
const browserType = 'mozilla';
console.log(browserType.length, browserType[0]);
//last character
console.log(browserType[browserType.length-1]);

//include method

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

//start with and end with
if (browserType.startsWith('zilla')) {
    console.log('Found zilla!');
  } else {
    console.log('No zilla here!');
  }

  
if (browserType.endsWith('zilla')) {
    console.log('Found zilla!');
  } else {
    console.log('No zilla here!');
  }

//indexOf
const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));

console.log(tagline.indexOf('x')); // -1

const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//slice
console.log(browserType.slice(1, 4)); // "ozi"
console.log(browserType.slice(2)); // "zilla"

//lowerCase and UpperCase
const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//replace
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"

let quote = 'To be or not to be';
quote = quote.replaceAll('be','code');

console.log(quote);  // "To code or not to code"

