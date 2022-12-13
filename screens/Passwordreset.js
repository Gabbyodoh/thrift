import { View,Text,StyleSheet} from "react-native";
import { SafeArea } from "../utils/safearea";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Theme } from "../utils/theme";

export function Passwordreset () {
    return(
    <SafeArea>
        <Text style={styles.heading}>Thrift</Text>
        <View style={styles.form}>
            <Text style={styles.infoTitle}>Password Reset</Text>

            <TextInput
                    placeholder="email or phone number"
                    mode="outlined"
                    outlineColor={Theme.colors.blue900}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address'/>

            <Button
                    mode="contained"
                    color={Theme.colors.blue900}
                    contentStyle={{paddingVertical:Theme.sizes[3]}}>Reset</Button>
        </View>

    </SafeArea>
    )
}

const styles = StyleSheet.create({
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5 
    },
    form:{
        marginTop:Theme.sizes[3],
        flex:1,
        backgroundColor:'#89CFEF',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:50
    },
    heading:{
        fontSize:Theme.fonts.fontSizePoint.h2,
        justifyContent:'center',
        alignItems:'center',
        color:Theme.colors.blue900,
        marginTop:Theme.sizes[2],
        marginBottom:Theme.sizes[3]
    }
})