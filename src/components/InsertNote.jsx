import { useState } from "react";
import { TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function InsertNote() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState({
    visible: false,
    message: "Exple Modal. Click outside area to dismiss.",
  });

  const showModal = (message) =>
    setVisible({ messagee: message, visible: true});
  const hideModal = () => setVisible({ ...visible, visible: false });

  async function handleSubmit() {
    try {
      if (text.length <= 1) {
        Alert.alert("Aviso", "Insira uma nota");
        return;
      }
      const colRef = collection(db, "tarefas");
      const payload = {
        descricao: text,
        data: new Date(),
      };

      const docRef = await addDoc(colRef, payload);
      console.log("Document written with ID: ", docRef.id);
      if (text !== "") {
        setText("");
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
    <Portal>
      <Modal
        visible={visible.visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <Text>{visible.message}</Text>
      </Modal>
    </Portal>

    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Inserir nota"
      right={<TextInput.Icon onPress={handleSubmit} icon="send" />}
      style={styles.input}
    />
  </>
  );
}
