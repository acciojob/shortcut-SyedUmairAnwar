function shortcut(s1, s2) {
  // your code here
	if (s1===""||s2===""){
		return ''
	}
	let str=""
	str= str+ s1.charAt(0);
	str = str +s2.charAt(0);
	return str;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
