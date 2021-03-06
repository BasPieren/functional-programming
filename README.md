# functional-programming ⚙️

This is the repo for my functional programming project.

![Console Screenshot](images/Console_Screenshot_Intro.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and technologies](#packages-and-technologies)
* [Research](#research-)
  * [Data](#data)
  * [Research questions](#research-questions)
  * [Hypothesis](#hypothesis)
  * [Sub-questions](#sub-questions)
  * [Variables](#variables)
  * [Findings](#findings)
  * [Sketches](#sketches)
* [Transform Data](#Transform-data-)  
* [Observable](#observable-)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things in want to do in this project:
- [X] Git, npm, and d3 are used; the project runs without errors; data is loaded with d3; there is a representation of data.
- [X] Data is rendered with d3; interpreting the representation is easier that interpreting the data itself.
- [X] d3 is used to clean data and make a dynamic representation; data is functionally transformed.
- [ ] Representation and use of d3 go beyond an example: there are demonstrable additions like a well-chosen scale.
- [ ] The way the student applies subject matter is more advanced than what they were taught in class; let’s switch places.

## Description 📝
During this project I used the d3 javascript library to make a data presentation using the data we got from the OBA API. I did research based on the data which I used to formulate a research question, sub-questions and hypothesis.

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/functional-programming.git

cd functional-programming

npm install rijkvanzanten/node-oba-api

npm install
```

### Packages and technologies
This project makes use of the following packages and technologies:

* [OBA API](https://zoeken.oba.nl/api/v1/)
* [node-oba-api](https://github.com/rijkvanzanten/node-oba-api)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Research 📑
This is the research process I have done during the 2 weeks of the project.

### Data
First after getting the data back from the [OBA API](https://zoeken.oba.nl/api/v1/) I started looking through the data to see what kind of properties it was holding. The data was structured somewhat like this:

<details><summary>Data Structure</summary>
<ul>
<li>id</li>
<li>frabl</li>
<li>detail-page</li>
<li>coverimages</li>
  <ul>
    <li>coverimage</li>
  </ul>
<li>titles</li>
  <ul>
  <li>title</li>
  <li>short-title</li>
  <li>other-title</li>
  </ul>
<li>authors</li>
  <ul>
  <li>main-author</li>
  <li>author</li>
  </ul>
<li>formats</li>
  <ul>
  <li>format</li>
  <li>identifiers</li>
  <li>isbn-id</li>
  <li>ppn-id</li>
  </ul>
<li>publication</li>
  <ul>
  <li>year</li>
  <li>publishers</li>
  </ul>
    <ul>
    <li>publisher</li>
    <li>edition</li>
    </ul>
<li>classification</li>
  <ul>
  <li>siso-code</li>
  </ul>
<li>languages</li>
  <ul>
  <li>language</li>
  </ul>
<li>subjects</li>
  <ul>
  <li>topical-subject</li>
  </ul>
<li>genres</li>
  <ul>
  <li>genre</li>
  </ul>
<li>description</li>
  <ul>
  <li>physical-description</li>
  </ul>
<li>summaries</li>
  <ul>
  <li>summary</li>
  </ul>
<li>notes</li>
  <ul>
  <li>note</li>
  </ul>
<li>target-audiences</li>
  <ul>
  <li>target-audience</li>
  <li>undup-info</li>
  </ul>
</ul>
</details>

> Thanks to [@DanielvandeVelde](https://github.com/DanielvandeVelde/) for writing this down.

I started to look for properties that I could use for my project. I expected to find properties for each book like a title, writer, genre and publication date of books. Quickly I saw that there was a lot of excess data that was not really needed.

### Research questions
After looking through the data I came up with the following research questions:

1.	Were fewer books written after the year 2000?
2.	Has the number of audiobooks grown in the past 10 years?
3.	Have more "cheerful" genres been used in the period after 1940-1945?
4.	Have there been fewer books written about faith / religion through the course of the years?
5.	Do men and women often continue to write within the same kind of genres?

These where things I thought that would be interesting to know and that could be found inside the data by looking at the property values. Out of all these questions I choose the one that I found the most interesting:

**Have more "cheerful" genres been used in the period after 1940-1945?**

But I still found the part about "cheerful genres" to be a bit to abstract and vague. So I made an iteration on it:

**Have there been noticeable changes in genres that have been used in the period after World War 2?**

_EDIT 2-11-2018: After I went through the sorted data to find patterns I noticed that a lot of books didn't have a genre. Almost all of them did have a description so I decided to focus on that instead of the genre. So I also changed my research question:_

**Have there been noticeable changes in the sort of books that have been written in the period after World War 2?**

_EDIT 5-11-2018: When I started to sketch I found out that I was not very easy to make a visualisation based on the description of books. I gravitated to using the publication date in combination with the number of pages of each book. So I changed my research question yet again:_

**Have there been noticeable changes in the number of books and the number of pages that have been written and used in the period after World War 2?**

### Hypothesis
After I formulated my research questions I came up with a hypothesis that I wanted to test:

- **"After World War 2 books have drastically changed in genre to reflect the time period."**

_EDIT 2-11-2018: When I changed my research question I also changed my hypothesis:_

- **"After World War 2 books have drastically changed in subjects to reflect the time period."**

_EDIT 5-11-2018: When I changed my research question (again) I also changed my hypothesis (again):_

- **"After World War 2 less books have been published to reflect the time period."**

### Sub-questions
After I finalized my research question and hypothesis I started to write down sub-questions about things I wanted to know about:

- Which genres are most commonly used 5 years after World War 2?
- Which genres are most commonly used during World War 2?
- Have genres been added after World War 2?
- Who wrote books after World War 2?
- Who wrote books during World War 2?
- What where books about after World War 2?
- What where books about during World War 2?

I wanted to focus on the periods just before, during and after World War 2 so that I would have a base that I could use to compare my hypothesis to.

### Variables
After I wrote down my sub-questions I started to look at the properties inside the data that I thought I would need to find patterns. I came up with the following:

- Title
- Author
- Format
- Publication Year
- Pages
- Subjects

I made sure that I would only get back these variables when searching trough the data. To see how I did that look at the [Transform Data](#Transform-data-) chapter.

### Findings
The first thing that I noticed when looking through books from before World War 2 is that a lot are about the aftermath of World War 1 and especially about the individual stories of soldiers. Descriptions for example are (in Dutch 🇳🇱):

- Een Rus die in de Eerste Wereldoorlog en daarna tijdens de Russische Revolutie carrière gemaakt heeft door zijn botte onverschilligheid voor het welzijn van anderen komt tot inkeer en sterft na jaren van ascese als een heilige. | 1934
- Een jonge Fransman moet zijn vrouw in Parijs achterlaten wanneer hij tijdens de Eerste Wereldoorlog als soldaat naar het front gestuurd wordt. | 1935
- Een jongeman die na de Eerste Wereldoorlog in zijn Russische dorpje terugkeert, wordt door niemand begrepen als hij verteldt dat hij gelovig is geworden. | 1937

Later during the early years of World War 2, books where about the new situation that was developing in the world.

- Analyse van de politieke situatie in Nazi-Duitsland voor de Tweede Wereldoorlog, door een Australisch historicus. | 1938
- Kroniek van de eerste maanden van de Tweede Wereldoorlog: september 1939-februari 1940. | 1939
- Studie over de toekomstvoorspellingen van de Franse astroloog, met name met betrekking tot de Tweede Wereldoorlog. | 1940
- Verzameling documenten, die de houding en visie van de Duitse bezetter weergeven en onderschrijven. | 1940

After World War 2 a lot of books look back on the war, the events that happened and the different people who lost their lives or offered resistance against the oppressors.

- Kunst in het harnas : gedachtenis-tentoonstelling ter ere van gevallen en vervolgde kunstenaars | 1945
- Nederlandsch-Indië en Japan : hun betrekkingen in 1940-1941 | 1945
- Monetaire vraagstukken tijdens en na den oorlog | 1945
- Het verzet van de Nederlandsche bisschoppen tegen nationaal-socialisme en Duitsche tyrannie | 1945

Some books also took a more lighthearted approach and celebrated the end of the war.

- Programma der feestelijkheden op 26, 27 en 28 Juni 1945 ter viering van de bevrijding der hoofdstad uit Duitschen druk | 1945
- Vrijheid : tijdgedichten en berijmde schotschriften | 1945
- Van dollen Dinsdag tot de bevrijding | 1945
- Vrij! | 1945

A lot of books where written in 1945 detailing different events in World War 2. Later when we approach 1950 and the years that follow a lot less books where written about World War 2. Maybe this is because people where tired of hearing and reading about it?

### Sketches
This are some sketches I made after doing my research to see what kind of visualisation I wanted too make.

![Sketch Photo](images/Sketch1.jpg)
> My idea was to make a timeline that would showcase all the books that were written during 1935 and 1950 that had something to do with the world wars, with the second world war in particular. Every dot would represent a book. This way you can get an idea of how many books were written, for example, during the start of world war 2 in 1940.

## Transform data 🛠
Here I will explain the important parts on how I transformed my data.

_NOTE: The complete code can be found in index.js._

First I installed the [node-oba-api](https://github.com/rijkvanzanten/node-oba-api) made by [Rijk van Zanten](https://github.com/rijkvanzanten) so I could more easily interface with the [OBA API](https://zoeken.oba.nl/api/v1/).

After the installation I modified the `.get` request with some extra parameters to narrow down the books that I would get back.

* `refine`: Refine allows me to get more information on a book like genre and type.
* `sort`: Sort allows me to sort the books based on their publication year.
* `facet`: Facet allows me to only get books back.
* `page`: Page allows me to navigate trough all the available pages.

```js
client.get('search', {
  refine: true,
  q: 'Wereld-Oorlog',
  sort: 'year',
  facet: 'type(book)',
  page: 1
})
```
After we got a workshop from [Laurens](https://github.com/Razpudding) on how to access and structure the data we got from the API, I edited the code I wrote earlier to a function that would only give me back the data that I would need for my visualisation:

```js
function getData(data) {
  // START USE OF SOURCE: Martijn Reeuwijk & Laurens
  let dataStore = data.aquabrowser.results.result.map(e => {
    return {
      TITLE: e.titles? e.titles['short-title']['$t'] : "No titel".toUpperCase(),
      YEAR: e.publication? parseInt(e.publication.year['$t'], 10)
        : "No year".toUpperCase(),
      AUTHOR: e.authors? e.authors['main-author']['$t'] : "No writer".toUpperCase(),
      GENRE: e.genres? e.genres.genre['$t'] : "No genre".toUpperCase(),
      DESCRIPTION: e.summaries? e.summaries.summary['$t'] : "No description".toUpperCase(),
      PAGES: e.description? parseInt(e.description['physical-description']['$t'].match(/\d+/g).map(Number), 10)
        : 0,
      KIND: e.formats? e.formats.format['$t']: "No kind".toUpperCase(),
    }
  })
  console.log(dataStore)
  // END USE OF SOURCE
}
```
The function maps over the data from the OBA API and saves it inside a new array called dataStore. For every book it returns the title, year, author, genre, description, pages and kind. For every property I looks if there is a value and, if there is none, replace it with something else. I also made sure that the year and pages would be parsed to be a number instead of a string.

By manually changing the page number I found out that there are 339 pages with books. The books that I needed, from 1935 till 1950, where on page 329 till 338. I tried to narrow down the result by using the `pubYearRange` facet but I couldn't get it to work. Because of this I needed to do some extra manual copy pasting later on in d3. If I had more time I would make sure to fix this first.

## Observable 📊
After I got back all the data that I needed started work on my visualisation in d3.

[Link to the d3 data visualisation in observable.](https://beta.observablehq.com/@baspieren/functional-programming-d3-scatterplot)

## Sources 📚

* [OBA API](https://zoeken.oba.nl/api/v1/)
* [node-oba-api](https://github.com/rijkvanzanten/node-oba-api)
* [How to return part of string after a certain character?](https://stackoverflow.com/questions/16470113/how-to-return-part-of-string-after-a-certain-character)
* [Code provided by Laurens](https://github.com/Razpudding)

### Honourable Mentions
* [Readme by Daniel van de Velde](https://github.com/DanielvandeVelde/functional-programming/blob/master/README.md)
* [Code provided by Martijn Reeuwijk](https://github.com/MartijnReeuwijk)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
