import getDistance from '@turf/distance';
import { point } from '@turf/helpers';
import * as Location from 'expo-location';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { supabase } from '~/lib/supabase';
import { getDirections } from '~/services/directions';

const ScooterContext = createContext<any>({});

export default function ScooterProvider({ children }: PropsWithChildren) {
  const [nearbyScooters, setNearbyScooters] = useState([]);
  const [selectedScooter, setSelectedScooter] = useState<any>();
  const [direction, setDirection] = useState<any>();
  const [isNearby, setIsNearby] = useState(false);

  useEffect(() => {
    const fetchScooters = async () => {
      const location = await Location.getCurrentPositionAsync();
      const { error, data } = await supabase.rpc('nearby_scooters', {
        lat: location.coords.latitude,
        long: location.coords.longitude,
        max_dist_meters: 2000, // only fetch 2km radius
      });
      if (error) {
        Alert.alert('Failed to fetch scooters');
      } else {
        setNearbyScooters(data);
      }
    };
    fetchScooters();
  }, []);

  useEffect(() => {
    let subscription: Location.LocationSubscription | undefined;
    const watchLocation = async () => {
      subscription = await Location.watchPositionAsync({ distanceInterval: 10 }, (newLocation) => {
        const from = point([newLocation.coords.longitude, newLocation.coords.latitude]);
        const to = point([selectedScooter.long, selectedScooter.lat]);
        const distance = getDistance(from, to, { units: 'meters' });
        // Start Journey only active when user 300 mt close to scooter
        if (distance < 300) {
          setIsNearby(true);
        }
      });
    };
    if (selectedScooter) {
      watchLocation();
    }
    // unsubscribe
    return () => {
      subscription?.remove();
    };
  }, [selectedScooter]);

  useEffect(() => {
    const fetchDirections = async () => {
      const myLocation = await Location.getCurrentPositionAsync();
      const newDirection = await getDirections(
        [myLocation.coords.longitude, myLocation.coords.latitude],
        [selectedScooter.long, selectedScooter.lat]
      );
      setDirection(newDirection);
    };

    if (selectedScooter) {
      fetchDirections();
    } else {
      setDirection(undefined);
    }
    setIsNearby(false);
  }, [selectedScooter]);

  return (
    <ScooterContext.Provider
      value={{
        nearbyScooters,
        selectedScooter,
        setSelectedScooter,
        direction,
        directionCoordinates: direction?.routes?.[0]?.geometry?.coordinates,
        duration: direction?.routes?.[0]?.duration,
        distance: direction?.routes?.[0]?.distance,
        isNearby,
      }}>
      {children}
    </ScooterContext.Provider>
  );
}

export const useScooter = () => useContext(ScooterContext);
