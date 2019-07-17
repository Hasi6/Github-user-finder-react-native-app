import React, { Component } from "react";
import { Text } from "react-native";

// import firebase
import firebase from "firebase";

// created Components
import Card from "./Card";
import Button from "./Button";
import CardItem from "./CardItem";
import Input from "./Input";
import Spinner from "./Spinner";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onChangeEmail(email) {
    this.setState({ email: email });
  }
  onChangePassword(password) {
    this.setState({ password: password });
  }
  onButtonPress() {
    this.setState({
      error: "",
      loading: true
    });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      }).then(()=>{this.setState({loading: false})});
  }

  onLoginSuccess() {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      });
  }

  onLoginFail(){
      this.setState({
          error: "Authintication Failed",
          loading: false
      })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={"small"} />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardItem>
          <Input
            secureTextEntry={false}
            value={this.state.email}
            onChangeText={email => this.onChangeEmail(email)}
            placeholder="Enter Your Email"
            label={"Email"}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.onChangePassword(password)}
            placeholder="Enter Your Password"
            label={"Password"}
          />
        </CardItem>
        <Text style={errorTextStyle}>{this.state.error}</Text>
        <CardItem>{this.renderButton()}</CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
