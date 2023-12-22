## How to run

linux or macos

1. Answer 1

    ```
    Which of the following are NOT JavaScript reserved words? 
    
    auto
    ```

1. Answer 2

    run with node

    ```
    node Question\ -\ 2\ JavaScript:\ Async\ Data\ Simulation.js
    ```

    Sample

    ```
    test-javascript % node Question\ -\ 2\ JavaScript:\ Async\ Data\ Simulation.js

    Masukan Jumlah Total ID (Hanya Angka): 2

    Masukan ID (spasi sebagai pembatas *sample "k1 k4 k2"): k1 k2

    2 3
    4 5
    ```

1. Answer 3

    ```
    $(document).ready(function () {
        $("button").click(function () {
          $("#div1").fadeOut(2000, function () {
            document.getElementById("p1").innerHTML =
              "Div 1 took 2 seconds to hide";
          });
          $("#div2").fadeOut(3000, function () {
            document.getElementById("p2").innerHTML =
              "Div 2 took 3 seconds to hide";
          });
          $("#div3").fadeOut(4000, function () {
            document.getElementById("p3").innerHTML =
              "Div 3 took 4 seconds to hide";
          });
          $(this).hide();
        });
      });
    ```

1. Answer 4

    ```
    NotFoundPage

    <Route path="*" element={<NotFoundPage />} />
    ```