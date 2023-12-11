import { makeAutoObservable } from "mobx";
import { createStateContext } from "../../state/createStateContext";

export class PopupViewState {
  constructor() {
    makeAutoObservable(this);
  }

  /** @type {import("./types").Routes} */
  page = "hello";
  /** @param {import("./types").Routes} route */
  setPage(route) {
    this.page = route;
  }
}

export const [PopupViewStateProvider, usePopupViewState] =
  createStateContext(PopupViewState);
