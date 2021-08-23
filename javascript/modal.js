this.MoModal = (function() {
  var handleAjaxSuccess, loading, modal_holder_selector, modal_is_loading, modal_selector, showError, triggerUpdateEvent;

  class MoModal {
    static init() {
      $(document).on('click', 'a[data-modal=true]', function() {
        return MoModal.load(this);
      });
      $(document).on('click', '[data-modal-transition]', function() {
        return MoModal.replace(this);
      });
      $(document).on('ajax:beforeSend', modal_holder_selector + ' form[data-inline!="true"]', function(event, xhr, settings) {
        return settings.data += "&modal=true";
      });
      $(document).on('ajax:success', modal_holder_selector + ' form[data-inline!="true"]', handleAjaxSuccess);
      return $(document).on('ajax:error', modal_holder_selector + ' form[data-inline!="true"]', function(event, jqXHR, textStatus, errorThrown) {
        return showError(jqXHR, textStatus, errorThrown);
      });
    }

    static close() {
      return $('#modal-holder').find('.modal').modal('hide');
    }

    static load(anker) {
      var $button, location;
      if (jQuery.type(anker) === "string") {
        location = anker;
      } else {
        $button = $(anker);
        //$button.addClass('loading')
        location = $(anker).attr('href');
      }
      if (modal_is_loading) {
        // do nothing if modal is loading
        return false;
      }
      // close in case it was open
      MoModal.close();
      //Load modal dialog from server
      InfoDialog.showLoading();
      modal_is_loading = true;
      $.get(location, {
        modal: true
      }).error(showError).done(function(data, status, xhr) {
        var url;
        // console.log 'done'
        //$button.removeClass('loading')
        InfoDialog.hideLoading();
        url = xhr.getResponseHeader('Location');
        // got a redirect response
        if (url) {
          // close modal window
          $('#modal-holder').find('.modal').modal('hide');
          return window.location = url;
        } else {
          if ($('.modal-backdrop').length === 0) { // prevent multiple overlays on double click
            // open modal with content from ajax response
            $(modal_holder_selector).html(data).find(modal_selector).modal();
            // for the case the response contains a form intialize it
            return triggerUpdateEvent();
          }
        }
      }).complete(function() {
        return modal_is_loading = false;
      });
      return false;
    }

    static replace(anker) {
      var ankerUrl, lastUrl;
      $(modal_holder_selector).find(modal_selector).find('.modal-body').html('<div class="loading-spinner"></div><div class="loading-text">Loading...</div>');
      lastUrl = window.location.href;
      ankerUrl = $(anker).attr('href');
      $.ajax({
        dataType: 'html',
        url: ankerUrl,
        data: {
          modal: true,
          modal_transition: true
        },
        error: showError,
        success: function(data, textStatus, jqXHR) {
          var $back, $data, $footer;
          $data = $(data);
          $footer = $data.find('.modal-footer');
          if ($footer.length > 0) {
            // add back button to footer
            $back = $('<a href="javascript:void(0)" class="btn btn-primary">Back</a>');
            $back.click(function() {
              return window.location.href = lastUrl;
            });
            $footer.prepend($back);
          }
          $('.modal-backdrop').remove();
          $(modal_holder_selector).find(modal_selector).replaceWith($data);
          $(modal_holder_selector).find(modal_selector).modal();
          
          // $(modal_holder_selector).find(modal_selector).modal('hide')
          // $(modal_holder_selector).html($data).find(modal_selector).modal()
          return triggerUpdateEvent();
        }
      });
      return false;
    }

  };

  modal_holder_selector = '#modal-holder';

  modal_selector = '.modal';

  modal_is_loading = false;

  loading = `<div class="modal loading-dialog" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-body"><div class="loading-spinner"></div><div class="loading-text">Loading...</div></div>
    </div>
  </div>
</div>`;

  showError = function(jqXHR, textStatus, errorThrown) {
    var details, e, errorMessage;
    // console.log("jqXHR",jqXHR)
    // console.log("textStatus",textStatus)
    // console.log("errorThrown",errorThrown)
    // console.log 'Loading error'
    InfoDialog.hideLoading();
    // restore url -> remove ?overflow=...
    window.restoreOriginStateUrl();
    try {
      // show error dialog
      errorMessage = jqXHR.statusText + ' (' + jqXHR.status + ')';
      details = jqXHR.responseText;
    } catch (error) {
      e = error;
      errorMessage = errorThrown;
      details = null;
    }
    return InfoDialog.showError(errorMessage, details);
  };

  triggerUpdateEvent = function() {
    var $modalHolder, target;
    $modalHolder = $(modal_holder_selector);
    target = {
      id: $modalHolder.prop('id'),
      class: $modalHolder.prop('class')
    };
    // $(document).trigger('modal:contentUpdated',{id: $modalHolder.prop('id'), class: $modalHolder.prop('class')})
    return $(document).trigger({
      type: 'modal:contentUpdated',
      target: target
    });
  };

  handleAjaxSuccess = function(event, data, status, xhr) {
    var $newContent, $oldModal, i, len, ref, response_type, selector, url;
    url = xhr.getResponseHeader('Location');
    response_type = xhr.getResponseHeader("content-type") || "";
    if (url) { // url is presented
      // close modal window
      $('#modal-holder').find('.modal').modal('hide');
      // Redirect to url
      window.location = url;
    } else if (response_type.indexOf('javascript') > -1) {

    } else {
      // assume response is a html
      // modal has the fade effect
      // response is javascript
      // Commeted lines as removes the backdrop when sending ajax calls to change the modal content
      // Remove old modal backdrop
      // $('.modal-backdrop').remove()
      if ($($(modal_holder_selector).find(modal_selector)).hasClass('fade')) {
        // replace content of old modal
        $oldModal = $(modal_holder_selector);
        $newContent = $(data);
        ref = ['.modal-body', '.modal-footer'];
        for (i = 0, len = ref.length; i < len; i++) {
          selector = ref[i];
          $oldModal.find(selector).replaceWith($newContent.find(selector));
        }
      } else {
        // Remove old modal backdrop
        $('.modal-backdrop').remove();
        // Replace old modal with new one
        $(modal_holder_selector).html(data).find(modal_selector).modal();
      }
      triggerUpdateEvent();
    }
    return false;
  };

  return MoModal;

}).call(this);

$(function() {
  return MoModal.init();
});
