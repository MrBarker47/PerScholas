let movies = ["Beverly Hill Cop", "Menace 2 Society"];
let yourMovies = ["Low Down Dirty Shame", "Coming to America"]

movies.forEach((movie, i) => {
    console.log(i, + ')' + movie)
});


Objects 
const vehical = {
    color: "blue",
    hp: 4000,
    year: 1989,
    engine: {
        cylinders: 7,
        hp: 5000,
        size: 4.2
    }
}

vehical.color = "red";
vehical.make = "Audi";
vehical.model = "S4";

for(const key in vehical) {
    console.log(vehical[key]);
}


