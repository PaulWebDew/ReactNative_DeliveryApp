import Colors from '@/constants/Colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    detailsContainer: {
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
gap: 10},
restaurantName:{
    fontSize: 30,
    margin: 16,
},
restaurantDescription:{
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: Colors.medium
},
sectionHeader:{
    fontSize: 22,
    fontWeight:'bold',
    margin: 16,
    marginTop: 40,
},
info:{
    flexDirection: "column",
    flex: 1,
},
item:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    gap: 15,
    padding: 16,
    justifyContent: 'space-between',
  },
  dishImage:{ 
    width: 80, 
    height: 80,
    borderRadius: 4 
},
  dish:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishText:{
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
  stickySegments:{
    position: 'absolute',
    height: 40,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  segmentsShadow:{
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  segmentButton:{
    marginHorizontal: 4,
},
  segmentText:{
    color: Colors.primary,
    fontSize: 16,
},
  segmentButtonActive:{
    backgroundColor: Colors.primary,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,

  },
  segmentTextActive:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
//   segmentScrollView:{
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   }
})

export default styles