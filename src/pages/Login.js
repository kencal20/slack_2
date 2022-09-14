import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Log in</Text>

      <View style={styles.input_field}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          secureTextEntry={true}
        />
      </View >

      <TouchableOpacity style={styles.forgot_link}>
        <Text style={styles.forgot_text}>Forgot Password ?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.login_link}>
          <Text style={styles.login_text}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.no_Account}>
        <Text style={styles.signin_txt}>
          Don't have account?
          <TouchableOpacity
            style={styles.signin_linktxt}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text >Signin</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 50,
  },
  header: {
    fontSize: 35,
    color: "purple",
    fontWeight: "600",
  },
  input_field: {
    marginTop: 60,
  },
  input: {
    marginVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: "purple",
  },
  forgot_link: {
    marginLeft: 110,
  },
  forgot_text: {
    color: "dodgerblue",
  },
  buttonContainer: {
    backgroundColor: "purple",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  login_text: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    color: "white",
  },
  no_Account: {
    marginTop: 10,
  },
  login_linktxt: {
    alignSelf: "center",
    fontSize: 16,
  },

  loginin_linktxt: {
    flex: 1,
    marginLeft: 20,
    fontWeight: "bold",
    color: "purple",
  },
  signin_linktxt: {
    marginHorizontal: 20,
    fontSize: 15, 
     color: "purple",
    fontWeight: "bold",
  },
  signin_txt: {
    fontSize:14
  
  },
});
