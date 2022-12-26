import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import { SafeArea } from "../utils/safearea";
import { Theme } from "../utils/theme";
import * as Font from 'expo-font';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { PassionsConflict_400Regular } from "@expo-google-fonts/passions-conflict";

export function Profile () {
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({PassionsConflict_400Regular});

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
    return(
    <SafeArea>

        <View style={styles.pixsign}>
            <Text style={styles.brand}>gabby</Text>
            <Image source={require('../assets/pro-pix.jpg')}
            style={styles.picture}/>   
        </View>

        
        <View style={styles.pixsign2}>
            <Text style={styles.heading}>Gabriel Odoh Styles</Text>
            <View style={styles.follower}>
                <Text style={styles.infoTitle}>Singer-songwritter</Text>
                <FontAwesomeIcon icon={faCheckCircle}
                color={Theme.colors.blue900}
                size={Theme.sizes[3]}/>
            </View>
            <View style={styles.follower}>
                <View>
                    <Text>Credits</Text>
                    <Text style={styles.post}>38.4m</Text>
                </View>
                <View>
                    <Text>Debits</Text>
                    <Text style={styles.post}>387</Text>
                </View> 
                <View>
                    <Text>Loans</Text>
                    <Text style={styles.post}>435</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Text>Gabriel Odoh Styles (born 1 feb. 1994) is on English singer, 
                songwriter, and an actor. His musical career began in 
                2010 as a solo contestant on the British music competition serie The X Factor.
                </Text>
            </View>
        </View>
        


    </SafeArea>
    )
}

const styles = StyleSheet.create({
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.title,
        color:Theme.colors.blue900,
        padding:2
       // flexDirection:'row' 
    },
    heading:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        color:Theme.colors.blue900,
        marginTop:Theme.sizes[2],
        marginBottom:Theme.sizes[3],
        padding:10
    },
    picture:{
        width:200,
        height:300,
        borderRadius:30,
        marginVertical:30,
        marginLeft:150,
        marginRight:30
    },
    pixsign:{
      justifyContent:'center',
      flex:3
      

    },
    sign:{
        width:120,
        height:20,
        borderRadius:30,
        marginVertical:10,
        marginLeft:10,
    },
    form:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        padding:10
    },
    pixsign2:{
        flex:3
    },
    follower:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginRight:150
    },
    post:{
        fontWeight:'bold'
        
    },
    brand:{
        fontFamily:'PassionsConflict_400Regular',
        fontSize:Theme.fonts.fontSizePoint.h3,
        marginRight:30
    }
})