# mv-footer

 MvFooter is a Meveo component (based on lit-element) that renders a footer component that can be used with [mv-main](https://github.com/meveo-org/mv-main).

## Features
* Configurable item positions: `left`, `right`, `center`, default: `center`
* Can render custom footers

## Quick Start

To experiment with the MvFooter component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself) 

3. Update the footer demo component in demo.js file

## Sample usage
```html
<mv-footer>
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
```

You can also check this [demo](https://footer.meveo.org/)

Pull test 1.