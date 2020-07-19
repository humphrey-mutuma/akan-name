// function to validate input of type numbers only
function validateInputs() {
    var CC,YY,MM,DD;
    // Get the value of the input field fields
    CC = parseInt(document.getElementById("centuryInput").value);
    YY = parseInt(document.getElementById("yearInput").value );
    MM = parseInt(document.getElementById("monthInput").value);
    DD = parseInt( document.getElementById("dayInput").value );
    gender = document.querySelector('input[type=radio]:checked').value;

    if(CC == "" || YY == "" || MM == "" || DD == "") {
        alert("Invalid input! or Missing inputs. Kindly fill in with numbers only.");
    } 
    if(isNaN(CC) || isNaN(YY) || isNaN(MM) || isNaN(DD)){
        alert("Invalid input! or Missing inputs. Kindly fill in with numbers only.");
    }
}

// function to validate the months to fall between 1 and 12.
function validateMonth() {
   var MM, text;
    MM = parseInt(document.getElementById("monthInput").value);
      // If MM is less than 1 or greater than 12
        if ( MM < 1 || MM > 12) {
            alert("Invalid month input");
            document.getElementById("monthInput").value = "";
            text = "Input not valid; month can only be from 1 to 12";
        } else {
            text = MM ;
        }
        document.getElementById("OutputDOW").innerHTML = text;
}
// function to validate the dats of the month to fall between 1 and 31.
function validateDays() {
    var DD, message;
        DD = parseInt(document.getElementById("dayInput").value);
        // If MM is less than 1 or greater than 12
            if ( DD < 1 || DD > 31) {
                alert("Invalid day input");
                document.getElementById("dayInput").value = "";
                message = "Input not valid; month can only be from 1 to 12";
            } else {
                message = DD ;
            }
            document.getElementById("OutputDOW").innerHTML = message;
}
// Main function
function myFunction() {
    var CC,YY,MM,DD,gender;
    // Get the value of the input field fields
    CC = parseInt(document.getElementById("centuryInput").value);
    YY = parseInt(document.getElementById("yearInput").value );
    MM = parseInt(document.getElementById("monthInput").value);
    DD = parseInt( document.getElementById("dayInput").value );
    gender = document.querySelector('input[type=radio]:checked').value;

//calculate the day of the week
    myDOW = Math.floor((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7) ;

    document.getElementById("OutputDOW").innerHTML = "You were born on the" + myDOW + "th" +" day of th week";
    document.getElementById("gender").innerHTML = "Your gender is" + gender ;
    // an array of male names
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    //an array of female names
    var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    //an array of days of the week
    var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    
    if(myDOW === 0 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[0] ;
    }else if(myDOW === 0 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[0] ;
    }else if(myDOW === 1 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[1] ;
    }else if(myDOW === 1 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[1] ;
    }else if(myDOW === 2 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[2] ;
    }else if(myDOW === 2 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[2] ;
    }else if(myDOW === 3 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[3] ;
    }else if(myDOW === 3 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[3] ;
    }else if(myDOW === 4 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[4] ;
    }else if(myDOW === 4 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[4] ;
    }else if(myDOW === 5 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[5] ;
    }else if(myDOW === 5 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[5] ;
    }else if(myDOW === 6 && gender=== "Male"){
        document.getElementById("akanNameOutput").innerHTML = male[6] ;
    }else if(myDOW === 6 && gender === "Female"){
        document.getElementById("akanNameOutput").innerHTML = female[6] ;
    }else{
        document.getElementById("akanNameOutput").innerHTML = "Invalid input somewhere";
    }

}
