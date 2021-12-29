document.addEventListener("DOMContentLoaded", function () {
  // show search
  var openSearch = document.querySelector(".top-header__right-item--search");
  var search = document.querySelector(".search");

  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelector(".navbar-mb-item__bar");

  // read a lot
  var readALot = document.querySelector(".read-a-lot-content");
  // width document
  var widthDoc = document.querySelector("body");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
      // show search
      if (openSearch) {
        if (search) {
          openSearch.onclick = function () {
            if (search.classList.contains("show")) {
              search.classList.remove("show");
            } else {
              search.classList.add("show");
            }
          };
        }
      }

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // show sub menu
      if (showSubMenu) {
        showSubMenu.onclick = function () {
          if (subMenu) {
            subMenu.classList.add("active");
          }
        };
      }
      if (subMenu) {
        var subListMenu = subMenu.querySelectorAll(".sub-menu-mb-item");
        var closeSubMenu = subMenu.querySelector(".close-sub-menu");
        subListMenu.forEach(function (a) {
          if (a.querySelector(".sub-menu-mb-icon")) {
            a.querySelector(".sub-menu-mb-icon").onclick = function () {
              if (a.classList.contains("active")) {
                a.classList.remove("active");
              } else {
                a.classList.add("active");
              }
            };
          }
        });
        closeSubMenu.onclick = function () {
          subMenu.classList.remove("active");
        };
      }
      if (readALot) {
        var readALotItems = readALot.querySelectorAll(
          ".read-a-lot-content__block"
        );
        readALotItems.forEach(function (el, index) {
          el.firstElementChild.innerText = index + 1;
        });
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (openSearch && search) {
          if (
            !search.contains(e.target) &&
            !e.target.matches(".top-header__right-item--search")
          ) {
            search.classList.remove("show");
          }
        }
      });
    },
    // sticky sidebar main
    stickySlidebarMain: function () {
      $(".leftSidebar, .rightSidebar").theiaStickySidebar({
        containerSelector: "#main-1",
        additionalMarginTop: 50,
        additionalMarginBottom: 20,
      });
    },

    //  slidebar financial picture
    slidebarFinancialPicture: function () {
      if (widthDoc.offsetWidth > 500) {
        $(".financial-picture-content").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    },
    //  slidebar master
    slidebarMaster: function () {
      $(".box-master").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // sticky sidebar main
      this.stickySlidebarMain();
      //  slidebar financial picture
      this.slidebarFinancialPicture();
      //  slidebar master
      this.slidebarMaster();
    },
  };

  app.start();
});
