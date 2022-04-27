var params = process.argv;
var perfil = {
    "name": params[2],
    "second-name": params[3],
    "nickname": params[4]
};
console.log(JSON.stringify(perfil, null, 2));
