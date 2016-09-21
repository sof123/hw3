
//hardcoded values
var displayName = "TheKid";
var emailAddress = "abc123@gmail.com";
var phoneNumber = "5555555555";
var zipCode = "55555";
var password = "password";
var passwordConfirmation = "password";
function updateVals()
{
	var alertMessage = "";
	
	
	//check if input and current value are mismatched and that the input is not empty
	if (document.getElementById("DisplayNameText").innerHTML != displayName && document.querySelector('input[name="DisplayName"]').value != "")
	{
		alertMessage+="Display Name is being updated from " + displayName + " to " + document.querySelector('input[name="DisplayName"]').value + "\n";
		displayName = document.querySelector('input[name="DisplayName"]').value;
		document.getElementById("DisplayNameText").innerHTML = displayName;
	}
	
	if (document.getElementById("EmailText").innerHTML != emailAddress && document.querySelector('input[name="Email"]').value != "")
	{
		if (validateEmail(document.querySelector('input[name="Email"]').value))
		{
			alertMessage+="Email is being updated from " + emailAddress + " to " + document.querySelector('input[name="Email"]').value + "\n";
			emailAddress = document.querySelector('input[name="Email"]').value;
			document.getElementById("EmailText").innerHTML = emailAddress;
		}
	}
	
	if (document.getElementById("PhoneNumberText").innerHTML != phoneNumber && document.querySelector('input[name="PhoneNumber"]').value != "")
	{
		if (validatePhone(document.querySelector('input[name="PhoneNumber"]').value))
		{
			alertMessage+="Phone Number is being updated from " + phoneNumber + " to " + document.querySelector('input[name="PhoneNumber"]').value + "\n";
			phoneNumber = document.querySelector('input[name="PhoneNumber"]').value;
			document.getElementById("PhoneNumberText").innerHTML = phoneNumber;
		}
	}
	if (document.getElementById("ZipcodeText").innerHTML != zipCode && document.querySelector('input[name="Zipcode"]').value != "")
	{
		if (validateZip(document.querySelector('input[name="Zipcode"]').value))
		{
			alertMessage+="Zipcode is being updated from " + zipCode + " to " + document.querySelector('input[name="Zipcode"]').value + "\n";
			zipCode = document.querySelector('input[name="Zipcode"]').value;
			document.getElementById("ZipcodeText").innerHTML = zipCode;
		}
	}
	if (document.getElementById("PasswordText").innerHTML != password && document.querySelector('input[name="Password"]').value != "")
	{
		alertMessage+="Password is being updated from " + password + " to " + document.querySelector('input[name="Password"]').value + "\n";
		password = document.querySelector('input[name="Password"]').value;
		document.getElementById("PasswordText").innerHTML = password;
	}
	if (document.getElementById("PasswordConfirmationText").innerHTML != passwordConfirmation && document.querySelector('input[name="PasswordConfirmation"]').value != "")
	{
		alertMessage+="Password Confirmation is being updated from " + passwordConfirmation + " to " + document.querySelector('input[name="PasswordConfirmation"]').value + "\n";
		passwordConfirmation = document.querySelector('input[name="PasswordConfirmation"]').value;
		document.getElementById("PasswordConfirmationText").innerHTML = passwordConfirmation;
	}
	
	//check if password and passwordConfirmation match
	if (document.getElementById("PasswordConfirmationText").innerHTML != document.getElementById("PasswordText").innerHTML)
	{
		alertMessage+="Password does not equal password confirmation";
	}
	
	//remmove alerts
	/*
	if (alertMessage.length > 0)
	{
		alert(alertMessage);
	}
	*/
}


function validateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
  {  
    return (true)  
  }  
  
  
  
  //remove alerts
  /*
    alert("You have entered an invalid email address!");
	*/
    return (false)  
}  

function validatePhone(number)
{
 if (/^\d{10}$/.test(number))
 {
	return (true);
 }
	//remove alerts
	/*
	alert("You have entered an invalid phone number!");
	*/
	return (false);
}

function validateZip(number)
{
 if (/^\d{5}$/.test(number))
 {
	return (true);
 }
	//remove alerts
	/*
	alert("You have entered an invalid zip code!");
	*/
	return (false);
}