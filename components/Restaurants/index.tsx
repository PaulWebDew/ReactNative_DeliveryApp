import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

const Restaurants = () => {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurants.map((item, index) => (
        <Link href={"/(modal)/Details"} asChild key={index}>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image style={styles.image} source={item.img} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{item.name}</Text>
                <Text style={styles.categoryRating}>
                  {item.rating}
                  {item.ratings}
                </Text>
                <Text style={styles.categoryDistance}>{item.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Restaurants;
