var lastQuantity = {}; // Объект для хранения последних введенных значений

// Функция для обновления общей цены
function updateTotalPrice(input) {
    var parent = input.closest('.buy-item');
    var quantityInput = parent.querySelector('.quantity-input');
    var quantity = quantityInput.value !== '' ? parseInt(quantityInput.value) : lastQuantity[parent.id] || 1; // Проверяем, если значение не пустое, то преобразуем его в число, иначе используем 0
    var pricePerItem = parseInt(parent.getAttribute('data-price'));
    
    var totalPrice = calculateTotalPrice(quantity, pricePerItem); // Вызываем функцию для расчета общей суммы с учетом количества
    parent.querySelector('.total-price').textContent = totalPrice + '\u20BD'; // Обновляем текст общей цены
    
    var totalPrices = document.querySelectorAll('.total-price');
    var sum = Array.from(totalPrices).reduce((acc, elem) => acc + parseInt(elem.textContent), 0);
    
    document.querySelector('.total-price-all').textContent = sum + '\u20BD'; // Обновляем текст итоговой цены
    lastQuantity[parent.id] = quantity; // Сохраняем текущее значение как lastQuantity
}

// Функция для расчета общей цены
function calculateTotalPrice(quantity, pricePerItem) {
    return pricePerItem * quantity; // Рассчитываем общую цену
}

// Функция для уменьшения значения
function decreaseValue(input) {
    var value = parseInt(input.value);
    if (value > 1) {
        value--;
    } else {
        value = 1;
    }
    input.value = value;
    if (value <= 100) {
        updateTotalPrice(); // Вызываем функцию для обновления общей суммы только если значение не превышает 100
    }
}

// Функция для увеличения значения
function increaseValue(input) {
    var value = parseInt(input.value);
    if (value < 100) {
        value++;
    } else {
        value = 100;
    }
    input.value = value;
    updateTotalPrice(); // Вызываем функцию для обновления общей цены
}

// Функция, определяет пуста ли корзина
function hideItem(button) {
    var item = button.closest(".buy-item");
    item.style.display = "none";
  
    var itemsVisible = document.querySelectorAll(".buy-item:not([style='display: none;'])");
    var message = document.getElementById("message");
  
    if (itemsVisible.length === 0) {
      document.getElementById("items").style.display = "none";
      document.getElementById("menu").style.display = "none";
      message.style.display = "block";
    }
}



document.querySelectorAll('.minus-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var input = this.closest('.buy-item').querySelector('.quantity-input');
        decreaseValue(input);
    });
});

document.querySelectorAll('.plus-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var input = this.closest('.buy-item').querySelector('.quantity-input');
        increaseValue(input);
    });
});

document.querySelectorAll('.quantity-input').forEach(function(input) {
    input.addEventListener('input', function() {    
        var quantityInput = this;
        var quantity = parseInt(quantityInput.value);
        if (quantity > 100) {
            quantity = 100; // Ограничиваем введенное число 100, если оно больше
            quantityInput.value = quantity; // Устанавливаем новое значение в input-поле
        }
        updateTotalPrice(quantityInput); // Вызываем функцию для обновления общей суммы
    });
});