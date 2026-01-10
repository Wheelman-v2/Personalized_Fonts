        /* 볼드, 이탤릭 체크박스 */
        function toggleStyles() {
            var boldCheckbox = document.getElementById("boldCheckbox");
            var italicCheckbox = document.getElementById("italicCheckbox");
            var blackBackgroundCheckbox = document.getElementById("blackBackgroundCheckbox");

            var textareas = document.querySelectorAll('.tex_size');

            for (var i = 0; i < textareas.length; i++) {
                var textarea = textareas[i];

                textarea.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
                textarea.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";

                if (blackBackgroundCheckbox.checked) {
                    textarea.style.backgroundColor = "black";
                    textarea.style.color = "white";
                } else {
                    textarea.style.backgroundColor = "#FCFDF7"; // 원하는 배경색으로 변경
                    textarea.style.color = "black"; // 원래 텍스트 색상으로 변경
                }
            }
        }
                    document.addEventListener('keydown', function(event) {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                        };
                    }, true);
        /* 폰트 크기 슬라이더 값 */
        var initialFontSize = 30; // 초기 폰트 크기를 30px로 설정

        function changeFontSize() {
            var slider = document.getElementById("slider");
            var fontSizeValue = document.getElementById("fontSizeValue");

            var textarea1 = document.getElementById("tex_size1");
            var textarea2 = document.getElementById("tex_size2");
            var textarea3 = document.getElementById("tex_size3");
            var textarea4 = document.getElementById("tex_size4");
            var textarea5 = document.getElementById("tex_size5");
            var textarea6 = document.getElementById("tex_size6");
            var textarea7 = document.getElementById("tex_size7");
            var textarea8 = document.getElementById("tex_size8");
            var textarea9 = document.getElementById("tex_size9");
            var textarea10 = document.getElementById("tex_size10");
            var textarea11 = document.getElementById("tex_size11");
            var textarea12 = document.getElementById("tex_size12");
            var textarea13 = document.getElementById("tex_size13");
            var textarea14 = document.getElementById("tex_size14");
            var textarea15 = document.getElementById("tex_size15");
            var textarea16 = document.getElementById("tex_size16");
            var textarea17 = document.getElementById("tex_size17");
            var textarea18 = document.getElementById("tex_size18");
            var textarea19 = document.getElementById("tex_size19");
            var textarea20 = document.getElementById("tex_size20");
            var textarea21 = document.getElementById("tex_size21");
            var textarea22 = document.getElementById("tex_size22");
            var textarea23 = document.getElementById("tex_size23");
            var textarea24 = document.getElementById("tex_size24");
            var textarea25 = document.getElementById("tex_size25");
            var textarea26 = document.getElementById("tex_size26");
            var textarea27 = document.getElementById("tex_size27");
            var textarea28 = document.getElementById("tex_size28");
            var textarea29 = document.getElementById("tex_size29");
            var textarea30 = document.getElementById("tex_size30");

            var fontSize = parseFloat(slider.value);
            fontSizeValue.innerText = " " + fontSize + "px";
            textarea1.style.fontSize = fontSize + "px";
            textarea2.style.fontSize = fontSize + "px";
            textarea3.style.fontSize = fontSize + "px";
            textarea4.style.fontSize = fontSize + "px";
            textarea5.style.fontSize = fontSize + "px";
            textarea6.style.fontSize = fontSize + "px";
            textarea7.style.fontSize = fontSize + "px";
            textarea8.style.fontSize = fontSize + "px";
            textarea9.style.fontSize = fontSize + "px";
            textarea10.style.fontSize = fontSize + "px";
            textarea11.style.fontSize = fontSize + "px";
            textarea12.style.fontSize = fontSize + "px";
            textarea13.style.fontSize = fontSize + "px";
            textarea14.style.fontSize = fontSize + "px";
            textarea15.style.fontSize = fontSize + "px";
            textarea16.style.fontSize = fontSize + "px";
            textarea17.style.fontSize = fontSize + "px";
            textarea18.style.fontSize = fontSize + "px";
            textarea19.style.fontSize = fontSize + "px";
            textarea20.style.fontSize = fontSize + "px";
            textarea21.style.fontSize = fontSize + "px";
            textarea22.style.fontSize = fontSize + "px";
            textarea23.style.fontSize = fontSize + "px";
            textarea24.style.fontSize = fontSize + "px";
            textarea25.style.fontSize = fontSize + "px";
            textarea26.style.fontSize = fontSize + "px";
            textarea27.style.fontSize = fontSize + "px";
            textarea28.style.fontSize = fontSize + "px";
            textarea29.style.fontSize = fontSize + "px";
            textarea30.style.fontSize = fontSize + "px";

            // 초기 높이 설정
            textarea1.style.height = "auto";
            textarea2.style.height = "auto";
            textarea3.style.height = "auto";
            textarea4.style.height = "auto";
            textarea5.style.height = "auto";
            textarea6.style.height = "auto";
            textarea7.style.height = "auto";
            textarea8.style.height = "auto";
            textarea9.style.height = "auto";
            textarea10.style.height = "auto";
            textarea11.style.height = "auto";
            textarea12.style.height = "auto";
            textarea13.style.height = "auto";
            textarea14.style.height = "auto";
            textarea15.style.height = "auto";
            textarea16.style.height = "auto";
            textarea17.style.height = "auto";
            textarea18.style.height = "auto";
            textarea19.style.height = "auto";
            textarea20.style.height = "auto";
            textarea21.style.height = "auto";
            textarea22.style.height = "auto";
            textarea23.style.height = "auto";
            textarea24.style.height = "auto";
            textarea25.style.height = "auto";
            textarea26.style.height = "auto";
            textarea27.style.height = "auto";
            textarea28.style.height = "auto";
            textarea29.style.height = "auto";
            textarea30.style.height = "auto";

            // 각 텍스트 영역의 높이를 텍스트 내용에 맞게 동적으로 조절
            var scrollHeight1 = textarea1.scrollHeight;
            textarea1.style.height = scrollHeight1 + "px";
            var scrollHeight2 = textarea2.scrollHeight;
            textarea2.style.height = scrollHeight2 + "px";
            var scrollHeight3 = textarea3.scrollHeight;
            textarea3.style.height = scrollHeight3 + "px";
            var scrollHeight4 = textarea4.scrollHeight;
            textarea4.style.height = scrollHeight4 + "px";
            var scrollHeight5 = textarea5.scrollHeight;
            textarea5.style.height = scrollHeight5 + "px";
            var scrollHeight6 = textarea6.scrollHeight;
            textarea6.style.height = scrollHeight6 + "px";
            var scrollHeight7 = textarea7.scrollHeight;
            textarea7.style.height = scrollHeight7 + "px";
            var scrollHeight8 = textarea8.scrollHeight;
            textarea8.style.height = scrollHeight8 + "px";
            var scrollHeight9 = textarea9.scrollHeight;
            textarea9.style.height = scrollHeight9 + "px";
            var scrollHeight10 = textarea10.scrollHeight;
            textarea10.style.height = scrollHeight10 + "px";
            var scrollHeight11 = textarea11.scrollHeight;
            textarea11.style.height = scrollHeight11 + "px";
            var scrollHeight12 = textarea12.scrollHeight;
            textarea12.style.height = scrollHeight12 + "px";
            var scrollHeight13 = textarea13.scrollHeight;
            textarea13.style.height = scrollHeight13 + "px";
            var scrollHeight14 = textarea14.scrollHeight;
            textarea14.style.height = scrollHeight14 + "px";
            var scrollHeight15 = textarea15.scrollHeight;
            textarea15.style.height = scrollHeight15 + "px";
            var scrollHeight16 = textarea16.scrollHeight;
            textarea16.style.height = scrollHeight16 + "px";
            var scrollHeight17 = textarea17.scrollHeight;
            textarea17.style.height = scrollHeight17 + "px";
            var scrollHeight18 = textarea18.scrollHeight;
            textarea18.style.height = scrollHeight18 + "px";
            var scrollHeight19 = textarea19.scrollHeight;
            textarea19.style.height = scrollHeight19 + "px";
            var scrollHeight20 = textarea20.scrollHeight;
            textarea20.style.height = scrollHeight20 + "px";
            var scrollHeight21 = textarea21.scrollHeight;
            textarea21.style.height = scrollHeight21 + "px";
            var scrollHeight22 = textarea22.scrollHeight;
            textarea22.style.height = scrollHeight22 + "px";
            var scrollHeight23 = textarea23.scrollHeight;
            textarea23.style.height = scrollHeight23 + "px";
            var scrollHeight24 = textarea24.scrollHeight;
            textarea24.style.height = scrollHeight24 + "px";
            var scrollHeight25 = textarea25.scrollHeight;
            textarea25.style.height = scrollHeight25 + "px";
            var scrollHeight26 = textarea26.scrollHeight;
            textarea26.style.height = scrollHeight26 + "px";
            var scrollHeight27 = textarea27.scrollHeight;
            textarea27.style.height = scrollHeight27 + "px";
            var scrollHeight28 = textarea28.scrollHeight;
            textarea28.style.height = scrollHeight28 + "px";
            var scrollHeight29 = textarea29.scrollHeight;
            textarea29.style.height = scrollHeight29 + "px";
            var scrollHeight30 = textarea30.scrollHeight;
            textarea30.style.height = scrollHeight30 + "px";
        }
        
            /* textarea 박스 크기 초기화 */
            document.addEventListener("DOMContentLoaded", function() {
                var slider = document.getElementById("slider");
                slider.value = initialFontSize;
                changeFontSize();
            });

            /* 폰트 크기 증가 값 */
            $('input').on('input', function() {
                var v = $(this).val();
                $('textarea').css('font-size', v + 'px')
            });

            /* 텍스트 입력 시 엔터키 OFF */
            $(document).ready(function() {
                $("#Textwright").keyup(function() {
                    $("#tex_size1, #tex_size2, #tex_size3, #tex_size4, #tex_size5, #tex_size6, #tex_size7, #tex_size8, #tex_size9, #tex_size10, #tex_size11, #tex_size12, #tex_size13, #tex_size14, #tex_size15, #tex_size16, #tex_size17, #tex_size18, #tex_size19, #tex_size20, #tex_size21, #tex_size22, #tex_size23, #tex_size24, #tex_size25, #tex_size26, #tex_size27, #tex_size28, #tex_size29, #tex_size30").text($("#Textwright").val());
                });
            });