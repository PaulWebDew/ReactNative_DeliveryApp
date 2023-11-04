import Colors from '@/constants/Colors';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: Colors.lightGray
    },

    footer:{
        position: "absolute",
        bottom:0,
        left:0,
        right:0,
        height:100,
        backgroundColor:'#fff',
        padding:10,
        elevation:10,
        shadowColor: 'red',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: -10,
        }

    },
    fullButton:{
        backgroundColor: Colors.primary,
        padding:16,
        alignItems: 'center',
        borderRadius:8,
        flex: 1,
        height: 56,
    },
    footerText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    header:{
        fontSize:16,
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 16,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'fff',

    },
    row_text:{
        flex: 1
    },
    categoryList:{
        overflowY: 'scroll',
        flex: 1
    },
    btnContainer:{
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
    },
    outlineButton:{
        borderColor: Colors.primary,
        borderWidth:0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 56,
        
    },
    outlineButtonText:{
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },

})

export default styles;