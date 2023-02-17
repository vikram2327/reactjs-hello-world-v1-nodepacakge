# Getting Started

## Git

Intialize as git repositary push the repo.

```
git remote add origin <URL>
git push -u origin master
```

## Install Package to configure babel to compile jsx & other helping package

```
npm install --save-dev cross-env del-cli

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install -save @babel/polyfill
```

## Configure babel to compile jsx

Make file babel.config.json

```
{
    "presets": [
     [
      "@babel/env",
       {
        "targets": {
        "edge": "17",
        "firefox": "60",
        "chrome": "67",
        "safari": "11.1"
         },
      "useBuiltIns": "usage",
      "corejs": "3.6.5"
       }
   ],
      "@babel/preset-react"
   ]
}
```

## Configure pacakge.json to compile & build

Add cmd in script key of package.json

```
"babel-build": "npm run delete && cross-env NODE_ENV=production babel src/lib --out-dir babelBuild --copy-files",
```

## Intialize repository for package

```
npm init
```

## Create build code which is used by Other React Project

```
npm run babel-build
```

## Refrence

- https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f
