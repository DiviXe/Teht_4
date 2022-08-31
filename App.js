import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: value, id: 1 }]);
    setValue("");
  };
  const clearAllItems = () => {
    setData([]);
  };

  console.log(...data);
  return (
    <View style={styles.container}>
      <View style={styles.Text}>
        <TextInput value={value} onChangeText={(text) => setValue(text)} />
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.Button} onPress={add}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={clearAllItems}>
          <Text>CLEAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listStyle}>
        <Text>Shopping List</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <Text key={index}>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    borderWidth: 2,
    borderColor: "gray",
    width: "50%",
    margin: 5,
  },
  ButtonView: {
    marginTop: 4,
    flexDirection: "row",
  },

  Button: {
    height: 40,
    width: 60,
    alignItems: "center",
    marginHorizontal: 1,
    borderRadius: 2,
    justifyContent: "center",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  listStyle: {
    marginTop: 40,
    width: "40%",
    alignItems: "center",
    borderBottomWidth: 2,
  },
  list: {
    width: "40%",
    alignItems: "center",
  },
});
