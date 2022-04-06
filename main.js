var Name=
[
    "Grandmother",
    "Father",
    "Mother",
    "Brother",
    "Myself",
    "Grandfather"
];
var Pic=
[
    "Nanamma.jpg",
    "Daddy.jpg",
    "Mother.jpg",
    "chetan.jpg",
    "Hamsi.jpg",
    "Thatha.jpg"
];
i=0;
function next()
{
  if(i>=6)
  (i=0);
  document.getElementById("Name").innerHTML=Name[i];
  document.getElementById("Pic").src=Pic[i];
  i++;
}