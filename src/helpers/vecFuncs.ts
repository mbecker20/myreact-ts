import { 
	sqrt,
	dot,
	add,
	multiply,
} from 'mathjs';

function anyAdd(x: any, y: any): any {
	return add(x, y)
}

function addVec(v1: number[], v2: number[]): number[] {
	return anyAdd(v1, v2)
}

export function Mag(vec: number[]): number {
	return sqrt(dot(vec, vec));
}

export function Unit(vec: number[]): number[] {
	const magnitude = Mag(vec);
	if (magnitude !== 0) {
		return multiply(vec, 1 / magnitude);
	} else {
		return [0, 0, 0];
	}
}

export function UnitFromMag(vec: number[], mag: number): number[] {
	if (mag !== 0) {
		return multiply(vec, 1/mag);
	} else {
		return [0, 0, 0];
	}
}

export function Unit2D(vec: number[]): number[] {
	const magnitude = Mag(vec);
	if (magnitude !== 0) {
		return multiply(vec, 1 / magnitude);
	} else {
		return [0, 0];
	}
}

export function R(v1: number[], v2: number[]): number[] { // set return type to any to avoid add return type math.MathType which breaks everything
	//returns vector from v1 to v2
	return addVec(v1, multiply(v1, -1))
}

export function RHat(v1: number[], v2: number[]): number[] {
	return Unit(R(v1, v2));
}

export function ScaleVecToLength(vec: number[], length: number): number[] {
	return multiply(Unit(vec), length);
}

export function ScaleVecToLengthFromMag(vec: number[], mag: number, length: number): number[] {
	return multiply(UnitFromMag(vec, mag), length);
}

export function GetAzimXZ(vec: number[]): number | undefined {
	// ground plane is xz
	// from -pi to pi
	// measures azim from pos x axis
	// positive azim if z < 0, negative if z > 0 because positive rotation about yHat moves xHat away from positive zhat
	// vec must be unit
	if (vec[0] > 0) {
		if (vec[2] > 0) {
			return -Math.atan2(vec[2], vec[0]);
		} else if (vec[2] < 0) {
			return Math.atan2(-vec[2], vec[0]);
		} else {
			return 0;
		}
	} else if (vec[0] < 0) {
		if (vec[2] > 0) {
			return Math.atan2(vec[2], -vec[0]) - Math.PI;
		} else if (vec[2] < 0) {
			return Math.PI - Math.atan2(-vec[2], -vec[0]);
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
	return undefined
}

export function GetAzimZX(vec: number[]): number | undefined {
	// ground plane is zx
	// from -pi to pi
	// measures azim from pos Z axis (direction camera points)
	// positive azim if x > 0, negative if x < 0 because positive rotation about yHat moves zHat towards positive xhat
	// vec must be unit
	if (vec[2] > 0) {
		if (vec[0] > 0) {
			return Math.atan2(vec[0], vec[2]);
		} else if (vec[0] < 0) {
			return -Math.atan2(-vec[0], vec[2]);
		} else {
			return 0;
		}
	} else if (vec[2] < 0) {
		if (vec[0] > 0) {
			return Math.PI - Math.atan2(vec[0], -vec[2]);
		} else if (vec[0] < 0) {
			return Math.atan2(-vec[0], -vec[2]) - Math.PI;
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
	return undefined
}

export function GetAzimXY(vec: number[]): number | undefined {
	// ground plane is xy
	// from -pi to pi
	// measures azim from pos x axis
	// positive azim if y > 0, negative if y < 0;
	// vec must be unit
	if (vec[0] > 0) {
		if (vec[1] > 0) {
			return Math.atan2(vec[1], vec[0]);
		} else if (vec[1] < 0) {
			return -Math.atan2(-vec[1], vec[0]);
		} else {
			return 0;
		}
	} else if (vec[0] < 0) {
		if (vec[1] > 0) {
			return Math.PI - Math.atan2(vec[1], -vec[0]);
		} else if (vec[1] < 0) {
			return Math.atan2(-vec[1], -vec[0]) - Math.PI;
		} else {
			return Math.PI;
		}
	} else { // vec[0] = 0;
		if (vec[1] > 0) {
			return Math.PI / 2;
		} else if (vec[1] < 0) {
			return -Math.PI / 2;
		}
	}
	return undefined
}

export function GetAltAzimXZ(vec: number[]): [number | undefined, number | undefined] {
	// vec must be unit vector
	// for xz ground plane
	const alt = Math.asin(vec[1]);
	const azim = GetAzimXZ(vec);
	return [alt, azim];
}

export function GetAltAzimZX(vec: number[]): [number | undefined, number | undefined] {
	// vec must be unit vector
	// for xz ground, measuring from pos Z axis
	// alt is neg bc neg rot about x rotates poz z upwards
	const alt: number = -Math.asin(vec[1]);
	const azim = GetAzimZX(vec);
	return [alt, azim];
}

export function GetAltAzimXY(vec: number[]): [number | undefined, number | undefined] {
	// vec must be unit vector
	// for xy ground plane
	// alt is negative because positive rotation about yHat moves xHat away from positive zhat
	const alt = -Math.asin(vec[2]);
	const azim = GetAzimXY(vec);
	return [alt, azim];
}

export function AddVecToRows(mat: number[][], vec: number[]): number[][] {
	// does not work for math.js matrices. use standard js matrices. does not change input matrix.
	return mat.map(function(row) {
		return addVec(row, vec);
	})
}

export function GetAvgPoint(pointsMat: number[][]): number[] {
	let avg = [0, 0, 0];
	pointsMat.forEach(function (point) {
		avg = addVec(avg, point);
	});
	return multiply(avg, 1 / pointsMat.length);
}

export function GetAvgPoint2D(pointsMat: number[][]): number[] {
	let avg = [0, 0];
	pointsMat.forEach(function (point) {
		avg = addVec(avg, point);
	});
	return multiply(avg, 1 / pointsMat.length);
}

export function ArrSum(arrayOfNums: number[]): number {
	return arrayOfNums.reduce(function (a, b) {
		return a + b;
	}, 0);
}

export function GetAvgNum(arrayOfNums: number[]): number {
	return ArrSum(arrayOfNums) / arrayOfNums.length;
}

export function toPolar(x: number, y: number): [number, number | undefined] {
	const r = Mag([x, y]);
	const theta = GetAzimXY([x, y]);
	return [r, theta];
}

export function fromPolar(r: number, theta: number): [number, number] {
	return [r * Math.cos(theta), r * Math.sin(theta)]
}

export function rot2D(point: number[], alpha: number): number[] { //rotates clockwise with y pointing down
	let rotMat: number[][] = [[Math.cos(alpha), Math.sin(alpha)], [-Math.sin(alpha), Math.cos(alpha)]];
	return multiply(point, rotMat);
}

export function range(start: number, stop: number): number[] {
	// returns list of integers from start (inclusive) to stop (exclusive)
	var out = [];
	for (var i = start; i < stop; i++) {
		out.push(i);
	}
	return out;
}

export function linspace(start: number, stop: number, N: number): number[] {
	// N is length of linspace array
	const step = (stop - start) / (N - 1);
	let space = [];
	for (var i = 0; i < N; i++) {
		space.push(start + i * step);
	}
	return space
}

export function linspace2D(start: number[], stop: number[], N: number): number[][] {
	// N is length of linspace array
	const step = multiply(addVec(stop, multiply(start, -1)), 1 / (N - 1));
	let space: number[][] = [];
	for (var i = 0; i < N; i++) {
		space.push(addVec(start, multiply(step, i)));
	}
	return space
}

export function makeGrid(numRows: number, numCols: number, valFunc: (i: number, j: number) => any): any[][] {
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

export function makeGridMap(grid: any[][]): Map<any, any> {
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

export function zeroes(length: number): number[] {
	let space = []
	for (var i = 0; i < length; i++) {
		space.push(0)
	}
	return space
}

export function rk4(
	derivs: (x: number, y: number, params: object, t: number) => [number, number], 
	params: object, 
	xy0: [number, number], 
	dt: number, 
	t: number
): [number, number] {
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

export function rk4Double(
	deriv: (x: number[], v: number[], params: object) => [number[], number[]], 
	xv0: [number[], number[]], 
	params: object,
	dt: number
): [number[], number[]] {
	//performs 2D rk4 for xDoubleDot=f(x)
	//deriv is func of x=[x,y], v=[xDot,yDot], and params, returns [v,a]
	//xy0=[[x,y],v=[xDot,yDot]]
	//this func returns [x,v] after one step
	const x0 = xv0[0];
	const v0 = xv0[1];
	const k1 = deriv(x0, v0, params);
	const k2 = deriv(addVec(x0, multiply(k1[0], dt / 2)), addVec(v0, multiply(k1[1], dt / 2)), params);
	const k3 = deriv(addVec(x0, multiply(k2[0], dt / 2)), addVec(v0, multiply(k2[1], dt / 2)), params);
	const k4 = deriv(addVec(x0, multiply(k3[0], dt / 2)), addVec(v0, multiply(k3[1], dt / 2)), params);;
	const k = multiply(addVec(addVec(k1[0], multiply(k2[0], 2)), addVec(multiply(k3[0], 2), k4[0])), (1 / 6));
	const l = multiply(addVec(addVec(k1[1], multiply(k2[1], 2)), addVec(multiply(k3[1], 2), k4[1])), (1 / 6));
	return [addVec(x0, multiply(k, dt)), addVec(v0, multiply(l, dt))];
}