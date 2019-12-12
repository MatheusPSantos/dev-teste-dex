Parse.Cloud.define("getAllFoods", async (req, res) => {
    const query = new Parse.Query("Food");
    try {
        const result = await query.find();
        var foods = [];
        result.forEach(element => {
            var foodArray = {
                name: element.get('name'),
                imageLink: element.get('link')
            };

            foods.push(foodArray);
        });
        return foods;
    } catch (error) {
        throw error.message;
    }
});

Parse.Cloud.define("getAllPeoples", async (req, res) => {
    const query = new Parse.Query("Person");
    try {
        const result = await query.find();
        var peoples = [];
        result.forEach(element => {
            var peopleArray = {
                name: element.get('name'),
                imageLink: element.get('link')
            };

            peoples.push(peopleArray);
        });
        return peoples;
    } catch (error) {
        throw error.message;
    }
});

Parse.Cloud.define("getAllPlaces", async (req, res) => {
    const query = new Parse.Query("Place");
    try {
        const result = await query.find();
        var places = [];
        result.forEach(element => {
            var placesArray = {
                name: element.get('name'),
                imageLink: element.get('link')
            };

            places.push(placesArray);
        })
        return places;
    } catch (error) {
        throw error.message;
    }
});