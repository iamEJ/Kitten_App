import React, { useEffect, useState } from "react";
import { Modal, Pressable, SafeAreaView, Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";

const CatList = ({ navigation }) => {
  const [number, setNumber] = useState(10);
  const [spinner, setSpinner] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setSpinner(false);
    }, 1000);
  }, []);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateName = () => {
    const catName = [
      "Fluffy",
      "Nibbuls",
      "Kitty",
      "Cookie",
      "Bella",
      "Oliver",
      "Lilly",
      "Charlie",
      "Simba",
      "Loki",
      "Lulu",
    ];
    const name = catName[getRandomInt(0, catName.length)];
    return name;
  };

  const generateUrl = () => {
    const image =
      "http://placekitten.com/200/200?image=" + [getRandomInt(0, 17)];
    return image;
  };

  const enterCatProfile = (id, title, url) => {
    navigation.navigate("Cat", {
      id,
      title,
      url,
    });
  };

  const data = new Array(
    number < 1
      ? 0
      : parseInt(number) ||
        (function (error) {
          console.log(error);
        })()
  )
    .fill()
    .map((value, index) => ({
      id: index,
      title: generateName(),
      url: generateUrl(),
    }));

  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>How many kittens you need?</Text>
              <Text>Enter a number (1-100)</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  paddingLeft: 10,
                  width: 100,
                }}
                onChangeText={(number) => setNumber(number)}
                value={number}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="30"
          onPress={() => setNumber(30)}
          buttonStyle={{
            backgroundColor: "#1F1F1F",
            width: 60,
            marginBottom: 10,
            marginTop: 10,
          }}
        />
        <Button
          title="50"
          onPress={() => setNumber(50)}
          buttonStyle={{
            backgroundColor: "#1F1F1F",
            width: 60,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        />
        <Button
          title="100"
          onPress={() => setNumber(100)}
          buttonStyle={{
            backgroundColor: "#1F1F1F",
            width: 60,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        />
        <Button
          title="Custom"
          onPress={() => setModalVisible(true)}
          buttonStyle={{
            backgroundColor: "#1F1F1F",
            width: 80,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        />
      </View>
      <Spinner
        visible={spinner}
        textContent={"Loading..."}
        textStyle={{ color: "#fff" }}
      />
      {data.length != 0 ? (
        <ScrollView>
          <View style={styles.container}>
            {data.slice(0, number).map((cat) => {
              return (
                <View key={cat.id} style={styles.card}>
                  <Image
                    style={{
                      width: 300,
                      height: 300,
                      resizeMode: "contain",
                      borderRadius: 10,
                      marginBottom: 10,
                    }}
                    source={{
                      uri: cat.url,
                    }}
                  />

                  <Button
                    onPress={() => enterCatProfile(cat.id, cat.title, cat.url)}
                    title={cat.title}
                    buttonStyle={{ backgroundColor: "#F5353C", width: 100 }}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <Text style={{ textAlign: "center", fontSize: 24, marginTop: 20 }}>
          Ups. No kittens.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default CatList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#efefef",
    padding: 15,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});
