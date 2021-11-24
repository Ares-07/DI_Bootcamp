#Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Persian(Cat):
    def sing(self, sounds):
        return f'{sounds}'


my_cats = [Bengal('Lili', 6),
           Chartreux('Anna', 5),
           Persian('Garfield', 4)]


my_pets = Pets(my_cats)

my_pets.walk()

#Exercise 2 : Dogs
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking.'

    def run_speed(self):
        return int(self.weight/self.age*10)

    def fight(self, other_dog):
        if self.weight*self.runspeed() > other_dog.weight*other_dog.runspeed():
            print(f"{other_dog.name} won the fight!")
        else:
            print(f"{self.name} won the fight!")


bob = Dog("Bob", 5, 8)
billy = Dog("Billy", 6, 8)
bobby = Dog("Bobby", 7, 10)

print(bob.bark())
print(billy.run_speed())

bob.fight(billy)
billy.fight(bob)
bob.fight(bobby)
