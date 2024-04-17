import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native-web";
import { styles } from "../config/style";


export default function RegisterScreen({navigation}){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [repetirsenha, SetRepitirsenha] = useState();
    const [nome, setNome] = useState();
    const [logradouro, setLograudoro] = useState();
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
 
    return (
        <View style={styles.container}>
            <View style={style.innerContainer}>
            <Text> Faça seu Registro</Text>
            <TextInput 
             placeholder="Digite seu e-mail"
             onChangeText={setEmail}
             value={email}
           />
           <TextInput 
             placeholder="Digite sua senha"
             onChangeText={setSenha}
             value={senha}
             secureTextEntry
             right={<TextInput.Icon icon="eye" />}
           />
           <TextInput 
             placeholder="Repita a sua senha"
             onChangeText={SetRepitirsenha}
             value={repetirsenha}
             secureTextEntry
             right={<TextInput.Icon icon="eye" />}
           />
           <TextInput 
             placeholder="Digite o seu nome"
             onChangeText={setNome}
             value={nome}
           />
           <TextInput 
             placeholder="Digite o  seu logradouro"
             onChangeText={setLograudoro}
             value={logradouro}
           />
           <TextInput 
             placeholder="Digite seu CEP"
             onChangeText={setCep}
             value={cep}
           />
           <TextInput 
             placeholder="Digite o nome da sua Cidade"
             onChangeText={setCidade}
             value={cidade}
           />
           <TextInput 
             placeholder="Digite o nome seu Estado"
             onChangeText={setEstado}
             value={estado}
           />

           <Button onPress={() => navigation.navigate("LoginScreen")}>
            Voltar ao login
            </Button>
            </View>
        </View>
    )

}