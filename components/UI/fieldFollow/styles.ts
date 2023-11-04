import {StyleSheet} from 'react-native';
import Colors from '@/constants/Colors'

const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      backgroundColor: "#fff",
      borderColor: Colors.gray,
      borderWidth: 1,
    },
  });

  export default styles;