import Colors from '@/constants/Colors';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
map: {
    flex:1,
    marginLeft:0,
    marginRight: 0,
    width: 'auto'
}, 
absoluteBox:{
position:'absolute',
bottom: 20,
width: '100%',
},button:{
    backgroundColor: Colors.primary,
    padding: 16,
    margin:16,
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
},
buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:16
},
boxIcon:{
    position: 'absolute',
    zIndex: 1,
    left: 15,
    top: 18,
}
})

export default styles;