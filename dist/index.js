var form = document.getElementById("signIn");
form.addEventListener("submit", validateForm);

function isOldEnough(dateStr)
{
	var currentDate = Date.now();
	var birthday = Date.parse(dateStr);
	var millisIn18Years = 567648000000;
	var diffInMillis = Math.abs(currentDate - birthday);	
	return (diffInMillis >= millisIn18Years);
}

function isAccountNameLegal(accountName)
{
	//if first char is numberic return false
	if (/^\d+$/.test(accountName[0]))
	{
		return false;
	}
	if (! accountName.match("^[a-zA-Z0-9]*$"))
	{
		return false;
	}
	return true;
}

function arePasswordsEqual()
{
	var password = document.getElementsByName("Password")[0];
	var passwordConfirmation = document.getElementsByName("PasswordConfirmation")[0];
	return password === passwordConfirmation;
}

function validateForm(e)
{	
	var email = this.querySelector('input[name="Email"]').value;
	var accountName = this.querySelector('input[name="AccountName"]').value;
	var phoneNumber = this.querySelector('input[name="PhoneNumber"]').value;
	var dob = this.querySelector('input[name="DOB"]').value;
	var password = this.querySelector('input[name="Password"]').value;
	var passwordConfirmation = this.querySelector('input[name="PasswordConfirmation"]').value;
	this.querySelector('input[name="timeStamp"]').value = Date.now();
	var alertString= "";	
	if (!isOldEnough(dob))
	{
		alertString+="You are under 18!\n";
	}
	if (!isAccountNameLegal(accountName))
	{
		alertString+="Account name is illegal\n";
	}
	if (password !== passwordConfirmation)
	{
		alertString+="Password does not match password confirmation\n";
	}
	if (alertString.length > 0)
	{
		alert(alertString);
		e.preventDefault();
	}
}

function login()
{
	var aString = "";
	//validate
	if (document.getElementsByName("AccountName")[0].value.length == 0)
	{
		aString += "Please enter your account name.\n";
	}
	if (document.getElementsByName("Password")[0].value.length == 0)
	{
		aString += "Please enter your password\n";
	}
	if (aString.length > 0)
	{
		alert(aString);
	}
	//if password and account name are both valid go to main page
	else
	{
		window.location.href = "main.html";
	}
}