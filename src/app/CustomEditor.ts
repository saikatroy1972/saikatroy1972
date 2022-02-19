import core from "handsontable/core";
import { TextEditor } from "handsontable/editors";

export class CustomEditor extends TextEditor {
    constructor(props: any) {
      super(props);
    }
  
    override createElements() {
      super.createElements();
  
      this.TEXTAREA = document.createElement('input');
      this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
      this.TEXTAREA.setAttribute('data-hot-input', "true");
      this.textareaStyle = this.TEXTAREA.style;
      this.TEXTAREA_PARENT.innerText = '';
      this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    }
}