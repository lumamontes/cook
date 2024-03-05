import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import Selected from "@/components/Selected";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { services } from "@/services";

export default function Index() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected(selected.filter((item) => item !== value));
    }

    setSelected([...selected, value]);
  };

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setSelected([]),
      },
    ]);
  }

  function handleSearch() {
    // console.log(selected)
    // console.log("/recipes/"+selected)
    router.navigate("/recipes/"+selected);
  }

  useEffect(() => {
    services.ingredientes.findAll().then(setIngredients);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>
      <ScrollView
        contentContainerStyle={styles.ingredients_container}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id.toString())}
            onPress={() => handleToggleSelected(item.id.toString())}
          />
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
