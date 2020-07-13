
window.$ = $;
var todoListConteiner = $(".todo_list_conteiner");
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
render();
function render() {
  const htmlData = data.map(function(item, index) {
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
  const input = $(".block__form-input");
  const text = input.val();
  const color = $(".colors input[type='radio']:checked").val();
  if (text.length > 0) {
    data.push({
      text: text,
      checked: false,
      color: color
    });

    input.val("");

    render();
  }
}

function check() {
  const checked = $(this).prop("checked");
  const id = $(this).data("id");
  const item = data[id];
  data[id] = {
    color: item.color,
    text: item.text,
    checked: checked
  };

  render();
}

$(".block__form-btn").on("click", add);
$("ul").on("change", "input[type='checkbox']", check);
