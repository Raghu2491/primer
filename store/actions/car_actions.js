import { SAVE_DATA } from "./action_types";

export const saveData = data => ({
        type: SAVE_DATA,
        payload: data
})