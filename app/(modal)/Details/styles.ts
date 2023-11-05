import Colors from '@/constants/Colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
details: {
    backgroundColor: Colors.lightGray,
    flex: 1
},
stickySection:{
    transform: [{translateX: -110 }], },
stickyText:{
    position: 'absolute',
    top: 25,
    left: '50%',
    color: Colors.lightGray,
    fontWeight: 'bold',
    fontSize: 18
},
btnBack:{
    width: 40,
    height: 40,
    backgroundColor: Colors.lightGray,
    borderRadius: 50,
    justifyContent: 'center',
alignItems: 'center',
},
bar:{flexDirection: 'row',
alignItems:'center',
justifyContent: 'center',
gap: 10}
})

export default styles