function printArray(...array) {
    this.items = array;
    this.items.forEach(item => console.log(item));
}
const obj = {};
printArray.apply(obj,[1,2,3,4]);
console.log(obj);

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Usage
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);

function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
            // If the condition is met, we're done! 
            if(fn()) {
                callback();
            }
            // If the condition isn't met but the timeout hasn't elapsed, go again
            else if (Number(new Date()) < endTime) {
                setTimeout(p, interval);
            }
            // Didn't match and too much time, reject!
            else {
                errback(new Error('timed out for ' + fn + ': ' + arguments));
            }
    })();
}

// Usage:  ensure element is visible
poll(
    function() {
        return document.getElementById('lightbox').offsetWidth > 0;
    },
    function() {
        // Done, success callback
    },
    function() {
        // Error, failure callback
    }
);

var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement('style');

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute('media', 'screen')
	// style.setAttribute('media', 'only screen and (max-width : 1024px)')

	// WebKit hack 🙁
	style.appendChild(document.createTextNode(''));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

// Usage
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);

function matchesSelector(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}

// Usage
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // undefined

//Prototype
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15

class Cachorro {
    constructor (raca){
        this.raca = raca;
    }
}

let poodle = new Cachorro('Poodle');
console.log(poodle);

Cachorro.prototype.raca = "SRD";

console.log(Cachorro.prototype.raca);


//REGEX

let pontoRegEx = /./; // aceita tudo menos quebra de linha
console.log(pontoRegEx.test("asd"));
console.log(pontoRegEx.test(" "));
console.log(pontoRegEx.test("asd123"));
console.log(pontoRegEx.test("123"));
console.log(pontoRegEx.test("\n"));
console.log("==========================");

let dRegEx = /\d/; //igual [0-9] aceita onde tem número
console.log(dRegEx.test("asd"));
console.log(dRegEx.test(" "));
console.log(dRegEx.test("asd123"));
console.log(dRegEx.test("123"));
console.log(dRegEx.test("\n"));
console.log("==========================");

let dRegExMaiusculo = /\D/; //igual [^0-9] aceita os que não são número
console.log(dRegExMaiusculo.test("asd"));
console.log(dRegExMaiusculo.test(" "));
console.log(dRegExMaiusculo.test("asd123"));
console.log(dRegExMaiusculo.test("123"));
console.log(dRegExMaiusculo.test("\n"));
console.log("==========================");

let sRegEx = /\s/; //aceita espaços e quebra de linhas
console.log(sRegEx.test("asd"));
console.log(sRegEx.test(" "));
console.log(sRegEx.test("asd123"));
console.log(sRegEx.test("123"));
console.log(sRegEx.test("\n"));
console.log("==========================");

let sRegExMaiusculo = /\S/; //não aceita espaços e quebra de linhas
console.log(sRegExMaiusculo.test("asd"));
console.log(sRegExMaiusculo.test(" "));
console.log(sRegExMaiusculo.test("asd123"));
console.log(sRegExMaiusculo.test("123"));
console.log(sRegExMaiusculo.test("\n"));
console.log("==========================");

let wRegEx = /\w/; //aceita caracteres alfa numéricos
console.log(wRegEx.test("asd"));
console.log(wRegEx.test(" "));
console.log(wRegEx.test("asd123"));
console.log(wRegEx.test("123"));
console.log(wRegEx.test("\n"));
console.log("==========================");

let wRegExMaiusculo = /\W/; //aceita caracteres alfa numéricos
console.log(wRegExMaiusculo.test("asd"));
console.log(wRegExMaiusculo.test(" "));
console.log(wRegExMaiusculo.test("asd123"));
console.log(wRegExMaiusculo.test("123"));
console.log(wRegExMaiusculo.test("\n"));
console.log("==========================");
