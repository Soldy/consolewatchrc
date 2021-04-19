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
        return _watch();
    }
    /*
     * @param {array}
     * @param {function}
     * @public
     * @return {boolean}
     */
    this.add = function(key_list,func){
        return _add(key_list, func)
    }
    /*
     * @public
     * @return {boolean}
     */
    this.clear = function(){
        return _clear();
    }
    /*
     * @public
     * @return {boolean}
     */
    this.stop = function(){
        return _stop();
    }
    /*
     * @private
     * @var {boolean}
     */
    let _watching = false;
    /*
     * @private
     * @var {dictonary}
     */
    let _key_functions = {};
    /*
     * @private
     * @return {boolean}
     */
    const _watch = function(){
        if(_watching)
            return false;
        _watching = true;
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', _keyPress);
        return true;
    }
    /*
     * @private
     * @return {boolean}
     */
    const _stop = function(){
        if(!_watching)
            return false;
        _watching = false;
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
    const _add = function(key_list, func){
        for(let key of key_list)
            _addOne(key, func);
    }
    /*
     * @param {string}
     * @param {function}
     * @private
     * @return {boolean}
     */
    const _addOne = function(key, func){
        if(typeof _key_functions[key] === 'undefined')
            _key_functions[key] = [];
        _key_functions[key].push(func);
    }
    /*
     * @param {string}
     * @param {function}
     * @private
     * @return {boolean}
     */
    const _keyPress = function(key){
        if(typeof key_functions[key] === 'undefined')
            return false;
        for(let func of key_functions[key])
             func(key);
        return true;
    }
    /*
     * @private
     */
    const _clear = function(){
        _key_functions = {};
    }
}



exports.base =  consoleWatchBase;
exports.Base =  consoleWatchBase;
