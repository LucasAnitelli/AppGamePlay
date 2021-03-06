import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { BackGround } from "../../components/BackGround";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

export function SignIn() {
  const { user, signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert("SignIn", error);
    }
  }
  return (
    <BackGround>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </BackGround>
  );
}

export default SignIn;
