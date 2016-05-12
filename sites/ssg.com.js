var css = `
  .--oxy-blocker {
    {{css:item}}
    background-color:#fff !important;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > .detail-link > img,
  .--oxy-blocker > .detail-link > .thumbnail {
    {{css:cover}}
  }

  #productList > li > * {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;


OxyBlocker.initialize(css, {
	wrap: '#idProductImg',
	list: 'div.itembx',
	title: function(el) {
   	 return el.querySelector('.subject').textContent;
	}
},true);

