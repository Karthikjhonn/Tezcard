import React, { useState } from "react";
import { View, FlatList, Text, Pressable, Modal, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addCard, updateCard, removeCard } from "../../slices/cardSlice";
import Debitcard from "../../components/DebitCard";
import BottomSheet from "../../components/BottomSheet";
import BellSvg from "../../assets/svg/BellSvg";

import CardForm from "../../components/CardForm";
import UserSvg from "../../assets/svg/UserSvg";
const index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  const handleModel = (card = null) => {
    setSelectedCard(card);
    setModalVisible(!modalVisible);
  };

  const handleDelete = (id) => {
    console.log("delete id", id);

    Alert.alert("Delete Card", "Are you sure you want to delete this card?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => dispatch(removeCard(id)),
      },
    ]);
  };

  return (
    <View className="flex-1 ">
      <FlatList
        ListHeaderComponent={headerContent}
        data={cards}
        renderItem={(data) => (
          <Debitcard
            handleModel={handleModel}
            data={data}
            handleDelete={handleDelete}
          />
        )}
        keyExtractor={(data) => data.id}
        numColumns={1}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={() => <View className="h-4"></View>}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        onPress={handleModel}
        activeOpacity={0.7}
        className="bg-accent rounded-full w-16 h-16 absolute bottom-10 right-5 flex items-center justify-center"
      >
        <Text className="text-white text-2xl">+</Text>
      </Pressable>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModel}
      >
        <View className="bg-black/25 flex-1 justify-end">
          <Pressable onPress={() => {}} className="bg-white p-5 rounded-t-xl">
            <CardForm
              handleModel={handleModel}
              cardData={selectedCard}
              onSave={(cardData) => {
                if (cardData?.id) {
                  dispatch(
                    updateCard({
                      id: cardData.id,
                      name: cardData.name,
                      number: cardData.number,
                      cvv: cardData.cvv,
                      expiryDate: cardData.expiryDate,
                    })
                  );
                  console.log("update");
                } else {
                  console.log("new card");
                  dispatch(addCard({ ...cardData, id: Date.now().toString() }));
                }
                handleModel();
              }}
            />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const headerContent = () => {
  return (
    <View className="mb-10">
      <View className="mb-10 flex-row justify-between items-center">
        <View className="flex-row gap-x-2.5 py-2 items-center">
          <View className="size-12 rounded-full bg-gray-200 flex justify-center items-center">
            <UserSvg />
          </View>
          <View>
            <Text className="text-xl font-Sora-Medium leading-6 capitalize text-black">
              Karthick
            </Text>
            <Text className="text-xs font-Sora-Regular text-black/50">
              Admin
            </Text>
          </View>
        </View>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          className="size-11 flex justify-center items-center overflow-hidden rounded-full"
        >
          <BellSvg />
        </Pressable>
      </View>
      <View>
        <Text className="text-2xl font-Sora-SemiBold text-black">
          View and manage your cards{" "}
          <Text className="text-accent">securely and easily..!</Text>
        </Text>
      </View>
    </View>
  );
};

export default index;
