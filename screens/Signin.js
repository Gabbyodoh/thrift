import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../utils/global";
import { SafeArea } from "../utils/safearea";
import { View,Text,StyleSheet,ScrollView, TouchableOpacity,ActivityIndicator } from "react-native";
import { Theme } from '../utils/theme';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import { Button, TextInput } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import * as yup from 'yup';
import { authentication } from "../firebase/firebase.settings";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";


const formRules = yup.object({
    
    email:yup.string('invalid characters')
    .email('must be an email')
    .max(60,'not more than 60 characters')
    .required('This is a compulsory field'),
  
  password:yup.string('invalid characters')
    .required('This is a compulsory field')
   
  })

  export function Signin({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    const [loading,setLoading] = useState(false); //for ActivityIndicator
    const {setUid,setEmail} = useContext(AppContext);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Righteous_400Regular});
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

    return (
        <SafeArea>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.brand}>Thrift</Text>
                <Text style={styles.intro}>Sign in to an existing account</Text>

                <View style={styles.alreadyHaveAccount}>
                    <Text style={styles.infoTitle}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                        <FontAwesomeIcon icon={faCircleArrowRight}
                        color={Theme.colors.blue900}
                        size={Theme.sizes[5]}/>
                    </TouchableOpacity>
                </View>

                    
                <Formik
                    initialValues={{
                        email:'',
                        password:'',
                    }}
                    
                    onSubmit={(values,action) => {
                        //from here
                        setLoading(true);
                        signInWithEmailAndPassword(authentication,values.email,values.password)
                        .then(() => {
                            //get the user UID
                            onAuthStateChanged(authentication,user => {
                                setEmail(values.email);
                                setUid(user.uid);

                                //redirect to home screen
                                navigation.navigate('My Home');
                            });
                        })
                        .catch(error => {
                            setLoading(false)
                        }); //to here

                        action.resetForm();//clear inputs
                    }}

                    validationSchema={formRules}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors,touched }) =>{
                            return (
                                <View style={styles.form}>
                                    {loading ? <ActivityIndicator size='large' color={Theme.colors.purple900}/> : null}

                                    <TextInput 
                                    placeholder="email address"
                                    mode="outlined"
                                    outlineColor={Theme.colors.purple300}
                                    activeOutlineColor={Theme.colors.purple500}
                                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                                    keyboardType='email-address'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}/>
                                    <Text style={{display:touched.email && errors.email ? 'flex' : 'none', color:'red'}}>
                                        {touched.email && errors.email}
                                    </Text>
                                
                                    <TextInput 
                                    placeholder="create password"
                                    mode="outlined"
                                    outlineColor={Theme.colors.purple300}
                                    activeOutlineColor={Theme.colors.purple500}
                                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}/>
                                    <Text style={{display:touched.password && errors.password ? 'flex' : 'none', color:'red'}}>
                                        {touched.password && errors.password}
                                    </Text>

                                    <Button
                                    mode="contained"
                                    color={Theme.colors.purple700}
                                    contentStyle={{paddingVertical:Theme.sizes[3]}}
                                    onPress={() => {
                                        handleSubmit();
                                    }}>
                                        Sign In
                                    </Button>
                                </View>
                            )
                        }}
                    </Formik>
                    
                        <View style={styles.infoTitle}>
                        <Text>Forgot your email or password?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Password reset')}>
                            <Text style={styles.press}> Reset</Text>
                            </TouchableOpacity>
                        </View>
                    
                
             </ScrollView>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'Righteous_400Regular',
        color:Theme.colors.purple700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderColor:Theme.colors.blue700,
        borderRadius:6,
        paddingVertical:Theme.sizes[2],
        marginTop:Theme.sizes[2],
        marginBottom:Theme.sizes[3]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        flexDirection:'row',
        marginTop:4
    },
    form:{
        marginTop:Theme.sizes[2]
    },
    press:{
        fontSize:Theme.fonts.fontSizePoint.button,
        color:Theme.colors.blue900  
    }
})