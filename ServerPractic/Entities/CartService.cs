using ServerPractic.Entities;
using System.Collections.Generic;
using static ServerPractic.Pages.Cart;

public class CartService
{
    private Dictionary<ProductEntity, int> _cartItems = new Dictionary<ProductEntity, int>();

    public List<ProductEntity> GetCartItems()
    {
        return _cartItems.Keys.ToList();
    }

    public void AddToCart(ProductEntity product)
    {
        if (_cartItems.ContainsKey(product))
        {
            _cartItems[product]++;
        }
        else
        {
            _cartItems.Add(product, 1);
        }
    }

    public void RemoveItem(ProductEntity product)
    {
        _cartItems.Remove(product);
    }

    public int GetCartItemQuantity(ProductEntity product)
    {
        if (_cartItems.ContainsKey(product))
        {
            return _cartItems[product];
        }
        else
        {
            return 0;
        }
    }

    public decimal GetCartItemTotalPrice(ProductEntity product)
    {
        if (_cartItems.ContainsKey(product))
        {
            return product.Price * _cartItems[product];
        }
        else
        {
            return 0;
        }
    }

    public decimal GetCartItemTSalePrice(ProductEntity product)
    {
        if (_cartItems.ContainsKey(product))
        {
            return product.SealProd * _cartItems[product];
        }
        else
        {
            return 0;
        }
    }

    public decimal GetTotalPrice()
    {
        return _cartItems.Sum(item => item.Key.Price * item.Value * (1 - (item.Key.Sales / 100m)));
    }

 
 


    public void UpdateQuantity(ProductEntity product, int change)
    {
        if (_cartItems.ContainsKey(product))
        {
            int newQuantity = _cartItems[product] + change;
            if (newQuantity > 0)
            {
                _cartItems[product] = newQuantity;
            }
            else
            {
                _cartItems.Remove(product);
            }
        }
    }


}