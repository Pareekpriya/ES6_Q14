
let profile={
   name:"Priya",
   age:22,
   address:{
    city: "Hyderabad",
    Zipcode:"001233"
   }
};

let updates = {
    age : 23,
    address:{
        zipcode:"550022",
        country:"India"
    }
};

let merge = {...profile, ...updates,
                address: {
                    city: profile.address.city,
                    ...updates.address
                }
};
                                
console.log(merge);