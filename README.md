## Tested in environment

```
node --version
v13.12.0
```

```
npm --version
6.14.4
```

```
OS
Windows 7 Professional SP1
```

## How to use this repository

1. **Install Node.js**

2. **Install all dependencies**
```
npm install
```

3. **Show current version**
```
node <path to spver.js> currentVersion --show
or
node <path to spver.js.js> currentVersion -s
```

4. **Increase patch number**
```
node <path to spver.js> currentVersion --patch
or
node <path to spver.js.js> currentVersion -p
```

5. **Increase feature number**
```
node <path to spver.js> currentVersion --feature
or
node <path to spver.js.js> currentVersion -f
```

6. **Increase major number**
```
node <path to spver.js> currentVersion --major
or
node <path to spver.js.js> currentVersion -m
```

7. **Set custom version**
```
node <path to spver.js> currentVersion --custom <custom version>
or
node <path to spver.js> currentVersion -c <custom version>
```

8. **Run tests**
```
npm test
```
