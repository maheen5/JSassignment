
/*"ALERT"
Task 1
alert('HELLO VISITOR');
Task 2
alert('Error! Please enter a valid password.');
Task 3
alert('Welcome to JS Land... \n Happy Coding!');
Task 4
alert('Welcome to JS Land');
alert('Happy Coding!');
Task 5
alert("Hello...I can run JS through my web browser's console");(done this in web browser console)
"Variables For Strings"
Task 1
var username;
Task 2
var myName='Maheen Ansari';
Task 3
var message='Hello World';
alert(message);
Task 4
var a='Jhone Doe';
var b='15 years old';
var c='Certified Mobile Application Development';
alert(a);
alert(b);
alert(c);
Task 5
var a='PIZZA \n PIZZ \n PIZ \n PI \n P';
alert(a);
Task 6
var email='maha.ansari265@gmail.com';
alert('My email address is ' + email);
Task 7
var book='A smarter way to learn JavaScript';
alert('I am trying to learn from the Book '+ book);
Task 8
document.write('Yah! I can write HTML content through JavaScript');
Task 9
var a='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(a);
"Variables For Numbers"
Task 1
var age=20;
alert('I am '+ 20+' years old');
Task 2
var a=14;
alert('You have visited this site '+a+ ' times');
Task 3
var birthyear=1999;
document.write('My birth year is '+birthyear+ '<br> Data type of my declared variable is number');
Task 4
var name=prompt('Enter your name');
var product=prompt('Enter your product');
var quantity=prompt('How much quantity');
document.write(name+' ordered ' + quantity + ' ' + product + '(s) on XYZ Clothing Store');
"Variable Names:Legal & Illegal"
Task 1
var a=1, b=2, c=3;
Task 2
var course='webdesign', one1='book', user_response='good', userAlert='box', userResponseTime='limited';
var 5='five', 14class='webdesign', java script='book', alert='box', "username"='maheen';
Task 3
document.write('Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>'+
'Variables must begin with a letter, $ or _ . For example $name, _name or name<br>'+
'Variable names are case sensitive<br>'+
'Variable names should not be JS keywords');
"Chapter Five"
Task 1
var a=3;
var b=5;
var c=a+b;
document.write('Sum of 3 and 5 is '+ c);
Task 2
var a=3;
var b=5;
var c=a-b;
document.write('Sum of 3 and 5 is '+ c);
var a=3;
var b=5;
var c=a*b;
document.write('Sum of 3 and 5 is '+ c);
var a=3;
var b=5;
var c=a/b;
document.write('Sum of 3 and 5 is '+ c);
var a=3;
var b=5;
var c=a|b;
document.write('Sum of 3 and 5 is '+ c);
Task 4
var ticket=600;
var ticket5=ticket*5;
document.write('Total cost to buy 5 tickets to a movie is '+ ticket5+' PKR');
Task 6
var celsius= 25;
var celsiusIntoF= (celsius*9)/5 + 32;
document.write(celsius + '°C is ' + celsiusIntoF + '°F<br>');
var fahrenheit=70;
var fahrenheitIntoC=(fahrenheit-32)*5/9;
document.write(fahrenheit + '°F is '+ fahrenheitIntoC + '°C');
Task 7
var item1=650;
var item2=100;
var quantity1=3;
var quantity2=7;
var shippingCharges=100;
var totalCost=(item1*3)+(item2*7)+shippingCharges;
document.write('Price of item 1 is '+ item1+'<br>'+
	           'Quantity of item 1 is '+ quantity1+'<br>'+
	           'Price of item 2 is '+ item2+'<br>'+
	           'Quantity of item 2 is '+ quantity2+'<br>'+
	           'Shipping Charges '+ shippingCharges+'<br>'+
	           'Total cost of your order is '+ totalCost);
Task 8
var totalMarks=980;
var marksObtained=804;
var percentage=(marksObtained/totalMarks)*100;
document.write('Total marks: '+ totalMarks +'<br>'+
                'Marks obtained: '+ marksObtained +'<br>'+
	            'Percentage: '+ percentage +'%');
Task 9
var us=10;
var riyal=25;
var convertToPkr=104.80*10+28*25;
document.write('Total Currency in PKR: '+ convertToPkr);
Task 10
var a=5;
var arithmetic=[(5+5)*10]/2;
document.write(arithmetic);
Task 11
var currentyear=2020;
var birthyear=1999;
var age=currentyear-birthyear;
document.write('Current Year: '+currentyear+'<br>'+
                'Birth Year: '+birthyear+'<br>'+
            'They are either '+ age+ ' or '+ (age-1));
Task 12            
var radius=20;
var circumference=2*3.142*radius;
var area=3.142*radius*radius;
document.write('Radius of a circle: '+radius+'<br>'+
	            'The Circumference is: '+ circumference+'<br>'+
	            'The area is: '+area);
Task 13
var favSnack='lays';
var currentage=20;
var maximumAge=50;
var amountPerDay=3;
var totalneed=(amountPerDay*365)*(maximumAge-currentage);
document.write('Favourite Snack: '+favSnack+'<br>'+
	           'Current age: '+currentage+'<br>'+
	           'Estimated Maximum Age: '+maximumAge+'<br>'+
	           'Amount of snacks per day: '+amountPerDay+'<br>'+
	           'You will need '+totalneed+' lays to last you until the ripe old age of '+maximumAge);


Task 5
var a=4;
var one=4*1;
var two=4*2;
var three=4*3;
var four=4*4;
var five=4*5;
var six=4*6;
var seven=4*7;
var eight=4*8;
var nine=4*9;
var ten=4*10;
document.write('4x1= ' +one+'<br>'+
	           '4x2= ' +two+'<br>'+
	           '4x3= ' +three+'<br>'+
	           '4x4= ' +four+'<br>'+
	           '4x5= ' +five+'<br>'+
	           '4x6= ' +six+'<br>'+
	           '4x7= ' +seven+'<br>'+
	           '4x8= ' +eight+'<br>'+
	           '4x9= ' +nine+'<br>'+
	           '4x10= ' +ten);
"Chapter 6-9"
Task 3
var name =prompt("Enter your name: ");
alert("Hello! " + name);
Task 1 
var a=10;
++a,
a++,
--a,
a--;
document.write('Result:<br>'+'The value of a is: '+a+'<br>'+
	           'The value of ++a is: '+ ++a +'<br>'+'Now the value of a is: '+ a +'<br>'++'<br>'+
               'The value of a++ is: '+ a++ +'<br>'+'Now the value of a is: '+ a +'<br>'+	          
                'The value of --a is: '+ --a +'<br>'+'Now the value of a is: '+ a +'<br>'+
                'The value of a-- is: '+a-- +'<br>'+'Now the value of a is: '+ a );
                
"Chapter 9-11"
Task 1
var city=prompt('Enter Your City: ');
if(city==="Karachi"){
	alert("Welcome to city of lights");
}

Task 2
var gender=prompt('Enter Your Gender: ');
if(gender==='male'){
	alert("Good Morning Sir");
}
else{
	alert("Good Morning Ma'am");
}
Task 4
var fuel=prompt('Enter remaining fuel: ');
if(fuel < 0.25){
	alert('Please refill the fuel in your car');
}
Task 5
a)Displays alert(given condition for variable a is true)
b)Not alert
c)Not alert
d)Displays alert(The cost equals)
e)Displays alert(True)
f)Displays alert(car is smaller than cat)
Task 8
var num=prompt('Enter number: ');
if(num|3){
alert('It is divisible by 3');
}
Task 9
var num=prompt('Enter number: ');
if(num % 2===0){
	alert('Even Number');
}
Task 10	
var temp=prompt('Enter temperature: ');
a)if(temp>40){
	alert('It is too hot outside.');
	}
b)if(temp>30){
	alert('The Weather today is Normal.');
	}
c)if(temp>20){
	alert("Today's Weather is cool.");
	}
d)if(temp>10){
	alert('OMG! Today’s weather is so Cool.');
	}
*/
