import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <ImageBackground style={styles.ImageBackground_3}>
        <Image
          resizeMode="contain"
          source={{
            uri:
              "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon_1mmogwJ.png"
          }}
          style={styles.Image_10}
        />
      </ImageBackground>
      <View style={styles.View_12}>
        <Text style={styles.Text_9}>Sign In</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center"
  },
  ImageBackground_3: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundSize: "contain"
  },
  Image_10: { width: 155, height: 155, alignSelf: "center" },
  View_12: {
    width: "100%",
    height: "80%",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -80,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Text_9: { alignSelf: "center", fontSize: 25 }
})
