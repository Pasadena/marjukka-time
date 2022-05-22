import { toast } from "@zerodevx/svelte-toast";

export const success = (message: string) =>
  toast.push(message, {
    theme: {
      "--toastBackground": "green",
      "--toastColor": "white",
      "--toastBarBackground": "olive",
    },
  });

export const failure = (message: string) =>
  toast.push(message, {
    theme: {
      "--toastBackground": "red",
      "--toastColor": "white",
      "--toastBarBackground": "olive",
    },
  });
