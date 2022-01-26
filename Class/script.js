class Movie{
    constructor(movie,studio,rating){
        this.movie = movie;
        this.studio = studio;
        this.rating = (rating == undefined) ? "PG" : rating ;
        // this.rating = rating;  
        
    }

    getPG(){
        if(this.movie == "PG"){
            return "this movie has rathing of 'PG'" ;
        } else{
          return "No PG rating movies";
        }
    }
     
}
 
const movie_1 = new Movie("Casino Royale","Eon Productions","PG13");
const movie_2 = new Movie("avathar", "Fox Lightstorm Entertainment");
console.log(movie_1);

console.log(movie_1.getPG());
console.log(movie_2.getPG());

// second question

class Circle {
    constructor(radius, color) {
      this.radius = radius
      this.color = color
    }
  
    getRadius () {
      return this.radius
    }
  
    setRadius (radius) {
      this.radius = radius
    }
  
    getColor () {
      return this.color
    }
  
    setColor (color) {
      this.color = color
    }
  
    getArea () {
      return Math.PI * this.radius * this.radius
    }
  
    getCircumference () {
      return 2 * Math.PI * this.radius;
    }
   }
  
   let myCircle = new Circle (1, 'RED',)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())
  
   // after changing
   myCircle.setColor('Blue')
   myCircle.setRadius(2)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())

// Third question

class Person {
    constructor (name,age, gender,qualification,JobRole,state){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.JobRole = JobRole;
        this.state = state;
    }
}

const person_1 = new Person ("Prathipan","23", "male","BE","Analyst","TamilNadu");

console.log(person_1);

//Fourth question 

class Uber_price {
    constructor (km,price) {
        this.km = km ;
        this.price = price;
    }
    getPrice(){
        return `Total amount is ₹ ${this.km * this.price}`;
    }
}

const charge_1 = new Uber_price(30,15);
const charge_2 = new Uber_price(15,15);
console.log(charge_1.getPrice());
console.log(charge_2.getPrice());