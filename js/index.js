$(function ($) {
  let $t1 = $('#t1')
  let $ti1 = $('#t1-1')
  let $title1 = $('#title1')
  let $p1 = $('#p1')
  $t1.mouseenter(function () {
    $ti1.removeClass('box-co')
    $ti1.addClass('box-t box-c')
    $title1.fadeIn('normal')
    $p1.fadeIn('normal')
  })
  $t1.mouseleave(function () {
    $ti1.addClass('box-co')
    $title1.fadeOut('normal')
    $p1.fadeOut('normal')
  })

  let $t2 = $('#t2')
  let $ti2 = $('#t2-1')
  let $title2 = $('#title2')
  let $p2 = $('#p2')
  $t2.mouseenter(function () {
    $ti2.removeClass('box-co')
    $ti2.addClass('box-t box-c')
    $title2.fadeIn('normal')
    $p2.fadeIn('normal')
  })
  $t2.mouseleave(function () {
    $ti2.addClass('box-co')
    $title2.fadeOut('normal')
    $p2.fadeOut('normal')
  })

  let $t3 = $('#t3')
  let $ti3 = $('#t3-1')
  let $title3 = $('#title3')
  let $p3 = $('#p3')
  $t3.mouseenter(function () {
    $ti3.removeClass('box-co')
    $ti3.addClass('box-t box-c')
    $title3.fadeIn('normal')
    $p3.fadeIn('normal')
  })
  $t3.mouseleave(function () {
    $ti3.addClass('box-co')
    $title3.fadeOut('normal')
    $p3.fadeOut('normal')
  })
})
