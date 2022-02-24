function solve(input) {

    let houseHeight = Number(input[0]);
    let lengthSideWall = Number(input[1]);
    let heightCeilingWall = Number(input[2]);

    let greenPaintCost = 3.4;
    let redPaintCost = 4.3;
    let doorWidth = 1.2;
    let doorHeight = 2;
    let windowSide = 1.5;

    let houseSideWall = houseHeight * lengthSideWall;
    let windowArea = windowSide * windowSide;
    let twoSideWalls = 2 * houseSideWall;
    let twoWindows = 2 * windowArea;
    let totalWalls = twoSideWalls - twoWindows;

    let backWall = houseHeight * houseHeight;
    let door = doorWidth * doorHeight;
    let totalHouseWalls = (backWall * 2) - door;

    let houseArea = totalWalls + totalHouseWalls;
    let greenPaint = houseArea / greenPaintCost;

    let squareCeiling = 2 * (houseHeight * lengthSideWall);
    let twoTrianglesCeiling = 2 * (houseHeight * heightCeilingWall / 2);
    let ceilingArea = squareCeiling + twoTrianglesCeiling;

    let redPaint = ceilingArea / redPaintCost;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));


}