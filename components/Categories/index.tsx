import { View, Text, ScrollView, Image } from "react-native";
import React, { FC } from "react";
import { categories } from "@/assets/data/home";
import styles from "./styles";

const Categories: FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={item.img} />
          <Text style={styles.categoryText}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
