import { TriviaController } from "./controllers/TriviaController.js";
import { ValuesController } from "./controllers/ValuesController.js";


export const router = [
  {
    path: '',
    controller: TriviaController,
    view: null
  },
]