// src/utils/modalBus.ts
type OpenCallback = () => void;
type CloseCallback = () => void;

class ModalBus {
  private openCallbacks: OpenCallback[] = [];
  private closeCallbacks: CloseCallback[] = [];

  subscribe(onOpen: OpenCallback, onClose: CloseCallback) {
    this.openCallbacks.push(onOpen);
    this.closeCallbacks.push(onClose);

    return () => {
      this.openCallbacks = this.openCallbacks.filter(cb => cb !== onOpen);
      this.closeCallbacks = this.closeCallbacks.filter(cb => cb !== onClose);
    };
  }

  openModal() {
    console.log("📣 modalBus.openModal called");
    this.openCallbacks.forEach(cb => cb());
  }

  closeModal() {
    this.closeCallbacks.forEach(cb => cb());
  }
}

export const modalBus = new ModalBus();