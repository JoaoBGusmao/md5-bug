This is a reproducible example of a bug on expo when loading fonts

## How to install
```
$ yarn
$ yarn global add lerna
$ lerna bootstrap
```

## About the structure
We are using a monorepo managed by lerna.

package/app: It's our main application

package/ui: It's our UI package, where we build our components to make them reusable across different packages

packages/typeface-roboto: A package where we store fonts from roboto family

The `app` package use a component called `FontLoader` from `ui`, and `FontLoader` use a font file from `typeface-roboto` package

## The Bug
```
[Unhandled promise rejection: Error: Downloaded file for asset Roboto-Bold.ttf’ Located at http://192.168.0.24:19001//.......rm=android&dev=true&minify=false&hot=false failed MD5 integrity check]
```

Happens only on android devices.

Started after expo 34

I guess the main cause is because the font we are including isn't in the same node_modules as the app we are running. Anyways, the import must be done using a explicit path to node_modules: eg: `../../../node_modules/@joaobgusmao/typeface-roboto/files/Roboto-Bold.ttf`, otherwise, it also won't fix the bug.

If we change the import as describe above, The ui application will run fine when running from expo-cli, but the app application still doesn't work since the font included isn't inside the app's node_modules.

To make it work, we had to require all fonts from our app package and pass it as prop to our FontLoader component located inside `ui`. That way, we garantee that the font loaded by app is located inside app's node_modules
