// 1. Calculating the average price of all Items

//using reduce to first sum the prices
  let sum = items.reduce(function(total, current){
    return total + current['price']
  }, 0);
  //since the number of items are the only thing we need to
  // put in the denominator, we can use arr.length
  let avg = sum / items.length
  //rounding the average to two decimal points
  const avgPrice = Math.round(avg * 100)/100;

console.log("$" + avgPrice);

// 2. Getting an array of items costing between $14.00 - 18.00USD

  // filtering for items in USD
  const USD = items.filter(function(item){
    return item.currency_code === "USD";
  });
  //filter out items in the price range
  const fourteenEighteen = USD.filter(function(item){
    return item.price >= 14.00 && item.price <= 18.00;
  });
  // getting the array of the items found
  const final = fourteenEighteen.map(function(item){
    return item.title;
  });

  console.log("Items that cost between $14.00 USD and $18.00 USD:", final);

// 3. Find an item with GBP currency code and log its name and price

  // finding the GBP object
  let found = items.filter(function(item){
    return item.currency_code === "GBP";
  });
  // console.log(found)
  // printing the found information into the console using a forEach method
  const GBP = found.forEach(function(item) {
    console.log(item.title + " costs £" + item.price);
  })


// 4. Find items which are made of wood

//filtering items made of wood
const woodFind = items.filter(function(item){
  return item.materials.includes("wood")
});

//logging which items are made of wood
const woodLog = woodFind.forEach(function(item){
  console.log(`${item.title} costs $${item.price}`)
});

// 5. Find which items are made of eight or more materials

const matFind = items.filter(function(item){
  return item.materials.length >= 8
});
const itemLog = matFind.forEach(function(item){
  console.log(item.title + "has " + item.materials.length)
})
