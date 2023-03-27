var phone = document.getElementById('phone');
var form = document.getElementById('form');
var country = document.getElementById('Cc');
var input = document.getElementsByTagName('input');
var paddl1 = document.getElementById('PAddressl1');
var paddl2 = document.getElementById('PAddressl2');
var paddl3 = document.getElementById('PAddressl3');
var paddl4 = document.getElementById('PAddressl4');
var caddl1 = document.getElementById('CAddressl1');
var caddl2 = document.getElementById('CAddressl2');
var caddl3 = document.getElementById('CAddressl3');
var caddl4 = document.getElementById('CAddressl4');
var chkcopy = document.getElementById('copyAddress');
// var India = country.children[0];
// var otherCountries = country.children[1];


phone.oninput = function(event){
	event.target.setCustomValidity("");
	if(!event.target.validity.valid){
		event.target.setCustomValidity('Phone number should start with a number from 6 to 9 and it should consist of 10 numbers in total');
	}
}	

document.addEventListener("focus",(event)=>{
	
	event.target.style.background ='rgb('+215+','+250+','+247+')';
},true
);

document.addEventListener("blur",(event)=>{
	
	event.target.style.background ="";
},true
);

chkcopy.onclick = ()=> {
	if(chkcopy.checked){
		caddl1.value = paddl1.value;
		caddl2.value = paddl2.value;
		caddl3.value = paddl3.value;	
		caddl4.value = paddl4.value;
		paddl1.onkeyup = ()=>{ 
			caddl1.value = paddl1.value;			
		}
		paddl2.onkeyup = ()=>{ 
			caddl2.value = paddl2.value;			
		}
		paddl3.onkeyup = ()=>{ 
			caddl3.value = paddl3.value;			
		}
		paddl4.onkeyup = ()=>{ 
			caddl4.value = paddl4.value;			
		}
	}
	else{
		caddl1.value = "";
		caddl2.value = "";
		caddl3.value = "";
		caddl4.value = "";
	}
}

// India.value= "+" + India.value;
// otherCountries.value = "+" + otherCountries.value;



// var pguniv = document.getElementById("University or Board of Educationpg");
// console.log(pguniv.children);
// console.log(pguniv.value);

// pguniv.oninput= function(){
// 	// pguniv.value = "+" + pguniv;
// 	console.log(pguniv.value);
// }

// country.oninput = () => {
// 	country.value= "+" + country.value;
// 	console.log(country.value);
// }

// var elem 				= document.createElement('div');
//  	elem.id  			='notify';
//  	elem.style.diplay	='none';
//     form.appendChild(elem);

/*input.addEventListener('input',function(event){
	

	event.preventDefault();
	if( event.target.validity === 'invalid'){
		event.target.setCustomValidity('Phone number should start with a number 6 to 9 and consist of 10 numbers in total.');
		console.log(event.target.CustomValidity);
	}
});
*/
// input.oninput = function(event){
// 	event.target.setCustomValidity(" ");
// }


// input.addEventListener('input',function(event){
// 	if( event.target.validity === 'valid'){
// 		event.target.setCustomValidity('');
// }
// });
