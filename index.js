/* ------ SOURCES

https://github.com/rijkvanzanten/node-oba-api
https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
Martijn Reeuwijk

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
  q: 'Nederland',
  sort: 'title',
})
// END USE OF SOURCE

  // START USE OF SOURCE: Martijn Reeuwijk
  .then(data =>
    JSON.parse(data).aquabrowser.results.result.forEach(function(e){
      console.log(
        // START USE OF SOURCE: https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
        "Titel: ".toUpperCase() + e.titles.title['search-term'].substring(0, e.titles.title['search-term'].indexOf("/")) + "\n"
        // END USE OF SOURCE
        .concat("Jaar: ".toUpperCase() + e.publication.year['search-term']) + "\n"
        .concat("Auteur: ".toUpperCase() + e.authors['main-author']['search-term']) + "\n"
        .concat("Onderwerp: ".toUpperCase() + e.subjects['topical-subject']['search-term']) + "\n"
        .concat("Omschrijving: ".toUpperCase() + e.summaries.summary['$t']) + "\n"
        .concat("Paginas: ".toUpperCase() + e.description['physical-description']['$t'].substring(0, e.description['physical-description']['$t'].indexOf("p"))) + "\n"
        .concat("Soort: ".toUpperCase() + e.formats.format['search-term']) + "\n"  + "------------"
      )
    })
  )
  // END USE OF SOURCE

  .catch(err => console.log(err)) // Something went wrong in the request to the API
