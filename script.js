document.addEventListener("DOMContentLoaded",()=>{
    
    var slelectDrop= document.getElementById("countries");
    
    fetch("https://restcountries.com/v3.1/all").then(res=>{
        return res.json();
    
    }).then(data=> {
        let outPut = "";
    
        data.forEach(country => {
            outPut += `<option>${country.name.common}</option>`;
    
        });
        slelectDrop.innerHTML = outPut;
    
    }).catch(err =>{
        conaole.log(err);
    })

})

function submitButton(event){
    event.preventDefault()
    var firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById('lastName').value;
    var genderRadio = document.getElementsByName("gender");
    let genderValue;
    for(var gender of genderRadio){
        if(gender.checked){
            genderValue=gender.value;
        }
    }
    console.log(firstname);
    console.log(lastname);
    console.log(genderValue);

    //food
    var food = document.getElementsByName("food");
    foodValue=[];
    for(selected of food){
        if(selected.checked){
            foodValue.push(selected.value)
            console.log(foodValue);
        }
    }
    if( foodValue.length<=2){
        console.log(foodValue.length)
        var selectFood = foodValue.join(",");
        console.log(selectFood);
    }
    else{
        alert("select any two only")
    }
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var pincode = document.getElementById("inputPincode").value;
    var state = document.getElementById("usersState").value;
    var country =document.getElementById("countries").value;
    console.log(firstname);
    console.log(lastname);
    console.log(genderValue);
    console.log(address);
    console.log(city);
    console.log(pincode);
    console.log(state);
    console.log(country);
    let row =1;


    var table_body = document.getElementById("table_body");
    table_body.innerHTML=`<tr>
    <th scope="row">${row}</th>
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${genderValue}</td>
    <td>${selectFood}</td>
    <td>${address}</td>
    <td>${city}</td>
    <td>${pincode}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>
    `

}
