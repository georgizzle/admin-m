Dropzone.autoDiscover = false;
$(document).ready(function(){
  $("div#dropzoneThumbnail").dropzone({ url: "http://localhost:8080" });
  $("div#dropzoneWork").dropzone({ url: "http://localhost:8080" });
  Dropzone.options.dropzoneThumbnail= {
      autoProcessQueue: false,
      uploadMultiple: true,
      parallelUploads: 5,
      maxFiles: 5,
      maxFilesize: 1, 
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
      init: function() {
          dzClosure = this; // Makes sure that 'this' is understood inside the functions below.

          // for Dropzone to process the queue (instead of default form behavior):
          document.getElementById("submit-all").addEventListener("click", function(e) {
              // Make sure that the form isn't actually being sent.
              e.preventDefault();
              e.stopPropagation();
              dzClosure.processQueue();
          });

          //send all the form data along with the files:
          this.on("sendingmultiple", function(data, xhr, formData) {
              formData.append("firstname", jQuery("#firstname").val());
              formData.append("lastname", jQuery("#lastname").val());
          });
      }
  }

  Dropzone.options.dropzoneWork= {
      autoProcessQueue: false,
      uploadMultiple: true,
      parallelUploads: 5,
      maxFiles: 5,
      maxFilesize: 1, 
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
      init: function() {
          dzClosure = this; // Makes sure that 'this' is understood inside the functions below.

          // for Dropzone to process the queue (instead of default form behavior):
          document.getElementById("submit-all").addEventListener("click", function(e) {
              // Make sure that the form isn't actually being sent.
              e.preventDefault();
              e.stopPropagation();
              dzClosure.processQueue();
          });

          //send all the form data along with the files:
          this.on("sendingmultiple", function(data, xhr, formData) {
              formData.append("firstname", jQuery("#firstname").val());
              formData.append("lastname", jQuery("#lastname").val());
          });
      }
  }

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