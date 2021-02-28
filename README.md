# consolewatchrc

Console key watcher

## init


```javascript

const watch = new (require('consolewatchrc')).Base();

```
## add function

```javascript

watch.add(
   ['a','b','c','],
   (key)=>{dosomething{key);}
);

```

## start watching

```javascript

watch.watch();

```

## stop watching

```javascript

watch.stop();

```

## clear all keys

```javascript

watch.clear();

```
