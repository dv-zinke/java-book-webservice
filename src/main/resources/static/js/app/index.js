var index = {
  init : function() {
      var _this = this;
      $("#btn-save").on("click", function(){
         _this.save()
      });
  },

  save: function() {
     var data = {
         title: $("#title").val(),
         author: $("#author").val(),
         content: $("#content").val()
     };

     $.ajax({
         type:'POST',
         url:'/api/v1/posts',
         dataType:'json',
         contentType:'application/json; charset=utf-8',
         data:JSON.stringify(data)
     }).done(function(){
         alert("글을 등록되었습니다.");
         window.location.href ="/";
     }).fail(function(err){
        alert(JSON.stringify(err))
     });
  }
};

index.init();