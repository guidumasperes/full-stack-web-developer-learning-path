/* Install to follow along
    - VS Code
        Extensions:
            - LiveServer
            - ES Lint
            - Prettier
    - Node.js
*/

// You can add js to html using the <script> tag directly in the html document or via external file
var p = document.createElement("p");
p.innerHTML = "This is a paragraph (external)";
document.body.appendChild(p);

/* Default behavior when js is encountered: html STOPS rendering then js is executed and after that html continues rendering. 
   This behavior is often referred to as "content blocking".
   The "async" keyword makes the js to download in parallel while HTML renders in the browser, after the download, rendering
   is paused and js is executed.
   The "defer" keyword makes the js to download in parallel while HTML renders in the browser, after the download, rendering
   continues and after it finishes js is executed.
*/