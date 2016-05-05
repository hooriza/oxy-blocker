var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  li > * {
    {{css:transition}};
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }

  .list_view.--oxy-blocker {
    overflow:hidden;
  }
`;

// http://www.auction.co.kr/
switch (location.hostname) {
case 'www.auction.co.kr':
case 'shop.auction.co.kr':
  OxyBlocker.initialize(css, {
    wrap: '#body',
    list: [
      '.touchSlider li:not(--oxy-blocker-processed)'
    ].join(','),
    title: '.allkill_box, div'
  }, true);

  OxyBlocker.initialize(css, {
    wrap: '#body',
    list: [
      'ul.item-list-img > li > a:not(--oxy-blocker-processed)',
      '.hp_mystyle_list li:not(--oxy-blocker-processed)',
      '.hp_showcase div.showcase_con:not(--oxy-blocker-processed)',
      '.product-list li:not(--oxy-blocker-processed)'
    ].join(','),
    title: '.showcace_info, .name'
  }, true);
  break;

default:
  OxyBlocker.initialize(css, {
    wrap: '#contents',
    list: [
      'div.today_cont li:not(--oxy-blocker-processed)',
      '.list_wrap .list_view:not(--oxy-blocker-processed)',
      '.other_items .item:not(--oxy-blocker-processed)'
    ].join(','),
    title: '.item_name, .item_title, .name'
  }, true);

  OxyBlocker.initialize(css, {
    wrap: '#container',
    list: '.rvi_slot li:not(--oxy-blocker-processed)',
    title: '.item_name, .item_title, .name'
  }, true);
  break;

}