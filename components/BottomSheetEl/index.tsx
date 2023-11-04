import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, {
  FC,
  PropsWithRef,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheet,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import FieldFollow from "../UI/fieldFollow";
import LocationSearch from "../Location-search";

export interface IBottomSheetElProps {
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Ref = BottomSheetModal;

const BottomSheetEl = forwardRef<Ref, IBottomSheetElProps>((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGray }}
      backdropComponent={renderBackdrop}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.btnCloseModal}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons
                  style={{ marginRight: 10 }}
                  name="close-outline"
                  size={30}
                  color={Colors.primary}
                />
              </TouchableOpacity>
              <Text>Search location</Text>
            </View>
            <LocationSearch setModalVisible={setModalVisible} />
          </View>
        </View>
      </Modal>
      <View>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>PickUp</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subheader}>Your location</Text>
        <Link href={"/"} asChild style={{ marginBottom: 20 }}>
          <FieldFollow
            title="Current location"
            iconBefore="location-outline"
            iconAfter="chevron-forward"
            onPress={() => setModalVisible(true)}
          />
        </Link>
        <Text style={styles.subheader}>Arrival time</Text>
        <FieldFollow title="Now" iconBefore="stopwatch-outline" />
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheetEl;
