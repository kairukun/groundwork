// Generated by CoffeeScript 1.6.1

/*
 *
 *  GroundworkCSS JS by Gary Hepting - https://github.com/groundworkcss/groundwork
 *  
 *  Open source under the BSD License. 
 *
 *  Copyright © 2013 Gary Hepting. All rights reserved.
 *
*/


/* --------------------------------------------
     Begin jquery.modals.coffee
--------------------------------------------
*/


/*
 *
 *  jQuery Modals by Gary Hepting
 *   https://github.com/ghepting/modal  
 *
*/


(function() {
  var equalizeColumns, limitPaginationItems;

  (function($) {
    var elems, modals;
    if ($('div#iframeModal').length < 1) {
      $('body').append('<div class="iframe modal" id="iframeModal"><iframe marginheight="0" marginwidth="0" frameborder="0"></iframe></div>');
      $('div#iframeModal').prepend('<i class="close icon-remove"></i>').prepend('<i class="fullscreen icon-resize-full"></i>');
    }
    $('a.modal').each(function() {
      $(this).attr('data-url', $(this).attr('href'));
      return $(this).attr('href', '#iframeModal');
    });
    $('a.modal').on("click", function(e) {
      $('div#iframeModal iframe').replaceWith('<iframe marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" src="' + $(this).attr('data-url') + '"></iframe>');
      e.preventDefault();
      return false;
    });
    elems = [];
    $.fn.modal = function() {
      this.each(function() {
        var $this;
        $(this).not('#iframeModal').wrapInner('<div class="modal-content"></div>');
        $(this).prepend('<i class="close icon-remove"></i>').prepend('<i class="fullscreen icon-resize-full"></i>').appendTo('body');
        $this = $(this);
        return $('[href=#' + $(this).attr('id') + ']').on("click", function(e) {
          modals.open($(this).attr('href'), $(this).hasClass('fullscreen'));
          e.preventDefault();
          return false;
        });
      });
      $('div.modal .close').on("click", function() {
        return modals.close();
      });
      return $('div.modal .fullscreen').on("click", function() {
        return modals.fullscreen($(this).parent('div.modal'));
      });
    };
    modals = (function() {
      var close, fullscreen, open;
      $('body').addClass('modal-ready');
      if ($("#overlay").length < 1) {
        $('body').append('<div id="overlay"></div>');
      }
      $('#overlay, div.modal .close').bind("click", function(e) {
        return close();
      });
      open = function(elem, fullscreen) {
        $(window).bind("keydown", function(e) {
          var keyCode;
          keyCode = (e.which ? e.which : e.keyCode);
          if (keyCode === 27) {
            return close();
          }
        });
        $(elem).addClass("active");
        if (!$(elem).hasClass('iframe')) {
          $(elem).css({
            width: 'auto',
            height: 'auto'
          });
          $(elem).css({
            height: $(elem).outerHeight()
          });
        }
        $(elem).css({
          top: '50%',
          left: '50%',
          'margin-top': ($(elem).outerHeight() / -2) + 'px',
          'margin-left': ($(elem).outerWidth() / -2) + 'px'
        });
        setTimeout(function() {
          return $('body').addClass("modal-active");
        }, 0);
        setTimeout(function() {
          return $('body').removeClass('modal-ready');
        }, 400);
        if (fullscreen) {
          modals.fullscreen(elem);
        }
      };
      close = function() {
        var modal;
        modal = $('div.modal.active');
        $(window).unbind("keydown");
        $('body').removeClass("modal-active").addClass('modal-ready');
        if (modal.hasClass('iframe')) {
          $('div#iframeModal iframe').replaceWith('<iframe marginheight="0" marginwidth="0" frameborder="0"></iframe>');
          modal.css({
            width: '80%',
            height: '80%'
          });
        } else {
          modal.css({
            width: 'auto',
            height: 'auto'
          });
        }
        modal.css({
          top: '10%',
          left: '10%',
          'max-width': '80%',
          'max-height': '80%',
          'margin-top': 0,
          'margin-left': 0
        });
        modal.removeClass("active").removeClass("fullscreen");
        $('i.fullscreen', modal).removeClass('icon-resize-small').addClass('icon-resize-full');
      };
      fullscreen = function(elem) {
        if ($('div.modal.active').hasClass('fullscreen')) {
          $('div.modal i.fullscreen').removeClass('icon-resize-small').addClass('icon-resize-full');
          if ($('div.modal.active').hasClass('iframe')) {
            $('div.modal.active').css({
              width: '80%',
              height: '80%'
            });
          } else {
            $('div.modal.active').css({
              width: 'auto',
              height: 'auto'
            });
            $('div.modal.active').css({
              height: $('div.modal.active').outerHeight()
            });
          }
          $('div.modal.active').removeClass('fullscreen').css({
            'max-width': '80%',
            'max-height': '80%'
          });
          $('div.modal.active').delay(100).css({
            top: '50%',
            left: '50%',
            'margin-top': ($('div.modal.active').outerHeight() / -2) + 'px',
            'margin-left': ($('div.modal.active').outerWidth() / -2) + 'px'
          });
        } else {
          $('div.modal i.fullscreen').addClass('icon-resize-small').removeClass('icon-resize-full');
          $('div.modal.active').addClass('fullscreen').css({
            top: 0,
            left: 0,
            'margin-top': 0,
            'margin-left': 0,
            width: '100%',
            height: '100%',
            'max-width': '100%',
            'max-height': '100%'
          });
        }
      };
      return {
        open: open,
        close: close,
        fullscreen: fullscreen
      };
    })();
    return $(window).resize(function() {
      return $('div.modal.active').each(function() {
        if (!$(this).hasClass('fullscreen')) {
          $(this).removeClass('active').css({
            top: '50%',
            left: '50%',
            'margin-top': ($(this).outerHeight() / -2) + 'px',
            'margin-left': ($(this).outerWidth() / -2) + 'px'
          }).addClass('active');
          if (!$(this).hasClass('iframe')) {
            $(this).css({
              height: 'auto'
            });
            return $(this).css({
              height: $(this).outerHeight()
            });
          }
        }
      });
    });
  })(jQuery);

  /* --------------------------------------------
       Begin jquery.responsiveTables.coffee
  --------------------------------------------
  */


  /*
   *
   *  jQuery ResponsiveTables by Gary Hepting - https://github.com/ghepting/responsiveTables
   *  
   *  Open source under the BSD License. 
   *
   *  Copyright © 2013 Gary Hepting. All rights reserved.
   *
  */


  (function($) {
    var elems;
    elems = [];
    $.fn.responsiveTable = function(options) {
      var settings;
      settings = {
        compressor: options.compressor || 10,
        minSize: options.minSize || Number.NEGATIVE_INFINITY,
        maxSize: options.maxSize || Number.POSITIVE_INFINITY,
        padding: 2,
        height: "auto",
        adjust_parents: true
      };
      return this.each(function() {
        var columns, elem, fontSize, rows;
        elem = $(this);
        elem.attr('data-compression', settings.compressor);
        elem.attr('data-min', settings.minSize);
        elem.attr('data-max', settings.maxSize);
        elem.attr('data-padding', settings.padding);
        columns = $("tr", elem).first().children("th, td").length;
        rows = $("tr", elem).length;
        if (settings.height !== "auto") {
          $this.css("height", settings.height);
          if (settings.adjust_parents) {
            $this.parents().each(function() {
              return $(this).css("height", "100%");
            });
          }
        }
        $("tr th, tr td", elem).css("width", Math.floor(100 / columns) + "%");
        $("tr th, tr td", elem).css("height", Math.floor(100 / rows) + "%");
        fontSize = Math.floor(Math.max(Math.min(elem.width() / settings.compressor, parseFloat(settings.maxSize)), parseFloat(settings.minSize)));
        $("tr th, tr td", elem).css("font-size", fontSize + "px");
        return elems.push(elem);
      });
    };
    return $(window).on("resize", function() {
      return $(elems).each(function() {
        var elem, fontSize;
        elem = $(this);
        fontSize = Math.floor(Math.max(Math.min(elem.width() / (elem.attr('data-compression')), parseFloat(elem.attr('data-max'))), parseFloat(elem.attr('data-min'))));
        return $("tr th, tr td", elem).css("font-size", fontSize + "px");
      });
    });
  })(jQuery);

  /* --------------------------------------------
       Begin jquery.responsiveText.coffee
  --------------------------------------------
  */


  /*
   *
   *  jQuery ResponsiveText by Gary Hepting - https://github.com/ghepting/responsiveText
   *  
   *  Open source under the BSD License. 
   *
   *  Copyright © 2013 Gary Hepting. All rights reserved.
   *
  */


  (function($) {
    var elems;
    elems = [];
    $.fn.responsiveText = function(options) {
      var settings;
      settings = {
        compressor: options.compressor || 10,
        minSize: options.minSize || Number.NEGATIVE_INFINITY,
        maxSize: options.maxSize || Number.POSITIVE_INFINITY
      };
      return this.each(function() {
        var elem;
        elem = $(this);
        elem.attr('data-compression', settings.compressor);
        elem.attr('data-min', settings.minSize);
        elem.attr('data-max', settings.maxSize);
        elem.css("font-size", Math.floor(Math.max(Math.min(elem.width() / settings.compressor, parseFloat(settings.maxSize)), parseFloat(settings.minSize))));
        return elems.push(elem);
      });
    };
    return $(window).on("resize", function() {
      return $(elems).each(function() {
        var elem;
        elem = $(this);
        return elem.css("font-size", Math.floor(Math.max(Math.min(elem.width() / (elem.attr('data-compression')), parseFloat(elem.attr('data-max'))), parseFloat(elem.attr('data-min')))));
      });
    });
  })(jQuery);

  /* --------------------------------------------
       Begin jquery.tooltip.coffee
  --------------------------------------------
  */


  /*
   *
   *  jQuery Tooltips by Gary Hepting - https://github.com/ghepting/jquery-tooltips
   *  
   *  Open source under the BSD License. 
   *
   *  Copyright © 2013 Gary Hepting. All rights reserved.
   *
  */


  (function($) {
    return $.fn.tooltip = function(options) {
      var closetooltip, defaults, delayShow, getElementPosition, resettooltip, setPosition, showtooltip, tooltip, trigger;
      defaults = {
        topOffset: 0,
        delay: 100,
        speed: 100
      };
      options = $.extend(defaults, options);
      tooltip = $('#tooltip');
      delayShow = '';
      trigger = '';
      if ($('#tooltip').length !== 1) {
        tooltip = $("<div id=\"tooltip\"></div>");
        tooltip.appendTo("body").hide();
      }
      getElementPosition = function(el) {
        var bottom, left, offset, right, top, win;
        offset = el.offset();
        win = $(window);
        return {
          top: top = offset.top - win.scrollTop(),
          left: left = offset.left - win.scrollLeft(),
          bottom: bottom = win.height() - top - el.outerHeight(),
          right: right = win.width() - left - el.outerWidth()
        };
      };
      setPosition = function(trigger) {
        var attrs, coords, height, width;
        coords = getElementPosition(trigger);
        if (tooltip.outerWidth() > ($(window).width() - 20)) {
          tooltip.css('width', $(window).width() - 20);
        }
        attrs = {};
        tooltip.css('max-width', Math.min($(window).width() - parseInt($('body').css('padding-left')) - parseInt($('body').css('padding-right')), parseInt(tooltip.css('max-width'))));
        width = tooltip.outerWidth();
        height = tooltip.outerHeight();
        if (coords.left <= coords.right) {
          tooltip.addClass('left');
          attrs.left = coords.left;
        } else {
          tooltip.addClass('right');
          attrs.right = coords.right;
        }
        if ((coords.top - options.topOffset) > (height + 20)) {
          tooltip.addClass('top');
          attrs.top = (trigger.offset().top - height) - 20;
        } else {
          tooltip.addClass('bottom');
          attrs.top = trigger.offset().top + trigger.outerHeight() - 4;
        }
        return tooltip.css(attrs);
      };
      resettooltip = function() {
        return tooltip.text('').removeClass('left right top bottom').css({
          left: 'auto',
          right: 'auto',
          top: 'auto',
          bottom: 'auto',
          width: 'auto',
          'padding-left': 'auto',
          'padding-right': 'auto'
        });
      };
      closetooltip = function() {
        tooltip.stop().hide();
        resettooltip();
        return $('[role=tooltip]').removeClass('on');
      };
      showtooltip = function(trigger) {
        clearTimeout(delayShow);
        return delayShow = setTimeout(function() {
          tooltip.css({
            "opacity": 0,
            "display": "block"
          }).text(trigger.attr('data-title'));
          setPosition(trigger);
          trigger.addClass('on');
          console.log(tooltip.css('display'));
          return tooltip.animate({
            top: "+=10",
            opacity: 1
          }, options.speed);
        }, options.delay);
      };
      this.each(function() {
        var $this;
        $this = $(this);
        $this.attr('role', 'tooltip').attr('data-title', $this.attr('title'));
        return $this.removeAttr("title");
      });
      $('body').on('focus', '[role=tooltip]', function() {
        return showtooltip($(this));
      }).on('blur', '[role=tooltip]', function() {
        clearTimeout(delayShow);
        return closetooltip();
      }).on('mouseenter', '[role=tooltip]:not(input,select,textarea)', function() {
        return showtooltip($(this));
      }).on('mouseleave', '[role=tooltip]:not(input,select,textarea)', function() {
        clearTimeout(delayShow);
        return closetooltip();
      });
      return $(window).on({
        scroll: function() {
          trigger = $('[role=tooltip].on');
          if (trigger.length) {
            setPosition(trigger);
            return $('#tooltip').css({
              top: "+=10"
            });
          }
        }
      });
    };
  })(jQuery);

  /* --------------------------------------------
       Begin disabled.coffee
  --------------------------------------------
  */


  $(function() {
    $('.disabled').each(function() {
      return $(this).attr('tabindex', '-1');
    });
    $('body').on('click', '.disabled', function(e) {
      e.preventDefault();
      return false;
    });
  });

  /* --------------------------------------------
       Begin equalizeColumns.coffee
  --------------------------------------------
  */


  $(function() {
    return equalizeColumns();
  });

  $(window).resize(function() {
    return equalizeColumns();
  });

  equalizeColumns = function() {
    return $('.row.equalize').each(function() {
      var $row, collapsed, tallest;
      $row = $(this);
      tallest = 0;
      collapsed = false;
      $(this).children('*').each(function(i) {
        $(this).css('min-height', '1px');
        collapsed = $(this).outerWidth() === $row.outerWidth();
        if (!collapsed) {
          if (!$(this).hasClass('equal')) {
            $(this).addClass('equal');
          }
          if ($(this).outerHeight() > tallest) {
            return tallest = $(this).outerHeight();
          }
        }
      });
      if (!collapsed) {
        return $(this).children('*').css('min-height', tallest);
      }
    });
  };

  /* --------------------------------------------
       Begin forms.coffee
  --------------------------------------------
  */


  $(function() {
    $('body').on('focus', '\
    .error input, \
    .error textarea, \
    .invalid input, \
    .invalid textarea, \
    input.error, \
    textarea.error, \
    input.invalid, \
    textarea.invalid', function(e) {
      $(this).focus();
      return $(this).select();
    });
    $('span.select select').each(function() {
      if ($(this).children('option').first().val() === '' && $(this).children('option').first().attr('selected')) {
        return $(this).addClass('unselected');
      } else {
        return $(this).removeClass('unselected');
      }
    });
    $('body').on('change', 'span.select select', function(e) {
      if ($(this).children('option').first().val() === '' && $(this).children('option').first().attr('selected')) {
        return $(this).addClass('unselected');
      } else {
        return $(this).removeClass('unselected');
      }
    });
  });

  /* --------------------------------------------
       Begin menus.coffee
  --------------------------------------------
  */


  $(function() {
    var delay;
    delay = '';
    $('body').on('focus', 'nav > ul > li > a', function() {
      $('nav > ul > li').removeClass('on');
      return $('nav > ul > li > ul').hide();
    });
    $('body').on('mouseenter', 'nav > ul > li.menu', function(e) {
      if ($(window).width() > 768) {
        clearTimeout(delay);
        $('nav > ul > li').removeClass('on');
        $('nav > ul > li > ul').hide();
        return $(this).addClass('on');
      }
    });
    $('body').on('mouseleave', 'nav > ul > li.menu', function(e) {
      if ($(window).width() > 768) {
        return delay = setTimeout((function() {
          $('nav > ul > li').removeClass('on');
          return $('nav > ul > li > ul').hide();
        }), 350);
      }
    });
    $('body').on('click', 'nav > ul > li.menu', function(e) {
      var $this;
      if ($(window).width() < 768) {
        if ($(e.target).parent('li.menu').size() > 0) {
          $this = $(this);
          $(this).children('ul').slideToggle(300, function() {
            return $this.toggleClass('on');
          });
          e.preventDefault();
          return false;
        }
      }
    });
    $('body').on('focus', 'nav > ul > li.menu > a', function(e) {
      return $(this).parent('li.menu').trigger('mouseenter');
    });
    $('body').on('blur', 'nav > ul > li.menu li:last-child > a', function(e) {
      return $(this).closest('li.menu').trigger('mouseleave');
    });
    $('body').on('focus', '.dropdown', function(e) {
      return $(this).addClass('on');
    });
    $('body').on('blur', '.dropdown li:last-child a', function(e) {
      return $('.dropdown').filter('.on').removeClass('on');
    });
    $('body').on('click', function(e) {
      if ($(e.target).hasClass('dropdown')) {
        $(e.target).toggleClass('on');
      } else {
        if ($('.dropdown').filter('.on').length) {
          $('.dropdown').filter('.on').removeClass('on');
        }
      }
      if ($('nav > ul > li').filter('.menu.on').length) {
        return $('nav > ul > li').filter('.menu.on').removeClass('on');
      }
    });
    $('nav.menu').each(function() {
      if (!$(this).attr('data-label')) {
        $(this).attr('data-label', 'Menu');
      }
      if (!($(this).find('.menu-toggle').length > 0)) {
        return $(this).prepend('<a href="#" class="menu-toggle"><i class="icon-reorder"></i></a>');
      }
    });
    $('body').on('click', '.menu-toggle', function() {
      return $(this).parent('nav.menu').toggleClass('on');
    });
  });

  /* --------------------------------------------
       Begin modals.coffee
  --------------------------------------------
  */


  /*
   * Requires jquery.modals.js
  */


  $(function() {
    return $('div.modal').modal();
  });

  /* --------------------------------------------
       Begin pagination.coffee
  --------------------------------------------
  */


  $(function() {
    limitPaginationItems();
    $('body').on('click', '.pagination ul > li:not(.next, .prev) a', function(e) {
      $('.pagination ul > li:not(.next, .prev)').removeClass('active');
      $(this).parent('li').addClass('active');
      if ($(this).parent('li').hasClass('first')) {
        $('.pagination ul > li.prev').addClass('disabled');
      } else {
        $('.pagination ul > li.prev').removeClass('disabled');
      }
      if ($(this).parent('li').hasClass('last')) {
        $('.pagination ul > li.next').addClass('disabled');
      } else {
        $('.pagination ul > li.next').removeClass('disabled');
      }
      limitPaginationItems();
      e.preventDefault();
      return false;
    });
    $('body').on('click', '.pagination ul > li.prev:not(.disabled)', function(e) {
      var el;
      $('.pagination ul > li.next').removeClass('disabled');
      el = $('.pagination ul > li.active');
      if (!el.hasClass('first')) {
        el.removeClass('active');
        el.prev().addClass('active');
        limitPaginationItems();
      }
      if ($('.pagination ul > li.active').hasClass('first')) {
        $(this).addClass('disabled');
      }
      e.preventDefault();
      return false;
    });
    $('body').on('click', '.pagination ul > li.next:not(.disabled)', function(e) {
      var el;
      $('.pagination ul > li.prev').removeClass('disabled');
      el = $('.pagination ul > li.active');
      if (!el.hasClass('last')) {
        el.removeClass('active');
        el.next().addClass('active');
        limitPaginationItems();
      }
      if ($('.pagination ul > li.active').hasClass('last')) {
        $(this).addClass('disabled');
      }
      e.preventDefault();
      return false;
    });
    $('body').on('click', '.pagination ul > li.disabled a', function(e) {
      e.preventDefault();
      return false;
    });
  });

  $(window).resize(function() {
    return limitPaginationItems();
  });

  limitPaginationItems = function() {
    return $('.pagination ul').each(function() {
      var pagination, totalItemsWidth, visibleItemsWidth, visibleSpace, _results;
      pagination = $(this);
      visibleSpace = pagination.outerWidth() - pagination.children('li.prev').outerWidth() - pagination.children('li.next').outerWidth();
      totalItemsWidth = 0;
      pagination.children('li').each(function() {
        return totalItemsWidth += $(this).outerWidth();
      });
      pagination.children('li').not('.prev, .next, .active').hide();
      visibleItemsWidth = 0;
      pagination.children('li:visible').each(function() {
        return visibleItemsWidth += $(this).outerWidth();
      });
      _results = [];
      while ((visibleItemsWidth + 29) < visibleSpace && (visibleItemsWidth + 29) < totalItemsWidth) {
        pagination.children('li:visible').not('.next').last().next().show();
        visibleItemsWidth = 0;
        pagination.children('li:visible').each(function() {
          return visibleItemsWidth += $(this).outerWidth();
        });
        if ((visibleItemsWidth + 29) <= visibleSpace) {
          pagination.children('li:visible').not('.prev').first().prev().show();
          visibleItemsWidth = 0;
          pagination.children('li:visible').each(function() {
            return visibleItemsWidth += $(this).outerWidth();
          });
        }
        visibleItemsWidth = 0;
        _results.push(pagination.children('li:visible').each(function() {
          return visibleItemsWidth += $(this).outerWidth();
        }));
      }
      return _results;
    });
  };

  /* --------------------------------------------
       Begin responsiveTables.coffee
  --------------------------------------------
  */


  /*
   * Requires jquery.responsiveText.js
  */


  $(function() {
    return $('table.responsive').each(function(index, object) {
      var compression, max, min, padding;
      compression = 30;
      min = 8;
      max = 13;
      padding = 0;
      compression = parseFloat($(this).attr('data-compression') || compression);
      min = parseFloat($(this).attr('data-min') || min);
      max = parseFloat($(this).attr('data-max') || max);
      padding = parseFloat($(this).attr('data-padding') || padding);
      return $(object).responsiveTable({
        compressor: compression,
        minSize: min,
        maxSize: max,
        padding: padding
      });
    });
  });

  /* --------------------------------------------
       Begin responsiveText.coffee
  --------------------------------------------
  */


  /*
   * Requires jquery.responsiveText.js
  */


  $(function() {
    return $('.responsive').not('table').each(function(index, object) {
      var compression, max, min;
      compression = 10;
      min = 10;
      max = 200;
      compression = parseFloat($(this).attr('data-compression') || compression);
      min = parseFloat($(this).attr('data-min') || min);
      max = parseFloat($(this).attr('data-max') || max);
      return $(object).responsiveText({
        compressor: compression,
        minSize: min,
        maxSize: max
      });
    });
  });

  /* --------------------------------------------
       Begin tabs.coffee
  --------------------------------------------
  */


  $(function() {
    return $('body').on('click', '.tabs > ul > li > a[href^=#]', function(e) {
      var tabs;
      if (!$(this).hasClass('disabled')) {
        tabs = $(this).parents('.tabs');
        tabs.find('> ul li a').removeClass('active');
        $(this).addClass('active');
        tabs.children('div').removeClass('active');
        tabs.children($(this).attr('href')).addClass('active');
      }
      e.preventDefault();
      return false;
    });
  });

  /* --------------------------------------------
       Begin tooltips.coffee
  --------------------------------------------
  */


  /*
   * Requires jquery.tooltips.js
  */


  $(function() {
    return $('.tooltip[title]').tooltip();
  });

}).call(this);
