/* ------ SOURCES

https://github.com/rijkvanzanten/node-oba-api
https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
Martijn Reeuwijk
Laurens

------ */

require('dotenv').config()

// START USE OF SOURCE: https://github.com/rijkvanzanten/node-oba-api
const OBA = require('oba-api');

// Setup authentication to api server
const client = new OBA({
  // ProQuest API Keys
  public: process.env.PUBLIC,
  secret: process.env.SECRET
});

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

// Example search to the word 'rijk' sorted by title:
client.get('search', {
  q: 'Wereld-Oorlog',
  sort: 'year',
  facet: 'type(book)',
  refine: true,
  librarian: true,
  page: 1 // 1 t/m 339
})
// END USE OF SOURCE

  // START USE OF SOURCE: Laurens
  .then(result => JSON.parse(result))
  .then(result => {
    let keys = getData(result)
  })

  .catch(err => console.log(err)) // Something went wrong in the request to the API

  function getData(data) {
    // START USE OF SOURCE: Martijn Reeuwijk & Laurens
    let dataStore = data.aquabrowser.results.result.map(e => {
      return {
  			titel: e.titles? e.titles['short-title'].$t : "No titel".toUpperCase(),
  			year: e.publication? e.publication.year.$t : "No year".toUpperCase(),
        writer: e.authors? e.authors['main-author'].$t : "No writer".toUpperCase(),
        genre: e.genres? e.genres.genre.$t : "No genre".toUpperCase(),
        description: e.summaries? e.summaries.summary.$t : "No description".toUpperCase(),
        // START USE OF SOURCE: https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
        pages: e.description? e.description['physical-description'].$t.substring(0, e.description['physical-description'].$t.indexOf("a")) : "No pages".toUpperCase(),
        // END USE OF SOURCE
        kind: e.formats? e.formats.format.$t: "No kind".toUpperCase(),
  		}
    })
    console.log(dataStore)
    // END USE OF SOURCE
  }
  // END USE OF SOURCE
