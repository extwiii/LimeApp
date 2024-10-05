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

9 - Create a json file with lat and long of scooters and update Map component to render scooter icons on the map with those lat and long

-------------------- Second Commit --------------------

10 - Add `cluster` prop to the ShapeLayer, render `CircleLayer` for clusters, Render the count of scooters in a cluster using `SymbolLayer`, Hide Scooter Icons when in cluster `filter={['!', ['has', 'point_count']]}`

-------------------- Third Commit --------------------

11 - Create directions service to calculate routes between user location and selected scooter

12 - Update Map file to render directions on the map

-------------------- Forth Commit --------------------

13 - Refactor: Create ScooterProvider to move business logic to provider to reuse that later on

14 - Refactor: Create LineRoute and ScooterMarkers to simplfy Map component

-------------------- Fifth Commit --------------------

15 - Install `https://gorhom.dev/react-native-bottom-sheet/` for bottom sheets

```
yarn add @gorhom/bottom-sheet@^5 react-native-reanimated react-native-gesture-handler
```

16 - Update plugin section of `babel.config.js`

```
const plugins = ['react-native-reanimated/plugin'];
```

17 - Add Start Journey button to sheet and make it disabled if scooter's distance more than 1000 mt

-------------------- Sixth Commit --------------------

18 - Setup Supabase project called LimeApp

19 - Install supabase packages -> https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native

```
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed
```

20 - Follow documents to Install and configure supabase libs in React Native

21 - Follow documents to Setup Auth Provider and routers to implement authentication

22 - SUPABASE: Go to Authentication/providers, select email and toggle off confirm email and save to let user signup without confirming email

-------------------- Seventh Commit --------------------

## Credit

[Building an e-Scooter App with React Native and Mapbox](https://www.youtube.com/watch?v=uxj8jnlooP8)
[Lime Clone Backend with React Native and Supabase](https://www.youtube.com/watch?v=TRcM3H7qfRI)
