$(function () {
  var saveButtons = $(".btn");

  saveButtons.on("click", function () {
    localStorage.setItem(
      this.parentElement.id,
      this.previousElementSibling.value
    );
  });

  var timeBlocks = $(".time-block");

  timeBlocks.each(function () {
    const element = $(this);

    var savedData = localStorage.getItem(element.attr("id"));

    element.children("textarea").val(savedData);
  });

  var todayDate = dayjs().format("dddd, MMMM D, YYYY");

  // Get element currentDay and replace with current Date
  $("#currentDay").text(todayDate);
console.log(todayDate);

  var currentHour = parseInt(dayjs().format("HH"));

  timeBlocks.each(function () {
    // grab id of element, created substring, turned into integer
    const currentBlock = $(this);
    var idAsInteger = parseInt(currentBlock.attr("id").substring(5));

    //  function will check if current hour === currentHour
    if (idAsInteger === currentHour) {
      currentBlock.addClass("present");
    } else if (idAsInteger < currentHour) {
      currentBlock.addClass("past");
    } else if (idAsInteger > currentHour) {
      currentBlock.addClass("future");
    }
  });
});
