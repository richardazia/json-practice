//json data 
const article = [
  {
    "articleID": 1,
    "articleTitle": "The Romans",
    "articleContent": "Plenty of text",
    "articleDate": "07/09/1997",
    "articleTags": [ "history", "Romans", "Europe", "ancient" ]
  }, 
  {
  "articleID": 2,
  "articleTitle": "Roman Cities",
  "articleContent": "Rome, Pompei, Herculaneum, Nyon, Nimes, Arles",
  "articleDate": "12/10/1998",
  "articleTags": ["towns", "cities", "Roman", "European"]
  }
];

const articleJson = JSON.stringify(article);
console.log(articleJson);

//Json.parse(articlesRoman);

//console.log(data);