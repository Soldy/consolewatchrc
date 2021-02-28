/*
 *  @Soldy\consolewatchrc\2021.02.28\GPL3
 */
'use strict';

/*
 * @prototype
 */
const consoleWatchBase =function(){
    /*
     * @public
     * @return {boolean}
     */
    this.watch = function(){
        return watch();
    }
    /*
     * @param {array}
     * @param {function}
     * @public
     * @return {boolean}
     */
    this.add = function(key_list,func){
        return add(key_list, func)
    }
    /*
     * @public
     * @return {boolean}
     */
    this.clear = function(){
        return clear();
    }
    /*
     * @public
     * @return {boolean}
     */
    this.stop = function(){
        return stop();
    }
    /*
     * @private
     * @var {boolean}
     */
    let watching = false;
    /*
     * @private
     * @var {dictonary}
     */
    let key_functions = {};
    /*
     * @private
     * @return {boolean}
     */
    const watch = function(){
        if(watching)
            return false;
        watching = true;
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', keyPress);
        return true;
    }
    /*
     * @private
     * @return {boolean}
     */
    const stop = function(){
        if(!watching)
            return false;
        watching = false;
        process.stdin.setRawMode(true);
        process.stdin.on('data', (k)=>{return k});
        return true;
    }
    /*
     * @param {array}
     * @param {function}
     * @private
     * @return {boolean}
     */
    const add = function(key_list, func){
        for(let key of key_list)
            addOne(key, func);
    }
    /*
     * @param {string}
     * @param {function}
     * @private
     * @return {boolean}
     */
    const addOne = function(key, func){
        if(typeof key_functions[key] === 'undefined')
            key_functions[key] = [];
        key_functions[key].push(func);
    }
    /*
     * @param {string}
     * @param {function}
     * @private
     * @return {boolean}
     */
    const keyPress = function(key){
        if(typeof key_functions[key] === 'undefined')
            return false;
        for(let func of key_functions[key])
             func(key);
        return true;
    }
    /*
     * @private
     */
    const clear = function(){
        key_functions = {};
    }
}



exports.base =  consoleWatchBase;
exports.Base =  consoleWatchBase;
