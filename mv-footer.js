import { LitElement, html, css } from "lit-element";

export class MvFooter extends LitElement {
  static get properties() {
    return {
      item: { type: Boolean, attribute: true },
      // "custom" is only applicable in root node, e.g. <mv-header custom>{...mv-header items}</mv-header>
      custom: { type: Boolean, attribute: true },
      // valid positions are: "left", "center", "right", default: "center"
      position: { type: String, attribute: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --height: var(--mv-footer-height, 40px);
        --shadow: var(--mv-footer-shadow, 0 5px 10px 0 rgba(7,17,26,0.2));
        --margin-top: var(--mv-footer-margin-top, 1px);
        --margin-left: var(--mv-footer-margin-left, 0);
        --margin-right: var(--mv-footer-margin-right, 0);
        --total-margins: calc(var(--margin-left) + var(--margin-right));
        --item-padding: var(--mv-footer-item-padding, 10px);
        --light-background: var(--mv-footer-light-background, #F3F3F3);
        --item-light-color: var(--mv-footer-item-light-color, #B0B3B6);
        --dark-background: var(--mv-footer-dark-background, #373E48);
        --item-dark-color: var(--mv-footer-item-light-color, #B0B3B6);
      }

      footer {        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;        
        margin-top: var(--margin-top);
        margin-left: var(--margin-left);
        margin-right: var(--margin-right);
        padding-left: var(--item-padding);
        padding-right: var(--item-padding);
        width: calc(100% - var(--total-margins));
        min-height: var(--height);
        max-height: var(--height);
        background: var(--background);
        box-shadow: var(--shadow);
        transition: margin-left 0.3s;
        transition: margin-right 0.3s;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      section.left {
        justify-content: flex-start;
      }

      section.center {
        justify-content: center;
      }

      section.right {        
        justify-content: flex-end;
      }

      section ::slotted(*) {
        margin: auto var(--item-padding, 10px);
      }

      .mv-footer-item,
      .mv-footer-item ::slotted(*) {
        margin: 0;
        text-decoration: none;
        color: var(--item-color);
      }
      
      .mv-footer-item:hover ::slotted(a) {
        text-decoration: underline;
      }
      
      .light {
        --background: var(--light-background);
        --item-color: var(--item-light-color);
      }
      
      .dark {
        --background: var(--dark-background);
        --item-color: var(--item-dark-color);
      }
    `;
  }

  constructor() {
    super();
    this.item = false;
    this.custom = false;
    this.position = "center";
    this.theme = "light";
  }

  render() {
    if (this.item) {
      this.setAttribute("slot", this.position);
      return html`
        <div class="mv-footer-item">
          <slot></slot>
        </div>
      `;
    } else {
      return html`
      <footer class="${this.theme}">
      ${this.custom
        ? html`<slot></slot>`
        : html`
            <section class="left">
              <slot name="left"></slot>
            </section>
            <section class="center">
              <slot name="center"></slot>
            </section>
            <section class="right">
              <slot name="right"></slot>
            </section>
          `}
      </footer>
      `;
    }
  }
}

customElements.define("mv-footer", MvFooter);
