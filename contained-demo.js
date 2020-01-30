import { LitElement, html, css } from "lit-element";
import "mv-button";
import "mv-font-awesome";
import "./mv-footer.js";

export class ContainedFooterDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-footer-item-padding: 5px;
        --mv-footer-height: 50px;
        --mv-footer-margin-top: 1px;
        --total-footer-height: calc(var(--mv-footer-margin-top, 0) + var(--mv-footer-height, 0));
        --content-height: calc(100% - var(--total-footer-height));
      }

      h3 a {
        color: #B0B3B6;
        text-decoration: none;
      }

      h3 a:hover {
        color: #444444;
        text-decoration: underline;
      }

      .container {
        border: 1px solid black;
        margin: 50px auto;
        width: 960px;
        height: 500px;
      }

      .content {
        margin: 0;        
        padding: 0 200px;
        overflow-y: auto;
        height: var(--content-height);
      }

      .content p {
        margin: 0 0 20px 0;
      }

      .styled {
        font-weight: bold;
        color: blue;
      }

      mv-button {
        --mv-button-padding: 11px 15px;
      }
      
      mv-fa {
        font-size: 16px;
      }

      mv-fa[icon="copyright"] {
        font-size: 10px;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    return html`    
      <div class="container">
        <div class="content">      
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. Phasellus vestibulum lorem sed risus. In nisl nisi scelerisque eu ultrices vitae. Dolor magna eget est lorem ipsum dolor sit amet. Ligula ullamcorper malesuada proin libero. Lorem ipsum dolor sit amet consectetur. Enim nec dui nunc mattis. Tellus at urna condimentum mattis pellentesque. Pretium lectus quam id leo in vitae turpis. Consectetur adipiscing elit duis tristique sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Proin libero nunc consequat interdum varius sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Et egestas quis ipsum suspendisse ultrices. Posuere lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. In aliquam sem fringilla ut morbi. Montes nascetur ridiculus mus mauris vitae ultricies leo.</p>
          <p>Sed odio morbi quis commodo odio aenean sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae auctor eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis egestas. Vel orci porta non pulvinar neque. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris. Duis convallis convallis tellus id interdum velit laoreet. Consequat ac felis donec et odio pellentesque diam.</p>
          <p>Pellentesque nec nam aliquam sem et tortor consequat id porta. Tellus mauris a diam maecenas sed. Tristique risus nec feugiat in fermentum posuere urna. Amet est placerat in egestas erat imperdiet sed. Netus et malesuada fames ac turpis egestas integer eget. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu bibendum at varius vel pharetra vel turpis nunc. Pharetra massa massa ultricies mi quis hendrerit dolor. Egestas dui id ornare arcu odio ut sem nulla. Consectetur adipiscing elit pellentesque habitant morbi. Gravida in fermentum et sollicitudin ac. In nibh mauris cursus mattis molestie a iaculis at erat.</p>
          <p>Vitae auctor eu augue ut lectus. Amet nisl suscipit adipiscing bibendum est. Fermentum odio eu feugiat pretium. Massa placerat duis ultricies lacus sed turpis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Non curabitur gravida arcu ac tortor. Aliquet nec ullamcorper sit amet risus nullam. Elit scelerisque mauris pellentesque pulvinar. In iaculis nunc sed augue lacus viverra vitae congue eu. Risus sed vulputate odio ut enim. Pretium quam vulputate dignissim suspendisse. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ullamcorper morbi tincidunt ornare massa eget. Placerat in egestas erat imperdiet sed euismod nisi porta. Convallis posuere morbi leo urna molestie at elementum eu. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nec dui nunc mattis enim ut tellus elementum sagittis. Libero id faucibus nisl tincidunt eget nullam non nisi. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.</p>
          <p>Condimentum vitae sapien pellentesque habitant morbi tristique. Pharetra vel turpis nunc eget lorem. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Amet mattis vulputate enim nulla aliquet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Bibendum neque egestas congue quisque egestas diam in arcu. Sed libero enim sed faucibus turpis in eu mi bibendum. Senectus et netus et malesuada fames ac. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Faucibus pulvinar elementum integer enim neque volutpat ac. Venenatis urna cursus eget nunc scelerisque viverra. Tristique senectus et netus et malesuada fames. Nunc congue nisi vitae suscipit tellus mauris a diam. Et malesuada fames ac turpis.</p>
        </div>
        <mv-footer .theme="${this.theme}">
          <mv-footer item position="left">
            <div class="styled">Styled text</div>
          </mv-footer>
          <mv-footer item>
            <h3><a href="#">MvFooter<mv-fa icon="copyright" regular></mv-fa></a></h3>
          </mv-footer>
          <mv-footer item>
            <small>(full width)</small>
          </mv-footer>
          <mv-footer item position="right">
            row: 90, col: 20
          </mv-footer>
          <mv-footer item position="right">
            <mv-button button-style="info"><mv-fa icon="comment-dots"></mv-fa></mv-button>
          </mv-footer>
        </mv-footer>
      </div>
    `;
  }
}

customElements.define("contained-footer-demo", ContainedFooterDemo);
