import Colors from '@/constants/Colors';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:'#fff'
    },
    searchSection:{
        flexDirection:'row',
        gap:10,
        paddingHorizontal:20,
        alignItems:'center',
    },
    searchFeld:{
        flex:1,
        backgroundColor: Colors.lightGray,
        borderRadius: 8,
        padding:4,
        flexDirection: 'row',
        alignItems: 'center'

    },
    optionButton:{
        borderRadius:50
    },
    input:{
        padding:3,
        color: Colors.mediumDark
    },
    searchIcon:{
        paddingLeft:10
    }
})

export default styles;