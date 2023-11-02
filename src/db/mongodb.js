import mongoose from "mongoose";

export const init = async () => {
  try {
    const URI =
      "mongodb+srv://MoSiciliano:Lgb0AnicQlkz60ud@cluster0.gbqbbvt.mongodb.net/school";
    await mongoose.connect(URI);
    console.log("Data base is connected 🥳");
  } catch (error) {
    console.log("Something is wrong:", error.message);
  }
};
