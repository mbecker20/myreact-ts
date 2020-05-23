import { create, all } from 'mathjs';

const config = {}
const math = create(all, config);

export function Mag(vec) {
	return math.sqrt(math.dot(vec, vec));
}

export function Unit(vec) {
	const magnitude = Mag(vec);
	if (magnitude !== 0) {
		return math.multiply(vec, 1 / magnitude);
	} else {
		return [0, 0, 0];
	}
}

export function Unit2(vec, mag) {
	if (mag !== 0) {
		return math.multiply(vec, 1 / mag);
	} else {
		return [0, 0, 0];
	}
}

export function Unit2D(vec) {
	const magnitude = Mag(vec);
	if (magnitude !== 0) {
		return math.multiply(vec, 1 / magnitude);
	} else {
		return [0, 0];
	}
}

export function R(v1, v2) {
	//returns vector from v1 to v2
	return math.add(v2, math.multiply(v1, -1));
}

export function RHat(v1, v2) {
	return Unit(R(v1, v2));
}

export function ScaleVecToLength(vec, length) {
	return math.multiply(Unit(vec), length);
}

export function ScaleVecToLength2(vec, mag, length) {
	return math.multiply(Unit2(vec, mag), length);
}

export function GetAzimXZ(vec) {
	// ground plane is xz
	// from -pi to pi
	// measures azim from pos x axis
	// positive azim if z < 0, negative if z > 0 because positive rotation about yHat moves xHat away from positive zhat
	// vec must be unit
	if (vec[0] > 0) {
		if (vec[2] > 0) {
			return -math.atan2(vec[2], vec[0]);
		} else if (vec[2] < 0) {
			return math.atan2(-vec[2], vec[0]);
		} else {
			return 0;
		}
	} else if (vec[0] < 0) {
		if (vec[2] > 0) {
			return math.atan2(vec[2], -vec[0]) - Math.PI;
		} else if (vec[2] < 0) {
			return Math.PI - math.atan2(-vec[2], -vec[0]);
		} else {
			return Math.PI;
		}
	} else { // vec[0] = 0;
		if (vec[2] > 0) {
			return -Math.PI / 2;
		} else if (vec[2] < 0) {
			return Math.PI / 2;
		}
	}
}

export function GetAzimZX(vec) {
	// ground plane is zx
	// from -pi to pi
	// measures azim from pos Z axis (direction camera points)
	// positive azim if x > 0, negative if x < 0 because positive rotation about yHat moves zHat towards positive xhat
	// vec must be unit
	if (vec[2] > 0) {
		if (vec[0] > 0) {
			return math.atan2(vec[0], vec[2]);
		} else if (vec[0] < 0) {
			return -math.atan2(-vec[0], vec[2]);
		} else {
			return 0;
		}
	} else if (vec[2] < 0) {
		if (vec[0] > 0) {
			return Math.PI - math.atan2(vec[0], -vec[2]);
		} else if (vec[0] < 0) {
			return math.atan2(-vec[0], -vec[2]) - Math.PI;
		} else {
			return Math.PI;
		}
	} else { // vec[2] = 0;
		if (vec[0] > 0) {
			return Math.PI / 2;
		} else if (vec[0] < 0) {
			return -Math.PI / 2;
		}
	}
}

export function GetAzimXY(vec) {
	// ground plane is xy
	// from -pi to pi
	// measures azim from pos x axis
	// positive azim if y > 0, negative if y < 0;
	// vec must be unit
	if (vec[0] > 0) {
		if (vec[1] > 0) {
			return math.atan2(vec[1], vec[0]);
		} else if (vec[1] < 0) {
			return -math.atan2(-vec[1], vec[0]);
		} else {
			return 0;
		}
	} else if (vec[0] < 0) {
		if (vec[1] > 0) {
			return Math.PI - math.atan2(vec[1], -vec[0]);
		} else if (vec[1] < 0) {
			return math.atan2(-vec[1], -vec[0]) - Math.PI;
		} else {
			return Math.PI;
		}
	} else { // vec[0] = 0;
		if (vec[1] > 0) {
			return Math.PI / 2;
		} else if (vec[1] < 0) {
			return -Math.PI / 2;
		} else {
			return 0;
		}
	}
}

export function GetAltAzimXZ(vec) {
	// vec must be unit vector
	// for xz ground plane
	const alt = math.asin(vec[1]);
	const azim = GetAzimXZ(vec);
	return [alt, azim];
}

export function GetAltAzimZX(vec) {
	// vec must be unit vector
	// for xz ground, measuring from pos Z axis
	// alt is neg bc neg rot about x rotates poz z upwards
	const alt = -math.asin(vec[1]);
	const azim = GetAzimZX(vec);
	return [alt, azim];
}

export function GetAltAzimXY(vec) {
	// vec must be unit vector
	// for xy ground plane
	// alt is negative because positive rotation about yHat moves xHat away from positive zhat
	const alt = -math.asin(vec[2]);
	const azim = GetAzimXY(vec);
	return [alt, azim];
}

export function AddVecToRows(mat, vec) {
	// does not work for math.js matrices. use standard js matrices. does not change input matrix.
	const out = mat.map(function (row) {
		return math.add(row, vec);
	})
	return out;
}

export function GetAvgPoint(pointsMat) {
	let avg = [0, 0, 0];
	pointsMat.forEach(function (point) {
		avg = math.add(avg, point);
	});
	return math.divide(avg, pointsMat.length);
}

export function GetAvgPoint2D(pointsMat) {
	let avg = [0, 0];
	pointsMat.forEach(function (point) {
		avg = math.add(avg, point);
	});
	return math.divide(avg, pointsMat.length);
}

export function ArrSum(arrayOfNums) {
	return arrayOfNums.reduce(function (a, b) {
		return a + b;
	}, 0);
}

export function GetAvgNum(arrayOfNums) {
	return ArrSum(arrayOfNums) / arrayOfNums.length;
}

export function toPolar(x, y) {
	const r = Mag([x, y]);
	const theta = GetAzimXY([x, y]);
	return [r, theta];
}

export function fromPolar(r, theta) {
	return [r * math.cos(theta), r * math.sin(theta)]
}

export function rot2D(point, alpha) { //rotates clockwise with y pointing down
	let rotMat = [[math.cos(alpha), math.sin(alpha)], [-math.sin(alpha), math.cos(alpha)]];
	return math.multiply(point, rotMat);
}

export function range(start, stop) {
	// returns list of integers from start (inclusive) to stop (exclusive)
	var out = [];
	for (var i = start; i < stop; i++) {
		out.push(i);
	}
	return out;
}

export function linspace(start, stop, N) {
	// N is length of linspace array
	const step = (stop - start) / (N - 1);
	let space = [];
	for (var i = 0; i < N; i++) {
		space.push(start + i * step);
	}
	return space
}

export function linspace2D(start, stop, N) {
	// N is length of linspace array
	const step = math.multiply(math.add(stop, math.multiply(-1, start)), 1 / (N - 1));
	let space = [];
	for (var i = 0; i < N; i++) {
		space.push(math.add(start, math.multiply(step, i)));
	}
	return space
}

export function makeGrid(numRows, numCols, valFunc) {
	// produces a grid of zeros
	// valFunc is func of grid position (i and j)
	let out = [];
	for (var i = 0; i < numRows; i++) {
		let row = [];
		for (var j = 0; j < numCols; j++) {
			row.push(valFunc(i, j));
		}
		out.push(row);
	}
	return out;
}

export function makeGridMap(grid) {
	// returns map of linear indices to grid positions
	let gridMap = new Map();

	var index = 0;
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[0].length; j++) {
			gridMap.set(index, [i, j]);
			index++;
		}
	}

	return gridMap;
}

export function zeroes(length) {
	let space = []
	for (var i = 0; i < length; i++) {
		space.push(0)
	}
	return space
}

export function rk4(derivs, params, xy0, dt, t) {
	//derivs is func of x, y, params, t that returns [xDot,yDot]
	//this func returns update x,y after one step of dt
	const x0 = xy0[0];
	const y0 = xy0[1];
	const k1 = derivs(x0, y0, params, t);
	const k2 = derivs(x0 + k1[0] * dt / 2, y0 + k1[1] * dt / 2, params, t + dt / 2);
	const k3 = derivs(x0 + k2[0] * dt / 2, y0 + k2[1] * dt / 2, params, t + dt / 2);
	const k4 = derivs(x0 + k3[0] * dt, y0 + k3[1] * dt, params, t + dt);
	const k = (1 / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
	const l = (1 / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
	return [x0 + k * dt, y0 + l * dt];
}

export function rk4Double(deriv, xy0, dt) {
	//performs 2D rk4 for xDoubleDot=f(x)
	//deriv is func of x=[x,y], v=[xDot,yDot], and params, returns [v,a]
	//xy0=[[x,y],v=[xDot,yDot]]
	//this func returns [x,v] after one step
	const x0 = xy0[0];
	const y0 = xy0[1];
	const k1 = deriv(x0, y0);
	const k2 = deriv(math.add(x0, math.multiply(k1[0], dt / 2)), math.add(y0, math.multiply(k1[1], dt / 2)));
	const k3 = deriv(math.add(x0, math.multiply(k2[0], dt / 2)), math.add(y0, math.multiply(k2[1], dt / 2)));
	const k4 = deriv(math.add(x0, math.multiply(k3[0], dt / 2)), math.add(y0, math.multiply(k3[1], dt / 2)));;
	const k = math.multiply(math.add(k1[0], math.multiply(k2[0], 2), math.multiply(k3[0], 2), k4[0]), (1 / 6));
	const l = math.multiply(math.add(k1[1], math.multiply(k2[1], 2), math.multiply(k3[1], 2), k4[1]), (1 / 6));
	return [math.add(x0, math.multiply(k, dt)), math.add(y0, math.multiply(l, dt))];
}