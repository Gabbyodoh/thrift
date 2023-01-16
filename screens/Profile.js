import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import { SafeArea } from "../utils/safearea";
import { Theme } from "../utils/theme";
import * as Font from 'expo-font';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { PassionsConflict_400Regular } from "@expo-google-fonts/passions-conflict";
import { Button } from "react-native-paper";

export function Profile ({navigation}) {
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

        <View style={styles.container}>
          <View style={styles.box1}>
              <View style={styles.signatureBox}>
                <Text style={styles.signature}>gabby</Text>
              </View>
              <View>
                <Image source={require('../assets/pro-pix.jpg')}
                style={styles.imgBox}/>
              </View>   
          </View>

          
          <View style={styles.box2}>
              <View style={styles.heading}>
                  <Text style={styles.heading2}>Gabriel</Text>
              </View>
              <View style={styles.heading}>
                  <Text style={styles.heading2}>Odoh Styles</Text>
              </View>
              <View style={styles.infoTitle}>
                  <Text style={styles.infoTitleText}>Singer-songwritter</Text>
                  <FontAwesomeIcon icon={faCheckCircle}
                  color={Theme.colors.blue900}
                  size={Theme.sizes[4]}/>
              </View> 
              <View style={styles.transactions}>
                  <View style={styles.hit}>
                      <Text style={styles.hitTitle}>Credits</Text>
                      <Text style={styles.hitValue}>48,000</Text>
                  </View>
                  <View style={styles.hit}>
                      <Text style={styles.hitTitle}>Debits</Text>
                      <Text style={styles.hitValue}>15,000</Text>
                  </View> 
                  <View style={styles.hit}>
                      <Text style={styles.hitTitle}>Loans</Text>
                      <Text style={styles.hitValue}>6</Text>
                  </View>
              </View>
              <View style={styles.form}>
                  <Text>Gabriel Odoh Styles (born 1 feb. 1994) is on English singer, 
                  songwriter, and an actor. His musical career began in 
                  2010 as a solo contestant on the British music competition serie The X Factor.
                  </Text>
              </View>
                  <Button
                  mode='contained'
                  color={Theme.colors.maroon700}>Update Profile
                  </Button>
          </View>
        </View>
        


    </SafeArea>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    box1:{
      flex:2.8,
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'#fff'
    },

    signature:{
      fontFamily:'PassionsConflict_400Regular',
      fontSize:Theme.fonts.fontSizePoint.h3,
      marginRight:20
    },
    signatureBox:{
      paddingTop:240
    },

    imgBox:{
      width:210,
      height:280,
      borderRadius:15 
    },

    box2:{
      flex:3.2,
      backgroundColor:'#fff'
    },
   
    heading:{
      left:10
    },

    heading2:{
      fontSize:Theme.fonts.fontSizePoint.h5,
      color:Theme.colors.blue900,
      fontWeight:'bold'
    },

    infoTitle:{
      flexDirection:'row',
      alignItems:'center',
      left:10,
      backgroundColor:'#fff',
    },

    infoTitleText:{
      fontSize:Theme.fonts.fontSizePoint.h5,
      color:Theme.colors.blue900,
      padding:2
      
    },

    transactions:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:Theme.sizes[2],
      left:10,
      marginRight:30

    },

    hit:{
      
    },

    hitTitle:{
      fontSize:Theme.fonts.fontSizePoint.title,
      color:Theme.colors.grey100,
      marginBottom:Theme.sizes[2]

    },

    hitValue:{
      fontWeight:'bold'    
    },
      
    form:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      padding:10,
      borderWidth:2,
      borderColor:'#fff'
    } 
    
})