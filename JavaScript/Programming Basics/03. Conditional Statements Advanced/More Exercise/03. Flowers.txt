function solve(input) {

    let hrizantemas = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let yesOrNo = input[4];

    let bucketPrice = 0;
    let bucketArrangePrice = 2;
    let finalBucketPrice = 0;


    switch (season) {

        case "Spring":

            bucketPrice = (hrizantemas * 2) + (roses * 4.10) + (tulips * 2.50);

            if (yesOrNo === "Y") {
                bucketPrice += bucketPrice * 0.15;
            } else {
                bucketPrice = bucketPrice;
            }

            if (tulips > 7) {
                bucketPrice -= bucketPrice * 0.05;
            }

            if ((hrizantemas + tulips + roses) >= 20) {
                bucketPrice -= bucketPrice * 0.20;

            } else if ((hrizantemas + tulips + roses) < 20) {
                bucketPrice = bucketPrice;
            }

            finalBucketPrice = bucketPrice + bucketArrangePrice;

            break;

        case "Summer":

            bucketPrice = (hrizantemas * 2) + (roses * 4.10) + (tulips * 2.50);

            if (yesOrNo === "Y") {
                bucketPrice += bucketPrice * 0.15;
            } else {
                bucketPrice = bucketPrice;
            }

            if ((hrizantemas + tulips + roses) >= 20) {
                bucketPrice -= bucketPrice * 0.20;

            } else if ((hrizantemas + tulips + roses) < 20) {
                bucketPrice = bucketPrice;
            }

            finalBucketPrice = bucketPrice + bucketArrangePrice;
            break;

        case "Autumn":

            bucketPrice = (hrizantemas * 3.75) + (roses * 4.50) + (tulips * 4.15);

            if (yesOrNo === "Y") {
                bucketPrice += bucketPrice * 0.15;
            } else {
                bucketPrice = bucketPrice;
            }

            if ((hrizantemas + tulips + roses) >= 20) {
                bucketPrice -= bucketPrice * 0.20;

            } else if ((hrizantemas + tulips + roses) < 20) {
                bucketPrice = bucketPrice;
            }

            finalBucketPrice = bucketPrice + bucketArrangePrice;

            break;


        case "Winter":

            bucketPrice = (hrizantemas * 3.75) + (roses * 4.50) + (tulips * 4.15);

            if (yesOrNo === "Y") {
                bucketPrice += bucketPrice * 0.15;
            } else {
                bucketPrice = bucketPrice;
            }

            if (roses >= 10) {
                bucketPrice -= bucketPrice * 0.10;
            }

            if ((hrizantemas + tulips + roses) >= 20) {
                bucketPrice -= bucketPrice * 0.20;

            } else if ((hrizantemas + tulips + roses) < 20) {
                bucketPrice = bucketPrice;
            }

            finalBucketPrice = bucketPrice + bucketArrangePrice;

            break;
    }

    console.log(finalBucketPrice.toFixed(2));

}