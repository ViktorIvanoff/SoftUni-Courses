﻿//Write a program that checks if a given password is valid.
//The password validation rules are:
//•	It should contain 6 – 10 characters (inclusive)
//•	It should contain only letters and digits
//•	It should contain at least 2 digits 
//If it is not valid, for any unfulfilled rule print the corresponding message:
//•	"Password must be between 6 and 10 characters"
//•	"Password must consist only of letters and digits"
//•	"Password must have at least 2 digits"

//logIn 
    
//Password must be between 6 and 10 characters 
//Password must have at least 2 digits
string text = Console.ReadLine();
string result = PasswordValidator(text);

static string PasswordValidator(string text)
{
    string result;
    int length = text.Length;
    if(length <= 6 && length >= 10)
    {
        result = "Password must be between 6 and 10 characters";
    }
}

