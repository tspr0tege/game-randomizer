// const fs = require('fs');
import fs from "fs";

// Load your data from a JSON file (for this example, we'll assume it's called 'data.json').
import {lists, gamesList} from "../client/data archive 002.js";

// const { lists, gamesList } = data;

// Function to transform lists to objects with text and description properties
// const transformLists = (list) => {
//   return list.map(item => ({
//     text: item,
//     description: ""
//   }));
// };

// Transform the lists
// for (const key in lists) {
//   if (lists.hasOwnProperty(key)) {
//     lists[key] = transformLists(lists[key]);
//   }
// }

// Function to categorize tags into appropriate properties
// const categorizeTags = (tags) => {
//   const game = {};
//   tags.forEach(tag => {
//     for (const category in lists) {
//       if (lists[category].some(item => item.text === tag)) {
//         if (!game[category]) {
//           game[category] = lists[category].filter(item => item.text === tag).length > 1 ? [] : "";
//         }
//         if (Array.isArray(game[category])) {
//           game[category].push(tag);
//         } else {
//           game[category] = tag;
//         }
//         break;
//       }
//     }
//   });
//   return game;
// };

// Transform the gamesList
const transformedGamesList = gamesList.map(game => {
  // const categorizedTags = categorizeTags(game.tags);

  if (typeof game.genres == "string") {
    game.genres = [game.genres]
  }
  if (typeof game.cameras == "string") {
    game.cameras = [game.cameras]
  }
  if (typeof game.themes == "string") {
    game.themes = [game.themes]
  }
  if (typeof game.mechanics == "string") {
    game.mechanics = [game.mechanics]
  }

  return game;
});

// Prepare the output as a JavaScript module
const output = `export const lists = ${JSON.stringify(lists, null, 2)};

export const gamesList = ${JSON.stringify(transformedGamesList, null, 2)};
`;

// Save the output to a .js file
fs.writeFileSync('transformedData.js', output, 'utf-8');

console.log('Data transformation complete. Output saved to transformedData.js');
