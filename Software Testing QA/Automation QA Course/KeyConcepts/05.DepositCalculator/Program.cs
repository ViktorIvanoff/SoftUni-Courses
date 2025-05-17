//1.We calculate the accumulated interest: 200 * 0.057(5.7 %) = 11.40 BGN.
//2.We calculate the interest for 1 month: 11.40 BGN / 12 months = 0.95 BGN.
//3.The total amount is:  200 BGN + 3 * 0.95 BGN = 202.85 BGN
double deposit = double.Parse(Console.ReadLine());
int months = int.Parse(Console.ReadLine());
double annualIntRate = double.Parse(Console.ReadLine());

//200
//3
//5.7
double interest = deposit * annualIntRate / 100;
double interestPerMonth = interest / 12;
double totalAmount = deposit + (months * interestPerMonth);

Console.WriteLine($"{totalAmount}");