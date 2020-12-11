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
      <ImageBackground
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg_fFmiqg5.png"
        }}
        style={styles.ImageBackground_3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
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
  }
})
