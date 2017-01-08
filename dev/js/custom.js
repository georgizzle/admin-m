
$(document).ready(function(){
  var work_counter = 0;
  $('#add_work_btn').click(function(e) {
      e.preventDefault();
      work_counter ++;
      var fieldset = $('#project_fieldset');
      fieldset.append('\
        <div class="form-group col-md-12 work-container" id="work' + work_counter +'_container"> \
            <label>Work ' + work_counter +'</label> \
            <input class="form-control add-image" name="work' + work_counter + '" type="file"><br> \
			<div class="img-container col-md-3"> \
			<img class="img-thumbnail" src="" alt="Image preview..."> \
			</div> \
            <div class= "col-md-9"> \
            <div class="row"> \
                <div class= "col-md-8"> \
                <label>Title</label> \
                <input class ="form-control" name="work' + work_counter + '_title" type="text"> \
                </div> \
            </div> \
            <div class="row"> \
                <div class= "col-md-8"> \
                <label>Description</label> \
                <input class ="form-control" name="work' + work_counter + '_desc" type="text"> \
                </div> \
            </div> \
            <div class="row"> \
                <div class= "col-md-8"> \
                <label>Type</label> \
                <input class ="form-control" name="work' + work_counter + '_type" type="text"> \
                </div> \
            </div> \
            <div class="row"> \
                <div class= "col-md-2"> \
                <label>Order</label> \
                <select class ="form-control order-select" name="work' + work_counter + '_order"> \
                </select> \
                </div> \
            </div> \
			</div> \
        <div> \
        <div class="form-group col-md-4" id="work' + work_counter +'_delete"> \
        <button class="btn btn-danger btn-md">Remove this work from project</button> \
        <div> \
      ');

      $('.order-select').each(function(){
          if ($(this).children('option').length == 0) {
            for (var index = 1; index <= work_counter; index++) {
                $(this).append($('<option>', {
                        value: index,
                        text: index
                    }))
            }
          } else {
                $(this).append($('<option>', {
                        value: work_counter,
                        text: work_counter
                    }))
          }
      })



  })  

  $('#project_fieldset').on('change', '.add-image', function() {
      console.log("yo");
    var preview = $(this).siblings('div:first').children('img:first');
    var file    = $(this).prop('files')[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
        preview.attr('src',reader.result);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
  });

  $(".submenu > a").click(function(e) {
    e.preventDefault();
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });
  
});