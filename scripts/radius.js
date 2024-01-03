/**
 * 
 * @param {{x: number, y: number, z: number}} location1 
 * @param {{x: number, y: number, z: number}} location2 
 * 
 * Get radius in two location
 * 두 좌표에 반지름을 가져옵니다.
 * 
 * @returns {number| false}
 */
export function getradius(location1 = undefined, location2 = undefined) {
    if (typeof location1 !== "object") {console.warn("location1 is not object"); return false;};
    
    if (typeof location2 !== "object") {console.warn("location2 is not object"); return false;};


    const X = Math.round(location2.x) - Math.round(location1.x);
    const Y = Math.round(location2.y) - Math.round(location1.y);
    const Z = Math.round(location2.z) - Math.round(location1.z);

    const result = Math.sqrt(Math.round(X ** 2 + Y ** 2 + Z ** 2));
    return result;
}
