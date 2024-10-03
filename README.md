# Lime App

## Summary

## SS

## Install and Run IOS

```bash
yarn install
npx expo run:ios
```

## Documentation

1 - Run `npx create-expo-stack@latest`, Follow SS

Alternatively, run `npx create-expo-stack@latest LimeApp --expo-router --stylesheet`

2 - Install rn mapbox -> https://rnmapbox.github.io/docs/install

```
expo install @rnmapbox/maps
```

3 - Update plugin section of `app.json` with below

```
  [
    "@rnmapbox/maps",
    {
      "RNMapboxMapsDownloadToken": "sk.ey..",
      "RNMapboxMapsVersion": "11.0.0"
    }
  ]
```

4 - Go to https://www.mapbox.com/ and create an account, generate a token ( also select DOWNLOAD:READ ) and use that at `app.json` instead of sk.ey..

5 - Run `npx expo install expo-location` to install location service for expo and update plugin section of `app.json` with below

```
  [
    "expo-location",
    {
      "locationWhenInUsePermission": "Show current location on map."
    }
  ]
```

6 - Run `npx expo prebuild --clean` to build native dependencies after installing mapbox

7 - Create `.env` file at root and Use `Default public token` from mapbox dashboard to use Mapbox related components. Don't forget to add `.env` to `.gitignore` file.

```
EXPO_PUBLIC_MAPBOX_KEY=pk.ey123...
```

8 - Create Map component and start using map in the App

-------------------- First Commit --------------------

## Credit

[Building an e-Scooter App with React Native and Mapbox](https://www.youtube.com/watch?v=uxj8jnlooP8)
[Lime Clone Backend with React Native and Supabase](https://www.youtube.com/watch?v=TRcM3H7qfRI)
