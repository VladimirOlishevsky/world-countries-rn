import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')


export const styles = StyleSheet.create({   
      slide: {
        flex: 1,
        backgroundColor: 'transparent',
      },    
      image: {
        width: width - 60,
        height: '100%'
      }
})