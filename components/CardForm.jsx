import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import CloseSvg from "../assets/svg/CloseSvg";

const CardForm = ({ handleModel, cardData = {}, onSave }) => {
  const [form, setForm] = useState({
    name: cardData?.name || "",
    number: cardData?.number || "",
    cvv: cardData?.cvv || "",
    expiryDate: cardData?.expiryDate || "",
    id: cardData?.id || null,
  });

  const handleChange = (name, value) => setForm({ ...form, [name]: value });

  const handleSubmit = () => {
    if (!form.name || !form.number || !form.cvv || !form.expiryDate) {
      alert("All fields are required");
      return;
    }
    console.log(form);

    onSave(form);
  };

  return (
    <View>
      <View className="mb-4 flex-row justify-between">
        <Text className="text-black font-Sora-Medium text-lg grow-0 shrink">
          Add New Card
        </Text>
        <Pressable
          className="size-11 flex-row justify-center items-center"
          onPress={handleModel}
        >
          <CloseSvg />
        </Pressable>
      </View>
      <View className="mb-4">
        <Text className="text-base font-Sora-Regular mb-2">Name:</Text>
        <TextInput
          className="font-Sora-Medium text-base border border-primary rounded-lg px-2 placeholder:text-gray-400"
          placeholder="Name"
          value={form?.name}
          onChangeText={(e) => handleChange("name", e)}
        />
      </View>
      <View className="mb-4">
        <Text className="text-base font-Sora-Regular mb-2">Number:</Text>
        <TextInput
          className="font-Sora-Medium text-base border border-primary rounded-lg px-2 placeholder:text-gray-400"
          placeholder="4523 6523 4512 7896"
          value={form?.number}
          onChangeText={(e) => handleChange("number", e)}
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="text-base font-Sora-Regular mb-2">CVV:</Text>
        <TextInput
          className="font-Sora-Medium text-base border border-primary rounded-lg px-2 placeholder:text-gray-400"
          placeholder="123"
          value={form?.cvv}
          onChangeText={(e) => handleChange("cvv", e)}
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="text-base font-Sora-Regular mb-2">Expiry date:</Text>
        <TextInput
          className="font-Sora-Medium text-base border border-primary rounded-lg px-2 placeholder:text-gray-400"
          placeholder="12/25"
          value={form?.expiryDate}
          onChangeText={(e) => handleChange("expiryDate", e)}
        />
      </View>
      <Button
        title={form.id ? "Update card" : "add new card"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default CardForm;
