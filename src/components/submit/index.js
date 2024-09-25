import { LitElement, html, unsafeCSS } from 'lit'
import style from "./styles.scss?inline";

class SubmitComponent extends LitElement {
    static styles = unsafeCSS(style);

    static properties = {
        label: { type: String },
    }

    constructor() {
        super();
        this.label = '';
    }

    render() {
        return html`
            <button class="submit-button">${this.label}</button>
        `;
    }
}

customElements.define('submit-component', SubmitComponent);