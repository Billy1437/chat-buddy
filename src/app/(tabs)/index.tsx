import * as Sentry from "@sentry/react-native";
import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsScreen = () => {
  return (
    <SafeAreaView>
      <Text>ChatsScreen</Text>
      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error("First error"));
        }}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;
