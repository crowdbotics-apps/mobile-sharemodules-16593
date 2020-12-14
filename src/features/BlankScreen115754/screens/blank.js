import React from 'react';
import {connect} from 'react-redux';
import {rest_auth_login_create} from '../../../store/actions.js';
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

const HOME_SCREEN = 'BlankScreen015678';

const TextInputField = props => (
  <View>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      autoCapitalize="none"
      style={styles.textInput}
      underlineColorAndroid={'transparent'}
      {...props}
    />
  </View>
);

class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onLogin = async () => {
    const response = await this.props.login(
      this.state.email,
      this.state.password,
    );
    if (this.props.users?.find(user => user?.token)) {
      this.props.navigation.navigate(HOME_SCREEN);
    }
  };
  render = () => (
    <View style={styles.container}>
      <TextInputField
        keyboardType="email-address"
        label="Email address"
        placeholder="Email Address"
        onChangeText={email => this.setState({email: email})}
        value={this.state.email}
      />
      <TextInputField
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => this.setState({password: password})}
        value={this.state.password}
      />
      <TouchableOpacity onPress={() => this.onLogin()} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
      {this.props.error.message &&
          <Text style={styles.error}>{this.props.error.message}</Text>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
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
  console.log(state.apiReducer.error)
  return {
    logins: state.apiReducer.mobileShareModulesAPI, // change here name of connector/model here
    error: state.apiReducer.error,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      return dispatch(rest_auth_login_create({email, password}));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blank);
