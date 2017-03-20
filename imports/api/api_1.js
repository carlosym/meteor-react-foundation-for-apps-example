Meteor.methods({
  'my_method_in_server_side'(text) {
    console.log(text);
    var text1 = text + " (From server)";
    return text1;
  }
});