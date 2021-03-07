import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Cat = ({ route }) => {
  return (
    <View style={styles.card}>
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
          borderRadius: 10,
        }}
        source={{
          uri: route.params.url,
        }}
      />
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.text}>
        Aenean sollicitudin convallis efficitur. Morbi mollis sapien nec leo
        imperdiet, vel tincidunt nulla iaculis. Proin commodo vitae orci non
        rutrum. Sed ut velit rhoncus sem volutpat sodales. Nulla sed aliquam
        diam. Sed suscipit, diam in faucibus pharetra, risus mauris bibendum
        nulla, vitae sollicitudin felis ligula a eros. Quisque sit amet sem eget
        lectus ultricies scelerisque sed in quam. Mauris euismod ipsum eu
        hendrerit tempus.
      </Text>
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    color: "#F5353C",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
});
