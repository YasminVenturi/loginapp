import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false, 
    repetirSenha: false,
    nome: false,
    cep: false,
    cidade: false,
    estado: false,

  })
  
  function realizaRegistro() {
    console.log("Fazer Registro");
    // o que precisa ser feito?
    // 1) Validar se todos os campos foram digitados
    if (nome === "") {
      setErro({...erro, nome: true });
      return;
    }
    setErro({ ...erro, nome: false});
    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    }
    if (repetirSenha === "") {
      setErro({ ...erro, repetirSenha: true });
      return;
    }

  function buscaCEP() {
    console.log("Busca CEP");
    let cepLimpo = cep.replace("-", "").trim();
    if (cepLimpo.length < 8) return;
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json()) // obrigatório em requisições fetch json
      .then((dados) => {
        // agora sim vou tratar os dados
        console.log(dados);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      })
      .catch((erro) => {
        // se der erro, cai aqui
        console.error(erro);
        setErro("CEP não encontrado");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineSmall">Faça seu Registro</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Repita sua senha"
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry
          style={styles.input}
        />
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text variant="headlineSmall">Dados pessoais</Text>
          <TextInput
            placeholder="Digite seu CEP (somente números)"
            value={cep}
            onChangeText={setCep}
            onBlur={buscaCEP} // quando o campo perde o foco, busca o CEP
            keyboardType="numeric" // abre o teclado numérico no celular
            style={styles.input}
            maxLength={8} // máximo de 8 caracteres
          />
          <TextInput
            placeholder="Logradouro"
            value={logradouro}
            onChangeText={setLogradouro}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
              style={{
                ...styles.input, // utilização do spread operator ou operador de propagação
                width: "70%",
              }}
            />
            <TextInput
              placeholder="Estado"
              value={estado}
              onChangeText={setEstado}
              style={{
                ...styles.input,
                width: "30%",
              }}
              maxLength={2} // máximo de 2 caracteres
            />
          </View>
        </View>
        <Button onPress={realizaRegistro} mode="outlined">
          Registrar
        </Button>
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Voltar ao login
        </Button>
      </View>
    </View>
  );
}
