import { View, Text, Image, Modal, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import SearchBar from "../SearchBar";
import styles from "./styles";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheetEl from "../BottomSheetEl";

const CustomHeader = () => {
  const BottomSheetRef = useRef<BottomSheetModal | null>(null);

  const openModal = () => {
    BottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheetEl ref={BottomSheetRef} />

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => openModal()}>
            <Image
              style={styles.bike}
              source={require("@/assets/images/bike.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => openModal()}>
            <Text style={styles.title}>Delivery &middot; Now</Text>
            <View style={styles.location}>
              <Text style={styles.subtitle}>Belarus</Text>
              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.profileButton}>
          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;
