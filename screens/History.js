import { useState,useEffect,useContext } from "react";
import { AppContext } from "../utils/global";
import { View,Text,StyleSheet,FlatList} from "react-native";
import { SafeArea } from "../utils/safearea";
import { Theme } from "../utils/theme";
import { db } from "../firebase/firebase.settings";
import { onSnapshot,collection,query,where,orderBy } from 'firebase/firestore';


export function History () {
    const {uid} = useContext(AppContext);
    const [history,setHistory] = useState([]);

    console.log(history);

    const queryRef = collection(db,'statement');

    useEffect(() => {
        onSnapshot(query(queryRef,where('by','==',uid),orderBy('timestamp','desc')),
        (onSnapshotResponse) => {
            const compiledHistory = [];

            onSnapshotResponse.forEach((document) => {
                compiledHistory.push(document.data());
                setHistory(compiledHistory);
            })
        })
    },[]);

        return (
        <SafeArea>
            <View style={styles.container}>
                <FlatList
                data={history}
                key={({item}) => item.timestamp}
                renderItem={({item}) => {
                    return (
                        <View style={styles.transBlock}
                        key={item.timestamp}>
                            <Text style={styles.value}>₦{item.amount}</Text>
                            <Text style={styles.desc}>{item.description}</Text>
                            <Text style={styles.date}>{item.timestamp}</Text>
                        </View>
                    )
                }}/>

                {/*history.map(trans => {
                    const actualDate = new Date(trans.timestamp).toDateString();

                    return (
                        <View style={styles.transBlock}
                        key={trans.timestamp}>
                            <Text style={styles.value}>₦{trans.amount}</Text>
                            <Text style={styles.desc}>{trans.description}</Text>
                            <Text style={styles.date}>{actualDate}</Text>
                        </View>
                    )
                })*/}
            </View>
        </SafeArea>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Theme.sizes[3]
    },
    transBlock:{
        backgroundColor:Theme.colors.gray150,
        padding:Theme.sizes[2],
        marginBottom:Theme.sizes[2]
    },
    value:{
        fontSize:Theme.fonts.fontSizePoint.title,
        color:'black'
    },
    desc:{
        fontSize:Theme.fonts.fontSizePoint.body,
        color:'black'
    }
})