var lastQuantity = 1; // Переменная для хранения последнего введенного значения

// Функция для обновления общей цены
function updateTotalPrice(input) {
    var quantityInput = document.getElementById('quantity-input');
    var quantity = quantityInput.value !== '' ? parseInt(quantityInput.value) : lastQuantity; // Проверяем, если значение не пустое, то преобразуем его в число, иначе используем 0
    var totalPrice = calculateTotalPrice(quantity); // Вызываем функцию для расчета общей суммы с учетом количества
    document.getElementById('total-price').textContent = totalPrice + '\u20BD'; // Обновляем текст общей цены
    document.getElementById('total-price-all').textContent = totalPrice + '\u20BD'; // Обновляем текст итоговой цены
    lastQuantity = quantity; // Сохраняем текущее значение как lastQuantity
}

// Функция для расчета общей цены
function calculateTotalPrice(quantity) {
    var pricePerItem = 3000; // Цена одного товара
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
function hideObject() {
    var objects = document.querySelectorAll(".object");
    var message = document.getElementById("message");
  
    for (var i = 0; i < objects.length; i++) {
      if (objects[i].style.display !== "none") {
        objects[i].style.display = "none";
        break;
      }
    }
  
    var objectsVisible = document.querySelectorAll(".object:not([style='display: none;'])");
  
    if (objectsVisible.length === 0) {
      document.getElementById("objects").style.display = "none";
      document.getElementById("btn").style.display = "none";
      document.getElementById("message").style.display = "block";
    }
}

document.querySelectorAll('.minus-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var input = this.closest('div').querySelector('input');
        decreaseValue(input);
    });
});

document.querySelectorAll('.plus-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var input = this.closest('div').querySelector('input');
        increaseValue(input);
    });
});

document.getElementById('quantity-input').addEventListener('input', function() {
    var quantityInput = document.getElementById('quantity-input');
    var quantity = parseInt(quantityInput.value);
    if (quantity > 100) {
        quantity = 100; // Ограничиваем введенное число 100, если оно больше
        quantityInput.value = quantity; // Устанавливаем новое значение в input-поле
    }
    updateTotalPrice(); // Вызываем функцию для обновления общей суммы
});