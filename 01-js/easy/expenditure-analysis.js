/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let myMap = new Map();
  transactions.forEach((element,index)=>{
      const category = element['category'];
      let price = element['price'];
      if(myMap.has(category)){
          price += myMap.category;
          myMap.delete(category);
      }
      myMap.set(category,price);
    })
    let ans = [];
    myMap.forEach((value,key) => {
        ans.push({category: key,price: value});
    })
  return ans;
}

module.exports = calculateTotalSpentByCategory;
