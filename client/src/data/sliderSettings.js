export const logoSettings = {
  autoplay: true,
  draggable: true,
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 3,
  className: "logo-slider",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

export const gallerySettings = {
  draggable: true,
  dots: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  className: "gallery-slider",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

export const featuredArtistsSettings = {
  autoplay: false,
  draggable: true,
  dots: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  className: "featured-artists-slider",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
