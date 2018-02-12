'use babel';

import GauravReadFilePathView from './gaurav-read-file-path-view';
import { CompositeDisposable } from 'atom';

export default {

  gauravReadFilePathView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.gauravReadFilePathView = new GauravReadFilePathView(state.gauravReadFilePathViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.gauravReadFilePathView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gaurav-read-file-path:readPath': () => this.readPath()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.gauravReadFilePathView.destroy();
  },

  serialize() {
    return {
      gauravReadFilePathViewState: this.gauravReadFilePathView.serialize()
    };
  },

  readPath() {
    // console.log('GauravReadFilePath was toggled!');
    // return (
    //   this.modalPanel.isVisible() ?
    //   this.modalPanel.hide() :
    //   this.modalPanel.show()
    // );
    if (this.modalPanel.isVisible()) {
      this.modalPanel.hide();
    }
    else {
      const editor = atom.workspace.getActiveTextEditor();
      const path = editor.getPath();
      this.gauravReadFilePathView.setContext(path);
      // console.log(words);
      this.modalPanel.show();
    }
  }

};
