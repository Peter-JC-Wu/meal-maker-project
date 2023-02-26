const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    return this.courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your randomly created three-course meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price of the three-course meal is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers','Miso Soup', 3.00);
menu.addDishToCourse('appetizers','Edamame', 5.00);
menu.addDishToCourse('appetizers','Gyoza', 7.00);
menu.addDishToCourse('appetizers','Grilled Skewers', 8.00);
menu.addDishToCourse('appetizers','Wonton Soup', 6.00);

menu.addDishToCourse('mains','Pad Thai', 15.00);
menu.addDishToCourse('mains','Pad See Ew', 15.00);
menu.addDishToCourse('mains','Teriyaki Bento', 16.00);
menu.addDishToCourse('mains','Massaman Curry', 15.00);
menu.addDishToCourse('mains','Pineapple Fried Rice', 20.00);

menu.addDishToCourse('desserts','Coffee', 3.00);
menu.addDishToCourse('desserts','Ice Cream', 7.00);
menu.addDishToCourse('desserts','Tall Chocolate Cake', 12.00);
menu.addDishToCourse('desserts','Roasted Banana Cake', 13.00);
menu.addDishToCourse('desserts','Milkshake', 9.00);

const meal = menu.generateRandomMeal();

console.log(meal);
