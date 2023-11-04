import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchFeld}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={24}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={Colors.medium}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={"/(modal)/Filter"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SearchBar;
