import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Button,
} from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import FieldFollow from "@/components/UI/fieldFollow";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "@/constants/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export interface ICategory {
  name: string;
  count: number;
  checked?: boolean;
}

const Filter = () => {
  const navigation = useNavigation();
  const [selectedCat, setSelectedCat] = useState<ICategory[]>(categories);
  const [selectedItems, setSelectedItems] = useState<ICategory[]>([]);
  const flexWidth = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return { width: flexWidth.value, opacity: flexWidth.value > 0 ? 1 : 0 };
  });

  const scale = useSharedValue(0);
  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handleClearAll = () => {
    const updatedItems = selectedCat.map((item) => {
      item.checked = false;
      return item;
    });
    setSelectedCat(updatedItems);
  };
  useEffect(() => {
    const hasSelected = selectedItems.length > 0;
    const selected = selectedCat.filter((item) => item.checked);
    const newSelected = selected.length > 0;
    if (newSelected !== hasSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }
    setSelectedItems(selected);
  }, [selectedCat]);

  const renderItem: ListRenderItem<ICategory> = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.row_text}>
          {item.name} ({item.count})
        </Text>

        <BouncyCheckbox
          fillColor={Colors.primary}
          unfillColor="#FFFFFF"
          disableBuiltInState
          iconStyle={{
            borderColor: Colors.primary,
            borderRadius: 4,
            borderWidth: 2,
          }}
          innerIconStyle={{ borderWidth: 2, borderRadius: 4 }}
          onPress={() => {
            const isChecked = selectedCat[index].checked;
            const updatedItems = selectedCat.map((cat, ind) => {
              if (cat.name === selectedCat[index].name) {
                cat.checked = !isChecked;
              }
              return cat;
            });
            setSelectedCat(updatedItems);
          }}
          isChecked={selectedCat[index].checked}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FieldFollow
        title="Sort"
        iconBefore="arrow-down-outline"
        padding={4}
        marginX={6}
      />
      <FieldFollow
        title="Hygiene rating"
        iconBefore="fast-food-outline"
        padding={4}
        marginX={6}
      />
      <FieldFollow
        title="Offers"
        iconBefore="pricetag-outline"
        padding={4}
        marginX={6}
      />
      <FieldFollow
        title="Dietary"
        iconBefore="nutrition-outline"
        padding={4}
        marginX={6}
      />

      <Text style={styles.header}>Categories</Text>

      <View style={styles.categoryList}>
        <FlatList data={categories} renderItem={renderItem} />
      </View>

      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyles, styles.outlineButton]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Filter;
