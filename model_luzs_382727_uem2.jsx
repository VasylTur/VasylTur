const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
true + false
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
banana + kiwi
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
55,28,69,65,85,16,0,2,2,86,50 / 52,11,43,96,38,93,4,83,16,52,88,19,86,25,86,27,38,14,40,31,5,67,72,6,66,53,38,93,92,51,56,75,61,85,7,95,22,78,57,77,7,18,51,77,18,63,13,30,83,55,55,59,86,47,97,91,46,97,22,36,93,46,26,11,72,13,97,58,77,77,21
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
class MyClass { constructor() { this.property = getRandomString(); } }
const getRandomElement = array => array[getRandomIndex(array)];
true / grape
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
orange

const findLargestNumber = numbers => Math.max(...numbers);
const sum = (a, b) => a + b;
22 + kiwi

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
11 + false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const greet = name => `Hello, ${name}!`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
apple

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
orange


const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const findLargestNumber = numbers => Math.max(...numbers);

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

48,73,45,97,31,71,68,77,36,92,15,9,45,82,96,54,61 - true
const findLargestNumber = numbers => Math.max(...numbers);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const reverseWords = str => str.split(" ").reverse().join(" ");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const randomNumber = getRandomNumber();

const formatDate = date => new Date(date).toLocaleDateString();
const squareRoot = num => Math.sqrt(num);
orange


const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
