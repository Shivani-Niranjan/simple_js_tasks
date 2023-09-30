user = [
    {
        id : 1,
        name : "shivani",
        active : false,
        department : [1, 2, ,3 ,4],
        address : {
            permanent : "a1",
            temp : "b1"
        }
    },

    {
        id : 2,
        name : "mukund",
        active : true,
        department : [5, 7, 9],
        address : {
            permanent : "h1",
            temp : "s1"
        }
    },

    {
        id : 3,
        name : "vidya",
        active : false,
        department : [355, 79, 0],
        address : {
            permanent : "p1",
            temp : "x1"
        }
    }
]

// if its of onject type and again it traverses and prints it otherwise direct string or number or boolean vakue is printed

for (let i of user){
    for (let j in i) {
        if (typeof i[j] == 'object'){
            for (let k in i[j]){
                console.log(i[j][k])
            }
        }
        else{
            console.log(i[j])
        }
    }
}