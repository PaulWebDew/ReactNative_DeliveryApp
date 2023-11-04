import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export interface IFieldFollowProps {
  title: string;
  iconBefore: string;
  iconAfter?: string;
  iconsSize?: number;
  padding?: number;
  marginX?: number;
  onPress?: any;
}
const FieldFollow: FC<IFieldFollowProps> = (props) => {
  const {
    title,
    iconBefore,
    iconAfter = "chevron-forward",
    iconsSize = 24,
    padding = 12,
    marginX = 2,
    onPress,
  } = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{ ...styles.item, padding: padding, marginVertical: marginX }}
        >
          <Ionicons name={iconBefore as any} size={24} color={Colors.medium} />
          <Text style={{ flex: 1 }}>{title}</Text>
          <Ionicons name={iconAfter as any} size={24} color={Colors.primary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FieldFollow;
