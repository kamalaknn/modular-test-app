import { map as lodashMap } from 'lodash'
export function sayHello () {
    lodashMap(['A', 'B', 'C'], function (item) {
        console.log('Hello', item);
    });
}
