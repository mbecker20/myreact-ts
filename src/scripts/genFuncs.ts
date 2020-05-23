export function downOne(func, prop, val) {
	// works with func(p), where p is parameter object
	// prop is string, defines property that is being set
	var down = function (p) {
		p[prop] = val;
		return func(p);
	}
	return down;
}

export function downToOne(func, p, finalProp) {
	// p is param obj
	// returns func of 1 variable (variable not parameter object)
	var dto = function (x) {
		p[finalProp] = x;
		return func(p);
	}
	return dto;
}

export function setObjWithKeyVal(obj, keys, vals) {
	// keys and vals have equal length
	for (var i = 0; i < keys.length; i++) {
		obj[keys[i]] = vals[i];
	}
}

export function stringIn(str, ar) {
	// returns true if string is an element of array
	// false otherwise
	for (var i = 0; i < ar.length; i++) {
		if (ar[i] === str) {
			return true;
		}
	}
	return false;
}

export function bothStringsIn(str1, str2, ar) {
	return (stringIn(str1, ar) && stringIn(str2, ar));
}

export function switchVarIntoList(variable, list, index) {
	// variable is set to list[index]
	// puts variable into list at index (replacing what's there)
	// ex. variable = GF.SwitchVarIntoList(variable, list, index);
	var temp = list[index];
	list[index] = variable;
	
	return temp;
}

export function wrap(func, ...args) {
	var wrapped = function () {
		func(...args);
	}
	
	return wrapped;
}

export function arrayEqual(arr1, arr2) {
	if (arr1.length === arr2.length) {
		for(var i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return false
			}
		}
		return true
	} else {
		return false
	}
}