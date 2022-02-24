function solve(input) {

    let bitcoins = Number(input[0]);
    let juans = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinToBGN = bitcoins * 1168;
    let usdRate = 1.76;
    let eurRate = 1.95;

    let result = 0;

    let usd = juans * 0.15;
    let bgn = usd * usdRate;
    let totalBgn = bitcoinToBGN + bgn;
    let euros = totalBgn / eurRate;

    let rateAfterCommission = euros * (commission / 100);
    result = euros - rateAfterCommission;

    console.log(result.toFixed(2));

}