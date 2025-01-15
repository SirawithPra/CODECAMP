class Calculator_discount:
    def __init__(self):
        self.menu = {
            'red': 50,
            'green': 40,
            'blue': 30,
            'yellow': 50,
            'pink': 80,
            'purple': 90,
            'orange': 120
        }
        #setting values for each discount of items
        self.discounts = {
            'orange': 0.05,
            'pink': 0.05,
            'green': 0.05
        }

    def calculate_total(self, order, has_member_card=False):
        total = 0
        discount_items = {}

        # Calculate total price
        for item, quantity in order.items():
            if item in self.menu:
                total += self.menu[item] * quantity
                if item in self.discounts and quantity >= 2:
                    discount_items[item] = quantity

        # Apply item-specific discounts
        for item, quantity in discount_items.items():
            if quantity >= 2:
                total -= (self.menu[item] * quantity) * self.discounts[item]

        # Apply 10% member discount
        if has_member_card:
            total *= 0.9

        return total
#testing methods

order_1 = {'red': 1, 'green': 1}
order_2 = {'orange': 3, 'pink': 2, 'green': 2}
order_3 = {'orange': 4, 'pink': 1, 'yellow': 10}


# Calculate without membership
print("Total : "+"{:.2f}".format(Calculator_discount().calculate_total(order_1))+" ฿ (without membership)")

# Calculate with membership
print("Total : "+"{:.2f}".format(Calculator_discount().calculate_total(order_1, has_member_card=True))+" ฿ (with membership)")

# Calculate with many order discount
print("Total : "+"{:.2f}".format(Calculator_discount().calculate_total(order_2))+" ฿ (many order)")

# Calculate with many order and membership discount
print("Total : "+"{:.2f}".format(Calculator_discount().calculate_total(order_2, has_member_card=True))+" ฿ (many order with membership)")

# Calculate with random selection order and membership discount
print("Total : "+"{:.2f}".format(Calculator_discount().calculate_total(order_3, has_member_card=True))+" ฿ (random with membership)")
