function RecursionDiamond(i, height, symbol) {
    if ( i === height ) {
        printDiamondRecursionMinus( i , height, symbol );
    } else {
        printDiamondRecursionPlus( i, height, symbol );
    }
};

function printDiamondRecursionPlus( i, height , symbol ){
    var space = (height-i)/2;
    var stringDiamond = ' '.repeat(space) + symbol.repeat(i);
    if (i === height) {
        RecursionDiamond(i, height, symbol);
    } else {
        console.log(stringDiamond);
        printDiamondRecursionPlus( i+2, height , symbol );
    }
};

function printDiamondRecursionMinus(i, height, symbol){
    var space = (height-i)/2;
    var stringDiamond = ' '.repeat(space) + symbol.repeat(i);
    if ( i === 1) {
        console.log(stringDiamond);
    } else {
        console.log(stringDiamond);
        printDiamondRecursionMinus( i -2 ,height, symbol );
    }
};


function printDiamond(height, symbol) {
  if ( height %2 === 0 ){
        console.log("Please enter valid number!");
  } else {

    console.log('       Loop');
      printDiamondForLoop( height, symbol);


      console.log('     Recursion');
      RecursionDiamond( i= 1, height, symbol);

  };
};

function printDiamondForLoop(height, symbol) {
    var space, stringDiamond;

    for( i = 1; i <= height; i= i+2) {
        space = (height-i)/2;
        stringDiamond = ' '.repeat(space) + symbol.repeat(i);
        console.log(stringDiamond);
    }
    for( i =height; i >= 1; i= i-2) {
        space = (height-i)/2;
        stringDiamond = ' '.repeat(space) + symbol.repeat(i);
        console.log(stringDiamond);
    }
};

printDiamond(13, '@');

