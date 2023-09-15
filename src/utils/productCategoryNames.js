import data from "../data.json";

// Getting each category from the data file
const categories = data.map(({ category }) => category);

// Removing the duplicates from the "categories" array and stroing it in a "newCategories"
const newCategories = [...new Set(categories)];

// Removing the first element of the "newCategories" array and pusin it to the end of the "newCategories" array
newCategories.push(newCategories.splice(0, 1)[0]);

export default newCategories;
