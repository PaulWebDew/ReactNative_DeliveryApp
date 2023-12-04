import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { restaurant } from "@/assets/data/restaurant";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Details = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));
  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const onScroll = (e: any) => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 350) {
      opacity.value = 1;
    } else {
      opacity.value = 0;
    }
  };

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={styles.info}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>{item.price}$</Text>
        </View>
        <Image source={item.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );

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
        scrollEvent={onScroll}
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
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} •{" "}
            {restaurant.tags.map(
              (tag, ind) =>
                `${tag}${ind < restaurant.tags.length - 1 ? " • " : ""}`
            )}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 50 }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor: Colors.gray,
                  marginHorizontal: 20,
                }}
              />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.gray }} />
            )}
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            sections={DATA}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.stickySegments, animatedStyles]}>
        <View style={styles.segmentsShadow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              alignItems: "center",
            }}
          >
            {restaurant.food.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveIndex(index)}
                style={
                  activeIndex === index
                    ? styles.segmentButtonActive
                    : styles.segmentButton
                }
              >
                <Text
                  style={
                    activeIndex === index
                      ? styles.segmentTextActive
                      : styles.segmentText
                  }
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

export default Details;
