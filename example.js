const watch = new (require('./index.js')).Base();


watch.add(
   ['a','b','c','d','e','f','g','h','i'],
   (e)=>{console.log(e+' pressed');}
);

watch.watch();
setTimeout(()=>{},6000)
