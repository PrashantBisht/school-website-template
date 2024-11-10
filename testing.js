var john = ['22323',2000,'22223'];
for(let i  = 0; i<john.length; i++){
    if(typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}