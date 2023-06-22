import { describe, test, expect } from "vitest";
import { UiState } from "./types";
import {
  initialUiState,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When called with the action to set isLoading", () => {
    test("Then it should return a new state with the isLoading set to true", () => {
      const expectedUiState: UiState = { isLoading: true };

      const setIsLoadingAction = setIsLoadingActionCreator();

      const newUiState = uiReducer(initialUiState, setIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When called with the action to set unsetIsLoading", () => {
    test("Then it should return a new state with the isLoading set to false", () => {
      const expectedUiState: UiState = { isLoading: false };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      const newUiState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
