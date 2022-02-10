//Problem 2
function plant(seed, water, fert, temp) {
    let stem = '-';
    let flower =[];

    if(temp >=20 && temp <=30){
        for (let i = 0; i < water; i++) {
            for (let j = 0; j < water; j++) {
                flower += stem.toString();
            }
            for (let k = 0; k < fert; k++) {
                flower += seed.toString();
            }
        }
    }
    else{
        for (let i = 0; i < water; i++) {
            for (let i = 0; i < water; i++) {
                flower += stem.toString();
            }
        }
        flower += seed.toString();
    }

    console.log(flower);
    return flower
}

plant("@", 3, 3, 25)
plant("#", 1, 5, 30)
plant("&", 5, 1, 20)
plant("§", 3, 3, 15)
