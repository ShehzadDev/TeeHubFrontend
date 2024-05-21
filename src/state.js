// state.js
import { proxy, useSnapshot } from "valtio";

export const state = proxy({
  backgroundColor: "#D9D9D9", // Default background color
  textColor: "#ff00ff", // Default text color
  uploadedImageUrl: null, // URL of the uploaded image
  textDefault: "", // Default text
  size: "", // Default size
  quantity: 1, // Default quantity
});

export function setBackgroundColor(color) {
  state.backgroundColor = color;
}

export function setTextColor(color) {
  state.textColor = color;
}

export function setUploadedImageUrl(url) {
  state.uploadedImageUrl = url;
}

export function setSize(size) {
  state.size = size;
}

export function setQuantity(quantity) {
  state.quantity = quantity;
}

export function useProxy() {
  return useSnapshot(state);
}

export function setTextState(text) {
  state.textDefault = text;
}
