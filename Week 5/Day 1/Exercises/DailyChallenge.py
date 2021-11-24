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
        print(f”{self.name}’s Farm”.center(22))
        for animal in self.animals:
            print(f” {animal} : {self.animals[animal]}“)
            print(‘E-I-E-I-0!’)
    def get_animal_types(self):
        return sorted(list(self.animals))
    def get_short_info(self):
        print(f”{self.name}‘s farms has {‘,’.join(self.get_animal_types())}.“)
macdonald=Farm(“McDonald”)
macdonald.add_animal(‘cow’,5)
macdonald.add_animal(‘sheep’)
macdonald.add_animal(‘sheep’)
macdonald.add_animal(‘goat’, 12)
macdonald.get_info()
macdonald.get_short_info()
