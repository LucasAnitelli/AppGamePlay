import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { RectButton } from "react-native-gesture-handler";
import { Alert } from "react-native";

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert("Logout", "Deseja sair do GamePlay?"),
      [
        {
          text: "Não",
          stryle: "cancel",
        },
        {
          text: "Sim",
          onPress: () => signOut(),
        },
      ];
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
