import { lists, gamesList } from "../client/data.js";

const {genres, cameras, inputScheme, theme, mechanics} = lists;

const currentTagSet = new Set();
const listsSet = new Set(genres.concat(cameras, inputScheme, theme, mechanics))

gamesList.forEach((game) => {
  game.tags.forEach((tag) => {currentTagSet.add(tag)});
});

(() => {
  let unusedTags = {};
  Object.keys(lists).forEach((listsKey) => {
    let norepData = lists[listsKey].filter((tag) => {
      // console.log(tag + " " + currentTagSet.has(tag))
      return !currentTagSet.has(tag)
    });

    if (norepData.length > 0) {
      unusedTags[listsKey] = norepData
    }
  });
  console.log("The following tags are not currently covered by games: ", JSON.stringify(unusedTags, null, 2))

  let missingTags = currentTagSet.difference(listsSet)

  if (missingTags.size > 0) {
    let missingTagsReport = {}
    missingTags.forEach((tag) => {
      missingTagsReport[tag] = [];
      gamesList.forEach((game) => {
        if (game.tags.includes(tag)) { missingTagsReport[tag].push(game.title)}
      });
    });
    console.log("The following tags are present in the listed games, but not present in the database: ", JSON.stringify(missingTagsReport, null, 2))
  }  

})();