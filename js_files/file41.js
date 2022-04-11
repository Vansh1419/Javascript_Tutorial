// Destructuring of objects
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year:1968
}

// const bandName =band.bandName;
// const famousSong =band.famousSong;
// console.log(bandName, famousSong);

// const { bandName, famousSong } = band;
// console.log(bandName, famousSong);

// const { bandName: var1, famousSong: var2} = band;
// console.log(var1, var2);

const { bandName, famousSong,...restProps } = band;
console.log(restProps);