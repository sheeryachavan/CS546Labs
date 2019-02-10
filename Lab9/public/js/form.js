(function () {

  const staticForm = document.getElementById("static-form");

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const pallinstring = document.getElementsByName("phrase")[0];
    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "errorText"
    )[0];

    const resultContainer = document.getElementById("result-container");
    const resultTextElement = document.getElementById("attempts");

    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default

        $(errorContainer).css("visibility", "hidden");
        if (resultContainer.getElementsByTagName("li").length == 0)
          $(resultContainer).css("visibility", "hidden");

        // Values come from inputs as strings, no matter what :(
        let l_strInputString = pallinstring.value;
        console.log(l_strInputString);
        if (l_strInputString == "") {
          throw "It seems that you did not enter the phrase to check"
        }
        let l_objResult;
        let l_boolIsPallindrome;
        l_strInputString = l_strInputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
        var l_strReverseString = l_strInputString.split("").reverse().join("");
        l_objResult = "It is not a pallindrome";
        l_boolIsPallindrome = false;
        if (l_strInputString == l_strReverseString && l_strInputString != "") {
          l_objResult = "It is pallindrome";
          l_boolIsPallindrome = true;
        }
        if (l_boolIsPallindrome)
          $(resultTextElement).append('<li class="is-pallindrome">' + pallinstring.value + '</li>');
        else
          $(resultTextElement).append('<li class="not-pallindrome">' + pallinstring.value + '</li>');
        pallinstring.value = "";
        $(resultContainer).css("visibility", "visible");
      } catch (e) {
        const message = typeof e === "string" ? e : e.message;
        errorTextElement.textContent = e;
        $(errorContainer).css("visibility", "visible");
      }
    });
  }
})();