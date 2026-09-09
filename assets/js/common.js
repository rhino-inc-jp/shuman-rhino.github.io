// =================================
// アンカーリンク
// =================================
jQuery(function () {
    var windowWidth = $(window).width();
    var windowSm = 768; // スマホに切り替わる横幅
    if (windowWidth <= windowSm) {
        var headerHight = 115; // スマホのヘッダー等の高さ分の数値を入れる
    } else {
        var headerHight = 155; // PC のヘッダー等の高さ分の数値を入れる
    }
    jQuery('a[href^="#"]').click(function () {
        var speed = 1000;
        var href = jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - headerHight + 5;
        jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});



// ナビゲーション カレント
document.addEventListener('DOMContentLoaded', function () {
    var elemTop = [];

    function PositionCheck() {
        var halfVh = $(window).height() / 2;
        $(".scroll-point").each(function (i) {
            elemTop[i] = Math.round(parseInt($(this).offset().top - halfVh));
        });
    }

    function ScrollAnime() {
        var scroll = Math.round($(window).scrollTop());
        var NavElem = $(".js-flowList li");
        var total = elemTop.length;
        var current = 0;

        for (var i = 0; i < total; i++) {
            if (scroll >= elemTop[i]) {
                current = i;
            }
        }

        NavElem.removeClass('current');
        $(NavElem[current]).addClass('current');
    }

    $(window).scroll(function () {
        PositionCheck();
        ScrollAnime();
    });

    $(window).on('load', function () {
        PositionCheck();
        ScrollAnime();
    });

    $(window).resize(function () {
        PositionCheck();
    });
});


// slideToggle
document.addEventListener('DOMContentLoaded', function () {
    // すべてのトグルボタンを取得
    const toggleButtons = document.querySelectorAll('.js-tglBtn');

    // 各ボタンにイベントリスナーを設定
    toggleButtons.forEach(function (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const toggleContent = toggleButton.nextElementSibling; // 各ボタンに隣接する要素

            // 要素が非表示状態かどうかを高さで判断
            if (toggleContent.style.height === '0px' || toggleContent.style.height === '') {
                // スライドダウン
                let fullHeight = toggleContent.scrollHeight;
                toggleContent.style.height = fullHeight + 'px'; // 実際の内容の高さに設定
                toggleButton.classList.add('on');
            } else {
                // スライドアップ
                toggleContent.style.height = '0px';
                toggleButton.classList.remove('on');
            }
        });
    });
});


// ロゴクリック時、モーダル
$(document).ready(function () {
    // Swiperの初期化
    const logoSwiper = new Swiper('.js-logoSwiper', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 1000,
        autoHeight: false,
        // effect: "fade",
        // autoplay: {
        //     disableOnInteraction: false,
        // },

        // ページネーション
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },

        // 矢印
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // p-top-area_cnt-box-logo内のliタグがクリックされた時
    $('.p-top-area_cnt-box-logo li').on('click', function () {
        // クリックされたliタグのdata-slide属性の値を取得
        const slideIndex = $(this).data('slide');

        // モーダルを開く
        $('#modal01').fadeIn();
        $('body').addClass('modal-open');  // 背景のスクロールを防止

        // Swiperの該当スライドに移動
        logoSwiper.slideToLoop(slideIndex, 0);  // data-slideの値に基づいてスライドを表示
    });

    // モーダルを閉じる処理（外部クリックや閉じるボタンをクリックした時）
    $('.modal-close').on('click', function () {
        $('#modal01').fadeOut();
        $('body').removeClass('modal-open');
    });

    // モーダルコンテンツをクリックしても閉じないようにする
    $('.modal-content').on('click', function (e) {
        e.stopPropagation();  // クリックイベントが親要素に伝播しないようにする
    });
});



// ナビゲーションの色変更
document.addEventListener('DOMContentLoaded', function () {
    const areaElement = document.querySelector('.js-area');
    const fixedElement = document.querySelector('.js-fixed');

    // スクロールイベントを監視
    window.addEventListener('scroll', function () {
        // js-areaの位置を取得
        const areaPosition = areaElement.getBoundingClientRect().top;

        // 画面の上端に達した場合にjs-fixedにonクラスを付与
        // if (areaPosition <= 0) {
        //     fixedElement.classList.add('on');
        // } else {
        //     fixedElement.classList.remove('on');
        // }
    });
});


// マップ モーダル
// $(document).ready(function () {
//     // .mapクラスをクリックした時にモーダルを表示
//     $('.map a').on('click', function (event) {
//         event.preventDefault();
//         $('#modal-map').addClass('is-active');
//     });

//     // モーダル内の閉じるボタンでモーダルを閉じる
//     $('.c-modal_close').on('click', function () {
//         $('#modal-map').removeClass('is-active');
//     });

//     // モーダルの背景をクリックしても閉じる
//     $('#modal-map').on('click', function (e) {
//         if ($(e.target).is('#modal-map')) {
//             $(this).removeClass('is-active');
//         }
//     });
// });


// FASHION モーダル
$(document).ready(function () {
    // .js-faImgクラスをクリックした時にモーダルを表示
    $('.js-faImg').on('click', function (event) {
        event.preventDefault();
        $('#modal-map').addClass('is-active');  // モーダルを表示するクラスを追加
    });

    // モーダル内の閉じるボタンでモーダルを閉じる
    $('.c-modal_close').on('click', function () {
        $('#modal-map').removeClass('is-active');  // モーダルを閉じるクラスを削除
    });

    // モーダルの背景をクリックしても閉じる
    $('#modal-map').on('click', function (e) {
        if ($(e.target).is('#modal-map')) {
            $(this).removeClass('is-active');  // モーダルを閉じるクラスを削除
        }
    });
});



