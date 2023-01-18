# Capacitor-JSONParseError

JSON strings are not parsed properly by HTTP Capacitor core plugin. See discussion here:
https://github.com/ionic-team/capacitor/issues/6170#issuecomment-1372982120

This app reproduces the error. The following valid json 
```json
"hello world"
```
is fetched from this url https://run.mocky.io/v3/cb25a9f8-1ef5-4462-8e5a-fc56de26b876

Run it in browser with `npm run start` and it shows the text `hello world`.

Run it on iOS or Android and an error is shown.

## PR

Here is a PR that remedies this problem https://github.com/ionic-team/capacitor/pull/6224
