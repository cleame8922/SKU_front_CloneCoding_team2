function showSection(sectionId) {
    // 모든 notice_content 요소 숨기기
    var sections = document.querySelectorAll('.notice_content');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // 클릭한 탭의 섹션만 보이기
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        /*pagination: {
        el: ".swiper-pagination",
        clickable: true,
        }, */
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    }); 