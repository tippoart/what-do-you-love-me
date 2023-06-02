function runAway() {
    var buttons = document.querySelectorAll('.click button');
    var h1 = document.querySelector('.click h1');
    var h1Rect = h1.getBoundingClientRect();
    var bodyWidth = document.documentElement.clientWidth;
    var bodyHeight = document.documentElement.clientHeight;

    buttons.forEach(function (button) {
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var maxTop = bodyHeight - h1Rect.height - buttonHeight;
        var maxLeft = bodyWidth - buttonWidth;

        var newTop = Math.random() * maxTop + h1Rect.height;
        var newLeft = Math.random() * maxLeft;

        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > maxLeft) {
            newLeft = maxLeft;
        }

        if (newTop < h1Rect.height) {
            newTop = h1Rect.height;
        } else if (newTop > maxTop) {
            newTop = maxTop;
        }

        button.style.top = newTop + 'px';
        button.style.left = newLeft + 'px';
    });
}

function showLove() {
    alert('Aku juga sayang kamu!');
    var giftImage = document.getElementById('giftImage');
   var image = document.getElementById("imge");
   var image2 = document.getElementById("imge2");
            giftImage.style.display = 'block';
            giftImage.src = 'love-you.gif';

            image.style.display = 'flex';
            image.src = 'tanzen-junge.gif';

            image2.style.display = 'flex';
            image2.src = 'guby-cute.gif';


            setTimeout(function () {
                var buttons = document.querySelectorAll('.click button');
                var giftImages = document.querySelectorAll('.click img');
                
                buttons.forEach(function (button) {
                    button.style.top = '50%';
                    button.style.left = '50%';
                });

                giftImages.forEach(function (image) {
                    image.style.display = 'none';
                });
            }, 5000); // Ubah waktu (dalam milidetik) sesuai kebutuhan Anda
        }
           
