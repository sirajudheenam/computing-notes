
# Setting up eslint and prettier for vscode

Based on [eslint setup video](https://www.youtube.com/watch?v=lHAeK8t94as)

Config files are located [here](https://github.com/wesbos/eslint-config-wesbos)


Create a file called `code.js` to check our setup

```
function sayHi(    name   ){
  let myAge = 10;}
var age = 12;var things = ['cool', "coolestStuff 00!!"];
```

Create a file naemed `.eslintrc` with the following content
```
{
    "extends": [
        "wesbos"
    ],
    "rules": {
        "no-unused-vars": 0
    }
}
```


Install the peer dependencies for eslint and prettier to work

`npx install-peerdeps --dev eslint-config-wesbos`