var lastQuantity = 1; // ���������� ��� �������� ���������� ���������� ��������

// ������� ��� ���������� ����� ����
function updateTotalPrice(input) {
    var quantityInput = document.getElementById('quantity-input');
    var quantity = quantityInput.value !== '' ? parseInt(quantityInput.value) : lastQuantity; // ���������, ���� �������� �� ������, �� ����������� ��� � �����, ����� ���������� 0
    var totalPrice = calculateTotalPrice(quantity); // �������� ������� ��� ������� ����� ����� � ������ ����������
    document.getElementById('total-price').textContent = totalPrice + '\u20BD'; // ��������� ����� ����� ����
    document.getElementById('total-price-all').textContent = totalPrice + '\u20BD'; // ��������� ����� �������� ����
    lastQuantity = quantity; // ��������� ������� �������� ��� lastQuantity
}

// ������� ��� ������� ����� ����
function calculateTotalPrice(quantity) {
    var pricePerItem = 3000; // ���� ������ ������
    return pricePerItem * quantity; // ������������ ����� ����
}

// ������� ��� ���������� ��������
function decreaseValue(input) {
    var value = parseInt(input.value);
    if (value > 1) {
        value--;
    } else {
        value = 1;
    }
    input.value = value;
    if (value <= 100) {
        updateTotalPrice(); // �������� ������� ��� ���������� ����� ����� ������ ���� �������� �� ��������� 100
    }
}

// ������� ��� ���������� ��������
function increaseValue(input) {
    var value = parseInt(input.value);
    if (value < 100) {
        value++;
    } else {
        value = 100;
    }
    input.value = value;
    updateTotalPrice(); // �������� ������� ��� ���������� ����� ����
}

// �������, ���������� ����� �� �������
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

document.querySelectorAll('.minus-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var input = this.closest('div').querySelector('input');
        decreaseValue(input);
    });
});

document.querySelectorAll('.plus-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var input = this.closest('div').querySelector('input');
        increaseValue(input);
    });
});

document.getElementById('quantity-input').addEventListener('input', function () {
    var quantityInput = document.getElementById('quantity-input');
    var quantity = parseInt(quantityInput.value);
    if (quantity > 100) {
        quantity = 100; // ������������ ��������� ����� 100, ���� ��� ������
        quantityInput.value = quantity; // ������������� ����� �������� � input-����
    }
    updateTotalPrice(); // �������� ������� ��� ���������� ����� �����
});