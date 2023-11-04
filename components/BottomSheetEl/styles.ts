import Colors from '@/constants/Colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
buttonText:{
    fontWeight: 'bold',
    color:'#fff',

},
button:{
    backgroundColor: Colors.primary,
    padding:16,
    borderRadius: 4,
    margin:16,
    alignItems:'center'
},
toggleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    marginBottom: 32,
},
toggleActive:{
    backgroundColor: Colors.primary,
    padding: 4,
    paddingHorizontal: 25,
    borderRadius: 32
},
toggleInactive:{
    padding: 4,
    paddingHorizontal: 25,
    borderRadius: 32},
activeText:{
    color:'#fff',
    fontWeight: '700',
},
inactiveText:{
    color:Colors.primary,
},
subheader:{
    fontSize: 16,
    fontWeight:'600',
    margin:8,
},
item:{
    flexDirection:'row',
    gap: 8,
    alignItems:'center',
    padding:12,
    backgroundColor: '#fff',
    borderColor:Colors.medium,
    borderWidth: 1
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
modalView: {
  width: '98%',
  backgroundColor: 'white',
  borderRadius: 20,
  alignItems: 'center',
  shadowColor: '#000',
  flex:1,
  // shadowOffset: {
  //   width: 0,
  //   height: 2,
  // },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  backgroundColor: '#2196F3',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
modalHeader:{
  flexDirection: 'row',
  width: '100%',
  alignItems: 'flex-start',
},

btnCloseModal:{
  justifyContent: 'flex-start'
}

})

export default styles