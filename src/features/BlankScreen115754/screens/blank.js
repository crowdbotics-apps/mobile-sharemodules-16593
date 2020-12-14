import React from 'react';
import {connect} from 'react-redux';
import { api_v1_login_create } from "../../../store/actions.js"
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
} from 'react-native';

const TextInputField = props => (
  <View>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      autoCapitalize="none"
      style={styles.textInput}
      placeholderTextColor={{color: '#CCCCCC'}}
      underlineColorAndroid={'transparent'}
      {...props}
    />
    {!!props.error && <Text style={styles.error}>{props.error}</Text>}
  </View>
);

class Blank extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.state.apiReducer)
    this.state = {
      email: '',
      password: '',
    };
  }

  render = () => (
    <View style={styles.container}>
      <TextInputField
        keyboardType="email-address"
        label="Email address"
        placeholder="Email Address"
        onChangeText={email => this.setState({email: email})}
        value={this.state.email}
        error={this.props.state.error}
      />
      <TextInputField
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => this.setState({password: password})}
        value={this.state.password}
        error={this.props.state.error}
      />
      <TouchableOpacity
        onPress={() => this.props.login(this.state.email, this.state.password)}
        style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    borderColor: '#000000',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    height: 44,
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    borderRadius: 5,
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
    color: '#000000',
  },
  label: {color: '#6A6A6A', fontSize: 12},
  error: {color: '#FF0000', fontSize: 9},
});

function mapStateToProps(state) {
  return {state: state};
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(api_v1_login_create({email, password})),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
