import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CustomBotton from "@/components/CustomBotton";
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = () => {};
  return (
    <SafeAreaView className="">
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <ScrollView className="h-full bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <LinearGradient
              colors={["rgba(0,0,0,0.5)", "transparent"]}
              className="absolute top-0 left-0 right-0 h-20"
            />
            <Text className="absolute text-2xl text-black capitalize font-JakartaSemiBold bottom-5 left-5">
              Welcome 👋
            </Text>
          </View>
          <View className="p-5">
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter your Password"
              icon={icons.lock}
              value={form.password}
              secureTextEntry={true}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <CustomBotton
              title="Sign In"
              onPress={onSignInPress}
              className="mt-5"
            />
            <OAuth />

            <Link
              href="/(auth)/sign-up"
              className="mt-8 text-lg text-center text-general-200"
            >
              <Text>Don't have an account? </Text>
              <Text className="text-primary-500">Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // VCT0psfbBYWyENEc
  );
}
