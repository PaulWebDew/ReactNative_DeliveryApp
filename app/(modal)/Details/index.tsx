import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { restaurant } from "@/assets/data/restaurant";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import Colors from "@/constants/Colors";
const Details = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        >
          <Ionicons name="close-outline" size={30} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.btnBack}>
            <Ionicons name="share-outline" size={30} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBack}>
            <Ionicons name="search-outline" size={30} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        style={{ flex: 1 }}
        backgroundColor="transparent"
        parallaxHeaderHeight={300}
        backgroundSpeed={10}
        stickyHeaderHeight={120}
        renderBackground={() => <Image source={restaurant.img} />}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickyText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.details}>
          <Text>DETAILS</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default Details;
