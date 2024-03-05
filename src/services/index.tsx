import * as ingredientes from "./ingredientsService"
import * as recipes from "./recipesService"
import * as preparations from "./preparationsService"

export const services = {
  ingredientes,
  recipes,
  preparations,
  storage: {
    imagePath: process.env.EXPO_PUBLIC_IMAGE_PATH || "https://nzdhnugoeczmsnzghkoj.supabase.co/storage/v1/object/public/ingredients",
  },
}
