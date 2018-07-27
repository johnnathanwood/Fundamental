const coffeeCompany = Object.create(null, {
    name: {
        value: "Kao Jai Coffee",
        enumerable: true
    },
    location: {
        value: "Nashville"
    },
    customers: {
        value: [],
        writable: true
    },
    addCustomer: {
        value: function(customer){
            this.customers.push(customer);
        }
    }

});


let customers = ["Meg", "Mark", "Klaus", "Nick"];

let stringifiedCustomers = JSON.stringify(customers)
localStorage.setItem("customers", stringifiedCustomers);


let parsedCustomers = JSON.parse(localStorage.getItem("customers"));
console.log(parsedCustomers);

parsedCustomers.forEach(customer => {
    coffeeCompany.addCustomer(customer);
})


