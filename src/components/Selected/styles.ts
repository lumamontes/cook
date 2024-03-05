import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    padding: 24,
    borderRadius: theme.borderRadius.lg,
    position: "absolute",
    width: "100%",
    bottom: 24,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 34
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular
  },
});
