$(document).ready(function () {
    setAjax();
  });
  let newId = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  
  let setProcessing = function (id) {
    let ids = $(window).data("process-ids") || [];
    ids.push(id);
    $(window).data("process-ids", ids);
  };
  
  let getProcessing = function (id) {
    let ids = $(window).data("process-ids") || [];
    let index = ids.findIndex((x) => x === id);
  
    ids.splice(index, 1);
    $(window).data("process-ids", ids);
  
    return ids;
  };
  
  let setAjax = function () {
    $.ajaxSetup({
      beforeSend: function (jqXHR) {
        const processId = newId();
        this.processId = processId;
        setProcessing(processId);
        showLoading();
        jqXHR.always(function () {
          const processId = this.processId;
          const ids = getProcessing(processId);
          if (ids.length === 0) {
            hideLoading();
          }
        });
      },
    });
  };
  
  function hideLoading() {
    const isHasClassLoading = document.getElementsByClassName("loading");
    if (isHasClassLoading.length) {
      $(".spin").removeClass("loading");
    }
  }
  
  function showLoading() {
    const isHasClassLoading = document.getElementsByClassName("loading");
    if (!isHasClassLoading.length) {
      $(".spin").addClass("loading");
    }
  }
  