import React from "react"
import { View, Text } from "react-native"
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
          <Text style={styles.textTitle}> ONE BIT-HEALTH <FontAwesome name="heartbeat"size={24} color="white" /> </Text> 
        </View>

    );
}