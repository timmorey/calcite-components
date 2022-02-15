/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
import{a as n}from"./p-687deef3.js";import{a as t}from"./p-ef6b4184.js";const e={},a={};async function r(o){const s=function(n=""){return t.indexOf(n)>-1?n:((n=n.toLowerCase()).includes("-")&&(n=n.replace(/(\w+)-(\w+)/,((n,t,e)=>`${t}-${e.toUpperCase()}`)),t.includes(n)||(n=n.split("-")[0])),t.includes(n)?n:"en")}(o);if(e[s])return e[s];a[s]||(a[s]=fetch(n(`./assets/date-picker/nls/${s}.json`)).then((n=>n.json())).catch((()=>(console.error(`Translations for "${s}" not found or invalid, falling back to english`),r("en")))));const i=await a[s];return e[s]=i,i}function o(n,t,e){const a=n.getTime(),r=!(t instanceof Date)||a>=t.getTime(),o=!(e instanceof Date)||a<=e.getTime();return r&&o}function s(n,t,e){if(!(n instanceof Date))return null;const a=n.getTime(),r=t instanceof Date&&a<t.getTime(),o=e instanceof Date&&a>e.getTime();return r?t:o?e:n}function i(n){if(n instanceof Date)return n;if(!n||"string"!=typeof n)return null;const t=n.split(/[: T-]/).map(parseFloat),e=new Date(t[0],(t[1]||1)-1,t[2]||1);if(e.setFullYear(t[0]),isNaN(e.getTime()))throw new Error(`Invalid ISO 8601 date: "${n}"`);return e}function u(n){return"string"==typeof n?n:n instanceof Date?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:""}function f(n,t){return n instanceof Date&&t instanceof Date&&n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()}function c(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t-1),t===e.getMonth()?new Date(n.getFullYear(),t,0):e}function p(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t+1),(t+2)%7==e.getMonth()%7?new Date(n.getFullYear(),t+2,0):e}function D(n,t){return String(n).split("").map((n=>t.numerals[n])).join("")}function l(n,t){return parseInt(n.split("").map((n=>"0123456789"[t.numerals.indexOf(n)])).filter((n=>n)).join(""))}function d(n,t){const{separator:e,unitOrder:a}=t,r=w(a),o=function(n=""){return n.replace(/[\u0660-\u0669]/g,(n=>n.charCodeAt(0)-1632)).replace(/[\u06f0-\u06f9]/g,(n=>n.charCodeAt(0)-1776))}(n).split(e);return{day:parseInt(o[r.indexOf("d")]),month:parseInt(o[r.indexOf("m")])-1,year:parseInt(o[r.indexOf("y")])}}function w(n){const t=n.toLowerCase();return["d","m","y"].sort(((n,e)=>t.indexOf(n)-t.indexOf(e)))}function h(n,t){return(n.getTime()-t.getTime())/864e5}const m=2,g={nextMonth:"Next month",prevMonth:"Previous month",year:"Year"};export{m as H,g as T,i as a,s as b,h as c,u as d,w as e,c as f,r as g,l as h,o as i,D as l,p as n,d as p,f as s}