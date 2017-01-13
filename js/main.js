document.getElementsById("inputEmail")[0].placeholder="Correo electronico";
document.getElementsById("inputPassword")[0].placeholder="Contraseña";

function replaceText(selector, text, newText, flags) {
  var matcher = new RegExp(text, flags);
  $(selector).each(function () {
    var $this = $(this);
    if (!$this.children().length)
       $this.text($this.text().replace(matcher, newText));
  });
}

function replaceText(){
    
    
    document.getElementsById("inputEmail")[0].placeholder="Correo electronico";
    document.getElementsById("inputPassword")[0].placeholder="Contraseña";
}