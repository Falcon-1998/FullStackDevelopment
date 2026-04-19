type Pizza = {
    id : number,
    name : string,
    price : number
}
type Order = {
    id : number,
    pizza : Pizza,
    status : "ordered" | "completed" | "cancelled"
}
let pizzaIdCounter = 1
const menu : Pizza[] =  [
    { id: pizzaIdCounter++, name : "Margherita", price : 8 },
    { id: pizzaIdCounter++, name : "Pepperoni", price : 10 },
    { id: pizzaIdCounter++, name : "Hawaiian", price : 9 },
    { id: pizzaIdCounter++, name : "Veggie", price : 7 },
    { id: pizzaIdCounter++, name : "BBQ Chicken", price : 11 }
]
let MY_NAME = "John Doe" 
let cashInRegister = 100
let orderQueue : Array<Order>= [] // this is another way to declare an array of type Order
let counter = 1
  
function addNewPizzaToMenu(pizza: Omit<Pizza, "id">) : void{ // if you want to omit more than one property you can use Omit<Pizza, "id" | "name"> for example    
    const newPizza : Pizza  = {  id:pizzaIdCounter++ , ...pizza };
    menu.push(newPizza);
}
function placeOrder(pizzaName: string) : Order | undefined {
    const pizza = menu.find(p => p.name === pizzaName) 
    if (pizza) {
        cashInRegister += pizza.price;
        const orderObject = {id : counter++ , pizza : pizza , status : "ordered" as const};
        orderQueue.push( orderObject );
        return orderObject;
    }
}
// I just found out we can use | defined in typescript to specify multiple return types for a function, this is called a union type
function completeOrder(orderid : number) : Order | string {
    if (orderQueue.length > 0) {
        const order = orderQueue.find(o => o.id === orderid);
        if (order) {
            order.status = "completed";
            return order;
        }
    }
    return "Order not found";
}

addNewPizzaToMenu({name: "Meat Lovers", price: 12 });
console.log(placeOrder("Pepperoni"));
console.log(placeOrder("Veggie"));
console.log(completeOrder(1));
console.log(completeOrder(2));


function getPizzaDetails(identifier : number | string) : Pizza | undefined {
    if (typeof identifier === "number") {
        return menu.find(p => p.id === identifier);
    } else if (typeof identifier === "string") {
        return menu.find(p => p.name === identifier.toLowerCase());
    }
    else {
        throw  new TypeError("TypeError: Identifier must be a number or a string !");
    }
}


let numberOfWeheels : number = 4
let carBrand : string = "Toyota"
let isElectric : boolean = false

let myName = "Alice"
const myName2 = "Bob" // this is a constant variable, it cannot be reassigned : Litiral types in typescript, the type of myName2 is "Bob" not string, this is because we have assigned a literal value to it and it cannot be changed
// This is very similar to how we can use enums in typescript, we can use literal types to create a type that can only have a specific set of values, for example we can create a type for the status of an order
type OrderStatus = "ordered" | "completed" | "cancelled"
let orderStatus : OrderStatus = "ordered" // this variable can only have the values "ordered", "completed" or "cancelled"
// orderStatus = "shipped" // this will give an error because "shipped" is not a valid value for the type OrderStatus
type User ={
    username : string,
    email : string,
    role : "admin" | "user" | "guest"
}