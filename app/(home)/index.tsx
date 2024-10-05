import { Stack } from 'expo-router';

import Map from '~/components/Map';
import SelectedScooterSheet from '~/components/SelectedScooterSheet';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: false }} />
      <Map />
      {/* <Button title="Sign out" onPress={() => supabase.auth.signOut()} /> */}
      <SelectedScooterSheet />
    </>
  );
}
