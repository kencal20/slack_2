import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import logo from "../../assets/logo.png";
export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={logo} style={styles.img} />
      <Text style={styles.App_name}>App_name</Text>
      <View style={styles.dlink}>
        <View style={styles.login_link}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.login_txt}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signup_link}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.signup_txt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  img: {
    marginTop: 20,
    width: 150,
    height: 150,
    marginBottom: 40,
    alignSelf: "center",
    borderRadius: 90,
  },
  App_name: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    marginLeft: 100,
  },
  dlink: {
    position: "relative",
    left: 40,
    top: 60,
  },
  login_link: {
    backgroundColor: "dodgerblue",
    width: 200,
    height: 50,
    borderRadius: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  login_txt: {
    marginVertical: 10,
    color: "white",
    marginHorizontal: 20,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  signup_link: {
    borderColor: "dodgerblue",
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  signup_txt: {
    marginVertical: 10,
    color: "white",
    marginHorizontal: 20,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
