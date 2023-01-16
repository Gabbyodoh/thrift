import { View,Text,StyleSheet,TouchableOpacity,Image} from "react-native";
import { SafeArea } from "../utils/safearea";
import { Button } from "react-native-paper";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Theme } from "../utils/theme";

export function Transfer ({navigation}) {
    const price = 890;

   return ( 
   <SafeArea>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={() => navigation.navigate('Withdraw')}>
                    <FontAwesomeIcon icon={faAngleLeft}
                    size={Theme.fonts.fontSizePoint.h4}
                    color={Theme.colors.maroon700}/>
                </TouchableOpacity>
                <Text style={styles.headtext}>Send cash</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.data}>
                <Text style={styles.dataText1}>Jessica Elison</Text>
                <Text style={styles.dataText2}>@Jesselison</Text>
                </View>
                <View style={styles.profile}>
                    <Image source={require('../assets/profile-pix.jpg')} 
                    style={styles.profileImg}/>
                    <Image source={require('../assets/download.png')} 
                    style={styles.profileImg2}/>
                </View>
            </View>

            <View style={styles.transactions}>
                <Text style={styles.trans1}>Amount</Text>
                <Text style={styles.trans2}>$140</Text>
                <Text style={styles.trans1}>Note</Text>
                <Text style={styles.trans2}>Plumbing services</Text>
                <Text style={styles.trans3}>This transactions is FREE</Text>
            </View>

            <View style={styles.send}>
                <View style={styles.sendText}>
                    <Text style={styles.sendText1}>Important:</Text>
                    <Text style={styles.sendText2}>Check the @chipperTag before sending</Text>
                </View>
                <Button mode="contained"
                    onPress={() => navigation.navigate('Paystack',{
                        productPrice:price,
                        productName:'Dell X1 Yoga Laptop',
                        discount:false
                    })}>Deposit{price}</Button>
            </View>
        </View>
    </SafeArea>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        paddingHorizontal:10
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:70

    },
    headtext:{
        fontSize:Theme.fonts.fontSizePoint.h4,

    },
    details:{
        flex:2.5
    },
    data:{
        flexDirection:'column',
        alignItems:'center'
    },
    dataText1:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'

    },
    dataText2:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:Theme.colors.grey100
    },

    profile:{
        alignItems:'center'

    },

    profileImg:{
        width:100,
        height:100,
        borderRadius:50
    },
    profileImg2:{
        width:36,
        height:25,
        marginLeft:50
        
    },
    transactions:{
        flex:2
    },
    trans1:{
        fontSize:Theme.fonts.fontSizePoint.h6,
        fontWeight:'bold'
    },
    trans2:{
        fontSize:Theme.fonts.fontSizePoint.h5,
    },
    trans3:{
        fontSize:Theme.fonts.fontSizePoint.h6,
        color:'green',
        fontWeight:'bold'
    },
    send:{
        flex:1.5
    },
    sendText:{
        alignItems:'center',
        marginBottom:15
    },
    sendText1:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        fontWeight:'bold'  
    },
    sendText2:{
        fontSize:18,
        color:Theme.colors.grey100
    }
})