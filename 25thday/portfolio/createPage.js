

module.exports.generateTemplate = function() {
  var myTemplate = handlebars.compile(fs.readFileSync('./projects.hbs').toString());
  handlebars.templates = {myTemplate: myTemplate}

  webContent = handlebars.templates.myTemplate(obj);
  return webContent;
}
