import { View,Text, TouchableOpacity,StyleSheet} from "react-native";
import { SafeArea } from "../utils/safearea";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Theme } from "../utils/theme";
import { Formik } from "formik";
import * as yup from "yup";

const formRules = yup.object({
    
    email:yup.string('invalid characters')
    .email('must be an email')
    .max(60,'not more than 60 characters')
    .required('This is a compulsory field'),
  
  password:yup.string('invalid characters')
    .min(11,'must be up to 11 numbers')
    .required('This is a compulsory field')
    .oneOf([yup.ref('passwordConfirmation'),null],'passwords must match'),
  })

export function Signin ({navigation}) {
    return (
        <SafeArea>
            
                <Text style={styles.heading}>Thrift</Text>

                <View style={styles.form}>
                    <Text style={styles.brand}>Sign In</Text>
                    
                   <Formik
                   initialValues={{
                    email:'',
                    password:''
                  }}

                  onSubmit={(values,action) => {
                    console.log(values.email);

                    action.restForm();//clear inputs
                  }}
                  
                  validationSchema={formRules}>
                     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                          return (
                                    <View>
                                            <TextInput
                                            placeholder="email address"
                                            mode="outlined"
                                            outlineColor={Theme.colors.blue700}
                                            activeOutlineColor={Theme.colors.blue900}
                                            style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                                            keyboardType='email-address'
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}/>
                                            <Text sytle={{display:touched.email && errors.email ? 'flex' : 'none', color:'red'}}>
                                                {touched.email && errors.email}
                                            </Text>
                                            

                                            <TextInput
                                            placeholder="enter password"
                                            mode="outlined"
                                            outlineColor={Theme.colors.blue700}
                                            activeOutlineColor={Theme.colors.blue900}
                                            style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                                            secureTextEntry={true}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}/>
                                            <Text sytle={{display:touched.password && errors.password ? 'flex' : 'none', color:'red'}}>
                                                {touched.password && errors.password}
                                            </Text>

                                            <Button
                                            mode="contained"
                                            color={Theme.colors.blue900}
                                            contentStyle={{paddingVertical:Theme.sizes[3]}}>Sign in</Button>
                                        </View>
                                 )
                            }}
                   </Formik>

                    <View style={styles.create}>
                        <View style={styles.infoTitle}>
                        <Text>Forgot your email or password?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Password reset')}>
                            <Text style={styles.press}> Reset</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.infoTitle}>
                        <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                            <Text style={styles.press}> Sign Up Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:Theme.colors.blue900,
        marginBottom:Theme.sizes[5]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.title,
        flexDirection:'row'
    },
    form:{
        marginTop:Theme.sizes[4]
        
        
    },
    press:{
        fontSize:Theme.fonts.fontSizePoint.button,
        color:Theme.colors.blue900  
    },
    create:{
        marginTop:10,
        margin:40
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