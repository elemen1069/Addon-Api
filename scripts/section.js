export function difference(a, b) {
    const value = Math.abs(a - b) + 1;
    return value
} 

export function IncludeLine(condition, a, b) {
    // condition = [x1,z1,x2,z2]
    const x = condition[0] > condition[2] ? [condition[2], condition[0]] : [condition[0], condition[2]];
    const z = condition[1] > condition[3] ? [condition[3], condition[1]] : [condition[1], condition[3]];
    if (x[0] <= a && a <= x[1] && z[0] <= b && b <= z[1]) {
        return true;
    }
    return false;
}

export function IncludeSqu(condition, condition2) {
    // condition = [x1,z1,x2,z2]
    const x = condition[0] > condition[2] ? [condition[2], condition[0]] : [condition[0], condition[2]];
    const z = condition[1] > condition[3] ? [condition[3], condition[1]] : [condition[1], condition[3]];
    const x2 = condition2[0] > condition2[2] ? [condition2[2], condition2[0]] : [condition2[0], condition2[2]];
    const z2 = condition2[1] > condition2[3] ? [condition2[3], condition2[1]] : [condition2[1], condition2[3]];
    if (x[0] <= x2[0] && x2[0] <= x[1] && z[0] <= z2[0] && z2[0] <= z[1] || x[0] <= x2[1] && x2[1] <= x[1] && z[0] <= z2[1] && z2[1] <= z[1]) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {[number, number, number, number]} condition 
 * @returns {[{x: number, z: number}]}
 */
export function getOutlines(condition) {
    // condition = [x1, z1, x2, z2]
    const [x1, z1, x2, z2] = condition;

    // 사각형의 네 꼭지점
    const topLeft = { x: x1, z: z1 };
    const topRight = { x: x2, z: z1 };
    const bottomLeft = { x: x1, z: z2 };
    const bottomRight = { x: x2, z: z2 };

    let points = [];

    // 상단 변 (left to right)
    for (let x = topLeft.x; x <= topRight.x; x++) {
        points.push({ x: x, z: topLeft.z });
    }

    // 오른쪽 변 (top to bottom)
    for (let z = topRight.z + 1; z <= bottomRight.z; z++) {
        points.push({ x: topRight.x, z: z });
    }

    // 하단 변 (right to left)
    for (let x = bottomRight.x - 1; x >= bottomLeft.x; x--) {
        points.push({ x: x, z: bottomRight.z });
    }

    // 왼쪽 변 (bottom to top)
    for (let z = bottomLeft.z - 1; z > topLeft.z; z--) {
        points.push({ x: bottomLeft.x, z: z });
    }

    return points;
}
