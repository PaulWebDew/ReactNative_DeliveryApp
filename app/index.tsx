import { View, Text, ScrollView } from "react-native";
import React from "react";
import Categories from "@/components/Categories";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/components/Restaurants";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
