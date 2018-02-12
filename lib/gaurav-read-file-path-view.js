'use babel';

export default class GauravReadFilePathView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('gaurav-read-file-path');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The GauravReadFilePath package is Alive! It allows to read the path for files!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
  setContext(path) {
    console.log("\n\n\n");
    console.log(path);
    console.log("\n\n\n");
    const displayText = `The file is stored in ${path}.`;
    this.element.children[0].textContent = displayText;
  }

}
