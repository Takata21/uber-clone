import { View, Text, ScrollView, Image, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomBotton from "@/components/CustomBotton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    // SI QUIERO QUE SEA TRANPARENTE Y L AIMAGEN ESTE DETRAS DEBO QUITAR EL SAFE AREAVIEW O USAR useSafeAreaInsets
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <ScrollView className="">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <LinearGradient
              colors={["rgba(0,0,0,0.5)", "transparent"]}
              className="absolute top-0 left-0 right-0 h-20"
            />
            <Text className="absolute text-2xl text-black capitalize font-JakartaSemiBold bottom-5 left-5">
              create your Account
            </Text>
          </View>
          <View className="p-5">
            <InputField
              label="Name"
              placeholder="Enter your name"
              icon={icons.person}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
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
              title="Sign Up"
              onPress={onSignUpPress}
              className="mt-6"
            />
            <OAuth />

            <Link
              href="/(auth)/sign-in"
              className="mt-10 text-lg text-center text-general-200"
            >
              <Text>Already have a account? </Text>
              <Text className="text-primary-500">Log In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
