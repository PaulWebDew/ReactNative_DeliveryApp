import {StyleSheet} from 'react-native';
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
    safeArea: { flex: 1, borderRightColor: "#fff" },
    container: {
      height: 60,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      paddingHorizontal: 20,
    },
    bike: {
      width: 35,
      height: 35,
    },
    profileButton: {
      backgroundColor: Colors.lightGray,
      padding: 10,
      borderRadius: 50,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      fontSize: 14,
      color: Colors.medium,
    },
    subtitle:{
        fontSize:18,
        fontWeight: 'bold',
        lineHeight: 18
    },
    location:{ 
        flexDirection: "row",
        alignItems: "center",
        gap:5 },
        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        },
  });

  export default styles;