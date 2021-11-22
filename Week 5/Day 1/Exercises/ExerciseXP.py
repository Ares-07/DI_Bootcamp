#Exercise 1: Cats

class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

first_cat = Cat("Lola",5)
second_cat = Cat("Nola",6)
third_cat = Cat("Zola",7)


def eldest():
        if first_cat.age > second_cat.age and first_cat.age > third_cat.age:
            print("Eldest cat:"+ first_cat.name)
        elif second_cat.age > first_cat.age and second_cat.age > third_cat.age:
            print("Eldest cat:"+ second_cat.name)
        else: print("Eldest cat:"+ third_cat.name)

eldest()

# Exercise 2 : Dogs

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print("{} goes woof!".format(self.name))

    def jump(self):
        print(f"{self.name} jumps {(self.height*2)} cm high!")


my_dog = Dog("Max",60)
my_dog.bark()
my_dog.jump()

davies_dog = Dog("Rex",50)
print("Dog Name: "+ davies_dog.name + ", " + "Dog Age: "+str(davies_dog.height))
davies_dog.bark()
davies_dog.jump()

sarahs_dog = Dog("Teacup",20)
print("Dog Name: "+ sarahs_dog.name + ", " + "Dog Age: "+str(sarahs_dog.height))
sarahs_dog.bark()
sarahs_dog.jump()

bigger_dog = sarahs_dog.name if sarahs_dog.height > davies_dog.height else davies_dog.name
print(bigger_dog)



# Exercise 3 : Who’s The Song Producer?
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song (self):
        for i in self.lyrics:
            print(i)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal} already exists")

    def get_animals(self):
        print(self.animals)
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} not in the zoo")

    def sort_animals(self):
        self.animals.sort()
        print(self.animals)
        self.animals = [list(filter(lambda animal: animal[0] == l, self.animals)) for l in sorted(list(set([animal[0] for animal in self.animals])))]

    def get_groups(self):
        for animal in self.animals:
            print(animal)

ramat_gan_safari = Zoo('Ramat Gan Safari')

ramat_gan_safari.add_animal('Ape')
ramat_gan_safari.add_animal('Anaconda')
ramat_gan_safari.add_animal('Buffalo')
ramat_gan_safari.add_animal('bear')
ramat_gan_safari.add_animal('crocodile')
ramat_gan_safari.add_animal('cougar')
ramat_gan_safari.add_animal('deer')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('Ape')
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
