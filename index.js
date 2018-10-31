/* ------ SOURCES

https://github.com/rijkvanzanten/node-oba-api
https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
Martijn Reeuwijk

------ */

// START USE OF SOURCE: https://github.com/rijkvanzanten/node-oba-api
const OBA = require('oba-api');

// Setup authentication to api server
const client = new OBA({
  // ProQuest API Keys
  public: '1e19898c87464e239192c8bfe422f280',
  secret: '4289fec4e962a33118340c888699438d'
});

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

// Example search to the word 'rijk' sorted by title:
client.get('search', {
  q: 'Nederland',
  sort: 'title'
})
// END USE OF SOURCE

  // START USE OF SOURCE: Martijn Reeuwijk

  .then(results =>
    console.log(
      JSON.parse(results).aquabrowser.results.result.forEach(function(e){
        console.log(

          // START USE OF SOURCE: https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character
          e.titles.title['search-term'].substring(0, e.titles.title['search-term'].indexOf("/")) + "\n"
          // END USE OF SOURCE
          .concat("Jaar: ".toUpperCase() + e.publication.year['search-term']) + "\n"
          .concat("Auteur: ".toUpperCase() + e.authors['main-author']['search-term']) + "\n"
          .concat("Omschrijving: ".toUpperCase() + e.summaries.summary['$t']) + "\n"
          .concat("Soort: ".toUpperCase() + e.formats.format['search-term']) + "\n"  + "---"
        )

      })
    )
  )

  // END USE OF SOURCE

  .catch(err => console.log(err)) // Something went wrong in the request to the API
