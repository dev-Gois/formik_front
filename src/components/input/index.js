import { LitElement, html, unsafeCSS } from 'lit';
import style from "./styles.scss?inline";

class InputComponent extends LitElement {
    static styles = unsafeCSS(style);

    static properties = {
        type: { type: String },
        label: { type: String },
        id: { type: String },
        showPassword: { type: Boolean },
        placeholder: { type: String }
    }

    constructor() {
        super();
        this.type = 'text';
        this.label = '';
        this.id = '';
        this.showPassword = this.type === 'password' ? true : false;
        this.placeholder = '';
    }


    render() {
        return html`
            <div class="input-container">
                <label for="${this.id}">${this.label}</label>
                <div class="input-wrapper">
                    <input placeholder="${this.placeholder}" type="${this.type === 'password' ? (this.showPassword ? 'text' : 'password') : this.type}" id="${this.id}" />
                    ${this.type === 'password' ? html`
                        <span class="toggle-password" @click="${() => this.showPassword = !this.showPassword}">
                            ${this.showPassword ? html`
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off">
                                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                                    <path d="m2 2 20 20"/>
                                </svg>
                            ` : html`
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye">
                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            `}
                        </span>
                    ` : ''}
                </div>
            </div>
        `;
    }
}

customElements.define('input-component', InputComponent);
