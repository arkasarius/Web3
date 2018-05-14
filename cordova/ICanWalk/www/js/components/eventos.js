const EventosTemplate = {
props: [],
methods:
{
  test: function(){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("id", "id1");
    li.appendChild(document.createTextNode("hola"));
    ul.appendChild(li);
  },
  asd: function() {
      var ul = document.getElementById("list");
      ul.innerHTML="pene";
  }
},
data: () => ({
eventosLista: [
'Orange',
'Apple',
'Pineapple'
]
}),
template:
`
<md-list>
  <md-list-item @click="asd()">Button</md-list-item>

</md-list>

`
};
