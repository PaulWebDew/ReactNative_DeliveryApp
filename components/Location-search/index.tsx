import { View, Text, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import React, { FC, useState } from "react";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export interface ILocationProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible?: boolean;
}
const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const LocationSearch: FC<ILocationProps> = ({ setModalVisible }) => {
  const [location, setLocation] = useState({
    latitude: 53.1658045000349,
    longitude: 24.45873602661272,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <GooglePlacesAutocomplete
        placeholder="Search or move the map"
        fetchDetails={true}
        onPress={(data, details = null) => {
          const point = details?.geometry.location;
          if (!point) return;
          setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,
          });
        }}
        query={{
          key: apiKey,
          language: "en",
        }}
        renderLeftButton={() => (
          <View style={styles.boxIcon}>
            <Ionicons
              name="md-search-outline"
              size={24}
              color={Colors.medium}
            />
          </View>
        )}
        styles={{
          container: { flex: 0 },
          textInput: {
            backgroundColor: Colors.gray,
            paddingLeft: 35,
            borderRadius: 10,
          },
          textInputContainer: { padding: 8, backgroundColor: "#fff" },
        }}
      />
      <MapView style={styles.map} showsUserLocation={true} region={location} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSearch;
