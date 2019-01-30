function validate(form)	
 {	
 	var strError="Plaese enter following details : \n";
	var strName=document.getElementById("nm").value;
	var strGender;
	var strAddress=document.getElementById("address").value;
	var strBirthdate=document.getElementById("bdate").value;
	var strContact=document.getElementById("contact").value;

	if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
	{
		strError+="Gender\n";
	}
	else
	{
		if(form.gender[0].checked == true)
		{
			strGender=form.gender[0].value;
		}
		else
		{
			strGender=form.gender[1].value;
		}
	}

	if(strName=="" || strAddress=="" || strBirthdate=="" || strContact=="")
	{
		if(strName=="")
		{
			strError+="Name\n";
		}
		if(strAddress=="")
		{
			strError+="Address\n";
		}
		
		if(strBirthdate=="")
		{
			strError+="Birthdate\n";
		}
		if(strContact=="")
		{
			strError+="Contact\n";
		}




		alert(strError);
	}
	else
	{
		alert("Welcome "+strName);
	}



}
