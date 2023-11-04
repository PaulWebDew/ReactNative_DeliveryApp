import Colors from '@/constants/Colors'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    categoryCard:{
        width:300,
        height: 250,
        backgroundColor: '#fff',
        marginEnd: 10,
        elevation: 2,
        borderRadius: 4,
    },
    categoryText:{
        paddingVertical: 4,
        fontSize: 12,
        fontWeight: 'bold',
    },
    image:{
        flex: 5,
        width: undefined,
        height: undefined,
    },
    categoryBox:{
        flex: 2,
        padding: 10,
    }, 
    categoryRating:{
        color: Colors.green
    },
    categoryDistance:{
        color: Colors.medium
    }
})

export default styles