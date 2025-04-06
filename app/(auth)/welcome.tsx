import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeindex, setActiveindex] = useState(0);
  return (
    <SafeAreaView className="flex items-center justify-between h-full bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="flex items-end justify-end w-full p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#e2e8f0]" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286ff] rounded-full" />
        }
        onIndexChanged={(index) => setActiveindex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <Text>{item.title}</Text>
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="mx-10 text-3xl font-bold text-center text-black">
                {item.title}
              </Text>
            </View>
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-lg font-JakartaSemiBold text-center mt-3 mx-10 text-[#858585]">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
