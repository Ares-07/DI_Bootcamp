class Farm:
    def __init__(self, name):
        self.name = name
        self.animals={}


    def add_animal(self, animal_name, amount=1):
        if animal_name in self.animals:
            self.animals[animal_name] += amount

        else:
            self.animals[animal_name] = amount


    def get_info(self):
        pass

macdonald=Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.animals)
print("E I E I O")
