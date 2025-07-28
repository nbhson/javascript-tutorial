# DOM Combination

> Có thể kết hợp sử dụng các loại DOM khác nhau trong một ứng dụng web tùy thuộc vào yêu cầu cụ thể của dự án. Các loại DOM như Virtual DOM và Shadow DOM thường được sử dụng để giải quyết các vấn đề khác nhau, và việc kết hợp chúng có thể mang lại lợi ích toàn diện hơn.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Combining Virtual DOM and Shadow DOM</title>
  </head>
  <body>
    <div id="app-container"></div>

    <script>
      // Virtual DOM Example using JavaScript
      const virtualDOMContainer = document.getElementById("app-container");

      const renderVirtualDOM = (count) => {
        const virtualDOMContent = `
      <div>
        <p>Số lần click (Virtual DOM): ${count}</p>
        <button onclick="increaseCount()">Click me</button>
      </div>
    `;
        virtualDOMContainer.innerHTML = virtualDOMContent;
      };

      let virtualDOMCount = 0;

      const increaseCount = () => {
        virtualDOMCount += 1;
        renderVirtualDOM(virtualDOMCount);
      };

      // Shadow DOM Example using JavaScript
      const shadowRootContainer = document.createElement("div");
      shadowRootContainer.id = "shadow-root-container";

      const shadowRoot = shadowRootContainer.attachShadow({ mode: "open" });

      const renderShadowDOM = () => {
        const shadowDOMContent = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>This content is inside Shadow DOM.</p>
    `;
        shadowRoot.innerHTML = shadowDOMContent;
      };

      renderShadowDOM();

      document.body.appendChild(virtualDOMContainer);
      document.body.appendChild(shadowRootContainer);
    </script>
  </body>
</html>
```
