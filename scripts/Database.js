import { world } from "@minecraft/server";

/**
 * 
 * @param {string} name 
 * @param {any} value 
 * 
 * Set data to Dynamicproperty.
 * 다이나믹프로퍼타이에 데이터를 추가합니다.
 * 
 * @returns {boolean}
 */
export function setData(name = undefined, value = null) {
    if (name == undefined) { console.warn("name is undefined"); return false;};

    if (value == null) { console.warn("value is null"); return false;};

     if (typeof value == "object" | typeof value == "array") { world.setDynamicProperty(name, JSON.stringify(value)); return; };

    world.setDynamicProperty(name , value);

    return true;
}

/**
 * 
 * @param {string} name 
 * 
 * Remove data to Dynamicproperty
 * 다이나믹프로퍼타이에 데이터를 삭제합니다.
 * 
 * @returns {boolean}
 */
export function removeData(name = undefined) {
    if (name == undefined) { console.warn("name is undefined"); return false;};

    world.setDynamicProperty(name, undefined);

    return true;
}

/**
 * 
 * Clear all data in Dynamicproperty
 * 다이나믹프로퍼타이에 모든 데이터를 삭제합니다.
 * 
 * @returns {boolean}
 */
export function clearallData() {

    try {
        world.clearDynamicProperties();

        return true;
    }
    catch {
        return false;
    }

}

/**
 * 
 * @param {string} name 
 * 
 * Get data in Dynamicproperty
 * 다이나믹프로퍼타이에 데이터를 가져옵니다.
 * 
 * @returns {string | number | false}
 */
export function getData(name = undefined) {
    if (type of name !== "string") { console.warn("name is not string"); return false;};

    const value = world.getDynamicProperty(name);

    return value;
}

/**
 * 
 * Get all data in Dynamicproperty
 * 다이나믹프로퍼타이에 모든 데이터를 가져옵니다.
 * 
 * @returns {[] | false}
 */
export function getallData() {

    try {
        const values = [];

        for (const name of world.getDynamicPropertyIds()) {
            const value = world.getDynamicProperty(name);
            values.push(value);
        }
        
        return values;
    }
    catch {
        return false;
    }
}
