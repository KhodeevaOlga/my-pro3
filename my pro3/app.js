window.$ = $;
var todoListConteiner = $(".todo_list_conteiner");
let currentColor = '';
const arr = ["red", "aqua", "blue", "green", "yellow"];

var data = [
    {
        text: "ToDo Item 1",
        checked: false,
        color: "red"
    },
    {
        text: "ToDo Item 2",
        checked: true,
        color: "green"
    },
    {
        text: "ToDo Item 3",
        checked: false,
        color: "aqua"
    }
];
function getRandomColor() {
    let numRand = Math.round(Math.random() * (arr.length - 1));
    return arr[numRand];
}
render();

function render() {
    const htmlData = data.map(function (item, index) {
        return `
    <li class="${item.color}">
      <div class="todo__checkbox">
        <input
          data-id="${index}"
          type="checkbox" 
          class="checkbox" ${item.checked ? "checked" : ""}
        >
      </div>
      <div class="todo__text ${
            item.checked ? "todo__text_strike" : ""
        }">${item.text}</div>
    </li>
    `;

    });
    todoListConteiner.html(htmlData);
}


function add() {
    // if (currentColor === '') {currentColor = getRandomColor()}
    const input = $(".block__form-input");
    const textTest = input.val();
    let text = $("<div>").text(textTest).html();
    currentColor = $(".colors input[type='radio']:checked").val();
    console.log(currentColor)
    if (currentColor === undefined || '' || null) {currentColor = getRandomColor()}
    if (text.length > 0) {
        data.push({
            text: text,
            checked: false,
            color: currentColor
        });
        input.val("");
        render();
    }
}

function check() {
    const checked = $(this).prop("checked");

    const id = $(this).data("id");
    const item = data[id];
    // console.log(checkedItems);
    // checkedItems
    //console.log(currentColor);

    //console.log('%%%%%%%%5  ',  data[id].checked);

    if (!data[id].checked) {
        data[id] = {
            color: $(".colors input[type='radio']:checked").val(),
            text: item.text,
            checked: checked
        };
    } else {
        data[id] = {
            color: data[id].color,
            text: item.text,
            checked: checked
        };
    }

    //console.log($(".colors input[type='radio']:checked").val());
    //console.log('#####   ' , checked);
    //$("#myCheckbox").prop("checked");
    render();

}

$(document).keyup(function (e) {
    if (e.keyCode === 13) {
        add();
    }
})
$(".block__form-btn").on("click", add);
$("ul").on("change", "input[type='checkbox']", check);