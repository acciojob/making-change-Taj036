const makeChange = (c) => {
  // your name here
	let pennyValue = 1 ;
	let nickelValue = 5 ;
	let dimeValue = 10 ;
	let quarterValue = 25 ;

	let pennies = 0 ;
	let nickel = 0 ;
	let dime = 0 ;
	let quater = 0 ;
	quater = Math.floor(c / quarterValue) ;
	c %= quarterValue;
	
	dime = Math.floor(c / dimeValue) ;
	c %= dimeValue;

	nickel = Math.floor(c / nickelValue) ;
	c %= nickelValue ;

	pennies = c ;

	let result = {
		q :  quater,
		
		d :  dime,
		
        n :  nickel,
		
		p :  pennies
	}
	return result ;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
