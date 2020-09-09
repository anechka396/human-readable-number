const NUMBER_TABLE = {
	0: "",
    1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
	100: "one hundred",
	200: "two hundred",
	300: "three hundred",
	400: "four hundred",
	500: "five hundred",
	600: "six hundred",
	700: "seven hundred",
	800: "eight hundred",
	900: "nine hundred"
};

module.exports = function toReadable (number) {
	var str = "";
	
	if(number == 0) return "zero";
	
	var hundreds = 0;
	var tens = 0;
	var ones = 0;
	
	hundreds = Math.trunc(number/100);
	number = number%100;
	
	str += NUMBER_TABLE[hundreds * 100] + " ";
	
	if(number < 20) {
		str += NUMBER_TABLE[number];
	} else {
		tens = Math.trunc(number/10);
		str += NUMBER_TABLE[tens * 10] + " ";
		
		ones = number%10; 
		str += NUMBER_TABLE[ones];
	}
	return str.trim();
}
